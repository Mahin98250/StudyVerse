import { useEffect, useMemo, useState } from 'react'
import { ArrowLeft, ArrowRight, Bookmark, CheckCircle2, Clock3, Flag, GraduationCap, RotateCcw, ShieldCheck, Trophy } from 'lucide-react'
import { ACADEMIC_CHAPTERS, type PracticeQuestion } from './academicContent'
import { ITEMS } from './curriculum'
import { CHAPTER_MASTERY, getMasteryPack } from './chapterMasteryContent'
import { db, makeId } from './core'
import type { ExamAttempt, ExamSubject } from './core'
import './exam-centre.css'

type ExamQuestion = PracticeQuestion & { chapterTitle: string; subjectId: string }
const boardChapterIds = new Set(ITEMS.filter(item => item.status === 'board').map(item => item.id))
const legacyQuestions: ExamQuestion[] = ACADEMIC_CHAPTERS.filter(chapter => boardChapterIds.has(chapter.curriculumItemId)).flatMap(chapter => chapter.questions.map(question => ({ ...question, chapterTitle: chapter.title, subjectId: chapter.subjectId })))
const masteryQuestions: ExamQuestion[] = Object.values(CHAPTER_MASTERY).filter(pack => !!pack.curriculumItemId && boardChapterIds.has(pack.curriculumItemId)).flatMap(pack => {
  const item = ITEMS.find(entry => entry.id === pack.curriculumItemId)
  return (getMasteryPack(pack.chapterId)?.practiceQuestions ?? []).map(question => ({ ...question, chapterTitle: item?.title ?? pack.subject, subjectId: item?.subjectId ?? '' }))
})
const allQuestions: ExamQuestion[] = [...legacyQuestions, ...masteryQuestions]
const EXAM_SUBJECTS: { id: ExamSubject; label: string; detail: string }[] = [
  { id: 'all', label: 'All active subjects', detail: 'Mixed preparation across subjects' },
  { id: 'mathematics', label: 'Mathematics', detail: 'Algebra, geometry and more' },
  { id: 'science', label: 'Science', detail: 'Physics, chemistry and biology' },
  { id: 'social-science', label: 'Social Science', detail: 'History, geography, civics and economics' },
  { id: 'english', label: 'English', detail: 'Reading, grammar and writing' },
  { id: 'gujarati', label: 'Gujarati', detail: 'વાંચન, લેખન અને વ્યાકરણ' },
  { id: 'information-technology', label: 'Information Technology', detail: 'Writer, Calc, databases and safety' }
]
const subjectLabel = (id: ExamSubject) => EXAM_SUBJECTS.find(item => item.id === id)?.label ?? 'Subject'
const formatTime = (seconds: number) => `${String(Math.floor(seconds / 60)).padStart(2, '0')}:${String(seconds % 60).padStart(2, '0')}`
const shuffle = <T,>(items: T[]) => [...items].sort(() => Math.random() - 0.5)

