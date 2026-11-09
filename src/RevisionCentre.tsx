import { useEffect, useMemo, useState } from 'react'
import { ArrowLeft, ArrowRight, Brain, Check, Clock3, RotateCcw, Sparkles } from 'lucide-react'
import { Link, useSearchParams } from 'react-router-dom'
import { ACADEMIC_CHAPTERS } from './academicContent'
import { db, type RevisionCard } from './core'
import './revision-centre.css'

type Rating = 'again' | 'hard' | 'good'
const DAY = 86_400_000

function buildCards(): RevisionCard[] {
  const now = new Date().toISOString()
  return ACADEMIC_CHAPTERS.flatMap(chapter => chapter.sections.flatMap(section =>
    section.keyPoints.map((point, index) => ({
      id: `seed:${chapter.id}:${section.id}:${index}`,
      chapterId: chapter.id,
      subjectId: chapter.subjectId,
      front: index === 0 ? section.title.replace(/^\d+\.\s*/, '') : `Remember this: ${section.title.replace(/^\d+\.\s*/, '')}?`,
      back: point,
      sourceLabel: chapter.title,
      createdAt: now,
      dueAt: now,
      repetitions: 0,
      intervalDays: 0,
      easeFactor: 2.5
    }))
  ))
}

export default function RevisionCentre() {
  const [cards, setCards] = useState<RevisionCard[]>([])
  const [loading, setLoading] = useState(true)
  const [active, setActive] = useState<RevisionCard | null>(null)
  const [revealed, setRevealed] = useState(false)
  const [subject, setSubject] = useState<'all' | 'mathematics' | 'science'>('all')
  const [mode, setMode] = useState<'due' | 'all'>('due')
  const [message, setMessage] = useState('')
  const [searchParams, setSearchParams] = useSearchParams()
  const chapterFilter = searchParams.get('chapter')
  const selectedChapter = ACADEMIC_CHAPTERS.find(chapter => chapter.id === chapterFilter)

  useEffect(() => {
    let live = true
    void (async () => {
      const saved = await db.revisionCards.toArray()
      const known = new Set(saved.map(card => card.id))
      const missing = buildCards().filter(card => !known.has(card.id))
      if (missing.length) await db.revisionCards.bulkAdd(missing)
      if (live) setCards([...saved, ...missing])
    })().catch(() => setMessage('Revision cards could not be loaded from this browser.')).finally(() => { if (live) setLoading(false) })
    return () => { live = false }
  }, [])

  const filtered = useMemo(() => {
    const now = Date.now()
    return cards.filter(card =>
      (subject === 'all' || card.subjectId === subject) && (!chapterFilter || card.chapterId === chapterFilter) &&
      (mode === 'all' || new Date(card.dueAt).getTime() <= now)
    ).sort((a, b) => new Date(a.dueAt).getTime() - new Date(b.dueAt).getTime())
  }, [cards, subject, mode, chapterFilter])

  const dueCount = cards.filter(card => (!chapterFilter || card.chapterId === chapterFilter) && (subject === 'all' || card.subjectId === subject) && new Date(card.dueAt).getTime() <= Date.now()).length
  const reviewedCount = cards.filter(card => card.repetitions > 0).length

  useEffect(() => {
    if (!active || !filtered.length) setActive(filtered[0] ?? null)
    else if (!filtered.some(card => card.id === active.id)) setActive(filtered[0] ?? null)
  }, [filtered, active?.id])

  async function rate(rating: Rating) {
    if (!active) return
    const now = new Date()
    const nextRepetitions = rating === 'again' ? 0 : active.repetitions + 1
    const intervalDays = rating === 'again' ? 0 : rating === 'hard' ? Math.max(1, Math.round((active.intervalDays || 1) * 1.2)) : active.repetitions === 0 ? 1 : active.repetitions === 1 ? 3 : Math.max(4, Math.round((active.intervalDays || 3) * active.easeFactor))
    const next: RevisionCard = {
      ...active,
      repetitions: nextRepetitions,
      intervalDays,
      easeFactor: Math.max(1.3, active.easeFactor + (rating === 'again' ? -0.2 : rating === 'hard' ? -0.05 : 0.1)),
      lastRating: rating,
      lastReviewedAt: now.toISOString(),
      dueAt: new Date(now.getTime() + intervalDays * DAY).toISOString()
    }
    await db.revisionCards.put(next)
    setCards(current => current.map(card => card.id === next.id ? next : card))
    setRevealed(false)
    setMessage(rating === 'again' ? 'This card will return in this session.' : `Next review in ${intervalDays} day${intervalDays === 1 ? '' : 's'}.`)
    const nextCard = filtered.find(card => card.id !== active.id)
    setActive(nextCard ?? null)
  }

  if (loading) return <div className="revision-loading">Preparing your revision deck…</div>

  return <div className="revision-page">
    <div className="revision-heading"><div><span className="eyebrow">SMART REVISION · CLASS X</span><h1>Make it <em>stick.</em></h1><p>Short active-recall sessions. Review what is due, rate honestly, and let the schedule bring it back.</p>{selectedChapter&&<button className="revision-clear-filter" onClick={()=>setSearchParams({})}>Chapter focus: {selectedChapter.title} · Clear</button>}</div><div className="revision-mark"><Brain size={25}/><span>LOCAL<br/>REVIEW</span></div></div>
    <div className="revision-stats">
      <div><span>DUE NOW</span><b>{dueCount}</b><small>Cards ready to revisit</small></div>
      <div><span>IN YOUR DECK</span><b>{cards.length}</b><small>Across {ACADEMIC_CHAPTERS.length} chapter guides</small></div>
      <div><span>REVIEWED</span><b>{reviewedCount}</b><small>Cards with saved review history</small></div>
    </div>
    <div className="revision-controls">
      <div className="revision-tabs"><button className={mode==='due'?'active':''} onClick={()=>setMode('due')}>Due for review</button><button className={mode==='all'?'active':''} onClick={()=>setMode('all')}>All cards</button></div>
      <div className="revision-tabs"><button className={subject==='all'?'active':''} onClick={()=>setSubject('all')}>All</button><button className={subject==='mathematics'?'active':''} onClick={()=>setSubject('mathematics')}>Maths</button><button className={subject==='science'?'active':''} onClick={()=>setSubject('science')}>Science</button></div>
    </div>
    {active ? <section className="revision-study">
      <div className="revision-card-meta"><span>{active.subjectId==='mathematics'?'MATHEMATICS':'SCIENCE'} · {active.sourceLabel.toUpperCase()}</span><span>{filtered.findIndex(card=>card.id===active.id)+1} / {filtered.length}</span></div>
      <button className={`revision-flashcard ${revealed?'revealed':''}`} onClick={()=>setRevealed(value=>!value)} aria-label={revealed?'Hide answer':'Reveal answer'}>
        <span className="revision-card-label">{revealed?'THE ANSWER':'ACTIVE RECALL'}</span>
        <strong>{revealed?active.back:active.front}</strong>
        <span className="revision-card-hint">{revealed?'Think about how confidently you recalled this.':'Think first, then tap to reveal the explanation.'}</span>
      </button>
      {!revealed ? <button className="revision-reveal" onClick={()=>setRevealed(true)}>Reveal answer <ArrowRight size={15}/></button> : <div className="revision-ratings"><p>How well did you know it?</p><div><button onClick={()=>void rate('again')}><RotateCcw size={15}/> Again <small>Review soon</small></button><button onClick={()=>void rate('hard')}><Clock3 size={15}/> Hard <small>Short interval</small></button><button onClick={()=>void rate('good')}><Check size={15}/> Got it <small>Longer interval</small></button></div></div>}
      {message&&<p className="revision-message" role="status">{message}</p>}
    </section> : <section className="revision-empty"><Sparkles size={26}/><h2>{mode==='due'?'You are all caught up.':'No cards in this filter.'}</h2><p>{mode==='due'?'Great work. Your next reviews will appear here when they are due. Switch to All cards to keep practising.':'Choose another subject or review filter.'}</p><button onClick={()=>setMode('all')}>Browse all cards <ArrowRight size={15}/></button></section>}
    <div className="revision-footer"><span>Review schedule is stored privately on this device.</span><Link to="/learn"><ArrowLeft size={14}/> Back to learning</Link></div>
  </div>
}
