import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import {
  ArrowLeft, ArrowRight, BookOpen, Check, CheckCircle2, Circle,
  ExternalLink, Lightbulb, NotebookPen, RotateCcw, Sparkles, Target, Trophy
} from 'lucide-react'
import { getChapter } from './academicContent'
import { getExternalNotes } from './externalNotes'
import { db, type LearningRecord } from './core'
import './chapter-study.css'

export default function ChapterStudy() {
  const { chapterId } = useParams()
  const chapter = getChapter(chapterId)
  const [record, setRecord] = useState<LearningRecord>()
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [submitted, setSubmitted] = useState(false)
  const [score, setScore] = useState<number | null>(null)
  const [noteDraft, setNoteDraft] = useState('')
  const [saving, setSaving] = useState(false)
  const [message, setMessage] = useState('')

  useEffect(() => {
    let live = true
    setRecord(undefined)
    setAnswers({})
    setSubmitted(false)
    setScore(null)
    setMessage('')
    if (chapter) {
      const id = chapter.curriculumItemId
      void db.learningRecords.get(id).then(row => {
        if (live) {
          setRecord(row)
          setNoteDraft(row?.note ?? '')
        }
      }).catch(() => {
        if (live) setMessage('Could not load saved progress from this browser.')
      })
    }
    return () => { live = false }
  }, [chapterId])

  if (!chapter) {
    return <div className="chapter-page">
      <div className="chapter-empty">
        <BookOpen size={28} />
        <h1>Chapter not found</h1>
        <p>This learning resource is not available yet.</p>
        <Link className="chapter-button chapter-button-primary" to="/learn">Back to subjects</Link>
      </div>
    </div>
  }

  const activeChapter = chapter
  const answeredCount = activeChapter.questions.filter(question => answers[question.id]).length

  async function persist(patch: Partial<LearningRecord>) {
    if (!chapter) return
    const id = chapter.curriculumItemId
    setSaving(true)
    setMessage('')
    try {
      const previous = await db.learningRecords.get(id)
      const next: LearningRecord = {
        ...previous,
        id,
        itemId: id,
        completed: previous?.completed ?? false,
        bookmarked: previous?.bookmarked ?? false,
        note: previous?.note ?? '',
        updatedAt: new Date().toISOString(),
        ...patch
      }
      await db.learningRecords.put(next)
      setRecord(next)
      return next
    } catch {
      setMessage('Your change could not be saved. Check that browser storage is available.')
      throw new Error('Study progress could not be saved.')
    } finally {
      setSaving(false)
    }
  }

  async function submitPractice() {
    if (answeredCount !== activeChapter.questions.length) {
      setMessage(`Answer all ${activeChapter.questions.length} questions before checking your work.`)
      return
    }
    const correct = activeChapter.questions.filter(question => answers[question.id] === question.answer).length
    const percent = Math.round((correct / activeChapter.questions.length) * 100)
    setScore(correct)
    try {
      await persist({
        practiceSummary: {
          attempts: (record?.practiceSummary?.attempts ?? 0) + 1,
          bestScore: Math.max(record?.practiceSummary?.bestScore ?? 0, percent),
          lastScore: percent,
          lastAttemptAt: new Date().toISOString()
        }
      })
      setSubmitted(true)
    } catch {
      setSubmitted(true)
    }
  }

  async function toggleComplete() {
    try {
      await persist({ completed: !record?.completed })
    } catch {
      // The error message is shown by persist.
    }
  }

  async function saveNotes() {
    try {
      await persist({ note: noteDraft })
      setMessage('Your chapter notes are saved on this device.')
    } catch {
      // The error message is shown by persist.
    }
  }

  function retryPractice() {
    setAnswers({})
    setSubmitted(false)
    setScore(null)
    setMessage('')
  }

  const percentage = score === null ? 0 : Math.round((score / chapter.questions.length) * 100)

  return <div className="chapter-page">
    <Link to={`/learn/${chapter.subjectId}`} className="chapter-back"><ArrowLeft size={15} /> Mathematics curriculum</Link>

    <section className="chapter-hero">
      <div className="chapter-hero-copy">
        <span className="chapter-eyebrow"><Sparkles size={13} /> STUDY GUIDE · CLASS X</span>
        <span className="chapter-unit">{chapter.chapterLabel}</span>
        <h1>{chapter.title}<span>.</span></h1>
        <p>{chapter.overview}</p>
        <div className="chapter-hero-meta">
          <span><BookOpen size={14} /> {chapter.sections.length} lesson sections</span>
          <span><Target size={14} /> {chapter.estimatedMinutes} min guide</span>
          <span><Circle size={7} /> Original study material</span>
        </div>
      </div>
      <div className="chapter-progress-card">
        <div className="chapter-progress-icon"><Trophy size={20} /></div>
        <span>YOUR PROGRESS</span>
        <strong>{record?.completed ? 'Complete' : 'In progress'}</strong>
        <small>{record?.practiceSummary ? `Best quiz score: ${record.practiceSummary.bestScore}%` : 'Work through the lesson and try the quiz.'}</small>
        <button onClick={() => void toggleComplete()} disabled={saving} className={`chapter-complete-button ${record?.completed ? 'is-done' : ''}`}>
          {record?.completed ? <><CheckCircle2 size={15} /> Mark as in progress</> : <><Check size={15} /> Mark chapter complete</>}
        </button>
      </div>
    </section>

    <div className="chapter-source">
      <div><CheckCircle2 size={17} /><span><b>Scope checked against CBSE 2026–27</b><small>{chapter.syllabusScope}</small></span></div>
      <a href={chapter.sourceUrl} target="_blank" rel="noreferrer">{chapter.sourceLabel} <ExternalLink size={13} /></a>
    </div>

    <section className="chapter-section-block">
      <div className="chapter-section-heading"><div><span className="chapter-eyebrow">BEFORE YOU BEGIN</span><h2>What you will learn</h2></div><span>{chapter.learningGoals.length} goals</span></div>
      <div className="chapter-goal-grid">
        {chapter.learningGoals.map((goal, index) => <div className="chapter-goal" key={goal}><span>{String(index + 1).padStart(2, '0')}</span><p>{goal}</p></div>)}
      </div>
    </section>

    <section className="chapter-section-block">
      <div className="chapter-section-heading"><div><span className="chapter-eyebrow">THE LESSON</span><h2>Understand the ideas</h2></div><span>{chapter.sections.length} sections</span></div>
      <div className="chapter-lesson-list">
        {chapter.sections.map((section, index) => <article className="chapter-lesson" key={section.id}>
          <div className="chapter-lesson-number">{String(index + 1).padStart(2, '0')}</div>
          <div className="chapter-lesson-content">
            <h3>{section.title}</h3>
            <p>{section.explanation}</p>
            <ul>{section.keyPoints.map(point => <li key={point}>{point}</li>)}</ul>
          </div>
        </article>)}
      </div>
    </section>

    <section className="chapter-section-block">
      <div className="chapter-section-heading"><div><span className="chapter-eyebrow">LEARN BY DOING</span><h2>Worked examples</h2></div><span>{chapter.workedExamples.length} solved</span></div>
      <div className="chapter-example-grid">
        {chapter.workedExamples.map(example => <article className="chapter-example" key={example.id}>
          <span className="chapter-example-kicker"><Lightbulb size={14} /> STEP-BY-STEP</span>
          <h3>{example.title}</h3>
          <p className="chapter-example-question">{example.question}</p>
          <ol>{example.steps.map(step => <li key={step}>{step}</li>)}</ol>
          <div className="chapter-example-answer"><b>Final answer</b><span>{example.answer}</span></div>
        </article>)}
      </div>
    </section>

    <section className="chapter-section-block">
      <div className="chapter-section-heading"><div><span className="chapter-eyebrow">QUICK REFERENCE</span><h2>Key facts to remember</h2></div><span>{chapter.keyFacts.length} facts</span></div>
      <div className="chapter-fact-grid">
        {chapter.keyFacts.map(fact => <article className="chapter-fact" key={fact.title}><b>{fact.title}</b><p>{fact.detail}</p></article>)}
      </div>
    </section>

    <section className="chapter-practice">
      <div className="chapter-practice-heading">
        <div><span className="chapter-eyebrow">CHECK YOUR UNDERSTANDING</span><h2>Quick practice</h2><p>Choose one answer for each question, then check your work. Your best score and attempt count stay on this device.</p></div>
        <div className="chapter-practice-count"><strong>{answeredCount}/{chapter.questions.length}</strong><span>answered</span></div>
      </div>
      <div className="chapter-question-list">
        {chapter.questions.map((question, index) => {
          const selected = answers[question.id]
          const correct = selected === question.answer
          return <article className={`chapter-question ${submitted ? (correct ? 'is-correct' : 'is-wrong') : ''}`} key={question.id}>
            <div className="chapter-question-top"><span>QUESTION {index + 1}</span><span>{submitted ? (correct ? 'CORRECT' : 'REVIEW') : 'ONE ANSWER'}</span></div>
            <h3>{question.prompt}</h3>
            <div className="chapter-options">
              {question.choices.map(choice => {
                const chosen = selected === choice.id
                const rightAnswer = submitted && choice.id === question.answer
                return <button
                  key={choice.id}
                  type="button"
                  className={`chapter-option ${chosen ? 'is-selected' : ''} ${rightAnswer ? 'is-answer' : ''}`}
                  onClick={() => setAnswers(current => ({ ...current, [question.id]: choice.id }))}
                  disabled={submitted}
                  aria-pressed={chosen}
                >
                  <span>{choice.id.toUpperCase()}</span>{choice.text}
                  {rightAnswer && <CheckCircle2 size={16} />}
                </button>
              })}
            </div>
            {submitted && <div className="chapter-explanation"><b>{correct ? 'Exactly right.' : `Correct answer: ${question.choices.find(choice => choice.id === question.answer)?.text}`}</b><p>{question.explanation}</p></div>}
          </article>
        })}
      </div>
      <div className="chapter-quiz-footer">
        <div>{record?.practiceSummary ? `${record.practiceSummary.attempts} attempt(s) · Best ${record.practiceSummary.bestScore}% · Last ${record.practiceSummary.lastScore}%` : 'No attempts recorded yet.'}</div>
        {!submitted
          ? <button className="chapter-button chapter-button-primary" onClick={() => void submitPractice()} disabled={saving || answeredCount !== chapter.questions.length}>Check answers <ArrowRight size={15} /></button>
          : <div className="chapter-result-actions"><strong><Trophy size={16} /> {score}/{chapter.questions.length} correct · {percentage}%</strong><button className="chapter-button chapter-button-secondary" onClick={retryPractice}><RotateCcw size={15} /> Try again</button></div>}
      </div>
      {message && <p className="chapter-message" role="status">{message}</p>}
    </section>

    <section className="chapter-notes">
      <div className="chapter-notes-icon"><NotebookPen size={20} /></div>
      <div className="chapter-notes-content">
        <span className="chapter-eyebrow">YOUR PERSONAL SPACE</span>
        <h2>Chapter notes</h2>
        <p>Write down a doubt, a reminder or your own explanation. These notes are stored locally in this browser.</p>
        <textarea value={noteDraft} onChange={event => setNoteDraft(event.target.value)} rows={5} placeholder="What do you want to remember from this chapter?" />
        <div className="chapter-notes-footer"><span>{noteDraft.length} characters</span><button className="chapter-button chapter-button-secondary" onClick={() => void saveNotes()} disabled={saving}>Save notes <Check size={15} /></button></div>
      </div>
    </section>

    <section className="chapter-external-notes">
      <div className="chapter-external-heading">
        <div><span className="chapter-eyebrow">GO DEEPER · FREE RESOURCES</span><h2>Want another explanation?</h2><p>Explore additional chapter notes from free learning websites. Use them as a second explanation, then check every topic against the official CBSE syllabus linked above.</p></div>
        <span className="chapter-free-pill">FREE TO READ</span>
      </div>
      <div className="chapter-resource-grid">
        {getExternalNotes(activeChapter).map(resource => <a className="chapter-resource-card" href={resource.url} target="_blank" rel="noopener noreferrer" key={resource.url}>
          <span className="chapter-resource-provider">{resource.provider}</span>
          <b>{resource.title}</b>
          <span className="chapter-resource-description">{resource.description}</span>
          <span className="chapter-resource-open">Open resource <ExternalLink size={13}/></span>
        </a>)}
      </div>
      <p className="chapter-resource-disclaimer">StudyVerse does not own or verify third-party content. Free access, sign-in requirements and syllabus coverage can change. Some external notes may include topics outside the current CBSE scope.</p>
    </section>

    <div className="chapter-next-step">
      <div><span className="chapter-eyebrow">KEEP THE MOMENTUM</span><b>Ready to continue?</b><p>Return to the curriculum to choose your next topic.</p></div>
      <Link className="chapter-button chapter-button-primary" to={`/learn/${chapter.subjectId}`}>Back to Mathematics <ArrowRight size={15} /></Link>
    </div>
  </div>
}
