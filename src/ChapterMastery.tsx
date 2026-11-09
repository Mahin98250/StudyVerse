import { useEffect, useState } from 'react'
import { ArrowDown, ArrowRight, BookmarkCheck, CheckCircle2, ClipboardList, ExternalLink, Lightbulb, Sparkles } from 'lucide-react'
import { getMasteryPack } from './chapterMasteryContent'
import './chapter-mastery.css'

const BOARD_RESOURCES: Record<string, { label: string; paper: string; markingScheme: string; note: string }> = {
  Mathematics: {
    label: 'Mathematics Standard · Code 041',
    paper: 'https://cbseacademic.nic.in/web_material/SQP/ClassX_2026_27/MathsStandard-SQP.pdf',
    markingScheme: 'https://cbseacademic.nic.in/web_material/SQP/ClassX_2026_27/MathsStandard-MS.pdf',
    note: 'This is the Standard Mathematics sample paper. Confirm whether your school has registered you for Basic or Standard Mathematics.'
  },
  Science: {
    label: 'Science · Code 086',
    paper: 'https://cbseacademic.nic.in/web_material/SQP/ClassX_2026_27/Science-SQP.pdf',
    markingScheme: 'https://cbseacademic.nic.in/web_material/SQP/ClassX_2026_27/Science-MS.pdf',
    note: 'Use the marking scheme to compare the key points and steps expected in written answers.'
  },
  'Social Science': {
    label: 'Social Science · Code 087',
    paper: 'https://cbseacademic.nic.in/web_material/SQP/ClassX_2026_27/SocialScience-SQP.pdf',
    markingScheme: 'https://cbseacademic.nic.in/web_material/SQP/ClassX_2026_27/SocialScience-MS.pdf',
    note: 'Practise source-based, case-based and map questions along with descriptive answers.'
  },
  English: {
    label: 'English Language & Literature · Code 184',
    paper: 'https://cbseacademic.nic.in/web_material/SQP/ClassX_2026_27/EnglishL-SQP.pdf',
    markingScheme: 'https://cbseacademic.nic.in/web_material/SQP/ClassX_2026_27/EnglishL-MS.pdf',
    note: 'The linked sample paper is for English Language & Literature. Confirm the course with your school.'
  },
  Gujarati: {
    label: 'Gujarati · Code 010',
    paper: 'https://cbseacademic.nic.in/web_material/SQP/ClassX_2026_27/Gujarati-SQP.pdf',
    markingScheme: 'https://cbseacademic.nic.in/web_material/SQP/ClassX_2026_27/Gujarati-MS.pdf',
    note: 'Official Class X sample paper and marking scheme. Match literature preparation to the exact textbook prescribed by your school.'
  }
}

