export interface LessonSection {
  id: string
  title: string
  explanation: string
  keyPoints: string[]
}

export interface WorkedExample {
  id: string
  title: string
  question: string
  steps: string[]
  answer: string
}

export interface PracticeQuestion {
  id: string
  prompt: string
  choices: { id: string; text: string }[]
  answer: string
  explanation: string
}

export interface AcademicChapter {
  id: string
  subjectId: string
  title: string
  chapterLabel: string
  estimatedMinutes: number
  syllabusScope: string
  overview: string
  learningGoals: string[]
  sections: LessonSection[]
  workedExamples: WorkedExample[]
  keyFacts: { title: string; detail: string }[]
  questions: PracticeQuestion[]
  sourceUrl: string
  sourceLabel: string
}

const mathematicsSource = 'https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart1/Maths_SecP1X_2026-27.pdf'

export const ACADEMIC_CHAPTERS: AcademicChapter[] = [
  {
    id: 'real-numbers',
    subjectId: 'mathematics',
    title: 'Real Numbers',
    chapterLabel: 'Number Systems · Unit I',
    estimatedMinutes: 35,
    syllabusScope: 'Fundamental Theorem of Arithmetic and proofs of irrationality of √2, √3 and √5. Examples below are original teaching material written to practise this stated scope.',
    overview: 'This chapter is about two powerful ideas: every composite natural number has one prime-factor building block pattern, and some numbers cannot be written as a fraction of two integers.',
    learningGoals: [
      'Explain the Fundamental Theorem of Arithmetic in your own words.',
      'Write a number as a product of prime powers.',
      'Use prime factorisation to find HCF and LCM.',
      'Prove that √2 is irrational using contradiction, and understand the same structure for √3 and √5.'
    ],
    sections: [
      {
        id: 'prime-factors',
        title: '1. Prime numbers are the building blocks',
        explanation: 'A prime number has exactly two positive factors: 1 and itself. A composite number has more than two positive factors. Prime factorisation means expressing a composite number as a product of primes.',
        keyPoints: [
          'Examples of primes: 2, 3, 5, 7, 11 and 13.',
          'The number 1 is neither prime nor composite.',
          'Every composite number can be broken down into prime factors.'
        ]
      },
      {
        id: 'fta',
        title: '2. Fundamental Theorem of Arithmetic',
        explanation: 'Every composite natural number can be expressed as a product of primes, and this factorisation is unique apart from the order in which the prime factors are written. For example, 60 = 2 × 2 × 3 × 5 = 2² × 3 × 5. You may rearrange the factors, but you cannot get a different set of prime factors.',
        keyPoints: [
          'The theorem guarantees existence of a prime factorisation.',
          'Uniqueness means the prime powers are fixed, even if factor order changes.',
          'Use the smallest prime factors first when making a factor tree.'
        ]
      },
      {
        id: 'hcf-lcm',
        title: '3. HCF and LCM from prime factorisation',
        explanation: 'For the HCF, take only the primes common to all numbers, using the smallest exponent. For the LCM, take every prime that appears, using the greatest exponent. This works because the prime factorisation is unique.',
        keyPoints: [
          'HCF = product of common prime factors with the least powers.',
          'LCM = product of all prime factors with the greatest powers.',
          'For two positive integers a and b: HCF(a,b) × LCM(a,b) = a × b.'
        ]
      },
      {
        id: 'irrationality',
        title: '4. Proving that a square root is irrational',
        explanation: 'A rational number can be written as p/q, where p and q are integers, q is not zero, and the fraction is in lowest terms. To prove √2 is irrational, assume the opposite: √2 = p/q in lowest terms. Squaring gives p² = 2q². Therefore p² is even, so p is even. Write p = 2k. Substitution gives q² = 2k², so q is also even. Then p and q have a common factor 2, contradicting that p/q was in lowest terms. Therefore √2 is irrational.',
        keyPoints: [
          'Proof by contradiction starts by assuming the opposite of what you want to prove.',
          'If the square of an integer is divisible by a prime p, that integer is divisible by p.',
          'The contradiction is that both numerator and denominator are even although the fraction was assumed to be in lowest terms.',
          'The same prime-divisibility approach works for √3 and √5.'
        ]
      }
    ],
    workedExamples: [
      {
        id: 'example-factorisation',
        title: 'Example 1 · Prime factorisation',
        question: 'Express 360 as a product of prime powers.',
        steps: [
          'Divide by the smallest prime: 360 = 2 × 180.',
          'Continue dividing by 2: 180 = 2 × 90 and 90 = 2 × 45.',
          'Now 45 = 3 × 15 = 3 × 3 × 5.',
          'Collect equal prime factors: 360 = 2 × 2 × 2 × 3 × 3 × 5.'
        ],
        answer: '360 = 2³ × 3² × 5.'
      },
      {
        id: 'example-hcf-lcm',
        title: 'Example 2 · HCF and LCM',
        question: 'Find the HCF and LCM of 96 and 404 using prime factorisation.',
        steps: [
          '96 = 2⁵ × 3.',
          '404 = 2² × 101.',
          'The common prime is 2. Use the smaller power: HCF = 2² = 4.',
          'For the LCM use the highest powers of every prime: 2⁵ × 3 × 101.'
        ],
        answer: 'HCF = 4 and LCM = 9,696.'
      },
      {
        id: 'example-proof',
        title: 'Example 3 · The contradiction method',
        question: 'What is the key contradiction in the proof that √2 is irrational?',
        steps: [
          'Assume √2 = p/q, where p/q is in lowest terms and q ≠ 0.',
          'After squaring, p² = 2q², so p² is even and p must be even.',
          'Put p = 2k. The equation then shows q² = 2k², so q is even too.',
          'Both p and q are divisible by 2. That contradicts the lowest-terms assumption.'
        ],
        answer: 'The numerator and denominator are both even, so the fraction was not in lowest terms.'
      }
    ],
    keyFacts: [
      { title: 'Prime factorisation', detail: 'Write a composite number as a product of prime numbers.' },
      { title: 'HCF rule', detail: 'Common primes, smallest exponents.' },
      { title: 'LCM rule', detail: 'All primes present, greatest exponents.' },
      { title: 'Irrational number', detail: 'A real number that cannot be expressed as p/q for integers p and q with q ≠ 0.' }
    ],
    questions: [
      {
        id: 'rn-q1',
        prompt: 'Which is the prime factorisation of 84?',
        choices: [{ id: 'a', text: '2² × 3 × 7' }, { id: 'b', text: '2 × 3² × 7' }, { id: 'c', text: '2² × 21' }, { id: 'd', text: '4 × 21 × 1' }],
        answer: 'a',
        explanation: '84 = 2 × 42 = 2 × 2 × 21 = 2² × 3 × 7. Every factor shown is prime.'
      },
      {
        id: 'rn-q2',
        prompt: 'If 72 = 2³ × 3² and 120 = 2³ × 3 × 5, what is their HCF?',
        choices: [{ id: 'a', text: '12' }, { id: 'b', text: '24' }, { id: 'c', text: '36' }, { id: 'd', text: '120' }],
        answer: 'b',
        explanation: 'Take common primes with the smallest powers: 2³ × 3 = 8 × 3 = 24.'
      },
      {
        id: 'rn-q3',
        prompt: 'Which statement is the Fundamental Theorem of Arithmetic?',
        choices: [
          { id: 'a', text: 'Every number is prime.' },
          { id: 'b', text: 'Every composite natural number has a unique prime factorisation, apart from order.' },
          { id: 'c', text: 'Every integer has exactly two factors.' },
          { id: 'd', text: 'A prime number can be written as a product of two smaller primes.' }
        ],
        answer: 'b',
        explanation: 'The theorem says that prime factorisation exists and is unique except for the order of the factors.'
      },
      {
        id: 'rn-q4',
        prompt: 'In the contradiction proof for √2, why is it a problem if both p and q are even?',
        choices: [
          { id: 'a', text: 'The value of √2 becomes zero.' },
          { id: 'b', text: 'The fraction p/q was assumed to be in lowest terms.' },
          { id: 'c', text: 'Even numbers cannot be squared.' },
          { id: 'd', text: 'The denominator must be prime.' }
        ],
        answer: 'b',
        explanation: 'If both are even, they share a factor 2. The fraction can be simplified, contradicting the lowest-terms assumption.'
      }
    ],
    sourceUrl: mathematicsSource,
    sourceLabel: 'CBSE Mathematics · Class X · 2026–27 · pages 2–3'
  },
  {
    id: 'polynomials',
    subjectId: 'mathematics',
    title: 'Polynomials',
    chapterLabel: 'Algebra · Unit II',
    estimatedMinutes: 30,
    syllabusScope: 'Zeros of a polynomial and the relationship between zeros and coefficients of quadratic polynomials.',
    overview: 'A polynomial is an algebraic expression built from constants and non-negative integer powers of a variable. A zero is an input that makes the polynomial equal to zero.',
    learningGoals: [
      'Recognise a polynomial and its degree.',
      'Find zeros by factorisation and verify them by substitution.',
      'Use the sum and product relationships for a quadratic polynomial.',
      'Connect the factors of a polynomial to its zeros.'
    ],
    sections: [
      {
        id: 'definition',
        title: '1. What is a polynomial?',
        explanation: 'A polynomial in x has terms such as 4x², −3x and 7. The powers of x must be whole numbers 0, 1, 2, and so on. The highest power with a non-zero coefficient is called the degree. For example, 3x² − 5x + 2 is a quadratic polynomial because its degree is 2.',
        keyPoints: [
          'A constant non-zero polynomial has degree 0.',
          'A linear polynomial has degree 1; a quadratic polynomial has degree 2.',
          'Expressions with x in a denominator or a negative/fractional power are not polynomials in x.'
        ]
      },
      {
        id: 'zeros',
        title: '2. Zeros of a polynomial',
        explanation: 'A number α is called a zero of p(x) if p(α) = 0. For example, p(x) = x² − 5x + 6. At x = 2, p(2) = 4 − 10 + 6 = 0, so 2 is a zero. At x = 3, p(3) = 9 − 15 + 6 = 0, so 3 is also a zero.',
        keyPoints: [
          'Always verify a proposed zero by substituting it into the polynomial.',
          'The zeros of a polynomial are the x-values where its graph meets the x-axis.',
          'A quadratic polynomial can have two, one repeated, or no real zeros.'
        ]
      },
      {
        id: 'relationship',
        title: '3. Relationship between zeros and coefficients',
        explanation: 'For p(x) = ax² + bx + c, where a ≠ 0, if the zeros are α and β, then α + β = −b/a and αβ = c/a. These relationships help you check answers and form a quadratic polynomial when the sum and product of its zeros are known.',
        keyPoints: [
          'Sum of zeros = −(coefficient of x)/(coefficient of x²).',
          'Product of zeros = constant term/(coefficient of x²).',
          'A monic quadratic with sum S and product P is x² − Sx + P.'
        ]
      }
    ],
    workedExamples: [
      {
        id: 'poly-example-1',
        title: 'Example 1 · Find the zeros',
        question: 'Find the zeros of x² − 5x + 6.',
        steps: [
          'Factorise: x² − 5x + 6 = (x − 2)(x − 3).',
          'Set each factor equal to zero: x − 2 = 0 or x − 3 = 0.',
          'Therefore x = 2 or x = 3.',
          'Check: p(2) = 0 and p(3) = 0.'
        ],
        answer: 'The zeros are 2 and 3.'
      },
      {
        id: 'poly-example-2',
        title: 'Example 2 · Check the relationships',
        question: 'For 2x² − 7x + 3, verify the sum and product of the zeros.',
        steps: [
          'Here a = 2, b = −7 and c = 3.',
          'Factorise: 2x² − 7x + 3 = (2x − 1)(x − 3).',
          'The zeros are 1/2 and 3. Their sum is 1/2 + 3 = 7/2.',
          'Their product is (1/2) × 3 = 3/2.'
        ],
        answer: 'Sum = −b/a = 7/2; product = c/a = 3/2.'
      },
      {
        id: 'poly-example-3',
        title: 'Example 3 · Form a polynomial',
        question: 'Form a monic quadratic polynomial whose zeros have sum 5 and product 6.',
        steps: [
          'Use x² − (sum of zeros)x + (product of zeros).',
          'Substitute the sum 5 and product 6.',
          'The polynomial is x² − 5x + 6.'
        ],
        answer: 'x² − 5x + 6.'
      }
    ],
    keyFacts: [
      { title: 'Zero', detail: 'α is a zero when p(α) = 0.' },
      { title: 'Sum of zeros', detail: 'For ax² + bx + c: α + β = −b/a.' },
      { title: 'Product of zeros', detail: 'For ax² + bx + c: αβ = c/a.' },
      { title: 'Forming a monic quadratic', detail: 'If sum = S and product = P, use x² − Sx + P.' }
    ],
    questions: [
      {
        id: 'poly-q1',
        prompt: 'What are the zeros of x² − 7x + 12?',
        choices: [{ id: 'a', text: '2 and 6' }, { id: 'b', text: '3 and 4' }, { id: 'c', text: '−3 and −4' }, { id: 'd', text: '1 and 12' }],
        answer: 'b',
        explanation: 'x² − 7x + 12 = (x − 3)(x − 4), so the zeros are 3 and 4.'
      },
      {
        id: 'poly-q2',
        prompt: 'For 2x² − 5x + 2, what is the sum of the zeros?',
        choices: [{ id: 'a', text: '−5/2' }, { id: 'b', text: '2' }, { id: 'c', text: '5/2' }, { id: 'd', text: '1' }],
        answer: 'c',
        explanation: 'The sum is −b/a = −(−5)/2 = 5/2.'
      },
      {
        id: 'poly-q3',
        prompt: 'For 3x² + 4x − 2, what is the product of the zeros?',
        choices: [{ id: 'a', text: '−2/3' }, { id: 'b', text: '4/3' }, { id: 'c', text: '−4/3' }, { id: 'd', text: '2/3' }],
        answer: 'a',
        explanation: 'The product is c/a = −2/3.'
      },
      {
        id: 'poly-q4',
        prompt: 'A monic quadratic has zeros with sum 5 and product 6. Which polynomial fits?',
        choices: [{ id: 'a', text: 'x² + 5x + 6' }, { id: 'b', text: 'x² − 6x + 5' }, { id: 'c', text: 'x² − 5x + 6' }, { id: 'd', text: 'x² + 6x − 5' }],
        answer: 'c',
        explanation: 'Use x² − Sx + P, giving x² − 5x + 6.'
      }
    ],
    sourceUrl: mathematicsSource,
    sourceLabel: 'CBSE Mathematics · Class X · 2026–27 · page 3'
  },
  {
    id: 'pair-of-linear-equations',
    subjectId: 'mathematics',
    title: 'Pair of Linear Equations in Two Variables',
    chapterLabel: 'Algebra · Unit II',
    estimatedMinutes: 40,
    syllabusScope: 'Graphical method, consistency and inconsistency, algebraic conditions for the number of solutions, substitution, elimination and simple situational problems.',
    overview: 'Two linear equations in x and y describe two straight lines. Their intersection tells us whether the pair has one solution, no solution or infinitely many solutions.',
    learningGoals: [
      'Recognise a pair of linear equations in two variables.',
      'Understand unique, no and infinitely many solutions graphically.',
      'Use coefficient ratios to classify a pair of equations.',
      'Solve a pair using substitution and elimination.'
    ],
    sections: [
      {
        id: 'form',
        title: '1. Standard form',
        explanation: 'A linear equation in two variables can be written as ax + by + c = 0, where a and b are not both zero. A pair contains two such equations. Each equation represents a straight line on the coordinate plane.',
        keyPoints: [
          'A solution is an ordered pair (x, y) that satisfies both equations.',
          'A common solution is a point that lies on both lines.',
          'The graphical solution is the point where the two lines intersect.'
        ]
      },
      {
        id: 'solutions',
        title: '2. Three possible cases',
        explanation: 'If two distinct lines cross, there is one common point and one solution. If they are parallel, there is no common point and no solution. If they lie exactly on top of each other, every point on the line is common and there are infinitely many solutions.',
        keyPoints: [
          'Intersecting lines → one unique solution → consistent and independent.',
          'Parallel lines → no solution → inconsistent.',
          'Coincident lines → infinitely many solutions → consistent and dependent.'
        ]
      },
      {
        id: 'conditions',
        title: '3. Algebraic conditions',
        explanation: 'For a₁x + b₁y + c₁ = 0 and a₂x + b₂y + c₂ = 0: if a₁/a₂ is not equal to b₁/b₂, there is one solution. If a₁/a₂ = b₁/b₂ but this common ratio is not equal to c₁/c₂, there is no solution. If all three ratios are equal, there are infinitely many solutions.',
        keyPoints: [
          'Unique solution: a₁/a₂ ≠ b₁/b₂.',
          'No solution: a₁/a₂ = b₁/b₂ ≠ c₁/c₂.',
          'Infinitely many solutions: a₁/a₂ = b₁/b₂ = c₁/c₂.'
        ]
      },
      {
        id: 'methods',
        title: '4. Substitution and elimination',
        explanation: 'In substitution, rearrange one equation to express one variable in terms of the other, then substitute it into the second equation. In elimination, multiply one or both equations if needed so that one variable has equal or opposite coefficients; then add or subtract the equations to remove that variable.',
        keyPoints: [
          'Keep the same operation on both sides of an equation.',
          'After finding one variable, substitute it back to find the other.',
          'Check the final ordered pair in both original equations.'
        ]
      }
    ],
    workedExamples: [
      {
        id: 'linear-example-1',
        title: 'Example 1 · Substitution',
        question: 'Solve x + y = 7 and x − y = 1 by substitution.',
        steps: [
          'From x + y = 7, write x = 7 − y.',
          'Substitute in x − y = 1: (7 − y) − y = 1.',
          'So 7 − 2y = 1, hence 2y = 6 and y = 3.',
          'Then x = 7 − 3 = 4. Check: 4 + 3 = 7 and 4 − 3 = 1.'
        ],
        answer: 'x = 4 and y = 3.'
      },
      {
        id: 'linear-example-2',
        title: 'Example 2 · Elimination',
        question: 'Solve 2x + 3y = 13 and x + y = 5 by elimination.',
        steps: [
          'Multiply the second equation by 2: 2x + 2y = 10.',
          'Subtract it from the first equation: (2x + 3y) − (2x + 2y) = 13 − 10.',
          'This gives y = 3.',
          'Substitute into x + y = 5: x + 3 = 5, so x = 2.'
        ],
        answer: 'x = 2 and y = 3.'
      },
      {
        id: 'linear-example-3',
        title: 'Example 3 · Classify a pair',
        question: 'How many solutions do 2x + 4y = 8 and x + 2y = 4 have?',
        steps: [
          'Write both equations in standard form: 2x + 4y − 8 = 0 and x + 2y − 4 = 0.',
          'Compare coefficient ratios: a₁/a₂ = 2/1 = 2, b₁/b₂ = 4/2 = 2 and c₁/c₂ = −8/−4 = 2.',
          'All three ratios are equal, so both equations describe the same line.'
        ],
        answer: 'Infinitely many solutions.'
      }
    ],
    keyFacts: [
      { title: 'Unique solution', detail: 'a₁/a₂ ≠ b₁/b₂.' },
      { title: 'No solution', detail: 'a₁/a₂ = b₁/b₂ ≠ c₁/c₂.' },
      { title: 'Infinitely many solutions', detail: 'a₁/a₂ = b₁/b₂ = c₁/c₂.' },
      { title: 'Final check', detail: 'Substitute the ordered pair in both original equations.' }
    ],
    questions: [
      {
        id: 'linear-q1',
        prompt: 'Two straight lines intersect at exactly one point. How many solutions does the pair have?',
        choices: [{ id: 'a', text: 'No solution' }, { id: 'b', text: 'Exactly one solution' }, { id: 'c', text: 'Infinitely many solutions' }, { id: 'd', text: 'Always two solutions' }],
        answer: 'b',
        explanation: 'The intersection point is the only ordered pair that lies on both distinct intersecting lines.'
      },
      {
        id: 'linear-q2',
        prompt: 'Which condition represents infinitely many solutions?',
        choices: [
          { id: 'a', text: 'a₁/a₂ ≠ b₁/b₂' },
          { id: 'b', text: 'a₁/a₂ = b₁/b₂ ≠ c₁/c₂' },
          { id: 'c', text: 'a₁/a₂ = b₁/b₂ = c₁/c₂' },
          { id: 'd', text: 'a₁/a₂ ≠ c₁/c₂ only' }
        ],
        answer: 'c',
        explanation: 'When all three ratios are equal, the two equations are proportional and represent the same line.'
      },
      {
        id: 'linear-q3',
        prompt: 'Solve x + y = 7 and x − y = 1.',
        choices: [{ id: 'a', text: 'x = 3, y = 4' }, { id: 'b', text: 'x = 4, y = 3' }, { id: 'c', text: 'x = 5, y = 2' }, { id: 'd', text: 'x = 2, y = 5' }],
        answer: 'b',
        explanation: 'Adding the equations gives 2x = 8, so x = 4. Then y = 3.'
      },
      {
        id: 'linear-q4',
        prompt: 'Solve 2x + 3y = 13 and x + y = 5.',
        choices: [{ id: 'a', text: 'x = 3, y = 2' }, { id: 'b', text: 'x = 1, y = 4' }, { id: 'c', text: 'x = 2, y = 3' }, { id: 'd', text: 'x = 4, y = 1' }],
        answer: 'c',
        explanation: 'Double the second equation and subtract it from the first to get y = 3. Then x = 2.'
      }
    ],
    sourceUrl: mathematicsSource,
    sourceLabel: 'CBSE Mathematics · Class X · 2026–27 · pages 3–4'
  }
]

export const RESOURCE_BY_TOPIC: Record<string, string> = {
  'math-real': 'real-numbers',
  'math-poly': 'polynomials',
  'math-linear': 'pair-of-linear-equations'
}

export function getChapter(id: string | undefined): AcademicChapter | undefined {
  return ACADEMIC_CHAPTERS.find(chapter => chapter.id === id)
}
