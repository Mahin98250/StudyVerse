import {useEffect,useMemo,useState} from 'react';
import {Link,useParams} from 'react-router-dom';
import {ArrowLeft,ArrowUpRight,Bookmark,BookOpen,Check,CheckCircle2,Circle,ExternalLink,FileText,Search,Sparkles} from 'lucide-react';
import {SOURCES,forSubject,type CurriculumItem,type CurriculumStatus} from './curriculum';
import {RESOURCE_BY_TOPIC} from './academicContent';
import {db,DEFAULT_SUBJECTS,type LearningRecord} from './core';
import './learning.css';
const labels:Record<CurriculumStatus,string>={board:'Board scope',formative:'Formative only',periodic:'Periodic assessment',project:'Project / map work'};
export default function LearningHub(){
 const {subjectId}=useParams();const subject=DEFAULT_SUBJECTS.find(s=>s.id===subjectId);
 const entries=useMemo(()=>subject?forSubject(subject.id):[],[subject]);
 const [records,setRecords]=useState<LearningRecord[]>([]),[query,setQuery]=useState(''),[filter,setFilter]=useState<'all'|CurriculumStatus|'saved'>('all'),[expanded,setExpanded]=useState<string|null>(null),[drafts,setDrafts]=useState<Record<string,string>>({}),[saving,setSaving]=useState<string|null>(null);
 useEffect(()=>{let live=true;void db.learningRecords.toArray().then(rows=>{if(live){setRecords(rows);setDrafts(Object.fromEntries(rows.map(r=>[r.itemId,r.note??''])))}});return()=>{live=false}},[]);
 const done=entries.filter(e=>records.some(r=>r.itemId===e.id&&r.completed)).length;
 const saved=entries.filter(e=>records.some(r=>r.itemId===e.id&&r.bookmarked)).length;
 const visible=entries.filter(e=>{const r=records.find(x=>x.itemId===e.id);return(!query||`${e.title} ${e.group} ${e.description}`.toLowerCase().includes(query.toLowerCase()))&&(filter==='all'||(filter==='saved'?!!r?.bookmarked:e.status===filter))});
 async function update(e:CurriculumItem,patch:Partial<LearningRecord>){const old=records.find(r=>r.itemId===e.id);const next:LearningRecord={...old,id:e.id,itemId:e.id,completed:old?.completed??false,bookmarked:old?.bookmarked??false,note:old?.note??'',updatedAt:new Date().toISOString(),...patch};setSaving(e.id);try{await db.learningRecords.put(next);setRecords(rows=>[...rows.filter(r=>r.itemId!==e.id),next])}finally{setSaving(null)}}
 if(!subjectId)return <div className="stack learn-page"><div className="learn-title-row"><div><span className="eyebrow">LEARNING HUB · CLASS 10</span><h1>Choose a subject<em>.</em></h1><p>Explore the official 2026–27 curriculum, track topics and keep your own notes.</p></div></div><div className="learn-subject-grid">{DEFAULT_SUBJECTS.filter(s=>s.active).map(s=><Link className="learn-subject-card" to={`/learn/${s.id}`} key={s.id}><span className="eyebrow">CBSE · CLASS X</span><h2>{s.name}</h2><p>{SOURCES[s.id]?.label??'School-specific syllabus · verification needed'}</p><span>Open workspace <ArrowUpRight size={15}/></span></Link>)}</div></div>;
 if(!subject)return <div className="stack"><div className="learn-empty"><BookOpen/><h2>Subject not found</h2><p>This subject is not part of the current StudyVerse profile.</p><Link to="/learn">Browse subjects <ArrowUpRight size={14}/></Link></div></div>;
 const source=SOURCES[subject.id];
 return <div className="stack learn-page"><Link to="/learn" className="learn-back"><ArrowLeft size={15}/> All subjects</Link>
 <div className="learn-title-row"><div><span className="eyebrow">CLASS 10 · 2026–27 CURRICULUM</span><h1>{subject.name}<em>.</em></h1><p>{source?.note??'No syllabus has been guessed for this subject. Confirm the official subject code and school textbook before adding content.'}</p></div><div className="learn-progress"><strong>{done}<small> / {entries.length}</small></strong><span>topics completed</span><div className="learn-progress-track"><i style={{width:entries.length?`${done/entries.length*100}%`:'0%'}}/></div></div></div>
 {source&&<div className="source-strip"><div><CheckCircle2 size={17}/><span><b>Official source linked</b><small>{source.label}</small></span></div><a href={source.url} target="_blank" rel="noreferrer">View CBSE PDF <ExternalLink size={13}/></a></div>}
 {!entries.length?<div className="learn-empty"><Sparkles/><h2>Curriculum verification needed</h2><p>We have not inserted guessed chapters. Confirm the subject code/course with your school, then this space can be populated from the matching official syllabus.</p></div>:<>
 <div className="learn-toolbar"><label className="learn-search"><Search size={16}/><input value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search topics, units or keywords"/></label><div className="learn-filters">{(['all','board','formative','periodic','project','saved'] as const).map(v=><button key={v} className={filter===v?'active':''} onClick={()=>setFilter(v)}>{v==='all'?'All':v==='saved'?'Saved':labels[v]}</button>)}</div></div>
 <div className="learn-summary"><span>{visible.length} of {entries.length} topics</span><span><Bookmark size={13}/> {saved} saved</span><span><Check size={13}/> {done} completed</span></div>
 <div className="learn-list">{visible.map(e=>{const r=records.find(x=>x.itemId===e.id),open=expanded===e.id;return <article className={`learn-item ${r?.completed?'is-complete':''}`} key={e.id}>
 <button className="learn-check" aria-label={r?.completed?'Mark incomplete':'Mark complete'} onClick={()=>void update(e,{completed:!r?.completed})}>{r?.completed?<CheckCircle2 size={21}/>:<Circle size={21}/>}</button>
 <div className="learn-item-main"><div className="learn-item-meta"><span>{e.group}</span><span className={`learn-status ${e.status}`}>{labels[e.status]}</span>{r?.practiceSummary&&<span className="learn-practice-badge">QUIZ {r.practiceSummary.bestScore}% · {r.practiceSummary.attempts} tries</span>}</div><h3>{e.title}</h3><p>{e.description}</p>
 {RESOURCE_BY_TOPIC[e.id]&&<Link className="learn-study-link" to={'/study/'+RESOURCE_BY_TOPIC[e.id]}><BookOpen size={13}/> Open study guide <ArrowUpRight size={13}/></Link>}
 {open&&<div className="learn-note"><label htmlFor={`note-${e.id}`}>My study notes</label><textarea id={`note-${e.id}`} rows={3} value={drafts[e.id]??r?.note??''} onChange={event=>setDrafts(d=>({...d,[e.id]:event.target.value}))} placeholder="Write your own explanation, doubts or key points…"/><div><span>Saved only on this device</span><button disabled={saving===e.id} onClick={()=>void update(e,{note:drafts[e.id]??''})}>{saving===e.id?'Saving…':'Save note'}</button></div></div>}
 <button className="learn-note-toggle" onClick={()=>setExpanded(open?null:e.id)}><FileText size={14}/>{open?'Close notes':r?.note?'Edit notes':'Add notes'}</button></div>
 <button className={`learn-bookmark ${r?.bookmarked?'saved':''}`} aria-label={r?.bookmarked?'Remove bookmark':'Bookmark topic'} onClick={()=>void update(e,{bookmarked:!r?.bookmarked})}><Bookmark size={18}/></button></article>})}</div>
 {!visible.length&&<div className="learn-empty"><Search/><h2>No matching topics</h2><p>Try another search or filter.</p></div>}
 </>}
 </div>
}