export default function ChapterMastery({ chapterId }: { chapterId: string }) {
  const pack = getMasteryPack(chapterId)
  const [checked, setChecked] = useState<string[]>([])
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [quizSubmitted, setQuizSubmitted] = useState(false)
  useEffect(() => {
    setChecked([])
    setAnswers({})
    setQuizSubmitted(false)
  }, [chapterId])
  const questions = pack?.practiceQuestions ?? []
  const answeredCount = questions.filter(question => answers[question.id]).length
  const quizScore = questions.filter(question => answers[question.id] === question.answer).length
  if (!pack) return null

  const sections = [
    { id: 'deep-notes', label: 'Detailed concepts' },
    { id: 'formula-desk', label: 'Formula & fact desk' },
    { id: 'mistakes', label: 'Avoid these mistakes' },
    { id: 'answer-blueprints', label: 'Board answer method' },
    { id: 'board-resources', label: 'Official sample paper' },
    { id: 'practice-check', label: 'Knowledge check' },
    { id: 'mastery-check', label: 'Mastery checklist' }
  ]

  function toggleItem(item: string) {
    setChecked(current => current.includes(item) ? current.filter(value => value !== item) : [...current, item])
  }

  return <section className="mastery-shell" aria-labelledby="mastery-title">
    <header className="mastery-hero">
      <div className="mastery-hero-copy">
        <span className="mastery-kicker"><Sparkles size={13}/> DEEP-DIVE LEARNING · CLASS X</span>
        <p className="mastery-subject">{pack.subject} / CHAPTER MASTERY</p>
        <h2 id="mastery-title">Go beyond the summary<span>.</span></h2>
        <p className="mastery-intro">{pack.focus}</p>
        <div className="mastery-outcomes">
          {pack.outcomes.map((outcome, index) => <span key={outcome}><b>{String(index + 1).padStart(2, '0')}</b>{outcome}</span>)}
        </div>
      </div>
      <div className="mastery-index-card">
        <span>YOUR LEARNING ROUTE</span>
        <strong>{pack.sections.length} deep-dive lessons</strong>
        <small>Concept → worked reasoning → board-ready expression</small>
        <a href="#deep-notes">Start learning <ArrowDown size={14}/></a>
      </div>
    </header>

    <div className="mastery-layout">
      <nav className="mastery-rail" aria-label="Chapter mastery sections">
        <span className="mastery-rail-label">IN THIS CHAPTER</span>
        {sections.map((section, index) => <a href={`#${section.id}`} key={section.id}><i>{String(index + 1).padStart(2, '0')}</i>{section.label}</a>)}
        <div className="mastery-rail-note"><BookmarkCheck size={16}/><span>Study tip</span><p>Read one lesson, close the notes, and explain the idea in your own words before moving on.</p></div>
      </nav>

      <div className="mastery-main">
        <section id="deep-notes" className="mastery-section">
          <div className="mastery-section-heading"><div><span>01 / UNDERSTAND</span><h3>Detailed concept notes</h3><p>Build the idea carefully. Focus on why each step works, not only what to memorise.</p></div><b>{pack.sections.length} lessons</b></div>
          <div className="mastery-lessons">
            {pack.sections.map((section, index) => <article className="mastery-lesson" key={section.id}>
              <div className="mastery-lesson-index">{String(index + 1).padStart(2, '0')}</div>
              <div className="mastery-lesson-body">
                <h4>{section.title}</h4>
                <p>{section.explanation}</p>
                <ul>{section.keyIdeas.map(idea => <li key={idea}>{idea}</li>)}</ul>
                {section.example && <div className="mastery-example">
                  <div className="mastery-example-kicker"><Lightbulb size={14}/> WORKED REASONING</div>
                  <h5>{section.example.title}</h5>
                  <p className="mastery-example-question">{section.example.question}</p>
                  <ol>{section.example.working.map(step => <li key={step}>{step}</li>)}</ol>
                  <div className="mastery-example-answer"><b>Answer</b><span>{section.example.answer}</span></div>
                  {section.example.examinerNote && <p className="mastery-examiner-note">{section.example.examinerNote}</p>}
                </div>}
              </div>
            </article>)}
          </div>
        </section>

        <section id="formula-desk" className="mastery-section">
          <div className="mastery-section-heading"><div><span>02 / RECALL</span><h3>Formula & fact desk</h3><p>A compact reference for quick revision after you understand the concepts.</p></div><ClipboardList size={22}/></div>
          <div className="mastery-formula-grid">
            {pack.formulaDesk.map(item => <article className="mastery-formula" key={item.label}><span>{item.label}</span><strong>{item.formula}</strong><p>{item.note}</p></article>)}
          </div>
        </section>

        <section id="mistakes" className="mastery-section">
          <div className="mastery-section-heading"><div><span>03 / GET IT RIGHT</span><h3>Common mistakes to avoid</h3><p>These are the small errors that can turn a correct idea into a lost mark.</p></div><b>{pack.commonMistakes.length} checkpoints</b></div>
          <div className="mastery-mistakes">
            {pack.commonMistakes.map((item, index) => <article key={item.mistake}><span>{String(index + 1).padStart(2, '0')}</span><div><b>{item.mistake}</b><p>{item.correction}</p></div></article>)}
          </div>
        </section>

        <section id="answer-blueprints" className="mastery-section">
          <div className="mastery-section-heading"><div><span>04 / WRITE FOR MARKS</span><h3>Board-answer blueprints</h3><p>Use these structures to organise answers. Match the depth to the exact command word and marks.</p></div><ClipboardList size={22}/></div>
          <div className="mastery-blueprint-grid">
            {pack.answerBlueprints.map(item => <article className="mastery-blueprint" key={item.prompt}><span>{item.marks}</span><h4>{item.prompt}</h4><ol>{item.structure.map(step => <li key={step}>{step}</li>)}</ol></article>)}
          </div>
        </section>

        {BOARD_RESOURCES[pack.subject] && <section id="board-resources" className="mastery-section">
          <div className="mastery-section-heading"><div><span>05 / EXAM PATTERN</span><h3>Official CBSE sample paper</h3><p>Practise with the current session's official paper and marking scheme. Use the marking scheme to understand what a complete answer needs.</p></div><ExternalLink size={22}/></div>
          <article className="mastery-resource-card">
            <span>CBSE · ACADEMIC SESSION 2026–27</span>
            <b>{BOARD_RESOURCES[pack.subject].label}</b>
            <small>{BOARD_RESOURCES[pack.subject].note}</small>
            <div className="mastery-resource-actions">
              <a className="mastery-resource-link" href={BOARD_RESOURCES[pack.subject].paper} target="_blank" rel="noreferrer">Open sample paper <ExternalLink size={13}/></a>
              <a className="mastery-resource-link" href={BOARD_RESOURCES[pack.subject].markingScheme} target="_blank" rel="noreferrer">Open marking scheme <ExternalLink size={13}/></a>
            </div>
          </article>
          <p className="mastery-resource-note">These are official CBSE assessment resources, not a guarantee of exact questions in the board examination. Check the paper/course code and current school instructions before practising.</p>
        </section>}

        {questions.length > 0 && <section id="practice-check" className="mastery-section">
          <div className="mastery-section-heading"><div><span>06 / RETRIEVE & APPLY</span><h3>Chapter knowledge check</h3><p>Answer without looking back at the notes. Feedback explains why each answer is correct.</p></div><b>{answeredCount}/{questions.length} answered</b></div>
          <div className="mastery-question-list">
            {questions.map((question, index) => {
              const selected = answers[question.id]
              const isCorrect = selected === question.answer
              return <article className={`mastery-question ${quizSubmitted ? (isCorrect ? 'is-correct' : 'is-wrong') : ''}`} key={question.id}>
                <div className="mastery-question-heading"><span>QUESTION {index + 1}</span>{quizSubmitted && <b>{isCorrect ? 'CORRECT' : 'REVIEW'}</b>}</div>
                <h4>{question.prompt}</h4>
                <div className="mastery-question-options">
                  {question.choices.map(choice => {
                    const chosen = selected === choice.id
                    const right = quizSubmitted && choice.id === question.answer
                    return <button key={choice.id} type="button" disabled={quizSubmitted}
                      aria-pressed={chosen}
                      className={`mastery-question-option ${chosen ? 'is-selected' : ''} ${right ? 'is-answer' : ''}`}
                      onClick={() => setAnswers(current => ({ ...current, [question.id]: choice.id }))}>
                      <span>{choice.id.toUpperCase()}</span>{choice.text}
                    </button>
                  })}
                </div>
                {quizSubmitted && <div className="mastery-question-explanation"><b>{isCorrect ? 'Correct.' : `Correct answer: ${question.choices.find(choice => choice.id === question.answer)?.text}`}</b><p>{question.explanation}</p></div>}
              </article>
            })}
          </div>
          <div className="mastery-quiz-footer">
            <span>{quizSubmitted ? `Your score: ${quizScore} / ${questions.length}` : 'Complete every question before checking your answers.'}</span>
            {!quizSubmitted
              ? <button type="button" className="mastery-quiz-button" disabled={answeredCount !== questions.length}
                  onClick={() => setQuizSubmitted(true)}>Check answers <ArrowRight size={14}/></button>
              : <button type="button" className="mastery-quiz-button is-secondary" onClick={() => { setAnswers({}); setQuizSubmitted(false) }}>Try again <ArrowRight size={14}/></button>}
          </div>
        </section>}

        <section id="mastery-check" className="mastery-section">
          <div className="mastery-section-heading"><div><span>07 / CHECK YOURSELF</span><h3>Ready to move on?</h3><p>Tick each statement only when you can do it without looking at the notes.</p></div><b>{checked.length}/{pack.finalChecklist.length} mastered</b></div>
          <div className="mastery-checklist">
            {pack.finalChecklist.map((item, index) => <label key={item} className={checked.includes(item) ? 'is-checked' : ''}>
              <input type="checkbox" checked={checked.includes(item)} onChange={() => toggleItem(item)}/>
              <span>{item}</span>
              {checked.includes(item) ? <CheckCircle2 size={17}/> : <span className="mastery-check-number">{index + 1}</span>}
            </label>)}
          </div>
          <div className="mastery-complete-note"><CheckCircle2 size={16}/><span>{checked.length === pack.finalChecklist.length ? 'Excellent. You have checked every mastery target. Now test yourself under timed conditions.' : 'Your progress here is a self-check for this visit. Use the chapter quiz and exam centre to measure your recall.'}</span><ArrowRight size={15}/></div>
        </section>
      </div>
    </div>
  </section>
}
