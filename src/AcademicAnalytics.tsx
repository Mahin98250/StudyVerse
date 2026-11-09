import { useEffect, useMemo, useState } from 'react'
import { Activity, Award, BookOpen, CalendarDays, Clock3, Flame, Target, TrendingUp, Trophy } from 'lucide-react'
import { ACADEMIC_CHAPTERS } from './academicContent'
import { ITEMS } from './curriculum'
import { db, formatDuration, type ExamAttempt, type LearningRecord, type StudySession } from './core'
import './academic-analytics.css'

const boardChapters = ACADEMIC_CHAPTERS.filter(chapter => ITEMS.some(item => item.id === chapter.curriculumItemId && item.status === 'board'))
const subjectNames: Record<string,string> = { mathematics:'Mathematics', science:'Science', 'social-science':'Social Science', english:'English', gujarati:'Gujarati', 'information-technology':'Information Technology' }
const dayKey = (date: Date) => `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`

export default function AcademicAnalytics() {
  const [sessions,setSessions]=useState<StudySession[]>([])
  const [records,setRecords]=useState<LearningRecord[]>([])
  const [exams,setExams]=useState<ExamAttempt[]>([])
  const [loading,setLoading]=useState(true)

  useEffect(()=>{let live=true;void Promise.all([db.studySessions.toArray(),db.learningRecords.toArray(),db.examAttempts.toArray()]).then(([s,r,e])=>{if(live){setSessions(s);setRecords(r);setExams(e.filter(item=>item.status==='submitted'))}}).catch(console.error).finally(()=>{if(live)setLoading(false)});return()=>{live=false}},[])

  const analytics=useMemo(()=>{
    const now=new Date();now.setHours(0,0,0,0)
    const days=Array.from({length:14},(_,i)=>{const d=new Date(now);d.setDate(now.getDate()-13+i);const seconds=sessions.filter(s=>dayKey(new Date(s.startedAt))===dayKey(d)).reduce((sum,s)=>sum+s.durationSeconds,0);return{label:new Intl.DateTimeFormat('en-IN',{weekday:'short'}).format(d),date:d,seconds}})
    const totalSeconds=sessions.reduce((sum,s)=>sum+s.durationSeconds,0)
    const last7=days.slice(-7).reduce((sum,d)=>sum+d.seconds,0)
    const activeDays=new Set(days.filter(d=>d.seconds>0).map(d=>dayKey(d.date))).size
    const completed=boardChapters.filter(ch=>records.some(r=>r.itemId===ch.curriculumItemId&&r.completed)).length
    const bestScores=boardChapters.map(ch=>({chapter:ch,record:records.find(r=>r.itemId===ch.curriculumItemId)})).filter(x=>x.record?.practiceSummary)
    const examScores=exams.filter(e=>e.score!==undefined).map(e=>Math.round((e.score!/Math.max(1,e.questions.length))*100))
    const averageExam=examScores.length?Math.round(examScores.reduce((a,b)=>a+b,0)/examScores.length):null
    const subjectStats=Object.keys(subjectNames).map(id=>{const own=boardChapters.filter(ch=>ch.subjectId===id);const done=own.filter(ch=>records.some(r=>r.itemId===ch.curriculumItemId&&r.completed)).length;const attempts=own.flatMap(ch=>{const summary=records.find(r=>r.itemId===ch.curriculumItemId)?.practiceSummary;return summary?[{score:summary.lastScore,attempts:summary.attempts}]:[]});const avg=attempts.length?Math.round(attempts.reduce((sum,x)=>sum+x.score,0)/attempts.length):null;return{id,name:subjectNames[id],done,total:own.length,avg,attempts:attempts.reduce((sum,x)=>sum+x.attempts,0)}}).filter(x=>x.total>0)
    const weak=bestScores.map(x=>({title:x.chapter.title,subject:subjectNames[x.chapter.subjectId]??x.chapter.subjectId,score:x.record!.practiceSummary!.lastScore})).sort((a,b)=>a.score-b.score).slice(0,4)
    const peak=Math.max(3600,...days.map(d=>d.seconds))
    return{days,totalSeconds,last7,activeDays,completed,subjectStats,weak,averageExam,examCount:exams.length,peak,studyHours:totalSeconds/3600}
  },[sessions,records,exams])

  if(loading)return <div className="analytics-loading">Building your academic picture…</div>
  return <div className="analytics-page">
    <header className="analytics-heading"><div><span className="eyebrow">ACADEMIC INSIGHTS · YOUR DATA</span><h1>Progress, <em>made visible.</em></h1><p>Understand your study habits, chapter coverage and exam performance using activity saved on this device.</p></div><div className="analytics-private"><Activity size={19}/><span>LIVE FROM<br/>YOUR DEVICE</span></div></header>
    <section className="analytics-kpis">
      <article><span><Clock3 size={14}/> TOTAL STUDY TIME</span><b>{formatDuration(analytics.totalSeconds)}</b><small>{formatDuration(analytics.last7)} in the last 7 days</small></article>
      <article><span><BookOpen size={14}/> BOARD-SCOPE COVERAGE</span><b>{analytics.completed}/{boardChapters.length}</b><small>Guides marked complete</small></article>
      <article><span><Trophy size={14}/> MOCK EXAMS</span><b>{analytics.examCount}</b><small>{analytics.averageExam===null?'No scored exams yet':`Average score ${analytics.averageExam}%`}</small></article>
      <article><span><Flame size={14}/> STUDY CONSISTENCY</span><b>{analytics.activeDays}/14</b><small>Active days in the last two weeks</small></article>
    </section>
    <section className="analytics-main-grid">
      <article className="analytics-panel analytics-week"><div className="analytics-panel-heading"><div><span className="eyebrow">STUDY RHYTHM</span><h2>Last 14 days</h2></div><span className="analytics-panel-note">Daily focus time</span></div><div className="analytics-bars">{analytics.days.map((d,i)=><div className="analytics-bar-column" key={dayKey(d.date)}><div className="analytics-bar-track"><i style={{height:`${Math.max(d.seconds?4:0,d.seconds/analytics.peak*100)}%`}} title={formatDuration(d.seconds)}/></div><span>{d.label}</span>{i%2===0&&<small>{d.date.getDate()}</small>}</div>)}</div><div className="analytics-chart-foot"><span>{formatDuration(analytics.last7)} this week</span><span>{analytics.activeDays} active days</span></div></article>
      <article className="analytics-panel analytics-coverage"><div className="analytics-panel-heading"><div><span className="eyebrow">SYLLABUS PROGRESS</span><h2>Chapter coverage</h2></div><Target size={18}/></div><div className="analytics-ring-wrap"><div className="analytics-ring" style={{background:`conic-gradient(#d8ff3e ${analytics.completed/boardChapters.length*100}%,#e9eee2 0)`}}><div><b>{Math.round(analytics.completed/ACADEMIC_CHAPTERS.length*100)}%</b><span>complete</span></div></div></div><p>{boardChapters.length-analytics.completed} board-scope guides remain unmarked as complete.</p></article>
    </section>
    <section className="analytics-panel"><div className="analytics-panel-heading"><div><span className="eyebrow">SUBJECT BREAKDOWN</span><h2>Where your effort goes</h2></div><span className="analytics-panel-note">Only subjects with chapter guides</span></div><div className="analytics-subject-list">{analytics.subjectStats.map(s=><div className="analytics-subject-row" key={s.id}><div><b>{s.name}</b><span>{s.done}/{s.total} chapters · {s.attempts} quiz attempts</span></div><div className="analytics-subject-meter"><i style={{width:`${s.total?s.done/s.total*100:0}%`}}/></div><strong>{s.avg===null?'—':s.avg+'%'}</strong></div>)}</div></section>
    <section className="analytics-bottom-grid">
      <article className="analytics-panel"><div className="analytics-panel-heading"><div><span className="eyebrow">FOCUS NEXT</span><h2>Chapters to revisit</h2></div><TrendingUp size={18}/></div>{analytics.weak.length? <div className="analytics-weak-list">{analytics.weak.map(x=><div key={x.title}><div><b>{x.title}</b><span>{x.subject}</span></div><strong className={x.score<50?'low':''}>{x.score}%</strong></div>)}</div>:<p className="analytics-empty">Complete a chapter quiz to get personalised revision suggestions here.</p>}</article>
      <article className="analytics-panel"><div className="analytics-panel-heading"><div><span className="eyebrow">EXAM PERFORMANCE</span><h2>Mock exam history</h2></div><Award size={18}/></div>{exams.length?<div className="analytics-exam-list">{[...exams].sort((a,b)=>new Date(b.submittedAt??b.startedAt).getTime()-new Date(a.submittedAt??a.startedAt).getTime()).slice(0,5).map(exam=><div key={exam.id}><div><b>{exam.subject==='all'?'Mixed exam':subjectNames[exam.subject]}</b><span>{new Date(exam.submittedAt??exam.startedAt).toLocaleDateString('en-IN')} · {exam.questions.length} questions</span></div><strong>{Math.round((exam.score??0)/Math.max(1,exam.questions.length)*100)}%</strong></div>)}</div>:<p className="analytics-empty">Your completed mock exams will appear here after your first submission.</p>}</article>
    </section>
    <p className="analytics-disclaimer"><CalendarDays size={13}/> Analytics reflect records available in this browser. They are learning indicators, not official school grades or predictions of board results.</p>
  </div>
}
