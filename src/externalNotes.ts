export interface ExternalNoteResource {
  provider: string
  title: string
  description: string
  url: string
  match: 'exact' | 'related' | 'library'
  access: 'free-no-login' | 'free-download-may-sign-in'
  syllabus: 'current-chapter' | 'formative-only' | 'check-current-syllabus'
}

const mathBase = 'https://gyanghar.in/ncert-class-10/ncert-class-10-en/ncert-class-10-en-math/ncert-class-10-en-math-'
const scienceBase = 'https://gyanghar.in/ncert-class-10/ncert-class-10-en/ncert-class-10-en-science/ncert-class-10-en-science-'
const mathIndex = 'https://gyanghar.in/ncert-class-10/ncert-class-10-en/ncert-class-10-en-math'
const scienceIndex = 'https://gyanghar.in/ncert-class-10/ncert-class-10-en/ncert-class-10-en-science'
const vedantuIndex = 'https://www.vedantu.com/revision-notes/cbse-class-10-notes'

const mathSlugs: Record<string, string> = {
  'real-numbers': 'real-numbers',
  polynomials: 'polynomials',
  'pair-of-linear-equations': 'pair-of-linear-equations',
  'quadratic-equations': 'quadratic-equations',
  'arithmetic-progressions': 'arithmetic-progressions',
  triangles: 'triangles',
  circles: 'circles',
  'coordinate-geometry': 'coordinate-geometry',
  'introduction-to-trigonometry': 'introduction-to-trigonometry',
  'trigonometric-identities': 'introduction-to-trigonometry',
  'heights-and-distances': 'some-applications-of-trigonometry',
  'areas-related-to-circles': 'areas-related-to-circles',
  'surface-areas-and-volumes': 'surface-areas-and-volumes',
  statistics: 'statistics',
  probability: 'probability'
}

const scienceSlugs: Record<string, string[]> = {
  'chemical-reactions-and-equations': ['chemical-reactions-and-equations'],
  'acids-bases-and-salts': ['acids-bases-and-salts'],
  'metals-and-non-metals': ['metals-and-non-metals'],
  'carbon-and-its-compounds': ['carbon-and-its-compounds'],
  'life-processes': ['life-processes'],
  'control-and-coordination': ['control-and-coordination'],
  reproduction: ['how-do-organisms-reproduce'],
  heredity: ['heredity'],
  'light-reflection-and-refraction': ['light-reflection-and-refraction'],
  'human-eye-and-the-colourful-world': ['human-eye-and-the-colourful-world'],
  electricity: ['electricity'],
  'magnetic-effects-of-electric-current': ['magnetic-effects-of-electric-current'],
  'electricity-and-magnetic-effects': ['electricity', 'magnetic-effects-of-electric-current'],
  'our-environment': ['our-environment']
}

const formativeOnly = new Set(['heredity','evolution','motor-electromagnetic-induction-generator','periodic-classification-of-elements'])
const relatedMath = new Set(['trigonometric-identities','heights-and-distances'])

export function getExternalNotes(chapter: { id: string; title: string; subjectId: string }): ExternalNoteResource[] {
  const resources: ExternalNoteResource[] = []
  const syllabus = formativeOnly.has(chapter.id) ? 'formative-only' : (chapter.id === 'trigonometric-identities' || chapter.id === 'heights-and-distances') ? 'check-current-syllabus' : 'current-chapter'
  if (chapter.subjectId === 'mathematics') {
    const slug = mathSlugs[chapter.id]
    if (slug) resources.push({
      provider: 'GYANGHAR · CHAPTER NOTES',
      title: relatedMath.has(chapter.id) ? `Related notes: ${chapter.title}` : `${chapter.title} · full notes`,
      description: 'Free chapter-wise explanations, worked examples, section quizzes and revision. The linked chapter may combine this topic with a neighbouring NCERT chapter.',
      url: mathBase + slug,
      match: relatedMath.has(chapter.id) ? 'related' : 'exact',
      access: 'free-no-login',
      syllabus
    })
    else resources.push({
      provider: 'GYANGHAR · MATHS LIBRARY',
      title: 'Browse Mathematics chapter notes',
      description: 'Open the Class 10 Mathematics library and select the closest matching NCERT chapter.',
      url: mathIndex, match: 'library', access: 'free-no-login', syllabus
    })
  } else if (chapter.subjectId === 'science') {
    const slugs = scienceSlugs[chapter.id] ?? []
    for (const slug of slugs) resources.push({
      provider: 'GYANGHAR · CHAPTER NOTES',
      title: slug === 'electricity' ? 'Electricity · chapter notes' : slug === 'magnetic-effects-of-electric-current' ? 'Magnetic Effects · chapter notes' : `${chapter.title} · full notes`,
      description: 'Free chapter-wise explanations, topic sections, examples, quizzes and quick revision.',
      url: scienceBase + slug,
      match: 'exact', access: 'free-no-login', syllabus
    })
    if (!slugs.length) resources.push({
      provider: 'GYANGHAR · SCIENCE LIBRARY',
      title: 'Browse Science chapter notes',
      description: 'This topic is not listed as a separate current NCERT chapter. Check its syllabus status before using it for board preparation.',
      url: scienceIndex, match: 'library', access: 'free-no-login', syllabus
    })
  }
  resources.push({
    provider: 'VEDANTU · REVISION NOTES',
    title: `Find ${chapter.title} revision notes`,
    description: 'Search chapter-specific CBSE revision material. The notes library is free; individual PDF access may ask for sign-in.',
    url: `https://www.google.com/search?q=${encodeURIComponent(`site:vedantu.com/revision-notes CBSE Class 10 ${chapter.subjectId} ${chapter.title} notes`)}`,
    match: 'related', access: 'free-download-may-sign-in', syllabus
  })
  resources.push({
    provider: 'VEDANTU · CLASS 10 LIBRARY',
    title: 'Browse all Class 10 revision notes',
    description: 'Chapter-wise revision notes and PDFs across Class 10 subjects. Check the chapter title and current syllabus before downloading.',
    url: vedantuIndex, match: 'library', access: 'free-download-may-sign-in', syllabus
  })
  return resources
}
