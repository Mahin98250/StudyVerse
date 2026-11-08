import Dexie,{type EntityTable} from 'dexie'
export type Color='blue'|'violet'|'green'|'amber'|'rose'|'cyan'
export interface Subject{id:string;name:string;shortName:string;description:string;color:Color;order:number;active:boolean}
export interface StudySession{id:string;subjectId:string|null;startedAt:string;endedAt:string;durationSeconds:number}
export interface Profile{id:'default';displayName:string;academicSession:string;dailyGoalMinutes:number}
export interface LearningRecord{id:string;itemId:string;completed:boolean;bookmarked:boolean;note:string;updatedAt:string}
export interface Backup{application:'StudyVerse';backupVersion:1;exportedAt:string;data:{subjects:Subject[];studySessions:StudySession[];profile?:Profile}}
export const DEFAULT_SUBJECTS:Subject[]=[
{id:'mathematics',name:'Mathematics',shortName:'Maths',description:'Build confidence with concepts and problem solving.',color:'blue',order:1,active:true},
{id:'science',name:'Science',shortName:'Science',description:'Explore physics, chemistry and biology.',color:'green',order:2,active:true},
{id:'social-science',name:'Social Science',shortName:'SST',description:'Connect history, geography, civics and economics.',color:'amber',order:3,active:true},
{id:'english',name:'English',shortName:'English',description:'Strengthen reading, writing and literature.',color:'violet',order:4,active:true},
{id:'gujarati',name:'Gujarati',shortName:'Gujarati',description:'Practise language, grammar and literature.',color:'rose',order:5,active:true},
{id:'information-technology',name:'Information Technology',shortName:'IT',description:'Learn digital skills and practical concepts.',color:'cyan',order:6,active:true}]
class StudyDB extends Dexie{
 subjects!:EntityTable<Subject,'id'>;studySessions!:EntityTable<StudySession,'id'>;profiles!:EntityTable<Profile,'id'>;learningRecords!:EntityTable<LearningRecord,'id'>
 constructor(){super('StudyVerse');this.version(1).stores({subjects:'id,name,order,active',studySessions:'id,subjectId,startedAt',profiles:'id'});this.version(2).stores({subjects:'id,name,order,active',studySessions:'id,subjectId,startedAt',profiles:'id',learningRecords:'id,itemId,completed,bookmarked,updatedAt'})}
}
export const db=new StudyDB()
export async function initialiseDatabase(){await db.transaction('rw',db.subjects,db.profiles,async()=>{if(await db.subjects.count()===0)await db.subjects.bulkAdd(DEFAULT_SUBJECTS);if(!(await db.profiles.get('default')))await db.profiles.add({id:'default',displayName:'Student',academicSession:'2026–27',dailyGoalMinutes:120})})}
export function formatDuration(seconds:number){const safe=Math.max(0,Math.floor(seconds));const h=Math.floor(safe/3600);const m=Math.floor(safe%3600/60);return h?(m?`${h}h ${m}m`:`${h}h`):`${m}m`}
export function makeId(){return globalThis.crypto?.randomUUID?.()??`${Date.now()}-${Math.random().toString(16).slice(2)}`}
export async function exportBackup(){const payload:Backup={application:'StudyVerse',backupVersion:1,exportedAt:new Date().toISOString(),data:{subjects:await db.subjects.toArray(),studySessions:await db.studySessions.toArray(),profile:await db.profiles.get('default')}};const url=URL.createObjectURL(new Blob([JSON.stringify(payload,null,2)],{type:'application/json'}));const a=document.createElement('a');a.href=url;a.download=`studyverse-backup-${new Date().toISOString().slice(0,10)}.json`;a.click();URL.revokeObjectURL(url)}
export async function importBackup(file:File){if(file.size>10*1024*1024)throw new Error('Backup file exceeds 10 MB.');const raw:unknown=JSON.parse(await file.text());if(!raw||typeof raw!=='object')throw new Error('Invalid backup file.');const b=raw as Partial<Backup>;if(b.application!=='StudyVerse'||b.backupVersion!==1||!b.data||!Array.isArray(b.data.subjects)||!Array.isArray(b.data.studySessions))throw new Error('Unsupported or incomplete StudyVerse backup.');await db.transaction('rw',db.subjects,db.studySessions,db.profiles,async()=>{await db.subjects.clear();await db.studySessions.clear();await db.subjects.bulkPut(b.data!.subjects);await db.studySessions.bulkPut(b.data!.studySessions);if(b.data!.profile)await db.profiles.put(b.data!.profile)})}