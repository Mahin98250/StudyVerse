export interface ExternalNoteResource {
  provider: string
  title: string
  description: string
  url: string
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
  'life-processes': ['life-processes'],
  'control-and-coordination': ['control-and-coordination'],
  reproduction: ['how-do-organisms-reproduce'],
  'light-reflection-and-refraction': ['light-reflection-and-refraction'],
  'electricity-and-magnetic-effects': ['electricity', 'magnetic-effects-of-electric-current'],
  'our-environment': ['our-environment'],
  'carbon-and-its-compounds': ['carbon-and-its-compounds'],
  heredity: ['heredity'],
  evolution: [],
  'motor-electromagnetic-induction-generator': ['magnetic-effects-of-electric-current'],
  'periodic-classification-of-elements': [],
  'acids-bases-and-salts': ['acids-bases-and-salts'],
  'metals-and-non-metals': ['metals-and-non-metals']
}

const slugify = (value: string) => value.toLowerCase().replace(/&/g, 'and').replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')

export function getExternalNotes(chapter: { id: string; title: string; subjectId: string }): ExternalNoteResource[] {
  const resources: ExternalNoteResource[] = []
  if (chapter.subjectId === 'mathematics') {
    const slug = mathSlugs[chapter.id] ?? ''
    if (slug) resources.push({
      provider: 'GYANGHAR · CHAPTER NOTES',
      title: 'Read the full chapter notes',
      description: 'Topic-by-topic explanations, worked examples, quick revision and quizzes. Free to read without an account.',
      url: mathBase + slug
    })
    else resources.push({
      provider: 'GYANGHAR · MATHS LIBRARY',
      title: 'Browse Mathematics chapter notes',
      description: 'Open the Class 10 Mathematics chapter list and choose the matching topic.',
      url: mathIndex
    })
  } else if (chapter.subjectId === 'science') {
    const slugs = scienceSlugs[chapter.id] ?? []
    for (const slug of slugs) resources.push({
      provider: 'GYANGHAR · CHAPTER NOTES',
      title: slug === 'electricity' ? 'Electricity notes' : slug === 'magnetic-effects-of-electric-current' ? 'Magnetic effects notes' : 'Read the full chapter notes',
      description: 'Free chapter-wise explanations, topic sections, examples and revision. No account needed to read.',
      url: scienceBase + slug
    })
    if (!slugs.length) resources.push({
      provider: 'GYANGHAR · SCIENCE LIBRARY',
      title: 'Browse Science chapter notes',
      description: 'This exact topic is not listed as a separate chapter there yet. Check the chapter list for related coverage.',
      url: scienceIndex
    })
  }
  resources.push({
    provider: 'VEDANTU · REVISION NOTES',
    title: 'Find more notes for this chapter',
    description: 'Chapter-wise Class 10 revision notes and PDFs. Some downloads may ask you to sign in.',
    url: `https://www.google.com/search?q=${encodeURIComponent(`site:vedantu.com/revision-notes CBSE Class 10 ${chapter.subjectId} ${chapter.title} notes`)}`
  })
  resources.push({
    provider: 'VEDANTU · CLASS 10 LIBRARY',
    title: 'Browse all subject notes',
    description: 'A wider library of free Class 10 revision notes, organised by subject and chapter.',
    url: vedantuIndex
  })
  return resources
}
