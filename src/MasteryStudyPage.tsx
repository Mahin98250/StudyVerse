import { ArrowLeft, ArrowRight, BookOpen, ExternalLink, ShieldCheck } from 'lucide-react'
import { Link, useParams } from 'react-router-dom'
import { ITEMS, SOURCES } from './curriculum'
import { getMasteryPack } from './chapterMasteryContent'
import { DEFAULT_SUBJECTS } from './core'
import ChapterMastery from './ChapterMastery'
import './chapter-study.css'

export default function MasteryStudyPage() {
  const { topicId } = useParams()
  const pack = topicId ? getMasteryPack(topicId) : undefined
  const item = pack?.curriculumItemId ? ITEMS.find(entry => entry.id === pack.curriculumItemId) : undefined
  const subject = DEFAULT_SUBJECTS.find(entry => entry.name === pack?.subject)
  const source = subject ? SOURCES[subject.id] : undefined

  if (!pack || !item || !subject) {
    return <div className="chapter-page">
      <div className="chapter-empty">
        <BookOpen size={28}/>
        <h1>Detailed notes are not available yet</h1>
        <p>This topic has not been added to the chapter mastery library.</p>
        <Link className="chapter-button chapter-button-primary" to="/learn">Back to subjects</Link>
      </div>
    </div>
  }

  const status = item.status === 'board' ? 'Board examination scope' :
    item.status === 'formative' ? 'Formative learning' :
    item.status === 'periodic' ? 'Periodic assessment' : 'Project / practical work'

  return <div className="chapter-page">
    <Link to={`/learn/${subject.id}`} className="chapter-back"><ArrowLeft size={15}/> {subject.name} curriculum</Link>

    <section className="chapter-hero">
      <div className="chapter-hero-copy">
        <span className="chapter-eyebrow"><BookOpen size={13}/> DEEP-DIVE STUDY GUIDE · CLASS X</span>
        <span className="chapter-unit">{item.group} · {status}</span>
        <h1>{item.title}<span>.</span></h1>
        <p>{item.description}</p>
        <div className="chapter-hero-meta">
          <span><BookOpen size={14}/> {pack.sections.length} deep-dive lessons</span>
          <span><ShieldCheck size={14}/> Curriculum-linked content</span>
          <span><span aria-hidden="true">✦</span> Board-answer guidance</span>
        </div>
      </div>
      <div className="chapter-progress-card">
        <div className="chapter-progress-icon"><BookOpen size={20}/></div>
        <span>STUDY ROUTE</span>
        <strong>{pack.subject}</strong>
        <small>{pack.focus}</small>
        <Link to={`/revision?chapter=${item.id}`} className="chapter-revise-link"><BookOpen size={14}/> Revise with flashcards <ArrowRight size={13}/></Link>
        <Link to={`/learn/${subject.id}`} className="chapter-revise-link"><ArrowLeft size={14}/> Back to topic list</Link>
      </div>
    </section>

    {source && <div className="chapter-source">
      <div><ShieldCheck size={17}/><span><b>Official curriculum reference</b><small>{source.label}. Check the school booklist and subject/course code for prescribed texts.</small></span></div>
      <a href={source.url} target="_blank" rel="noreferrer">Open CBSE curriculum <ExternalLink size={13}/></a>
    </div>}

    <ChapterMastery chapterId={topicId ?? ''}/>

    <div className="chapter-next-step">
      <div><span className="chapter-eyebrow">KEEP LEARNING</span><b>Ready for the next topic?</b><p>Return to the {subject.name} curriculum and choose what to study next.</p></div>
      <Link className="chapter-button chapter-button-primary" to={`/learn/${subject.id}`}>Back to {subject.name} <ArrowRight size={15}/></Link>
    </div>
  </div>
}
