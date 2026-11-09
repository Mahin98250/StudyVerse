/* global URL, console, process */
import { readFileSync } from 'node:fs'

const read = path => readFileSync(new URL(`../${path}`, import.meta.url), 'utf8')
const academic = read('src/academicContent.ts')
const curriculum = read('src/curriculum.ts')
const exam = read('src/ExamCentre.tsx')
const visuals = read('src/ChapterVisual.tsx')
const resources = read('src/externalNotes.ts')
const mastery = read('src/chapterMasteryContent.ts')

const matches = [...academic.matchAll(/id: '([^']+)',\n\s+curriculumItemId: '([^']+)'/g)]
const ids = new Set()
const curriculumIds = new Set()
const failures = []

for (let i = 0; i < matches.length; i++) {
  const [chapterId, curriculumId] = [matches[i][1], matches[i][2]]
  if (ids.has(chapterId)) failures.push(`Duplicate chapter id: ${chapterId}`)
  ids.add(chapterId)
  if (!visuals.includes(`case '${chapterId}'`)) failures.push(`${chapterId}: missing concept diagram or explicit visual coverage decision`)
  if (curriculumIds.has(curriculumId)) failures.push(`Duplicate curriculum mapping: ${curriculumId}`)
  curriculumIds.add(curriculumId)
  const block = academic.slice(matches[i].index, matches[i + 1]?.index ?? academic.indexOf('export const RESOURCE_BY_TOPIC'))
  const sections = block.split('sections: [')[1]?.split('workedExamples: [')[0] ?? ''
  const examples = block.split('workedExamples: [')[1]?.split('keyFacts: [')[0] ?? ''
  const questions = block.split('questions: [')[1]?.split('sourceUrl:')[0] ?? ''
  const sectionCount = (sections.match(/\n\s+id: '/g) ?? []).length
  const exampleCount = (examples.match(/\n\s+id: '/g) ?? []).length
  const questionCount = (questions.match(/\bid: '[^']+-q\d+'/g) ?? []).length
  if (sectionCount < 3) failures.push(`${chapterId}: expected at least 3 lesson sections, found ${sectionCount}`)
  if (exampleCount < 2) failures.push(`${chapterId}: expected at least 2 worked examples, found ${exampleCount}`)
  if (questionCount < 4) failures.push(`${chapterId}: expected 4 practice questions, found ${questionCount}`)
  if (!block.includes('sourceUrl:') || !block.includes('sourceLabel:')) failures.push(`${chapterId}: missing source attribution`)
}

const mappedEntries = [...curriculum.matchAll(/add\('([^']+)','[^']+','([^']+)'/g)].map(match => ({ subject: match[1], id: match[2] }))
const mappedCurriculum = mappedEntries.filter(entry => ['mathematics', 'science'].includes(entry.subject)).map(entry => entry.id)
const allCurriculumIds = new Set(mappedEntries.map(entry => entry.id))
for (const id of mappedCurriculum) if (!curriculumIds.has(id)) failures.push(`Curriculum item has no Math/Science study guide: ${id}`)
for (const id of curriculumIds) if (!mappedCurriculum.includes(id)) failures.push(`Math/Science study guide has no curriculum item: ${id}`)

for (const id of ['sci-acid','sci-metal','sci-carbon','sci-eye','sci-magnetic']) {
  const line = curriculum.split('\n').find(row => row.includes(`'${id}'`))
  if (!line?.includes("'board'")) failures.push(`${id} must be board-scope for 2026–27`)
}
for (const id of ['sci-heredity','sci-periodic','sci-evolution','sci-motor']) {
  const line = curriculum.split('\n').find(row => row.includes(`'${id}'`))
  if (!line?.includes("'formative'")) failures.push(`${id} must remain formative-only`)
}
if (!exam.includes("ITEMS.filter(item => item.status === 'board')")) failures.push('Mock exams must only draw from board-scope curriculum items')
for (const field of ['match:', 'access:', 'syllabus:']) if (!resources.includes(field)) failures.push(`External resource quality metadata missing: ${field}`)

const masteryMatches = [...mastery.matchAll(/^\s{2}'([^']+)': \{/gm)]
for (let i = 0; i < masteryMatches.length; i++) {
  const chapterId = masteryMatches[i][1]
  const block = mastery.slice(masteryMatches[i].index, masteryMatches[i + 1]?.index ?? mastery.indexOf('\n}\n\nexport function getMasteryPack'))
  const curriculumId = block.match(/curriculumItemId: '([^']+)'/)?.[1]
  if (!ids.has(chapterId) && (!curriculumId || !allCurriculumIds.has(curriculumId))) failures.push(`Mastery notes refer to unknown chapter or curriculum item: ${chapterId}`)
  const lessons = (block.match(/\bid: '/g) ?? []).length
  const formulas = (block.match(/\{\s*label: '/g) ?? []).length
  const mistakes = (block.match(/\{\s*mistake: '/g) ?? []).length
  const blueprints = (block.match(/\{\s*marks: '/g) ?? []).length
  if (lessons < 4) failures.push(`${chapterId}: mastery notes need at least 4 detailed lessons`)
  if (formulas < 2) failures.push(`${chapterId}: mastery notes need a formula/fact desk`)
  if (mistakes < 4) failures.push(`${chapterId}: mastery notes need at least 4 common-mistake checks`)
  if (blueprints < 2) failures.push(`${chapterId}: mastery notes need board-answer blueprints`)
}

const practiceStart = mastery.indexOf('const PRACTICE_QUESTION_BANK')
const practiceEnd = mastery.indexOf('\n}\nexport function getMasteryPack', practiceStart)
const practiceBank = mastery.slice(practiceStart, practiceEnd)
const practiceKeys = new Set([...practiceBank.matchAll(/^\s{2}'([^']+)': \[/gm)].map(match => match[1]))
for (let i = 0; i < masteryMatches.length; i++) {
  const chapterId = masteryMatches[i][1]
  const block = mastery.slice(masteryMatches[i].index, masteryMatches[i + 1]?.index ?? mastery.indexOf('\n}\n\nexport interface MasteryPracticeQuestion'))
  if (block.includes('curriculumItemId:') && !practiceKeys.has(chapterId)) failures.push(`${chapterId}: supplementary subject guide needs its own knowledge check`)
}
for (const key of practiceKeys) {
  const start = practiceBank.indexOf(`'${key}': [`)
  const next = [...practiceKeys].map(item => practiceBank.indexOf(`'${item}': [`)).filter(index => index > start).sort((a, b) => a - b)[0] ?? practiceBank.length
  const block = practiceBank.slice(start, next)
  const questionCount = (block.match(/\{id:'[^']+'/g) ?? []).length
  if (questionCount < 3) failures.push(`${key}: expected at least 3 chapter knowledge-check questions`)
}

if (!/ChapterMastery/.test(read('src/ChapterStudy.tsx'))) failures.push('Chapter mastery notes are not connected to the chapter reading page')
if (!/getMasteryPack/.test(read('src/LearningHub.tsx')) || !read('src/App.tsx').includes('mastery/:topicId')) failures.push('Supplementary subject mastery pages are not connected to the learning hub and route table')

if (failures.length) {
  console.error('Academic content quality check failed:')
  for (const failure of failures) console.error(`- ${failure}`)
  process.exit(1)
}
console.log(`Academic content quality check passed: ${matches.length} guides, ${mappedCurriculum.length} Mathematics/Science curriculum mappings, ${masteryMatches.length} deep-dive mastery packs.`)
