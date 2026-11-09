import { readFileSync } from 'node:fs'

const read = path => readFileSync(new URL(`../${path}`, import.meta.url), 'utf8')
const academic = read('src/academicContent.ts')
const curriculum = read('src/curriculum.ts')
const exam = read('src/ExamCentre.tsx')
const resources = read('src/externalNotes.ts')

const matches = [...academic.matchAll(/id: '([^']+)',\\n\\s+curriculumItemId: '([^']+)'/g)]
const ids = new Set()
const curriculumIds = new Set()
const failures = []

for (let i = 0; i < matches.length; i++) {
  const [chapterId, curriculumId] = [matches[i][1], matches[i][2]]
  if (ids.has(chapterId)) failures.push(`Duplicate chapter id: ${chapterId}`)
  ids.add(chapterId)
  if (curriculumIds.has(curriculumId)) failures.push(`Duplicate curriculum mapping: ${curriculumId}`)
  curriculumIds.add(curriculumId)
  const block = academic.slice(matches[i].index, matches[i + 1]?.index ?? academic.indexOf('export const RESOURCE_BY_TOPIC'))
  const sections = block.split('sections: [')[1]?.split('workedExamples: [')[0] ?? ''
  const examples = block.split('workedExamples: [')[1]?.split('keyFacts: [')[0] ?? ''
  const questions = block.split('questions: [')[1]?.split('sourceUrl:')[0] ?? ''
  const sectionCount = (sections.match(/\\n\\s+id: '/g) ?? []).length
  const exampleCount = (examples.match(/\\n\\s+id: '/g) ?? []).length
  const questionCount = (questions.match(/\\bid: '[^']+-q\\d+'/g) ?? []).length
  if (sectionCount < 3) failures.push(`${chapterId}: expected at least 3 lesson sections, found ${sectionCount}`)
  if (exampleCount < 2) failures.push(`${chapterId}: expected at least 2 worked examples, found ${exampleCount}`)
  if (questionCount < 4) failures.push(`${chapterId}: expected 4 practice questions, found ${questionCount}`)
  if (!block.includes('sourceUrl:') || !block.includes('sourceLabel:')) failures.push(`${chapterId}: missing source attribution`)
}

const mappedCurriculum = [...curriculum.matchAll(/add\\('(mathematics|science)','[^']+','([^']+)'/g)].map(match => match[2])
for (const id of mappedCurriculum) if (!curriculumIds.has(id)) failures.push(`Curriculum item has no study guide: ${id}`)
for (const id of curriculumIds) if (!mappedCurriculum.includes(id)) failures.push(`Study guide has no curriculum item: ${id}`)

for (const id of ['sci-acid','sci-metal','sci-carbon','sci-heredity','sci-eye','sci-magnetic']) {
  const line = curriculum.split('\\n').find(row => row.includes(`'${id}'`))
  if (!line?.includes("'board'")) failures.push(`${id} must be board-scope for 2026–27`)
}
for (const id of ['sci-periodic','sci-evolution','sci-motor']) {
  const line = curriculum.split('\\n').find(row => row.includes(`'${id}'`))
  if (!line?.includes("'formative'")) failures.push(`${id} must remain formative-only`)
}
if (!exam.includes("ITEMS.filter(item => item.status === 'board')")) failures.push('Mock exams must only draw from board-scope curriculum items')
for (const field of ['match:', 'access:', 'syllabus:']) if (!resources.includes(field)) failures.push(`External resource quality metadata missing: ${field}`)

if (failures.length) {
  console.error('Academic content quality check failed:')
  for (const failure of failures) console.error(`- ${failure}`)
  process.exit(1)
}
console.log(`Academic content quality check passed: ${matches.length} guides, ${mappedCurriculum.length} Mathematics/Science curriculum mappings.`)