export default function ExamCentre() {
  const [attempt, setAttempt] = useState<ExamAttempt | null>(null)
  const [loading, setLoading] = useState(true)
  const [subject, setSubject] = useState<ExamSubject>('all')
  const [questionCount, setQuestionCount] = useState(10)
  const [duration, setDuration] = useState(15)
  const [active, setActive] = useState(0)
  const [now, setNow] = useState(Date.now())
  const [showSubmit, setShowSubmit] = useState(false)

  useEffect(() => {
    let live = true
    void db.examAttempts.orderBy('startedAt').reverse().first().then(saved => {
      if (live && saved?.status === 'in-progress') setAttempt(saved)
    }).catch(console.error).finally(() => { if (live) setLoading(false) })
    return () => { live = false }
  }, [])

  useEffect(() => {
    if (!attempt || attempt.status !== 'in-progress') return
    const id = window.setInterval(() => setNow(Date.now()), 500)
    return () => window.clearInterval(id)
  }, [attempt?.id, attempt?.status])

  const remaining = attempt ? Math.max(0, Math.ceil((new Date(attempt.endsAt).getTime() - now) / 1000)) : 0
  const questions = attempt?.questions ?? []
  const answered = attempt ? Object.keys(attempt.answers).length : 0
  const marked = attempt?.marked ?? []

  useEffect(() => {
    if (attempt?.status === 'in-progress' && remaining === 0) void submit(true)
  }, [remaining, attempt?.id, attempt?.status])

  const pool = useMemo(() => allQuestions.filter(q => subject === 'all' || q.subjectId === subject), [subject])

  async function startExam() {
    const selected = shuffle(pool).slice(0, Math.min(questionCount, pool.length))
    const start = new Date()
    const next: ExamAttempt = {
      id: makeId(), status: 'in-progress', subject, durationMinutes: duration,
      startedAt: start.toISOString(), endsAt: new Date(start.getTime() + duration * 60_000).toISOString(),
      submittedAt: null, questions: selected, answers: {}, marked: []
    }
    await db.examAttempts.add(next)
    setAttempt(next); setActive(0); setNow(Date.now()); setShowSubmit(false)
  }

  async function save(next: ExamAttempt) {
    setAttempt(next)
    await db.examAttempts.put(next)
  }

  async function choose(choice: string) {
    if (!attempt || attempt.status !== 'in-progress') return
    await save({ ...attempt, answers: { ...attempt.answers, [questions[active].id]: choice } })
  }

  async function toggleMark() {
    if (!attempt || attempt.status !== 'in-progress') return
    const id = questions[active].id
    await save({ ...attempt, marked: marked.includes(id) ? marked.filter(x => x !== id) : [...marked, id] })
  }

  async function submit(auto = false) {
    if (!attempt || attempt.status !== 'in-progress') return
    const score = questions.reduce((total, q) => total + (attempt.answers[q.id] === q.answer ? 1 : 0), 0)
    await save({ ...attempt, status: 'submitted', submittedAt: new Date().toISOString(), score, autoSubmitted: auto })
    setShowSubmit(false)
  }

  if (loading) return <div className="exam-loading">Preparing your exam workspace…</div>

  if (attempt?.status === 'in-progress') {
    const q = questions[active]
    const isMarked = marked.includes(q.id)
    const isLast = active === questions.length - 1
    return <div className="exam-shell">
      <header className="exam-topline"><a href="#/practice" className="exam-back"><ArrowLeft size={16}/> Practice centre</a><span className="exam-live"><i/> EXAM IN PROGRESS</span><div className={remaining <= 60 ? 'exam-clock danger' : 'exam-clock'}><Clock3 size={17}/><strong>{formatTime(remaining)}</strong></div></header>
      <div className="exam-intro"><span className="eyebrow">STUDYVERSE · MOCK EXAM</span><h1>Think clearly.<br/><em>Trust your preparation.</em></h1><p>{subjectLabel(attempt.subject)} · {questions.length} questions · {attempt.durationMinutes} minutes</p></div>
      <div className="exam-progress"><div><span>YOUR PROGRESS</span><b>{answered} of {questions.length} answered</b></div><div className="exam-progress-track"><i style={{ width: `${answered / questions.length * 100}%` }}/></div></div>
      <div className="exam-layout">
        <section className="exam-question-card">
          <div className="exam-question-meta"><span>QUESTION {String(active + 1).padStart(2, '0')} / {String(questions.length).padStart(2, '0')}</span><span>{q.chapterTitle}</span></div>
          <h2>{q.prompt}</h2>
          <div className="exam-options">{q.choices.map((choice, i) => <button key={choice.id} className={attempt.answers[q.id] === choice.id ? 'exam-option selected' : 'exam-option'} onClick={() => void choose(choice.id)}><span>{String.fromCharCode(65 + i)}</span><b>{choice.text}</b>{attempt.answers[q.id] === choice.id && <CheckCircle2 size={18}/>}</button>)}</div>
          <div className="exam-question-actions"><button className={isMarked ? 'exam-mark active' : 'exam-mark'} onClick={() => void toggleMark()}><Bookmark size={16}/>{isMarked ? 'Marked for review' : 'Mark for review'}</button><div><button className="exam-prev" disabled={active === 0} onClick={() => setActive(v => v - 1)}>Previous</button><button className="exam-next" onClick={() => isLast ? setShowSubmit(true) : setActive(v => v + 1)}>{isLast ? 'Review & submit' : 'Next question'} <ArrowRight size={15}/></button></div></div>
        </section>
        <aside className="exam-palette"><div className="exam-palette-head"><div><span className="eyebrow">QUESTION MAP</span><h3>Navigate</h3></div><span>{questions.length} total</span></div><div className="exam-palette-grid">{questions.map((item, i) => <button key={item.id} onClick={() => setActive(i)} className={`palette-item ${active === i ? 'current' : ''} ${attempt.answers[item.id] ? 'answered' : ''} ${marked.includes(item.id) ? 'marked' : ''}`}>{i + 1}</button>)}</div><div className="exam-legend"><span><i className="answered-dot"/> Answered</span><span><i className="marked-dot"/> Review</span><span><i className="empty-dot"/> Unanswered</span></div><div className="exam-palette-foot"><b>{questions.length - answered}</b><span>questions remaining</span><button onClick={() => setShowSubmit(true)}>Finish exam <ArrowRight size={14}/></button></div></aside>
      </div>
      {showSubmit && <div className="exam-modal-backdrop" role="presentation"><section className="exam-submit-modal" role="dialog" aria-modal="true" aria-labelledby="submit-title"><span className="eyebrow">FINAL CHECK</span><h2 id="submit-title">Ready to submit?</h2><p>You have answered {answered} of {questions.length} questions. {questions.length - answered} are still unanswered and {marked.length} are marked for review.</p><div><button className="exam-prev" onClick={() => setShowSubmit(false)}>Keep working</button><button className="exam-next" onClick={() => void submit()}>Submit exam <ArrowRight size={15}/></button></div></section></div>}
    </div>
  }

  if (attempt?.status === 'submitted') {
    const score = attempt.score ?? 0
    const correct = attempt.questions.filter(q => attempt.answers[q.id] === q.answer).length
    return <div className="exam-shell exam-results"><a href="#/practice" className="exam-back"><ArrowLeft size={16}/> Practice centre</a><div className="result-hero"><div className="result-icon"><Trophy size={28}/></div><span className="eyebrow">EXAM COMPLETE</span><h1>{score >= Math.ceil(questions.length * .8) ? 'Excellent work.' : 'Every attempt builds skill.'}</h1><p>Your result is saved on this device. Review the explanations and use them to plan your next practice session.</p><div className="result-score"><strong>{Math.round(correct / questions.length * 100)}<small>%</small></strong><span>{correct} correct out of {questions.length}</span></div><div className="result-stats"><div><b>{correct}</b><span>Correct</span></div><div><b>{questions.length - correct}</b><span>Incorrect / skipped</span></div><div><b>{attempt.durationMinutes}m</b><span>Time allowed</span></div></div></div><section className="result-review"><div className="result-review-head"><span className="eyebrow">LEARN FROM THE RESULT</span><h2>Answer review</h2></div>{attempt.questions.map((q, i) => { const selected = attempt.answers[q.id]; const ok = selected === q.answer; return <article className="result-question" key={q.id}><div><span>QUESTION {i + 1} · {q.chapterTitle}</span><b className={ok ? 'review-correct' : 'review-wrong'}>{ok ? 'Correct' : 'Review this'}</b></div><h3>{q.prompt}</h3><p><strong>Your answer:</strong> {q.choices.find(c => c.id === selected)?.text ?? 'Not answered'}</p><p><strong>Correct answer:</strong> {q.choices.find(c => c.id === q.answer)?.text}</p><p className="review-explanation">{q.explanation}</p></article>})}<button className="exam-next result-restart" onClick={() => { setAttempt(null); setActive(0) }}><RotateCcw size={15}/> Create another mock exam</button></section></div>
  }

  return <div className="exam-shell exam-setup"><div className="exam-setup-top"><span className="eyebrow">YOUR NEXT MILESTONE</span><span className="exam-private"><ShieldCheck size={14}/> PRIVATE · SAVED LOCALLY</span></div><div className="exam-intro"><h1>Prepare for the moment.<br/><em>Own the exam.</em></h1><p>A focused simulation built from board-scope StudyVerse questions across the available subjects.</p></div><div className="exam-setup-grid"><section className="exam-config"><span className="eyebrow">01 · CHOOSE YOUR SCOPE</span><h2>What would you like to practise?</h2><div className="exam-subjects">{EXAM_SUBJECTS.map(option => <button key={option.id} className={subject === option.id ? 'chosen' : ''} onClick={() => setSubject(option.id)}><span>{option.label}</span><small>{option.detail} · {allQuestions.filter(question => option.id === 'all' || question.subjectId === option.id).length} questions</small></button>)}</div><span className="eyebrow">02 · SET YOUR SESSION</span><h2>Choose your challenge.</h2><div className="exam-setting-row"><label>Questions</label><div>{[10, 20, 30].map(n => <button key={n} className={questionCount === n ? 'chosen' : ''} onClick={() => setQuestionCount(n)}>{n}</button>)}</div></div><div className="exam-setting-row"><label>Time limit</label><div>{[15, 30, 45].map(n => <button key={n} className={duration === n ? 'chosen' : ''} onClick={() => setDuration(n)}>{n} min</button>)}</div></div><button className="exam-start" onClick={() => void startExam()}>Start mock exam <ArrowRight size={17}/></button><p className="exam-note">Your timer starts when you begin. Answers are saved automatically, so you can safely refresh and resume before time runs out.</p></section><aside className="exam-aside"><div className="exam-aside-art"><GraduationCap size={38}/><span>SV / 01</span></div><span className="eyebrow">A CALM SPACE TO PERFORM</span><h3>Less noise.<br/><em>More focus.</em></h3><p>No distractions, no pressure to be perfect. Just a clear space to test what you know and learn from what you don't.</p><div className="exam-aside-points"><span><CheckCircle2 size={15}/> Autosaved answers</span><span><Flag size={15}/> Mark questions for review</span><span><Clock3 size={15}/> Countdown with recovery</span></div></aside></div></div>
}
