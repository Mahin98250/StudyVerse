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
  curriculumItemId: string
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
const scienceSource = 'https://cbseacademic.nic.in/web_material/CurriculumMain27/SecPart1/Science_SecP1_2026-27.pdf'

export const ACADEMIC_CHAPTERS: AcademicChapter[] = [
  {
    id: 'real-numbers',
    curriculumItemId: 'math-real',
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
      },
      {
        id: 'example-sqrt3',
        title: 'Example 4 · Prove √3 is irrational',
        question: 'Use contradiction to prove that √3 cannot be written as a fraction.',
        steps: [
          'Assume √3 = a/b, where a and b are coprime integers and b ≠ 0.',
          'Squaring gives a² = 3b². Therefore 3 divides a², so the prime 3 divides a.',
          'Write a = 3k. Substitution gives 9k² = 3b², or b² = 3k². Thus 3 also divides b.',
          'Both a and b are divisible by 3, contradicting that they are coprime.'
        ],
        answer: '√3 is irrational.'
      },
      {
        id: 'example-sqrt5',
        title: 'Example 5 · Prove √5 is irrational',
        question: 'Apply the same contradiction structure to √5.',
        steps: [
          'Assume √5 = a/b in lowest terms, with integers a and b and b ≠ 0.',
          'Squaring gives a² = 5b². Since 5 divides a² and 5 is prime, 5 divides a.',
          'Write a = 5k. Then 25k² = 5b², so b² = 5k². Hence 5 divides b.',
          'The numerator and denominator share a factor 5, contradicting lowest terms.'
        ],
        answer: '√5 is irrational.'
      },
      {
        id: 'example-linear-irrational',
        title: 'Example 6 · Prove 3 + 2√5 is irrational',
        question: 'Show that 3 + 2√5 is irrational using the result for √5.',
        steps: [
          'Assume 3 + 2√5 is rational. Call this rational number r.',
          'Rearrange: 2√5 = r − 3.',
          'Divide by 2: √5 = (r − 3)/2.',
          'A difference and quotient of rational numbers (with non-zero divisor) is rational, so this would make √5 rational. That contradicts the previous proof.'
        ],
        answer: '3 + 2√5 is irrational.'
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
    curriculumItemId: 'math-poly',
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
    curriculumItemId: 'math-linear',
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
,
  {
    id: 'quadratic-equations',
    curriculumItemId: 'math-quad',
    subjectId: 'mathematics',
    title: 'Quadratic Equations',
    chapterLabel: 'Algebra · Unit II',
    estimatedMinutes: 40,
    syllabusScope: 'Standard form, real roots by factorisation and the quadratic formula, discriminant and nature of roots, and simple situational problems.',
    overview: 'A quadratic equation has a squared variable as its highest power. You will learn two ways to solve it and how the discriminant tells you what kind of real roots to expect.',
    learningGoals: [
      'Write a quadratic equation in standard form ax² + bx + c = 0, with a ≠ 0.',
      'Solve quadratic equations by factorisation.',
      'Use the quadratic formula when factorisation is not convenient.',
      'Use the discriminant to determine the nature of real roots.'
    ],
    sections: [
      {
        id: 'quadratic-standard-form',
        title: '1. Standard form',
        explanation: 'A quadratic equation in one variable can be written as ax² + bx + c = 0, where a, b and c are real numbers and a is not zero. The coefficient a cannot be zero, because then the squared term disappears and the equation is no longer quadratic.',
        keyPoints: [
          'a is the coefficient of x², b is the coefficient of x and c is the constant.',
          'Rearrange all terms to one side before identifying a, b and c.',
          'A solution or root is a value of x that makes the equation true.'
        ]
      },
      {
        id: 'quadratic-factorisation',
        title: '2. Solving by factorisation',
        explanation: 'Bring the equation to one side so the other side is zero. Factor the quadratic expression into two linear factors. If a product is zero, at least one factor must be zero. Solve each resulting linear equation and check the roots in the original equation.',
        keyPoints: [
          'For x² + bx + c, look for two numbers whose product is c and sum is b.',
          'For a product AB = 0, use A = 0 or B = 0.',
          'Do not stop after finding one factor: solve both factors.'
        ]
      },
      {
        id: 'quadratic-formula',
        title: '3. The quadratic formula',
        explanation: 'For ax² + bx + c = 0 with a ≠ 0, the roots are x = [−b ± √(b² − 4ac)]/(2a). The expression b² − 4ac is called the discriminant and is usually written as D. The formula is useful even when factorisation is difficult.',
        keyPoints: [
          'Write down a, b and c with their signs before substituting.',
          'Use brackets for negative values, especially when calculating b² and 4ac.',
          'The ± sign gives two possible roots; they may be equal.'
        ]
      },
      {
        id: 'quadratic-discriminant',
        title: '4. Nature of roots',
        explanation: 'The discriminant D = b² − 4ac tells us the nature of the roots. If D is positive, there are two distinct real roots. If D is zero, there are two equal real roots. If D is negative, there are no real roots. This is a conclusion about real roots; it does not mean the equation has no solutions in every larger number system.',
        keyPoints: [
          'D > 0 → two distinct real roots.',
          'D = 0 → two equal real roots.',
          'D < 0 → no real roots.'
        ]
      }
    ],
    workedExamples: [
      {
        id: 'quadratic-example-1',
        title: 'Example 1 · Factorisation',
        question: 'Solve x² − 7x + 12 = 0.',
        steps: [
          'Find two numbers with product 12 and sum −7: −3 and −4.',
          'Factorise: (x − 3)(x − 4) = 0.',
          'Set each factor to zero: x − 3 = 0 or x − 4 = 0.',
          'Therefore x = 3 or x = 4. Both values satisfy the original equation.'
        ],
        answer: 'The roots are 3 and 4.'
      },
      {
        id: 'quadratic-example-2',
        title: 'Example 2 · Quadratic formula',
        question: 'Solve 2x² + 3x − 2 = 0 using the quadratic formula.',
        steps: [
          'Identify a = 2, b = 3 and c = −2.',
          'Calculate D = b² − 4ac = 9 − 4(2)(−2) = 25.',
          'Substitute: x = [−3 ± √25]/4 = [−3 ± 5]/4.',
          'The two values are x = 2/4 = 1/2 and x = −8/4 = −2.'
        ],
        answer: 'The roots are 1/2 and −2.'
      },
      {
        id: 'quadratic-example-3',
        title: 'Example 3 · Discriminant',
        question: 'Determine the nature of the roots of x² + 2x + 5 = 0.',
        steps: [
          'Here a = 1, b = 2 and c = 5.',
          'D = b² − 4ac = 2² − 4(1)(5).',
          'D = 4 − 20 = −16, which is negative.',
          'A negative discriminant means there are no real roots.'
        ],
        answer: 'The equation has no real roots.'
      }
    ],
    keyFacts: [
      { title: 'Standard form', detail: 'ax² + bx + c = 0, where a ≠ 0.' },
      { title: 'Quadratic formula', detail: 'x = [−b ± √(b² − 4ac)]/(2a).' },
      { title: 'Discriminant', detail: 'D = b² − 4ac.' },
      { title: 'Equal roots', detail: 'The roots are equal when D = 0.' }
    ],
    questions: [
      {
        id: 'quad-q1',
        prompt: 'Which is the standard form of a quadratic equation?',
        choices: [{ id: 'a', text: 'ax + b = 0' }, { id: 'b', text: 'ax² + bx + c = 0, a ≠ 0' }, { id: 'c', text: 'ax³ + bx + c = 0' }, { id: 'd', text: 'a/x + b = 0' }],
        answer: 'b',
        explanation: 'A quadratic has degree 2, so the coefficient of x² must be non-zero.'
      },
      {
        id: 'quad-q2',
        prompt: 'What are the roots of x² − 5x + 6 = 0?',
        choices: [{ id: 'a', text: '1 and 6' }, { id: 'b', text: '−2 and −3' }, { id: 'c', text: '2 and 3' }, { id: 'd', text: '−1 and −6' }],
        answer: 'c',
        explanation: 'Factorise as (x − 2)(x − 3) = 0, giving x = 2 or x = 3.'
      },
      {
        id: 'quad-q3',
        prompt: 'For 2x² + 3x − 2 = 0, what is the discriminant?',
        choices: [{ id: 'a', text: '−7' }, { id: 'b', text: '9' }, { id: 'c', text: '16' }, { id: 'd', text: '25' }],
        answer: 'd',
        explanation: 'D = b² − 4ac = 3² − 4(2)(−2) = 9 + 16 = 25.'
      },
      {
        id: 'quad-q4',
        prompt: 'If the discriminant of a quadratic equation is zero, what can you say about its roots?',
        choices: [{ id: 'a', text: 'Two equal real roots' }, { id: 'b', text: 'Two distinct real roots' }, { id: 'c', text: 'No real roots' }, { id: 'd', text: 'Exactly three roots' }],
        answer: 'a',
        explanation: 'When D = 0, the ±√D part becomes zero, so both roots have the same value.'
      }
    ],
    sourceUrl: mathematicsSource,
    sourceLabel: 'CBSE Mathematics · Class X · 2026–27 · page 3'
  },
  {
    id: 'arithmetic-progressions',
    curriculumItemId: 'math-ap',
    subjectId: 'mathematics',
    title: 'Arithmetic Progressions',
    chapterLabel: 'Algebra · Unit II',
    estimatedMinutes: 35,
    syllabusScope: 'Motivation for arithmetic progressions; derivation and application of the nth-term and first-n-terms sum formulae, including daily-life problems.',
    overview: 'An arithmetic progression is a number pattern where the difference between consecutive terms stays the same. Two formulas help you find a far-away term or the total of many terms without listing them all.',
    learningGoals: [
      'Identify an arithmetic progression and its common difference.',
      'Find the nth term of an arithmetic progression.',
      'Find the sum of the first n terms.',
      'Use the formulas in everyday situations.'
    ],
    sections: [
      {
        id: 'ap-sequence',
        title: '1. Recognising an arithmetic progression',
        explanation: 'A sequence is an arithmetic progression (AP) when the difference between each term and the previous term is constant. This fixed difference is called the common difference d. For example, 4, 7, 10, 13, … is an AP because each term increases by 3.',
        keyPoints: [
          'Common difference d = second term − first term.',
          'The common difference can be positive, negative or zero.',
          'Check more than one consecutive pair to confirm the difference stays constant.'
        ]
      },
      {
        id: 'ap-nth-term',
        title: '2. The nth term',
        explanation: 'If the first term is a and the common difference is d, then the nth term is aₙ = a + (n − 1)d. The first term has zero jumps from itself, the second term has one jump, and the nth term has n − 1 equal jumps.',
        keyPoints: [
          'a = first term; d = common difference; n = position.',
          'Use n − 1, not n, because the first term is already counted.',
          'If you know a term and its position, you can work backwards to find n or d.'
        ]
      },
      {
        id: 'ap-sum',
        title: '3. Sum of the first n terms',
        explanation: 'The sum of the first n terms is Sₙ = n/2 [2a + (n − 1)d]. If the last term l is known, the equivalent form is Sₙ = n/2 (a + l). The formula pairs the first and last terms, the second and second-last terms, and so on.',
        keyPoints: [
          'Use Sₙ = n/2 [2a + (n − 1)d] when a, d and n are known.',
          'Use Sₙ = n/2 (a + l) when the first and last terms are known.',
          'Make sure n is the number of terms, not the value of the last term.'
        ]
      }
    ],
    workedExamples: [
      {
        id: 'ap-example-1',
        title: 'Example 1 · Find the nth term',
        question: 'Find the 20th term of 3, 7, 11, 15, …',
        steps: [
          'The first term is a = 3 and the common difference is d = 7 − 3 = 4.',
          'Use aₙ = a + (n − 1)d.',
          'a₂₀ = 3 + (20 − 1) × 4 = 3 + 76.',
          'Therefore the 20th term is 79.'
        ],
        answer: 'a₂₀ = 79.'
      },
      {
        id: 'ap-example-2',
        title: 'Example 2 · Sum of terms',
        question: 'Find the sum of the first 20 terms of 3, 7, 11, 15, …',
        steps: [
          'Here a = 3, d = 4 and n = 20.',
          'Use Sₙ = n/2 [2a + (n − 1)d].',
          'S₂₀ = 20/2 [2(3) + 19(4)] = 10 [6 + 76].',
          'S₂₀ = 10 × 82 = 820.'
        ],
        answer: 'The sum is 820.'
      },
      {
        id: 'ap-example-3',
        title: 'Example 3 · Find the position',
        question: 'In the AP 2, 5, 8, 11, …, which term is 29?',
        steps: [
          'The first term is a = 2 and d = 3. Put aₙ = 29.',
          'Use aₙ = a + (n − 1)d: 29 = 2 + (n − 1)3.',
          'Subtract 2: 27 = 3(n − 1). Divide by 3: 9 = n − 1.',
          'Therefore n = 10.'
        ],
        answer: '29 is the 10th term.'
      }
    ],
    keyFacts: [
      { title: 'Common difference', detail: 'd = a₂ − a₁, and it stays constant.' },
      { title: 'nth term', detail: 'aₙ = a + (n − 1)d.' },
      { title: 'Sum of n terms', detail: 'Sₙ = n/2 [2a + (n − 1)d].' },
      { title: 'Using the last term', detail: 'Sₙ = n/2 (a + l).' }
    ],
    questions: [
      {
        id: 'ap-q1',
        prompt: 'Which sequence is an arithmetic progression?',
        choices: [{ id: 'a', text: '2, 4, 8, 16, …' }, { id: 'b', text: '5, 8, 11, 14, …' }, { id: 'c', text: '1, 4, 9, 16, …' }, { id: 'd', text: '1, 2, 4, 7, …' }],
        answer: 'b',
        explanation: 'The difference is 3 between every consecutive pair: 8−5 = 11−8 = 14−11 = 3.'
      },
      {
        id: 'ap-q2',
        prompt: 'What is the 10th term of 4, 7, 10, 13, …?',
        choices: [{ id: 'a', text: '28' }, { id: 'b', text: '30' }, { id: 'c', text: '31' }, { id: 'd', text: '34' }],
        answer: 'c',
        explanation: 'a = 4, d = 3. a₁₀ = 4 + 9 × 3 = 31.'
      },
      {
        id: 'ap-q3',
        prompt: 'For an AP with a = 2, d = 3 and n = 5, what is the sum of the first five terms?',
        choices: [{ id: 'a', text: '25' }, { id: 'b', text: '35' }, { id: 'c', text: '40' }, { id: 'd', text: '45' }],
        answer: 'c',
        explanation: 'S₅ = 5/2 [2(2) + 4(3)] = 5/2 × 16 = 40, so option C is correct.'
      },
      {
        id: 'ap-q4',
        prompt: 'In the AP 7, 12, 17, 22, …, what is the common difference?',
        choices: [{ id: 'a', text: '3' }, { id: 'b', text: '4' }, { id: 'c', text: '5' }, { id: 'd', text: '7' }],
        answer: 'c',
        explanation: 'Subtract consecutive terms: 12 − 7 = 5. The difference stays 5.'
      }
    ],
    sourceUrl: mathematicsSource,
    sourceLabel: 'CBSE Mathematics · Class X · 2026–27 · page 4'
  }
,
  {
    id: 'coordinate-geometry',
    curriculumItemId: 'math-coord',
    subjectId: 'mathematics',
    title: 'Coordinate Geometry',
    chapterLabel: 'Coordinate Geometry · Unit III',
    estimatedMinutes: 30,
    syllabusScope: 'Review of coordinate geometry, the distance formula and the section formula for internal division.',
    overview: 'Coordinates turn geometry into algebra. You can calculate the distance between two points and locate a point that divides a line segment in a given ratio.',
    learningGoals: [
      'Read and identify coordinates on the Cartesian plane.',
      'Use the distance formula between two points.',
      'Use the section formula for internal division.',
      'Recognise the midpoint formula as a special case of the section formula.'
    ],
    sections: [
      {
        id: 'coordinate-plane',
        title: '1. Points on the Cartesian plane',
        explanation: 'A point is written as an ordered pair (x, y). The x-coordinate tells the horizontal position and the y-coordinate tells the vertical position. The origin is (0, 0). Always keep the order x first, y second.',
        keyPoints: [
          'The horizontal axis is the x-axis and the vertical axis is the y-axis.',
          'The origin is where both axes meet.',
          'Changing the order of coordinates usually changes the point: (2, 5) is not the same as (5, 2).'
        ]
      },
      {
        id: 'distance-formula',
        title: '2. Distance formula',
        explanation: 'For A(x₁, y₁) and B(x₂, y₂), the horizontal difference is x₂ − x₁ and the vertical difference is y₂ − y₁. These are the perpendicular sides of a right triangle. By Pythagoras, AB = √[(x₂ − x₁)² + (y₂ − y₁)²].',
        keyPoints: [
          'Subtract corresponding coordinates in the same order.',
          'Square both differences before adding them.',
          'The final distance is non-negative.'
        ]
      },
      {
        id: 'section-formula',
        title: '3. Section formula for internal division',
        explanation: 'If P divides the line segment joining A(x₁, y₁) and B(x₂, y₂) internally in the ratio m:n, meaning AP:PB = m:n, then P has coordinates ((mx₂ + nx₁)/(m+n), (my₂ + ny₁)/(m+n)). The weights are opposite the endpoints: m multiplies B and n multiplies A.',
        keyPoints: [
          'Write the ratio in the same order as the question: AP:PB = m:n.',
          'Use m+n as the denominator in both coordinates.',
          'For the midpoint, m:n = 1:1, so average the x-coordinates and average the y-coordinates.'
        ]
      }
    ],
    workedExamples: [
      {
        id: 'coord-example-1',
        title: 'Example 1 · Distance between points',
        question: 'Find the distance between A(−1, 2) and B(5, 10).',
        steps: [
          'Use AB = √[(x₂ − x₁)² + (y₂ − y₁)²].',
          'Substitute: AB = √[(5 − (−1))² + (10 − 2)²].',
          'AB = √[6² + 8²] = √[36 + 64].',
          'AB = √100 = 10.'
        ],
        answer: 'The distance AB is 10 units.'
      },
      {
        id: 'coord-example-2',
        title: 'Example 2 · Internal section',
        question: 'Find the point P dividing A(2, 3) and B(8, 9) in the ratio 1:2 internally.',
        steps: [
          'Here x₁ = 2, y₁ = 3, x₂ = 8, y₂ = 9, m = 1 and n = 2.',
          'x-coordinate = (1 × 8 + 2 × 2)/(1 + 2) = 12/3 = 4.',
          'y-coordinate = (1 × 9 + 2 × 3)/(1 + 2) = 15/3 = 5.',
          'Combine the coordinates in x,y order.'
        ],
        answer: 'P = (4, 5).'
      },
      {
        id: 'coord-example-3',
        title: 'Example 3 · Midpoint',
        question: 'Find the midpoint of the segment joining (−2, 4) and (6, 8).',
        steps: [
          'A midpoint divides a segment in the ratio 1:1.',
          'Average the x-coordinates: (−2 + 6)/2 = 2.',
          'Average the y-coordinates: (4 + 8)/2 = 6.',
          'Write the result as an ordered pair.'
        ],
        answer: 'The midpoint is (2, 6).'
      }
    ],
    keyFacts: [
      { title: 'Distance formula', detail: '√[(x₂ − x₁)² + (y₂ − y₁)²].' },
      { title: 'Section formula', detail: '((mx₂ + nx₁)/(m+n), (my₂ + ny₁)/(m+n)).' },
      { title: 'Internal ratio', detail: 'AP:PB = m:n.' },
      { title: 'Midpoint', detail: '((x₁ + x₂)/2, (y₁ + y₂)/2).' }
    ],
    questions: [
      {
        id: 'coord-q1',
        prompt: 'What is the distance between (0, 0) and (3, 4)?',
        choices: [{ id: 'a', text: '4 units' }, { id: 'b', text: '5 units' }, { id: 'c', text: '6 units' }, { id: 'd', text: '7 units' }],
        answer: 'b',
        explanation: 'Distance = √[(3−0)² + (4−0)²] = √(9+16) = √25 = 5.'
      },
      {
        id: 'coord-q2',
        prompt: 'A point divides AB internally in the ratio 1:1. What special point is it?',
        choices: [{ id: 'a', text: 'Origin' }, { id: 'b', text: 'Focus' }, { id: 'c', text: 'Midpoint' }, { id: 'd', text: 'Vertex' }],
        answer: 'c',
        explanation: 'A 1:1 division means the distances from the point to both endpoints are equal, so it is the midpoint.'
      },
      {
        id: 'coord-q3',
        prompt: 'Find the midpoint of (2, 4) and (8, 10).',
        choices: [{ id: 'a', text: '(4, 6)' }, { id: 'b', text: '(5, 7)' }, { id: 'c', text: '(6, 8)' }, { id: 'd', text: '(10, 14)' }],
        answer: 'b',
        explanation: 'Average the x-values: (2+8)/2 = 5. Average the y-values: (4+10)/2 = 7.'
      },
      {
        id: 'coord-q4',
        prompt: 'If AP:PB = 2:1, which weights are used in the section formula for P?',
        choices: [{ id: 'a', text: '2 multiplies A and 1 multiplies B' }, { id: 'b', text: '1 multiplies A and 2 multiplies B' }, { id: 'c', text: 'Both endpoints are multiplied by 2' }, { id: 'd', text: 'The ratio is not used' }],
        answer: 'b',
        explanation: 'For AP:PB = m:n, P = ((mx₂+nx₁)/(m+n), ...). So m multiplies B and n multiplies A.'
      }
    ],
    sourceUrl: mathematicsSource,
    sourceLabel: 'CBSE Mathematics · Class X · 2026–27 · page 4'
  }
,
  {
    id: 'triangles',
    curriculumItemId: 'math-tri',
    subjectId: 'mathematics',
    title: 'Triangles',
    chapterLabel: 'Geometry · Unit IV',
    estimatedMinutes: 45,
    syllabusScope: 'Similar triangles, Basic Proportionality Theorem and its converse, and similarity criteria (AA, SSS and SAS).',
    overview: 'Similar triangles have the same shape, even when their sizes differ. Proportional sides and equal angles let you solve missing lengths and prove geometric relationships.',
    learningGoals: [
      'Distinguish similarity from congruence.',
      'Recognise AA, SSS and SAS similarity criteria.',
      'State and use the Basic Proportionality Theorem.',
      'Explain the area-based proof of the Basic Proportionality Theorem.'
    ],
    sections: [
      {
        id: 'similarity',
        title: '1. Similar triangles',
        explanation: 'Two triangles are similar when their corresponding angles are equal and their corresponding sides are proportional. Similar triangles have the same shape, but not necessarily the same size. Congruent triangles are a special case in which corresponding sides and angles are equal.',
        keyPoints: [
          'Write corresponding vertices in the same order: ΔABC ~ ΔPQR means A↔P, B↔Q and C↔R.',
          'Corresponding angles are equal.',
          'Ratios of corresponding sides are equal.'
        ]
      },
      {
        id: 'criteria',
        title: '2. Similarity criteria',
        explanation: 'AA: two corresponding angles are equal. SSS: all three pairs of corresponding sides are proportional. SAS: one pair of included angles is equal and the pairs of sides including those angles are proportional. These conditions are enough to establish similarity.',
        keyPoints: [
          'AA uses two angles; the third pair is automatically equal because the angles of a triangle sum to 180°.',
          'SSS compares all three side ratios.',
          'SAS compares two side ratios and the included angle.'
        ]
      },
      {
        id: 'bpt',
        title: '3. Basic Proportionality Theorem',
        explanation: 'In ΔABC, if a line DE is drawn parallel to BC and meets AB at D and AC at E, then AD/DB = AE/EC. In simple terms, a line parallel to one side of a triangle divides the other two sides in the same ratio.',
        keyPoints: [
          'The parallel condition DE ∥ BC is essential.',
          'The theorem compares the upper segment with the lower segment on each side.',
          'Converse: if a line divides two sides in the same ratio, it is parallel to the third side.'
        ]
      },
      {
        id: 'bpt-proof',
        title: '4. Why the Basic Proportionality Theorem works',
        explanation: 'Compare the areas of three small triangles. Triangles ADE and BDE share the same altitude to line AB, so their area ratio is AD/DB. Triangles ADE and CDE share the same altitude to line AC, so their area ratio is AE/EC. Because DE is parallel to BC, triangles BDE and CDE lie between the same parallels and have equal areas. Therefore AD/DB = AE/EC.',
        keyPoints: [
          'For triangles with the same altitude, the ratio of areas equals the ratio of their bases.',
          'Triangles on the same base and between the same parallels have equal areas.',
          'The two area comparisons lead to AD/DB = AE/EC.'
        ]
      }
    ],
    workedExamples: [
      {
        id: 'tri-example-1',
        title: 'Example 1 · Apply BPT',
        question: 'In ΔABC, DE ∥ BC. If AD = 4, DB = 6 and AC = 15, find AE.',
        steps: [
          'By BPT, AD/DB = AE/EC.',
          'So 4/6 = AE/EC, which simplifies to 2/3.',
          'Let AE = 2k and EC = 3k. Since AC = 15, 5k = 15.',
          'Thus k = 3 and AE = 2k = 6.'
        ],
        answer: 'AE = 6 units.'
      },
      {
        id: 'tri-example-2',
        title: 'Example 2 · Use similarity ratios',
        question: 'If ΔABC ~ ΔPQR and AB:PQ = 3:5, what is QR when BC = 9?',
        steps: [
          'From ΔABC ~ ΔPQR, the correspondence is A↔P, B↔Q and C↔R.',
          'Corresponding sides are proportional: AB/PQ = BC/QR.',
          'Substitute 3/5 = 9/QR.',
          'Cross-multiply: 3QR = 45, so QR = 15.'
        ],
        answer: 'QR = 15 units.'
      },
      {
        id: 'tri-example-3',
        title: 'Example 3 · Identify a criterion',
        question: 'Two triangles have two pairs of equal corresponding angles. Which criterion proves them similar?',
        steps: [
          'Two angles in the first triangle match two angles in the second.',
          'The third angles must also be equal because each triangle has an angle sum of 180°.',
          'All corresponding angles are therefore equal.',
          'This is the AA similarity criterion.'
        ],
        answer: 'AA similarity.'
      }
    ],
    keyFacts: [
      { title: 'AA similarity', detail: 'Two pairs of corresponding angles are equal.' },
      { title: 'SSS similarity', detail: 'All three pairs of corresponding sides are proportional.' },
      { title: 'SAS similarity', detail: 'Two side ratios and the included angle match.' },
      { title: 'BPT', detail: 'DE ∥ BC ⇒ AD/DB = AE/EC.' }
    ],
    questions: [
      {
        id: 'tri-q1',
        prompt: 'Which statement is required for the Basic Proportionality Theorem?',
        choices: [{ id: 'a', text: 'DE is perpendicular to BC' }, { id: 'b', text: 'DE is parallel to BC' }, { id: 'c', text: 'DE is equal to BC' }, { id: 'd', text: 'D and E are midpoints only' }],
        answer: 'b',
        explanation: 'The theorem applies when a line through two sides of a triangle is parallel to the third side.'
      },
      {
        id: 'tri-q2',
        prompt: 'Two angles of one triangle are equal to two angles of another. Which criterion applies?',
        choices: [{ id: 'a', text: 'SSS' }, { id: 'b', text: 'SAS' }, { id: 'c', text: 'AA' }, { id: 'd', text: 'RHS' }],
        answer: 'c',
        explanation: 'Two corresponding equal angles are sufficient for similarity by AA.'
      },
      {
        id: 'tri-q3',
        prompt: 'If AD/DB = AE/EC, what does the converse of BPT tell us?',
        choices: [{ id: 'a', text: 'DE ∥ BC' }, { id: 'b', text: 'DE ⟂ BC' }, { id: 'c', text: 'AB = AC' }, { id: 'd', text: 'The triangles are congruent' }],
        answer: 'a',
        explanation: 'The converse says that a line dividing two sides in the same ratio is parallel to the third side.'
      },
      {
        id: 'tri-q4',
        prompt: 'In ΔABC, DE ∥ BC. If AD = 2 and DB = 3, what is AE:EC?',
        choices: [{ id: 'a', text: '3:2' }, { id: 'b', text: '2:3' }, { id: 'c', text: '2:5' }, { id: 'd', text: '1:3' }],
        answer: 'b',
        explanation: 'By BPT, AD/DB = AE/EC, so AE:EC = 2:3.'
      }
    ],
    sourceUrl: mathematicsSource,
    sourceLabel: 'CBSE Mathematics · Class X · 2026–27 · pages 4–5'
  },
  {
    id: 'circles',
    curriculumItemId: 'math-circle',
    subjectId: 'mathematics',
    title: 'Circles',
    chapterLabel: 'Geometry · Unit IV',
    estimatedMinutes: 30,
    syllabusScope: 'Tangent at a point of contact; proof that the tangent is perpendicular to the radius; proof that tangents from an external point are equal.',
    overview: 'A tangent touches a circle at exactly one point. Two theorems about tangents make many circle problems much easier to solve.',
    learningGoals: [
      'Identify a tangent and its point of contact.',
      'Use the fact that a tangent is perpendicular to the radius at contact.',
      'Use the equal-tangents theorem for an external point.',
      'Solve simple length problems using right triangles.'
    ],
    sections: [
      {
        id: 'tangent',
        title: '1. What is a tangent?',
        explanation: 'A tangent to a circle is a line that touches the circle at exactly one point. That point is called the point of contact. A line that cuts the circle at two points is a secant, not a tangent.',
        keyPoints: [
          'A tangent touches the circle at one point.',
          'The radius drawn to the point of contact is perpendicular to the tangent.',
          'The perpendicular distance from the centre to a tangent equals the radius.'
        ]
      },
      {
        id: 'radius-theorem',
        title: '2. Tangent-radius theorem',
        explanation: 'The tangent at any point of a circle is perpendicular to the radius through the point of contact. If O is the centre, T is the contact point and PT is the tangent, then OT ⟂ PT and angle OTP = 90°.',
        keyPoints: [
          'Join the centre to the point of contact before solving a tangent problem.',
          'The radius and tangent create a right-angled triangle.',
          'Use Pythagoras when the centre-to-external-point distance and radius are known.'
        ]
      },
      {
        id: 'equal-tangents',
        title: '3. Tangents from an external point',
        explanation: 'If PA and PB are tangents drawn from the same external point P to a circle, then PA = PB. The two right triangles OAP and OBP are congruent by RHS: OA = OB (radii), OP is common, and both have a right angle at the point of contact.',
        keyPoints: [
          'The equal-tangents theorem applies to tangents from the same external point.',
          'The lengths PA and PB are equal.',
          'The line joining the external point to the centre bisects the angle between the two tangents.'
        ]
      }
    ],
    workedExamples: [
      {
        id: 'circle-example-1',
        title: 'Example 1 · Right angle at contact',
        question: 'PT is tangent to a circle with centre O at T. Find angle OTP.',
        steps: [
          'OT is the radius drawn to the point of contact T.',
          'PT is the tangent at T.',
          'By the tangent-radius theorem, OT is perpendicular to PT.'
        ],
        answer: '∠OTP = 90°.'
      },
      {
        id: 'circle-example-2',
        title: 'Example 2 · Equal tangents',
        question: 'PA and PB are tangents from P. If PA = 7 cm, find PB.',
        steps: [
          'Both PA and PB are tangents drawn from the same external point P.',
          'By the equal-tangents theorem, PA = PB.',
          'Substitute PA = 7 cm.'
        ],
        answer: 'PB = 7 cm.'
      },
      {
        id: 'circle-example-3',
        title: 'Example 3 · Use Pythagoras',
        question: 'A circle has radius 5 cm. The distance from its centre O to an external point P is 13 cm. Find the tangent length PT.',
        steps: [
          'Join O to the point of contact T. OT is the radius, so OT = 5 cm.',
          'OT ⟂ PT, so triangle OPT is right-angled at T.',
          'By Pythagoras: OP² = OT² + PT².',
          'PT² = 13² − 5² = 169 − 25 = 144, so PT = 12 cm.'
        ],
        answer: 'PT = 12 cm.'
      }
    ],
    keyFacts: [
      { title: 'Tangent-radius', detail: 'Radius ⟂ tangent at the point of contact.' },
      { title: 'Equal tangents', detail: 'PA = PB when both are drawn from the same external point.' },
      { title: 'Right triangle', detail: 'Use Pythagoras with centre, contact point and external point.' },
      { title: 'Radii', detail: 'All radii of the same circle are equal.' }
    ],
    questions: [
      {
        id: 'circle-q1',
        prompt: 'What is the angle between a radius and the tangent at the point of contact?',
        choices: [{ id: 'a', text: '30°' }, { id: 'b', text: '45°' }, { id: 'c', text: '90°' }, { id: 'd', text: '180°' }],
        answer: 'c',
        explanation: 'The tangent-radius theorem states that they are perpendicular, so the angle is 90°.'
      },
      {
        id: 'circle-q2',
        prompt: 'Two tangents PA and PB are drawn from the same external point P. If PA = 9 cm, what is PB?',
        choices: [{ id: 'a', text: '4.5 cm' }, { id: 'b', text: '9 cm' }, { id: 'c', text: '18 cm' }, { id: 'd', text: 'Cannot be found' }],
        answer: 'b',
        explanation: 'Tangents drawn from the same external point are equal in length.'
      },
      {
        id: 'circle-q3',
        prompt: 'A tangent touches a circle at how many points?',
        choices: [{ id: 'a', text: 'Zero' }, { id: 'b', text: 'One' }, { id: 'c', text: 'Two' }, { id: 'd', text: 'Three' }],
        answer: 'b',
        explanation: 'A tangent touches the circle at exactly one point, called the point of contact.'
      },
      {
        id: 'circle-q4',
        prompt: 'A radius is 5 cm and OP is 13 cm, where PT is a tangent. What is PT?',
        choices: [{ id: 'a', text: '8 cm' }, { id: 'b', text: '10 cm' }, { id: 'c', text: '12 cm' }, { id: 'd', text: '18 cm' }],
        answer: 'c',
        explanation: 'OT ⟂ PT, so PT = √(OP² − OT²) = √(169 − 25) = 12 cm.'
      }
    ],
    sourceUrl: mathematicsSource,
    sourceLabel: 'CBSE Mathematics · Class X · 2026–27 · page 5'
  }
,
  {
    id: 'introduction-to-trigonometry',
    curriculumItemId: 'math-trig',
    subjectId: 'mathematics',
    title: 'Introduction to Trigonometry',
    chapterLabel: 'Trigonometry · Unit V',
    estimatedMinutes: 40,
    syllabusScope: 'Trigonometric ratios of an acute angle, existence of ratios at 0° and 90°, standard values at 30°, 45° and 60°, and relationships between ratios.',
    overview: 'Trigonometry connects angles with side lengths in a right-angled triangle. Once you know the basic ratios, you can describe an unknown side or angle using a simple relationship.',
    learningGoals: [
      'Identify the opposite, adjacent and hypotenuse sides for a chosen angle.',
      'Define the six trigonometric ratios.',
      'Recall standard values at 0°, 30°, 45°, 60° and 90°.',
      'Use relationships between the trigonometric ratios.'
    ],
    sections: [
      {
        id: 'trig-sides',
        title: '1. Name the sides relative to an angle',
        explanation: 'In a right-angled triangle, the hypotenuse is always opposite the 90° angle and is the longest side. For a chosen acute angle θ, the opposite side lies across from θ and the adjacent side is next to θ but is not the hypotenuse. These names depend on which acute angle you choose.',
        keyPoints: [
          'Hypotenuse: opposite the right angle.',
          'Opposite: across from the angle θ.',
          'Adjacent: next to θ, excluding the hypotenuse.'
        ]
      },
      {
        id: 'trig-ratios',
        title: '2. The six trigonometric ratios',
        explanation: 'For an acute angle θ: sin θ = opposite/hypotenuse; cos θ = adjacent/hypotenuse; tan θ = opposite/adjacent. Their reciprocals are cosec θ = hypotenuse/opposite, sec θ = hypotenuse/adjacent and cot θ = adjacent/opposite.',
        keyPoints: [
          'Remember sin = P/H, cos = B/H and tan = P/B.',
          'cosec θ = 1/sin θ, sec θ = 1/cos θ and cot θ = 1/tan θ.',
          'tan θ = sin θ/cos θ whenever cos θ is not zero.'
        ]
      },
      {
        id: 'trig-standard-values',
        title: '3. Standard-angle values',
        explanation: 'The standard angles 30°, 45° and 60° have exact ratio values. At the endpoints, sin 0° = 0 and cos 0° = 1; sin 90° = 1 and cos 90° = 0. A ratio with zero in its denominator is undefined, so tan 90°, sec 90°, cosec 0° and cot 0° are undefined.',
        keyPoints: [
          'sin 30° = 1/2, cos 30° = √3/2, tan 30° = 1/√3.',
          'sin 45° = cos 45° = 1/√2 and tan 45° = 1.',
          'sin 60° = √3/2, cos 60° = 1/2, tan 60° = √3.',
          'Do not write a numerical value for a ratio whose denominator is zero.'
        ]
      },
      {
        id: 'trig-relations',
        title: '4. Relationships between ratios',
        explanation: 'The reciprocal pairs are sin/cosec, cos/sec and tan/cot. Also tan θ = sin θ/cos θ. These relationships let you move between different trigonometric ratios without returning to the triangle every time.',
        keyPoints: [
          'sin θ × cosec θ = 1.',
          'cos θ × sec θ = 1.',
          'tan θ × cot θ = 1.',
          'tan θ = sin θ/cos θ.'
        ]
      }
    ],
    workedExamples: [
      {
        id: 'trig-example-1',
        title: 'Example 1 · Find ratios from sides',
        question: 'In a right triangle, relative to angle θ, the opposite side is 3 cm, adjacent side is 4 cm and hypotenuse is 5 cm. Find sin θ, cos θ and tan θ.',
        steps: [
          'sin θ = opposite/hypotenuse = 3/5.',
          'cos θ = adjacent/hypotenuse = 4/5.',
          'tan θ = opposite/adjacent = 3/4.'
        ],
        answer: 'sin θ = 3/5, cos θ = 4/5 and tan θ = 3/4.'
      },
      {
        id: 'trig-example-2',
        title: 'Example 2 · Standard angle',
        question: 'Evaluate sin 60° + cos 60°.',
        steps: [
          'Recall sin 60° = √3/2.',
          'Recall cos 60° = 1/2.',
          'Add the values with the same denominator.'
        ],
        answer: '(√3 + 1)/2.'
      },
      {
        id: 'trig-example-3',
        title: 'Example 3 · Use a ratio relationship',
        question: 'If sin θ = 3/5 and θ is acute, find cos θ.',
        steps: [
          'Use sin² θ + cos² θ = 1.',
          'cos² θ = 1 − (3/5)² = 1 − 9/25 = 16/25.',
          'cos θ = ±4/5, but θ is acute, so cosine is positive.'
        ],
        answer: 'cos θ = 4/5.'
      }
    ],
    keyFacts: [
      { title: 'Sine', detail: 'sin θ = perpendicular / hypotenuse.' },
      { title: 'Cosine', detail: 'cos θ = base / hypotenuse.' },
      { title: 'Tangent', detail: 'tan θ = perpendicular / base.' },
      { title: 'Standard values', detail: 'Know the exact sin, cos and tan values for 30°, 45° and 60°.' }
    ],
    questions: [
      {
        id: 'trig-q1',
        prompt: 'Which side is always the longest side of a right-angled triangle?',
        choices: [{ id: 'a', text: 'Opposite side' }, { id: 'b', text: 'Adjacent side' }, { id: 'c', text: 'Hypotenuse' }, { id: 'd', text: 'Base angle' }],
        answer: 'c',
        explanation: 'The hypotenuse is opposite the right angle and is always the longest side.'
      },
      {
        id: 'trig-q2',
        prompt: 'What is sin 30°?',
        choices: [{ id: 'a', text: '1/2' }, { id: 'b', text: '√3/2' }, { id: 'c', text: '1' }, { id: 'd', text: '0' }],
        answer: 'a',
        explanation: 'The standard value of sin 30° is 1/2.'
      },
      {
        id: 'trig-q3',
        prompt: 'What is tan 45°?',
        choices: [{ id: 'a', text: '0' }, { id: 'b', text: '1/√3' }, { id: 'c', text: '1' }, { id: 'd', text: '√3' }],
        answer: 'c',
        explanation: 'At 45°, opposite and adjacent sides are equal, so tan 45° = 1.'
      },
      {
        id: 'trig-q4',
        prompt: 'Which ratio is undefined at 90°?',
        choices: [{ id: 'a', text: 'sin 90°' }, { id: 'b', text: 'cos 90°' }, { id: 'c', text: 'tan 90°' }, { id: 'd', text: 'cosec 90°' }],
        answer: 'c',
        explanation: 'tan θ = sin θ/cos θ. Since cos 90° = 0, tan 90° is undefined.'
      }
    ],
    sourceUrl: mathematicsSource,
    sourceLabel: 'CBSE Mathematics · Class X · 2026–27 · page 5'
  },
  {
    id: 'trigonometric-identities',
    curriculumItemId: 'math-ident',
    subjectId: 'mathematics',
    title: 'Trigonometric Identities',
    chapterLabel: 'Trigonometry · Unit V',
    estimatedMinutes: 25,
    syllabusScope: 'Proof and applications of sin²θ + cos²θ = 1; simple identities only.',
    overview: 'An identity is an equation that is true for every angle for which both sides are defined. The key identity connects sine and cosine and can simplify many expressions.',
    learningGoals: [
      'State the fundamental trigonometric identity.',
      'Explain why the identity follows from Pythagoras.',
      'Use the identity to find one ratio when the other is known.',
      'Simplify simple expressions using the identity.'
    ],
    sections: [
      {
        id: 'identity-meaning',
        title: '1. What is an identity?',
        explanation: 'An identity is a relationship that is true for every allowed value of the angle, not just one selected angle. In Class X, the central identity is sin²θ + cos²θ = 1. The square means the ratio is multiplied by itself: sin²θ means (sin θ)².',
        keyPoints: [
          'sin²θ is not the same as sin(θ²).',
          'The identity is valid for angles where the ratios are defined.',
          'Use brackets carefully when substituting a negative or fractional value.'
        ]
      },
      {
        id: 'identity-proof',
        title: '2. Why the identity is true',
        explanation: 'In a right triangle, let the perpendicular, base and hypotenuse be P, B and H. By Pythagoras, P² + B² = H². Divide every term by H²: P²/H² + B²/H² = 1. Since P/H = sin θ and B/H = cos θ, this becomes sin²θ + cos²θ = 1.',
        keyPoints: [
          'Start with the Pythagoras theorem.',
          'Divide every term by the square of the hypotenuse.',
          'Replace P/H with sin θ and B/H with cos θ.'
        ]
      },
      {
        id: 'identity-use',
        title: '3. Apply the identity',
        explanation: 'If one of sine or cosine is known, rearrange the identity to find the square of the other. For an acute angle both sine and cosine are positive, so choose the positive square root. For example, if sin θ = 3/5, then cos²θ = 1 − 9/25 = 16/25 and cos θ = 4/5.',
        keyPoints: [
          'cos²θ = 1 − sin²θ.',
          'sin²θ = 1 − cos²θ.',
          'For an acute angle, sin θ and cos θ are positive.'
        ]
      }
    ],
    workedExamples: [
      {
        id: 'identity-example-1',
        title: 'Example 1 · Find cosine',
        question: 'If sin θ = 5/13 and θ is acute, find cos θ.',
        steps: [
          'Use sin²θ + cos²θ = 1.',
          'cos²θ = 1 − 25/169 = 144/169.',
          'Take the positive square root because θ is acute.'
        ],
        answer: 'cos θ = 12/13.'
      },
      {
        id: 'identity-example-2',
        title: 'Example 2 · Find sine',
        question: 'If cos θ = 8/17 and θ is acute, find sin θ.',
        steps: [
          'Use sin²θ = 1 − cos²θ.',
          'sin²θ = 1 − 64/289 = 225/289.',
          'Take the positive square root because θ is acute.'
        ],
        answer: 'sin θ = 15/17.'
      },
      {
        id: 'identity-example-3',
        title: 'Example 3 · Simplify',
        question: 'Simplify (1 − cos²θ)/sin²θ, where sin θ ≠ 0.',
        steps: [
          'From sin²θ + cos²θ = 1, rearrange to 1 − cos²θ = sin²θ.',
          'Substitute into the numerator.',
          'The expression becomes sin²θ/sin²θ.'
        ],
        answer: '1.'
      }
    ],
    keyFacts: [
      { title: 'Main identity', detail: 'sin²θ + cos²θ = 1.' },
      { title: 'Rearranged', detail: 'sin²θ = 1 − cos²θ.' },
      { title: 'Rearranged', detail: 'cos²θ = 1 − sin²θ.' },
      { title: 'Proof idea', detail: 'Divide P² + B² = H² by H².' }
    ],
    questions: [
      {
        id: 'identity-q1',
        prompt: 'Which is the fundamental trigonometric identity in this syllabus?',
        choices: [{ id: 'a', text: 'sin θ + cos θ = 1' }, { id: 'b', text: 'sin²θ + cos²θ = 1' }, { id: 'c', text: 'tan θ + cot θ = 1' }, { id: 'd', text: 'sin θ × cos θ = 1' }],
        answer: 'b',
        explanation: 'The identity is sin²θ + cos²θ = 1.'
      },
      {
        id: 'identity-q2',
        prompt: 'If sin θ = 3/5 and θ is acute, what is cos θ?',
        choices: [{ id: 'a', text: '3/5' }, { id: 'b', text: '5/3' }, { id: 'c', text: '4/5' }, { id: 'd', text: '1/5' }],
        answer: 'c',
        explanation: 'cos²θ = 1 − 9/25 = 16/25, and the positive root is 4/5.'
      },
      {
        id: 'identity-q3',
        prompt: 'Which theorem gives the geometric starting point for proving sin²θ + cos²θ = 1?',
        choices: [{ id: 'a', text: 'Basic Proportionality Theorem' }, { id: 'b', text: 'Pythagoras theorem' }, { id: 'c', text: 'Tangent-radius theorem' }, { id: 'd', text: 'Angle sum property only' }],
        answer: 'b',
        explanation: 'The proof begins with P² + B² = H² for the right triangle.'
      },
      {
        id: 'identity-q4',
        prompt: 'Simplify (1 − sin²θ)/cos²θ, where cos θ ≠ 0.',
        choices: [{ id: 'a', text: '0' }, { id: 'b', text: '1' }, { id: 'c', text: 'sin θ' }, { id: 'd', text: 'cos θ' }],
        answer: 'b',
        explanation: 'Since 1 − sin²θ = cos²θ, the expression is cos²θ/cos²θ = 1.'
      }
    ],
    sourceUrl: mathematicsSource,
    sourceLabel: 'CBSE Mathematics · Class X · 2026–27 · page 5'
  },
  {
    id: 'heights-and-distances',
    curriculumItemId: 'math-height',
    subjectId: 'mathematics',
    title: 'Heights and Distances',
    chapterLabel: 'Trigonometry · Unit V',
    estimatedMinutes: 30,
    syllabusScope: 'Angle of elevation and depression; simple problems using 30°, 45° and 60°; no problem should involve more than two right triangles.',
    overview: 'Trigonometry can measure a height or distance without directly reaching the object. Draw a right triangle, label the angle and choose the ratio that connects the known and unknown sides.',
    learningGoals: [
      'Understand angle of elevation and angle of depression.',
      'Draw and label a right-triangle model from a word problem.',
      'Choose sine, cosine or tangent based on the known sides.',
      'Solve simple height-and-distance problems using 30°, 45° and 60°.'
    ],
    sections: [
      {
        id: 'elevation-depression',
        title: '1. Elevation and depression',
        explanation: 'The angle of elevation is the angle between the horizontal line through the observer and the line of sight when looking upward. The angle of depression is measured downward from the horizontal line through the observer. When the horizontal lines are parallel, the angle of depression equals the corresponding angle of elevation at the other point.',
        keyPoints: [
          'Draw the horizontal through the observer before marking the angle.',
          'The line of sight is the sloping side of the triangle.',
          'Do not confuse the angle with the vertical side of the triangle.'
        ]
      },
      {
        id: 'choose-ratio',
        title: '2. Choose the right ratio',
        explanation: 'After drawing the right triangle, identify the angle θ and label the opposite, adjacent and hypotenuse sides. Use tan θ = opposite/adjacent when the height and horizontal distance are involved. Use sine or cosine when the hypotenuse is part of the known or unknown information.',
        keyPoints: [
          'Height is often the side opposite the angle of elevation.',
          'Horizontal distance is often adjacent to the angle.',
          'Write the ratio before substituting numerical values.'
        ]
      },
      {
        id: 'model-check',
        title: '3. Build and check the model',
        explanation: 'Translate the words into a diagram, mark the right angle, and write the known lengths. Solve the equation, then check that the answer has a sensible unit and is positive. If the observer or object is above ground level, account for that extra height separately.',
        keyPoints: [
          'Use only the angles allowed by the current syllabus: 30°, 45° and 60°.',
          'The question should not require more than two right triangles.',
          'Keep lengths in consistent units throughout the calculation.'
        ]
      }
    ],
    workedExamples: [
      {
        id: 'height-example-1',
        title: 'Example 1 · Find a tower height',
        question: 'A student stands 20 m from the foot of a vertical tower. The angle of elevation to its top is 60°. Find the tower height, assuming eye level is at ground level.',
        steps: [
          'Let the tower height be h. The opposite side is h and the adjacent side is 20 m.',
          'Use tan 60° = h/20.',
          'Since tan 60° = √3, h/20 = √3.',
          'Multiply by 20.'
        ],
        answer: 'The tower height is 20√3 m.'
      },
      {
        id: 'height-example-2',
        title: 'Example 2 · A 45° angle',
        question: 'A tree casts a horizontal distance of 12 m from its foot to an observer. The angle of elevation to its top is 45°. Find its height.',
        steps: [
          'Let the tree height be h. Opposite = h and adjacent = 12 m.',
          'Use tan 45° = h/12.',
          'Since tan 45° = 1, h/12 = 1.',
          'Therefore h = 12 m.'
        ],
        answer: 'The tree height is 12 m.'
      },
      {
        id: 'height-example-3',
        title: 'Example 3 · Angle of depression',
        question: 'From the top of a 30 m building, the angle of depression to a point on level ground is 30°. Find the horizontal distance from the building to the point.',
        steps: [
          'The angle of depression equals the angle of elevation from the ground point, so the triangle angle is 30°.',
          'The opposite side is 30 m and the adjacent side is the horizontal distance d.',
          'Use tan 30° = 30/d, so 1/√3 = 30/d.',
          'Cross-multiply to get d = 30√3 m.'
        ],
        answer: 'The horizontal distance is 30√3 m.'
      }
    ],
    keyFacts: [
      { title: 'Elevation', detail: 'Angle measured upward from the observer’s horizontal line.' },
      { title: 'Depression', detail: 'Angle measured downward from the observer’s horizontal line.' },
      { title: 'Useful ratio', detail: 'tan θ = height / horizontal distance.' },
      { title: 'Allowed angles', detail: '30°, 45° and 60°.' }
    ],
    questions: [
      {
        id: 'height-q1',
        prompt: 'The angle of elevation is measured from which line?',
        choices: [{ id: 'a', text: 'The vertical line' }, { id: 'b', text: 'The horizontal line through the observer' }, { id: 'c', text: 'The ground only' }, { id: 'd', text: 'The hypotenuse' }],
        answer: 'b',
        explanation: 'Elevation is measured upward from the observer’s horizontal line of sight.'
      },
      {
        id: 'height-q2',
        prompt: 'A tower is 10 m high and the observer is 10 m from its foot at ground level. What is the angle of elevation?',
        choices: [{ id: 'a', text: '30°' }, { id: 'b', text: '45°' }, { id: 'c', text: '60°' }, { id: 'd', text: '90°' }],
        answer: 'b',
        explanation: 'tan θ = 10/10 = 1, so θ = 45°.'
      },
      {
        id: 'height-q3',
        prompt: 'Which trigonometric ratio connects the opposite height and adjacent horizontal distance?',
        choices: [{ id: 'a', text: 'sin θ' }, { id: 'b', text: 'cos θ' }, { id: 'c', text: 'tan θ' }, { id: 'd', text: 'cosec θ' }],
        answer: 'c',
        explanation: 'tan θ = opposite/adjacent, which is height divided by horizontal distance.'
      },
      {
        id: 'height-q4',
        prompt: 'Which angles are specified for simple heights-and-distances problems in the syllabus?',
        choices: [{ id: 'a', text: '15°, 30°, 45°' }, { id: 'b', text: '30°, 45°, 60°' }, { id: 'c', text: '45°, 60°, 90°' }, { id: 'd', text: 'Any angle' }],
        answer: 'b',
        explanation: 'The syllabus limits the angles of elevation/depression to 30°, 45° and 60°.'
      }
    ],
    sourceUrl: mathematicsSource,
    sourceLabel: 'CBSE Mathematics · Class X · 2026–27 · page 5'
  }
,
  {
    id: 'areas-related-to-circles',
    curriculumItemId: 'math-area',
    subjectId: 'mathematics',
    title: 'Areas Related to Circles',
    chapterLabel: 'Mensuration · Unit VI',
    estimatedMinutes: 30,
    syllabusScope: 'Perimeter and area of a circle; area and perimeter of sectors and segments; central angles limited to 60°, 90° and 120°.',
    overview: 'A sector is a slice of a circle made by two radii and an arc. A segment is the region between a chord and its corresponding arc. Their areas can be found by taking a fraction of the full circle.',
    learningGoals: [
      'Recall circumference and area of a circle.',
      'Calculate the area and arc length of a sector.',
      'Calculate the area of a segment by subtracting a triangle from a sector.',
      'Use the specified central angles of 60°, 90° and 120°.'
    ],
    sections: [
      {
        id: 'circle-basics',
        title: '1. Circle basics',
        explanation: 'The radius r is the distance from the centre to the circle. The circumference is the distance around it, 2πr. The area inside the circle is πr². A central angle θ is the angle formed by two radii at the centre.',
        keyPoints: [
          'Circumference = 2πr.',
          'Area of a circle = πr².',
          'A full circle has a central angle of 360°.'
        ]
      },
      {
        id: 'sector',
        title: '2. Sector area and arc length',
        explanation: 'A sector with central angle θ is θ/360 of the full circle. Its area is (θ/360)πr². The arc length is the same fraction of the full circumference: (θ/360)2πr. Use the angle in degrees and keep the units consistent.',
        keyPoints: [
          'Sector area = (θ/360) × πr².',
          'Arc length = (θ/360) × 2πr.',
          'A quarter-circle sector has θ = 90°; a semicircle has θ = 180°.'
        ]
      },
      {
        id: 'segment',
        title: '3. Area of a segment',
        explanation: 'A chord divides a circle into two segments. For the minor segment, subtract the area of the triangle formed by the two radii and the chord from the area of the sector. Area of minor segment = area of sector − area of triangle. The major segment can be found by subtracting the minor segment from the full circle.',
        keyPoints: [
          'Minor segment = minor sector − triangle.',
          'Major segment = circle area − minor segment.',
          'Sketch the radii, chord and angle before choosing the triangle formula.'
        ]
      }
    ],
    workedExamples: [
      {
        id: 'area-example-1',
        title: 'Example 1 · Sector area',
        question: 'Find the area of a 90° sector of a circle with radius 7 cm. Use π = 22/7.',
        steps: [
          'Use sector area = (θ/360) × πr².',
          'Substitute θ = 90° and r = 7 cm.',
          'Area = (90/360) × (22/7) × 7².',
          'Area = 1/4 × 154 = 38.5 cm².'
        ],
        answer: '38.5 cm².'
      },
      {
        id: 'area-example-2',
        title: 'Example 2 · Arc length',
        question: 'Find the arc length of a 120° sector of radius 6 cm.',
        steps: [
          'Use arc length = (θ/360) × 2πr.',
          'Substitute θ = 120° and r = 6 cm.',
          'Arc length = (120/360) × 12π.',
          'Simplify: one-third of 12π is 4π.'
        ],
        answer: '4π cm.'
      },
      {
        id: 'area-example-3',
        title: 'Example 3 · Segment area at 90°',
        question: 'A circle has radius 7 cm. Find the area of the minor segment formed by a 90° central angle. Use π = 22/7.',
        steps: [
          'Area of the 90° sector = 1/4 × (22/7) × 49 = 38.5 cm².',
          'The triangle between the two radii is right-angled with legs 7 cm and 7 cm.',
          'Triangle area = 1/2 × 7 × 7 = 24.5 cm².',
          'Minor segment area = 38.5 − 24.5.'
        ],
        answer: '14 cm².'
      }
    ],
    keyFacts: [
      { title: 'Circumference', detail: '2πr.' },
      { title: 'Circle area', detail: 'πr².' },
      { title: 'Sector area', detail: '(θ/360)πr².' },
      { title: 'Minor segment', detail: 'Sector area − triangle area.' }
    ],
    questions: [
      {
        id: 'area-q1',
        prompt: 'What fraction of a circle is a 90° sector?',
        choices: [{ id: 'a', text: '1/2' }, { id: 'b', text: '1/3' }, { id: 'c', text: '1/4' }, { id: 'd', text: '1/6' }],
        answer: 'c',
        explanation: '90/360 = 1/4, so a 90° sector is one-quarter of the full circle.'
      },
      {
        id: 'area-q2',
        prompt: 'What is the area of a circle of radius 5 cm?',
        choices: [{ id: 'a', text: '10π cm²' }, { id: 'b', text: '25π cm²' }, { id: 'c', text: '5π cm²' }, { id: 'd', text: '50π cm²' }],
        answer: 'b',
        explanation: 'Area = πr² = π × 5² = 25π cm².'
      },
      {
        id: 'area-q3',
        prompt: 'How do you find the area of a minor segment?',
        choices: [{ id: 'a', text: 'Add the sector and triangle areas' }, { id: 'b', text: 'Subtract triangle area from sector area' }, { id: 'c', text: 'Subtract sector area from circle area' }, { id: 'd', text: 'Divide the circumference by 2' }],
        answer: 'b',
        explanation: 'The minor segment is the region in the sector outside the triangle, so subtract the triangle area.'
      },
      {
        id: 'area-q4',
        prompt: 'What is the arc length of a 60° sector in a circle of radius 3 cm?',
        choices: [{ id: 'a', text: 'π cm' }, { id: 'b', text: '2π cm' }, { id: 'c', text: '3π cm' }, { id: 'd', text: '6π cm' }],
        answer: 'a',
        explanation: 'Arc length = (60/360) × 2π × 3 = π cm.'
      }
    ],
    sourceUrl: mathematicsSource,
    sourceLabel: 'CBSE Mathematics · Class X · 2026–27 · page 6'
  },
  {
    id: 'surface-areas-and-volumes',
    curriculumItemId: 'math-volume',
    subjectId: 'mathematics',
    title: 'Surface Areas and Volumes',
    chapterLabel: 'Mensuration · Unit VI',
    estimatedMinutes: 40,
    syllabusScope: 'Combinations of any two among cubes, cuboids, spheres, hemispheres, cylinders and cones. Use the stated solid formulas and count only exposed external surfaces.',
    overview: 'Surface area measures the outside covering of a solid, while volume measures the space it occupies. For a combined solid, split it into familiar shapes, then add or subtract carefully.',
    learningGoals: [
      'Recall surface-area and volume formulas for the listed solids.',
      'Split a combined solid into two familiar shapes.',
      'Add volumes when solids are joined without overlap.',
      'Find only the surfaces that remain exposed on the outside.'
    ],
    sections: [
      {
        id: 'solid-formulas',
        title: '1. Formula reference',
        explanation: 'For a cube of side a: total surface area 6a² and volume a³. For a cuboid l×b×h: TSA = 2(lb+bh+hl) and volume = lbh. For a sphere: surface area = 4πr² and volume = 4/3πr³. For a hemisphere: curved area = 2πr², total area = 3πr² and volume = 2/3πr³. For a cylinder: CSA = 2πrh, TSA = 2πr(r+h), volume = πr²h. For a cone: curved area = πrl, TSA = πr(l+r), volume = 1/3πr²h, where l = √(r²+h²).',
        keyPoints: [
          'CSA means curved surface area; TSA means total surface area.',
          'Use the slant height l for cone surface area and the vertical height h for cone volume.',
          'Write the required unit: square units for area and cubic units for volume.'
        ]
      },
      {
        id: 'combined-volume',
        title: '2. Volume of a combined solid',
        explanation: 'If two solids are joined without one entering the space of the other, the total volume is the sum of their volumes. If a problem describes a hollow part or a piece removed, subtract the removed volume. Identify the dimensions of each component before using a formula.',
        keyPoints: [
          'Joined non-overlapping solids: add their volumes.',
          'Removed or hollow part: subtract its volume.',
          'Use the same units for all dimensions before calculating.'
        ]
      },
      {
        id: 'exposed-area',
        title: '3. External surface area',
        explanation: 'For a combined solid, do not count the hidden surfaces where the two solids touch. Add only the outside surfaces that can be seen from the exterior. A circular face used to join a hemisphere to a cylinder, for example, is not exposed and must not be counted.',
        keyPoints: [
          'Sketch the solid and shade the exposed faces.',
          'Exclude the common contact face between the two solids.',
          'Do not confuse curved surface area with total surface area.'
        ]
      }
    ],
    workedExamples: [
      {
        id: 'volume-example-1',
        title: 'Example 1 · Cylinder with a hemisphere',
        question: 'A solid consists of a cylinder of radius 3 cm and height 7 cm with a hemisphere of the same radius attached on top. Find its volume.',
        steps: [
          'Cylinder volume = πr²h = π × 3² × 7 = 63π cm³.',
          'Hemisphere volume = 2/3πr³ = 2/3 × π × 3³ = 18π cm³.',
          'Add the two non-overlapping volumes: 63π + 18π.'
        ],
        answer: '81π cm³.'
      },
      {
        id: 'volume-example-2',
        title: 'Example 2 · Exposed area of the same solid',
        question: 'For the cylinder and hemisphere in Example 1, find the external surface area, including the bottom circular base.',
        steps: [
          'The curved cylinder surface area = 2πrh = 2π × 3 × 7 = 42π cm².',
          'The curved hemisphere area = 2πr² = 18π cm².',
          'The bottom circular base is exposed: πr² = 9π cm².',
          'The common circular face between the cylinder and hemisphere is hidden, so do not add it.'
        ],
        answer: 'External surface area = 42π + 18π + 9π = 69π cm².'
      },
      {
        id: 'volume-example-3',
        title: 'Example 3 · Volume of a cone',
        question: 'Find the volume of a cone with radius 3 cm and height 4 cm.',
        steps: [
          'Use volume = 1/3πr²h.',
          'Substitute r = 3 cm and h = 4 cm.',
          'Volume = 1/3 × π × 9 × 4.',
          'Simplify 36π/3.'
        ],
        answer: '12π cm³.'
      }
    ],
    keyFacts: [
      { title: 'Cylinder volume', detail: 'πr²h.' },
      { title: 'Cone volume', detail: '1/3πr²h.' },
      { title: 'Sphere volume', detail: '4/3πr³.' },
      { title: 'Hemisphere volume', detail: '2/3πr³.' }
    ],
    questions: [
      {
        id: 'volume-q1',
        prompt: 'What is the volume of a cylinder of radius r and height h?',
        choices: [{ id: 'a', text: '2πrh' }, { id: 'b', text: 'πr²h' }, { id: 'c', text: 'πrl' }, { id: 'd', text: '4πr²' }],
        answer: 'b',
        explanation: 'The cylinder volume is its base area πr² multiplied by height h.'
      },
      {
        id: 'volume-q2',
        prompt: 'Which cone length is used in its curved surface area formula πrl?',
        choices: [{ id: 'a', text: 'Vertical height h' }, { id: 'b', text: 'Diameter' }, { id: 'c', text: 'Slant height l' }, { id: 'd', text: 'Circumference' }],
        answer: 'c',
        explanation: 'The cone curved surface area uses slant height l, not vertical height h.'
      },
      {
        id: 'volume-q3',
        prompt: 'When a hemisphere is joined to a cylinder along the same circular face, what happens to that shared face in external surface area?',
        choices: [{ id: 'a', text: 'Count it twice' }, { id: 'b', text: 'Count it once' }, { id: 'c', text: 'Do not count it because it is hidden' }, { id: 'd', text: 'Subtract it twice' }],
        answer: 'c',
        explanation: 'The common face is inside the combined solid, so it is not part of the exposed external surface.'
      },
      {
        id: 'volume-q4',
        prompt: 'Two non-overlapping solids are joined. How do you find their combined volume?',
        choices: [{ id: 'a', text: 'Add both volumes' }, { id: 'b', text: 'Subtract the smaller volume' }, { id: 'c', text: 'Multiply the volumes' }, { id: 'd', text: 'Add their surface areas' }],
        answer: 'a',
        explanation: 'The combined volume is the sum of the volumes of the non-overlapping components.'
      }
    ],
    sourceUrl: mathematicsSource,
    sourceLabel: 'CBSE Mathematics · Class X · 2026–27 · page 6'
  },
  {
    id: 'statistics',
    curriculumItemId: 'math-stats',
    subjectId: 'mathematics',
    title: 'Statistics',
    chapterLabel: 'Statistics and Probability · Unit VII',
    estimatedMinutes: 45,
    syllabusScope: 'Mean, median and mode of grouped data. Mean by direct, assumed-mean and step-deviation methods.',
    overview: 'Statistics helps you describe a collection of data with a few useful numbers. Mean, median and mode each describe the centre of a distribution in a different way.',
    learningGoals: [
      'Find class marks and cumulative frequencies.',
      'Calculate the mean by direct, assumed-mean and step-deviation methods.',
      'Find the median of grouped data.',
      'Find the mode of grouped data and identify its modal class.'
    ],
    sections: [
      {
        id: 'grouped-data',
        title: '1. Grouped data and class marks',
        explanation: 'Grouped data is arranged into class intervals with frequencies. The class mark xᵢ is the midpoint of a class interval: (lower limit + upper limit)/2. The frequency fᵢ tells how many observations lie in that interval. Total frequency N is Σfᵢ.',
        keyPoints: [
          'Class mark = (lower limit + upper limit)/2.',
          'Total observations N = Σfᵢ.',
          'Cumulative frequency is the running total of frequencies.'
        ]
      },
      {
        id: 'mean',
        title: '2. Mean by three methods',
        explanation: 'Direct method: mean = Σfᵢxᵢ/Σfᵢ. Assumed-mean method: choose an assumed mean A, calculate dᵢ = xᵢ − A, then mean = A + Σfᵢdᵢ/Σfᵢ. Step-deviation method: if class width is h, put uᵢ = (xᵢ − A)/h, then mean = A + h(Σfᵢuᵢ/Σfᵢ).',
        keyPoints: [
          'All three methods should give the same mean.',
          'Choose an assumed mean near the centre to keep deviations small.',
          'In step deviation, divide the deviation by the common class width h.'
        ]
      },
      {
        id: 'median',
        title: '3. Median of grouped data',
        explanation: 'Find N/2 and locate the class whose cumulative frequency first reaches or exceeds N/2. This is the median class. Then Median = l + [(N/2 − cf)/f] × h, where l is the lower boundary of the median class, cf is the cumulative frequency before that class, f is its frequency and h is its class width.',
        keyPoints: [
          'Calculate cumulative frequency before choosing the median class.',
          'Use the cumulative frequency before the median class for cf, not the median class total.',
          'Use the lower boundary l and class width h consistently.'
        ]
      },
      {
        id: 'mode',
        title: '4. Mode of grouped data',
        explanation: 'The modal class is the class with the highest frequency. For grouped data, Mode = l + [(f₁ − f₀)/(2f₁ − f₀ − f₂)] × h, where l is the lower boundary of the modal class, f₁ is its frequency, f₀ is the preceding frequency, f₂ is the succeeding frequency and h is the class width.',
        keyPoints: [
          'Find the highest frequency to identify the modal class.',
          'f₀ is before the modal class and f₂ is after it.',
          'Check the denominator 2f₁ − f₀ − f₂ before substituting.'
        ]
      }
    ],
    workedExamples: [
      {
        id: 'stats-example-1',
        title: 'Example 1 · Mean by direct method',
        question: 'For classes 0–10, 10–20, 20–30, 30–40 with frequencies 3, 8, 5, 4, find the mean.',
        steps: [
          'Class marks are 5, 15, 25 and 35.',
          'Multiply by frequencies: 3×5 = 15, 8×15 = 120, 5×25 = 125, 4×35 = 140.',
          'Σfᵢxᵢ = 400 and Σfᵢ = 20.',
          'Mean = 400/20.'
        ],
        answer: 'Mean = 20.'
      },
      {
        id: 'stats-example-2',
        title: 'Example 2 · Median of grouped data',
        question: 'For the same grouped data, find the median.',
        steps: [
          'Total frequency N = 20, so N/2 = 10.',
          'Cumulative frequencies are 3, 11, 16, 20. The median class is 10–20.',
          'Here l = 10, cf = 3, f = 8 and h = 10.',
          'Median = 10 + [(10 − 3)/8] × 10 = 10 + 8.75.'
        ],
        answer: 'Median = 18.75.'
      },
      {
        id: 'stats-example-3',
        title: 'Example 3 · Mode of grouped data',
        question: 'For the same grouped data, find the mode.',
        steps: [
          'The highest frequency is 8, so the modal class is 10–20.',
          'Here l = 10, f₁ = 8, f₀ = 3, f₂ = 5 and h = 10.',
          'Mode = 10 + [(8 − 3)/(2×8 − 3 − 5)] × 10.',
          'Mode = 10 + (5/8) × 10 = 16.25.'
        ],
        answer: 'Mode = 16.25.'
      },
      {
        id: 'stats-example-4',
        title: 'Example 4 · Assumed mean and step deviation',
        question: 'Use A = 15 and h = 10 for the same data to calculate the mean by the step-deviation method.',
        steps: [
          'Class marks xᵢ are 5, 15, 25 and 35. Calculate uᵢ = (xᵢ − 15)/10: −1, 0, 1, 2.',
          'Multiply by frequencies 3, 8, 5 and 4: fᵢuᵢ = −3, 0, 5, 8.',
          'Σfᵢuᵢ = 10 and Σfᵢ = 20.',
          'Mean = A + h(Σfᵢuᵢ/Σfᵢ) = 15 + 10(10/20).'
        ],
        answer: 'Mean = 20.'
      }
    ],
    keyFacts: [
      { title: 'Class mark', detail: '(Lower limit + upper limit)/2.' },
      { title: 'Direct mean', detail: 'Σfᵢxᵢ/Σfᵢ.' },
      { title: 'Median', detail: 'l + [(N/2 − cf)/f] × h.' },
      { title: 'Mode', detail: 'l + [(f₁ − f₀)/(2f₁ − f₀ − f₂)] × h.' }
    ],
    questions: [
      {
        id: 'stats-q1',
        prompt: 'How do you calculate a class mark?',
        choices: [{ id: 'a', text: 'Upper limit − lower limit' }, { id: 'b', text: '(Lower limit + upper limit)/2' }, { id: 'c', text: 'Frequency × class width' }, { id: 'd', text: 'Cumulative frequency/2' }],
        answer: 'b',
        explanation: 'The class mark is the midpoint of the two class limits.'
      },
      {
        id: 'stats-q2',
        prompt: 'What is the direct-method formula for mean of grouped data?',
        choices: [{ id: 'a', text: 'Σfᵢxᵢ/Σfᵢ' }, { id: 'b', text: 'Σxᵢ/Σfᵢ' }, { id: 'c', text: 'l + [(N/2−cf)/f]h' }, { id: 'd', text: '2πr' }],
        answer: 'a',
        explanation: 'Multiply each class mark by its frequency, add the products, and divide by the total frequency.'
      },
      {
        id: 'stats-q3',
        prompt: 'What is the median class?',
        choices: [{ id: 'a', text: 'The class with the highest frequency' }, { id: 'b', text: 'The first class' }, { id: 'c', text: 'The class whose cumulative frequency first reaches or exceeds N/2' }, { id: 'd', text: 'The class with the lowest frequency' }],
        answer: 'c',
        explanation: 'Locate N/2 in the cumulative-frequency column. The first class reaching that value is the median class.'
      },
      {
        id: 'stats-q4',
        prompt: 'In the grouped-data mode formula, what is f₁?',
        choices: [{ id: 'a', text: 'Frequency of the modal class' }, { id: 'b', text: 'Frequency of the preceding class' }, { id: 'c', text: 'Frequency of the succeeding class' }, { id: 'd', text: 'Total frequency' }],
        answer: 'a',
        explanation: 'f₁ is the frequency of the modal class, the class with the greatest frequency.'
      }
    ],
    sourceUrl: mathematicsSource,
    sourceLabel: 'CBSE Mathematics · Class X · 2026–27 · page 7'
  },
  {
    id: 'probability',
    curriculumItemId: 'math-prob',
    subjectId: 'mathematics',
    title: 'Probability',
    chapterLabel: 'Statistics and Probability · Unit VII',
    estimatedMinutes: 25,
    syllabusScope: 'Classical definition of probability and simple problems on finding the probability of an event.',
    overview: 'Probability describes how likely an event is. In the classical model, when all outcomes are equally likely, compare the number of favourable outcomes with the total number of possible outcomes.',
    learningGoals: [
      'Describe a sample space and an event.',
      'Count equally likely outcomes.',
      'Calculate the probability of a simple event.',
      'Use the basic range and complement rules.'
    ],
    sections: [
      {
        id: 'sample-space',
        title: '1. Outcomes, sample space and events',
        explanation: 'An outcome is one possible result of an experiment. The sample space is the set of all possible outcomes. An event is a collection of outcomes that match a condition. For one fair coin toss, the sample space is {H, T}; the event “get a head” contains only H.',
        keyPoints: [
          'List all possible outcomes before counting favourable ones.',
          'An event may contain one or more outcomes.',
          'For a fair coin or fair die, each individual outcome is equally likely.'
        ]
      },
      {
        id: 'classical-probability',
        title: '2. Classical probability',
        explanation: 'When all outcomes are equally likely, P(E) = number of favourable outcomes / total number of outcomes in the sample space. Make sure the outcomes are counted without duplication and that the experiment is fair if you are treating outcomes as equally likely.',
        keyPoints: [
          'P(E) = n(E)/n(S), for equally likely outcomes.',
          'Probability is between 0 and 1 inclusive.',
          'An impossible event has probability 0; a certain event has probability 1.'
        ]
      },
      {
        id: 'complement',
        title: '3. Complement of an event',
        explanation: 'The complement of an event E means that E does not occur. The probability of “not E” is 1 − P(E), because E and its complement together cover the full sample space and cannot occur at the same time.',
        keyPoints: [
          'P(not E) = 1 − P(E).',
          'Use the complement when it is easier to count outcomes that do not match the event.',
          'The probabilities of an event and its complement add up to 1.'
        ]
      }
    ],
    workedExamples: [
      {
        id: 'prob-example-1',
        title: 'Example 1 · Fair coin',
        question: 'A fair coin is tossed once. Find the probability of getting a head.',
        steps: [
          'Sample space S = {H, T}, so n(S) = 2.',
          'Favourable outcomes for a head = {H}, so n(E) = 1.',
          'P(E) = n(E)/n(S) = 1/2.'
        ],
        answer: '1/2.'
      },
      {
        id: 'prob-example-2',
        title: 'Example 2 · A fair die',
        question: 'A fair die is rolled once. Find the probability of getting a prime number.',
        steps: [
          'Sample space S = {1, 2, 3, 4, 5, 6}, so there are 6 outcomes.',
          'Prime outcomes are 2, 3 and 5, so there are 3 favourable outcomes.',
          'Probability = 3/6.'
        ],
        answer: '1/2.'
      },
      {
        id: 'prob-example-3',
        title: 'Example 3 · Complement',
        question: 'A fair die is rolled. Find the probability of not getting a 6.',
        steps: [
          'P(getting a 6) = 1/6.',
          'Use P(not E) = 1 − P(E).',
          'P(not getting a 6) = 1 − 1/6.'
        ],
        answer: '5/6.'
      }
    ],
    keyFacts: [
      { title: 'Classical probability', detail: 'P(E) = favourable outcomes / total equally likely outcomes.' },
      { title: 'Impossible event', detail: 'P(E) = 0.' },
      { title: 'Certain event', detail: 'P(E) = 1.' },
      { title: 'Complement', detail: 'P(not E) = 1 − P(E).' }
    ],
    questions: [
      {
        id: 'prob-q1',
        prompt: 'A fair coin is tossed once. What is the probability of tails?',
        choices: [{ id: 'a', text: '0' }, { id: 'b', text: '1/4' }, { id: 'c', text: '1/2' }, { id: 'd', text: '1' }],
        answer: 'c',
        explanation: 'There are two equally likely outcomes, H and T, and one is tails. So probability = 1/2.'
      },
      {
        id: 'prob-q2',
        prompt: 'What is the probability of rolling a number greater than 4 on a fair six-sided die?',
        choices: [{ id: 'a', text: '1/6' }, { id: 'b', text: '1/3' }, { id: 'c', text: '1/2' }, { id: 'd', text: '2/3' }],
        answer: 'b',
        explanation: 'The favourable outcomes are 5 and 6: 2/6 = 1/3.'
      },
      {
        id: 'prob-q3',
        prompt: 'What is the probability of an impossible event?',
        choices: [{ id: 'a', text: '0' }, { id: 'b', text: '1/2' }, { id: 'c', text: '1' }, { id: 'd', text: '2' }],
        answer: 'a',
        explanation: 'An impossible event has no favourable outcomes, so its probability is zero.'
      },
      {
        id: 'prob-q4',
        prompt: 'If P(E) = 0.35, what is P(not E)?',
        choices: [{ id: 'a', text: '0.35' }, { id: 'b', text: '0.55' }, { id: 'c', text: '0.65' }, { id: 'd', text: '1.35' }],
        answer: 'c',
        explanation: 'P(not E) = 1 − P(E) = 1 − 0.35 = 0.65.'
      }
    ],
    sourceUrl: mathematicsSource,
    sourceLabel: 'CBSE Mathematics · Class X · 2026–27 · page 7'
  }
,
  {
    id: 'chemical-reactions-and-equations',
    curriculumItemId: 'sci-reaction',
    subjectId: 'science',
    title: 'Chemical Reactions and Equations',
    chapterLabel: 'Chemical Substances · Unit I · Board scope',
    estimatedMinutes: 40,
    syllabusScope: 'Chemical reactions and equations; balancing; combination, decomposition, displacement, double displacement and precipitation; endothermic/exothermic reactions; oxidation and reduction.',
    overview: 'A chemical reaction changes the starting substances into new substances. Chemical equations give a compact way to describe these changes, while balancing ensures that the number of each type of atom is conserved.',
    learningGoals: [
      'Recognise common signs that a chemical reaction may have occurred.',
      'Write word equations and balance simple chemical equations.',
      'Classify the main reaction types.',
      'Explain oxidation, reduction and energy changes in reactions.'
    ],
    sections: [
      {
        id: 'chemical-change',
        title: '1. What happens in a chemical reaction?',
        explanation: 'In a chemical reaction, atoms are rearranged as old bonds break and new bonds form. The substances present at the start are reactants; the new substances formed are products. Possible observations include a colour change, gas formation, a precipitate, or a temperature change. A single observation should be interpreted carefully because it is not always proof by itself.',
        keyPoints: [
          'Reactants are written on the left; products on the right.',
          'A precipitate is an insoluble solid formed in a solution.',
          'Atoms are rearranged; they are not created or destroyed in an ordinary chemical reaction.'
        ]
      },
      {
        id: 'balanced-equations',
        title: '2. Writing and balancing equations',
        explanation: 'A chemical equation is balanced when the number of atoms of every element is the same on both sides. This follows the law of conservation of mass. Change the coefficients in front of formulae to balance an equation; do not change the small numbers inside a chemical formula, because that would change the substance.',
        keyPoints: [
          'Count atoms of each element on both sides.',
          'Use coefficients to balance the equation.',
          'Reduce coefficients to the smallest whole-number ratio when possible.',
          'Add state symbols or reaction conditions when the question asks for them.'
        ]
      },
      {
        id: 'reaction-types',
        title: '3. Common reaction types',
        explanation: 'Combination: two or more reactants form one product. Decomposition: one compound breaks into simpler substances, often with heat, light or electricity. Displacement: a more reactive element replaces a less reactive element from a compound. Double displacement: ions exchange partners; a precipitation reaction forms an insoluble solid.',
        keyPoints: [
          'Combination: A + B → AB.',
          'Decomposition: AB → A + B.',
          'Displacement: A + BC → AC + B, when A is more reactive than B.',
          'Double displacement: AB + CD → AD + CB.'
        ]
      },
      {
        id: 'energy-redox',
        title: '4. Energy change, oxidation and reduction',
        explanation: 'An exothermic reaction releases energy to the surroundings, often warming them. An endothermic reaction absorbs energy. Oxidation can be described as the addition of oxygen or removal of hydrogen; reduction is the removal of oxygen or addition of hydrogen. In a redox reaction, oxidation and reduction occur together.',
        keyPoints: [
          'Respiration and combustion are familiar exothermic processes.',
          'A reaction that requires a continuous energy input may be endothermic.',
          'Oxidation and reduction are paired processes in a redox reaction.',
          'Copper oxide + hydrogen → copper + water: copper oxide is reduced and hydrogen is oxidised.'
        ]
      }
    ],
    workedExamples: [
      {
        id: 'chem-example-1',
        title: 'Example 1 · Balance an equation',
        question: 'Balance: Mg + O₂ → MgO.',
        steps: [
          'There are two oxygen atoms on the left but one on the right.',
          'Put coefficient 2 before MgO: Mg + O₂ → 2MgO.',
          'Now there are two magnesium atoms on the right, so put coefficient 2 before Mg.',
          'Check: two Mg atoms and two O atoms appear on each side.'
        ],
        answer: '2Mg + O₂ → 2MgO.'
      },
      {
        id: 'chem-example-2',
        title: 'Example 2 · Identify the reaction type',
        question: 'Iron is placed in copper sulphate solution: Fe + CuSO₄ → FeSO₄ + Cu. Classify the reaction.',
        steps: [
          'Iron is more reactive than copper.',
          'Iron replaces copper in copper sulphate.',
          'One element replaces another element from a compound.'
        ],
        answer: 'Displacement reaction.'
      },
      {
        id: 'chem-example-3',
        title: 'Example 3 · Precipitation reaction',
        question: 'Aqueous sodium sulphate reacts with barium chloride. Write the balanced equation and name the precipitate.',
        steps: [
          'The ions exchange partners to form barium sulphate and sodium chloride.',
          'Write Na₂SO₄ + BaCl₂ → BaSO₄ + NaCl.',
          'Balance sodium and chlorine by putting coefficient 2 before NaCl.',
          'Barium sulphate is insoluble in water and forms the precipitate.'
        ],
        answer: 'Na₂SO₄ + BaCl₂ → BaSO₄↓ + 2NaCl; the precipitate is barium sulphate.'
      }
    ],
    keyFacts: [
      { title: 'Conservation of mass', detail: 'Total mass of reactants equals total mass of products in a closed system.' },
      { title: 'Combination', detail: 'Two or more reactants form one product.' },
      { title: 'Decomposition', detail: 'One compound breaks into simpler products.' },
      { title: 'Redox', detail: 'Oxidation and reduction occur together.' }
    ],
    questions: [
      {
        id: 'sci-reaction-q1',
        prompt: 'What should you change when balancing a chemical equation?',
        choices: [{ id: 'a', text: 'Subscripts inside formulae' }, { id: 'b', text: 'The element symbols' }, { id: 'c', text: 'Coefficients in front of formulae' }, { id: 'd', text: 'The identities of products' }],
        answer: 'c',
        explanation: 'Coefficients change the number of particles while keeping the chemical identity of each substance unchanged.'
      },
      {
        id: 'sci-reaction-q2',
        prompt: 'Which reaction type is represented by CaO + H₂O → Ca(OH)₂?',
        choices: [{ id: 'a', text: 'Combination' }, { id: 'b', text: 'Decomposition' }, { id: 'c', text: 'Displacement' }, { id: 'd', text: 'Double displacement' }],
        answer: 'a',
        explanation: 'Two reactants combine to form one product, calcium hydroxide.'
      },
      {
        id: 'sci-reaction-q3',
        prompt: 'In Fe + CuSO₄ → FeSO₄ + Cu, which substance is displaced?',
        choices: [{ id: 'a', text: 'Iron' }, { id: 'b', text: 'Copper' }, { id: 'c', text: 'Sulphate' }, { id: 'd', text: 'Oxygen' }],
        answer: 'b',
        explanation: 'Iron replaces copper from copper sulphate, so copper is displaced.'
      },
      {
        id: 'sci-reaction-q4',
        prompt: 'In a redox reaction, what happens?',
        choices: [{ id: 'a', text: 'Only oxidation occurs' }, { id: 'b', text: 'Only reduction occurs' }, { id: 'c', text: 'Oxidation and reduction occur together' }, { id: 'd', text: 'No atoms are rearranged' }],
        answer: 'c',
        explanation: 'Oxidation and reduction are paired changes in the same overall redox reaction.'
      }
    ],
    sourceUrl: scienceSource,
    sourceLabel: 'CBSE Science · Class X · 2026–27 · Unit I'
  },
  {
    id: 'life-processes',
    curriculumItemId: 'sci-life',
    subjectId: 'science',
    title: 'Life Processes',
    chapterLabel: 'World of Living · Unit II · Board scope',
    estimatedMinutes: 45,
    syllabusScope: 'Basic concepts of nutrition, respiration, transport and excretion in plants and animals.',
    overview: 'Living organisms need energy and materials, and they need ways to move substances around and remove wastes. Nutrition, respiration, transport and excretion are the life processes that keep an organism functioning.',
    learningGoals: [
      'Compare autotrophic and heterotrophic nutrition.',
      'Describe photosynthesis and the path of food through the human digestive system.',
      'Compare aerobic and anaerobic respiration.',
      'Explain transport and excretion in plants and humans.'
    ],
    sections: [
      {
        id: 'nutrition',
        title: '1. Nutrition',
        explanation: 'Autotrophs make their own food from simple inorganic substances. In photosynthesis, green plants use light energy absorbed by chlorophyll to convert carbon dioxide and water into glucose, releasing oxygen. Heterotrophs obtain food from other organisms. Human digestion breaks large food molecules into smaller soluble molecules that can be absorbed.',
        keyPoints: [
          'Photosynthesis: 6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂ (in the presence of light and chlorophyll).',
          'Salivary amylase begins starch digestion in the mouth.',
          'Most absorption of digested food occurs in the small intestine.',
          'The large intestine absorbs water from undigested material.'
        ]
      },
      {
        id: 'respiration',
        title: '2. Respiration',
        explanation: 'Cellular respiration releases energy from food. Aerobic respiration uses oxygen and releases more energy; it mainly takes place in mitochondria. When oxygen is insufficient, some cells can release energy anaerobically. In yeast, anaerobic respiration produces ethanol and carbon dioxide; in human muscles it may produce lactic acid.',
        keyPoints: [
          'Aerobic respiration: glucose + oxygen → carbon dioxide + water + energy.',
          'Yeast can respire anaerobically to form ethanol and carbon dioxide.',
          'Muscle cells may form lactic acid when oxygen supply is insufficient during intense activity.',
          'Breathing brings air into the lungs; cellular respiration occurs inside cells.'
        ]
      },
      {
        id: 'transport',
        title: '3. Transport',
        explanation: 'In plants, xylem carries water and minerals mainly from roots to other parts, while phloem transports food made in leaves to growing or storage regions. In humans, the heart pumps blood through blood vessels. Blood transports oxygen, nutrients, hormones and wastes.',
        keyPoints: [
          'Xylem transports water and dissolved minerals.',
          'Phloem transports prepared food; movement can occur in different directions as needed.',
          'The human heart has four chambers that help keep oxygen-rich and oxygen-poor blood separated.',
          'Blood vessels include arteries, veins and capillaries.'
        ]
      },
      {
        id: 'excretion',
        title: '4. Excretion',
        explanation: 'Excretion removes metabolic waste products. In humans, kidneys filter blood and form urine. The nephron is the functional unit of a kidney: filtration occurs in the glomerulus, followed by selective reabsorption and secretion along the tubule. Plants remove or store wastes in different ways, including diffusion, shedding leaves and storing substances in vacuoles.',
        keyPoints: [
          'Kidneys filter blood and help regulate water and salt balance.',
          'Urine travels from kidneys through ureters to the urinary bladder and then leaves through the urethra.',
          'Plants do not have a single specialised excretory organ like human kidneys.',
          'Dialysis can help remove wastes when kidneys are unable to function adequately.'
        ]
      }
    ],
    workedExamples: [
      {
        id: 'life-example-1',
        title: 'Example 1 · Photosynthesis equation',
        question: 'Name the raw materials and products in photosynthesis.',
        steps: [
          'Plants take in carbon dioxide from the air and water from the soil.',
          'Light energy is absorbed by chlorophyll.',
          'Glucose is formed and oxygen is released.'
        ],
        answer: 'Raw materials: carbon dioxide and water. Products: glucose and oxygen.'
      },
      {
        id: 'life-example-2',
        title: 'Example 2 · Xylem or phloem?',
        question: 'A plant transports dissolved sugars from a leaf to a growing root. Which tissue does this?',
        steps: [
          'The material being transported is food made during photosynthesis.',
          'Food transport is carried out by phloem.',
          'Xylem is responsible mainly for water and mineral transport.'
        ],
        answer: 'Phloem.'
      },
      {
        id: 'life-example-3',
        title: 'Example 3 · Nephron function',
        question: 'Why is selective reabsorption needed in a nephron?',
        steps: [
          'Filtration allows water and small dissolved substances to enter the nephron tubule.',
          'Useful substances such as glucose, required salts and much of the water must be returned to the blood.',
          'The remaining fluid becomes urine and carries waste away.'
        ],
        answer: 'Selective reabsorption returns useful substances to the blood and helps regulate the body’s water and salt balance.'
      }
    ],
    keyFacts: [
      { title: 'Photosynthesis', detail: 'Uses light energy to make glucose from carbon dioxide and water.' },
      { title: 'Aerobic respiration', detail: 'Uses oxygen and releases energy from glucose.' },
      { title: 'Xylem', detail: 'Carries water and minerals in plants.' },
      { title: 'Nephron', detail: 'Functional unit of a kidney.' }
    ],
    questions: [
      {
        id: 'sci-life-q1',
        prompt: 'Which pigment absorbs light energy for photosynthesis?',
        choices: [{ id: 'a', text: 'Haemoglobin' }, { id: 'b', text: 'Chlorophyll' }, { id: 'c', text: 'Insulin' }, { id: 'd', text: 'Melanin' }],
        answer: 'b',
        explanation: 'Chlorophyll in chloroplasts absorbs light energy used in photosynthesis.'
      },
      {
        id: 'sci-life-q2',
        prompt: 'Which plant tissue transports prepared food?',
        choices: [{ id: 'a', text: 'Xylem' }, { id: 'b', text: 'Phloem' }, { id: 'c', text: 'Epidermis' }, { id: 'd', text: 'Stomata' }],
        answer: 'b',
        explanation: 'Phloem transports sugars and other prepared food around the plant.'
      },
      {
        id: 'sci-life-q3',
        prompt: 'Where does most absorption of digested food occur in humans?',
        choices: [{ id: 'a', text: 'Stomach' }, { id: 'b', text: 'Large intestine' }, { id: 'c', text: 'Small intestine' }, { id: 'd', text: 'Oesophagus' }],
        answer: 'c',
        explanation: 'The small intestine has villi that provide a large surface area for absorption.'
      },
      {
        id: 'sci-life-q4',
        prompt: 'What is the functional unit of the kidney?',
        choices: [{ id: 'a', text: 'Neuron' }, { id: 'b', text: 'Alveolus' }, { id: 'c', text: 'Nephron' }, { id: 'd', text: 'Villus' }],
        answer: 'c',
        explanation: 'A nephron carries out filtration and the processes that form urine.'
      }
    ],
    sourceUrl: scienceSource,
    sourceLabel: 'CBSE Science · Class X · 2026–27 · Unit II'
  },
  {
    id: 'control-and-coordination',
    curriculumItemId: 'sci-control',
    subjectId: 'science',
    title: 'Control and Coordination',
    chapterLabel: 'World of Living · Unit II · Board scope',
    estimatedMinutes: 40,
    syllabusScope: 'Tropic movements in plants, introduction to plant hormones, nervous system in animals, voluntary/involuntary/reflex actions and animal hormones.',
    overview: 'Organisms respond to changes around them. Plants use growth responses and chemical signals, while animals coordinate fast responses through nerves and longer-lasting regulation through hormones.',
    learningGoals: [
      'Explain tropic movements in plants.',
      'Identify the roles of auxin and other plant hormones.',
      'Describe a neuron and a reflex arc.',
      'Distinguish voluntary, involuntary and reflex actions, and explain animal hormones.'
    ],
    sections: [
      {
        id: 'plant-tropisms',
        title: '1. Tropic movements in plants',
        explanation: 'A tropic movement is a directional growth response to a stimulus. Shoots generally grow towards light (positive phototropism), roots generally grow towards gravity (positive geotropism), and roots often grow towards water (positive hydrotropism). Tendrils can coil around a support in response to touch (thigmotropism).',
        keyPoints: [
          'Phototropism: response to light.',
          'Geotropism: response to gravity.',
          'Hydrotropism: response to water.',
          'Thigmotropism: response to touch.'
        ]
      },
      {
        id: 'plant-hormones',
        title: '2. Plant hormones',
        explanation: 'Plant hormones coordinate growth and responses. Auxin can promote cell elongation and helps explain how a shoot bends towards light. Gibberellins promote stem growth, cytokinins promote cell division, and abscisic acid can inhibit growth and promote responses such as stomatal closure during water stress.',
        keyPoints: [
          'Auxin is associated with cell elongation and phototropic bending.',
          'Gibberellins promote stem growth.',
          'Cytokinins promote cell division.',
          'Abscisic acid is generally associated with growth inhibition and stress responses.'
        ]
      },
      {
        id: 'nervous-system',
        title: '3. Neurons and the nervous system',
        explanation: 'A neuron is a specialised cell that carries nerve impulses. Dendrites receive information, the cell body contains the nucleus, and the axon carries impulses away. At a synapse, chemical messengers help pass the signal to another neuron or an effector. The nervous system coordinates responses using electrical impulses along neurons.',
        keyPoints: [
          'Receptors detect stimuli.',
          'Sensory neurons carry information towards the central nervous system.',
          'Motor neurons carry instructions to effectors such as muscles or glands.',
          'A synapse is the junction between two neurons or a neuron and another cell.'
        ]
      },
      {
        id: 'reflex-hormones',
        title: '4. Reflexes and chemical coordination',
        explanation: 'A reflex action is a quick, automatic response that helps protect the body. A reflex arc often passes from receptor to sensory neuron, through the spinal cord, along a motor neuron and to an effector. Hormones are chemical messengers carried in blood; they usually act more slowly than nerve impulses but can have longer-lasting effects.',
        keyPoints: [
          'Voluntary actions are under conscious control.',
          'Involuntary actions occur without conscious control.',
          'Reflex actions are rapid, automatic responses.',
          'Insulin helps regulate blood glucose; adrenaline prepares the body for emergency responses.'
        ]
      }
    ],
    workedExamples: [
      {
        id: 'control-example-1',
        title: 'Example 1 · Directional growth',
        question: 'A potted plant is kept near a window. Its shoot bends towards the window. Name the response.',
        steps: [
          'The shoot is responding to the direction of light.',
          'Growth towards the light is positive phototropism.',
          'Auxin redistribution helps cells on one side elongate more than the other.'
        ],
        answer: 'Positive phototropism.'
      },
      {
        id: 'control-example-2',
        title: 'Example 2 · Reflex arc',
        question: 'Why can a person withdraw a hand quickly after touching a hot object?',
        steps: [
          'Receptors in the skin detect the harmful heat stimulus.',
          'A sensory neuron carries the impulse to the spinal cord.',
          'A motor neuron sends a signal to muscles in the arm.',
          'The muscles contract and withdraw the hand; the brain is informed as well.'
        ],
        answer: 'A protective reflex action coordinated through a reflex arc.'
      },
      {
        id: 'control-example-3',
        title: 'Example 3 · Nerve or hormone?',
        question: 'A sudden increase in heart rate during an emergency involves which hormone?',
        steps: [
          'The body is preparing for a rapid emergency response.',
          'The adrenal glands release adrenaline into the blood.',
          'Adrenaline increases heart rate and prepares the body for action.'
        ],
        answer: 'Adrenaline.'
      }
    ],
    keyFacts: [
      { title: 'Phototropism', detail: 'Directional growth response to light.' },
      { title: 'Auxin', detail: 'Plant hormone associated with cell elongation.' },
      { title: 'Reflex arc', detail: 'Receptor → sensory neuron → CNS → motor neuron → effector.' },
      { title: 'Insulin', detail: 'Helps regulate blood glucose.' }
    ],
    questions: [
      {
        id: 'sci-control-q1',
        prompt: 'A shoot bends towards light. Which response is this?',
        choices: [{ id: 'a', text: 'Geotropism' }, { id: 'b', text: 'Phototropism' }, { id: 'c', text: 'Hydrotropism' }, { id: 'd', text: 'Thigmotropism' }],
        answer: 'b',
        explanation: 'Phototropism is directional growth in response to light.'
      },
      {
        id: 'sci-control-q2',
        prompt: 'Which part of a neuron usually receives signals from other neurons?',
        choices: [{ id: 'a', text: 'Dendrites' }, { id: 'b', text: 'Axon terminal only' }, { id: 'c', text: 'Myelin only' }, { id: 'd', text: 'Nucleus only' }],
        answer: 'a',
        explanation: 'Dendrites receive signals and carry them towards the cell body.'
      },
      {
        id: 'sci-control-q3',
        prompt: 'Which is a rapid, automatic response to a stimulus?',
        choices: [{ id: 'a', text: 'Voluntary action' }, { id: 'b', text: 'Reflex action' }, { id: 'c', text: 'Learned calculation' }, { id: 'd', text: 'Long-term growth' }],
        answer: 'b',
        explanation: 'A reflex action is a quick, automatic response that often protects the body.'
      },
      {
        id: 'sci-control-q4',
        prompt: 'Which hormone helps regulate blood glucose?',
        choices: [{ id: 'a', text: 'Auxin' }, { id: 'b', text: 'Adrenaline' }, { id: 'c', text: 'Insulin' }, { id: 'd', text: 'Gibberellin' }],
        answer: 'c',
        explanation: 'Insulin helps lower blood glucose by supporting uptake and storage of glucose.'
      }
    ],
    sourceUrl: scienceSource,
    sourceLabel: 'CBSE Science · Class X · 2026–27 · Unit II'
  },
  {
    id: 'reproduction',
    curriculumItemId: 'sci-reproduction',
    subjectId: 'science',
    title: 'How Do Organisms Reproduce?',
    chapterLabel: 'World of Living · Unit II · Board scope',
    estimatedMinutes: 45,
    syllabusScope: 'Asexual and sexual reproduction in plants and animals; reproductive health, family planning, safe sex and HIV/AIDS awareness.',
    overview: 'Reproduction allows living organisms to produce offspring. Asexual reproduction uses one parent and usually produces genetically similar offspring, while sexual reproduction combines genetic material from two gametes.',
    learningGoals: [
      'Compare asexual and sexual reproduction.',
      'Describe common asexual methods and sexual reproduction in flowering plants.',
      'Outline the basic human reproductive processes.',
      'Explain the purpose of reproductive health and informed prevention.'
    ],
    sections: [
      {
        id: 'asexual',
        title: '1. Asexual reproduction',
        explanation: 'Asexual reproduction involves a single parent and no fusion of gametes. Common methods include fission, budding, fragmentation, spore formation and vegetative propagation. It can be fast, but offspring are usually genetically very similar to the parent, apart from mutations.',
        keyPoints: [
          'Binary fission: one cell divides into two daughter cells, as in Amoeba.',
          'Budding: a small outgrowth develops and may separate, as in yeast or Hydra.',
          'Spore formation helps organisms such as Rhizopus reproduce and disperse.',
          'Vegetative propagation uses roots, stems or leaves to form new plants.'
        ]
      },
      {
        id: 'sexual-plants',
        title: '2. Sexual reproduction in flowering plants',
        explanation: 'The stamen is the male reproductive part of a flower and produces pollen. The carpel contains the stigma, style and ovary. Pollination transfers pollen to the stigma. A pollen tube grows towards the ovule, where the male gamete fuses with the female gamete during fertilisation. The ovule develops into a seed and the ovary develops into a fruit.',
        keyPoints: [
          'Pollination is the transfer of pollen from anther to stigma.',
          'Fertilisation is the fusion of male and female gametes.',
          'The ovule develops into a seed; the ovary develops into a fruit.'
        ]
      },
      {
        id: 'human-reproduction',
        title: '3. Human reproduction',
        explanation: 'In humans, the testes produce sperm and the ovaries produce ova. Fertilisation usually occurs in the oviduct. The resulting zygote divides and may implant in the uterus, where the embryo develops. Reproductive systems also produce hormones that regulate reproductive functions.',
        keyPoints: [
          'Testes produce sperm and testosterone.',
          'Ovaries produce ova and hormones including oestrogen and progesterone.',
          'The uterus is where the embryo implants and develops during pregnancy.',
          'The placenta enables exchange of materials between maternal and foetal blood without normally mixing the two blood supplies.'
        ]
      },
      {
        id: 'reproductive-health',
        title: '4. Reproductive health and prevention',
        explanation: 'Reproductive health includes physical, emotional and social well-being related to reproduction. Family-planning methods include barrier methods, hormonal methods and intrauterine devices; permanent methods are also available. Condoms can reduce the risk of many sexually transmitted infections, including HIV, as well as pregnancy. HIV is transmitted through specific body fluids and routes, not through casual contact such as sharing food or hugging.',
        keyPoints: [
          'Barrier methods can help prevent both pregnancy and transmission of some infections.',
          'HIV is not spread by ordinary social contact, sharing utensils or mosquito bites.',
          'Accurate information, voluntary decisions and access to healthcare are important parts of reproductive health.',
          'Never use stigma or blame when discussing a person living with HIV.'
        ]
      }
    ],
    workedExamples: [
      {
        id: 'repro-example-1',
        title: 'Example 1 · Identify the method',
        question: 'A small bud grows on a Hydra and later separates as a new individual. Name the method.',
        steps: [
          'Only one parent organism is involved.',
          'A small outgrowth develops on the parent body.',
          'The outgrowth grows and may detach.'
        ],
        answer: 'Budding.'
      },
      {
        id: 'repro-example-2',
        title: 'Example 2 · Pollination and fertilisation',
        question: 'A pollen grain lands on the stigma. What must happen before a seed can form?',
        steps: [
          'The pollen grain germinates and forms a pollen tube.',
          'The male gamete travels through the tube towards the ovule.',
          'The male gamete fuses with the female gamete in fertilisation.',
          'The fertilised ovule develops into a seed.'
        ],
        answer: 'Fertilisation must occur after the pollen tube reaches the ovule.'
      },
      {
        id: 'repro-example-3',
        title: 'Example 3 · HIV transmission',
        question: 'Can HIV spread through sharing a meal or hugging a person living with HIV?',
        steps: [
          'HIV is not transmitted through ordinary casual contact.',
          'Sharing food, hugging and using the same toilet do not spread HIV.',
          'Transmission requires specific routes, such as certain body-fluid exposures.'
        ],
        answer: 'No. Sharing a meal or hugging does not transmit HIV.'
      }
    ],
    keyFacts: [
      { title: 'Asexual reproduction', detail: 'One parent; no fusion of gametes.' },
      { title: 'Pollination', detail: 'Transfer of pollen from anther to stigma.' },
      { title: 'Fertilisation', detail: 'Fusion of male and female gametes.' },
      { title: 'HIV', detail: 'Not spread by casual contact such as hugging or sharing food.' }
    ],
    questions: [
      {
        id: 'sci-reproduction-q1',
        prompt: 'Which method of reproduction is shown by a bud forming on Hydra?',
        choices: [{ id: 'a', text: 'Binary fission' }, { id: 'b', text: 'Budding' }, { id: 'c', text: 'Spore formation' }, { id: 'd', text: 'Fragmentation' }],
        answer: 'b',
        explanation: 'Hydra can reproduce asexually by forming a bud that grows and may detach.'
      },
      {
        id: 'sci-reproduction-q2',
        prompt: 'What is pollination?',
        choices: [{ id: 'a', text: 'Fusion of gametes' }, { id: 'b', text: 'Formation of a seed' }, { id: 'c', text: 'Transfer of pollen from anther to stigma' }, { id: 'd', text: 'Growth of a fruit' }],
        answer: 'c',
        explanation: 'Pollination is pollen transfer; it occurs before fertilisation.'
      },
      {
        id: 'sci-reproduction-q3',
        prompt: 'Where does fertilisation usually occur in humans?',
        choices: [{ id: 'a', text: 'Oviduct' }, { id: 'b', text: 'Uterus wall' }, { id: 'c', text: 'Ovary surface' }, { id: 'd', text: 'Urinary bladder' }],
        answer: 'a',
        explanation: 'In humans, fertilisation usually takes place in the oviduct (fallopian tube).'
      },
      {
        id: 'sci-reproduction-q4',
        prompt: 'Which statement about HIV is correct?',
        choices: [{ id: 'a', text: 'It spreads by hugging' }, { id: 'b', text: 'It spreads by sharing a meal' }, { id: 'c', text: 'It spreads through casual contact' }, { id: 'd', text: 'It is not spread by casual contact such as hugging or sharing food' }],
        answer: 'd',
        explanation: 'HIV is not spread through casual social contact. Education should avoid stigma and misinformation.'
      }
    ],
    sourceUrl: scienceSource,
    sourceLabel: 'CBSE Science · Class X · 2026–27 · Unit II'
  },
  {
    id: 'light-reflection-and-refraction',
    curriculumItemId: 'sci-light',
    subjectId: 'science',
    title: 'Light: Reflection and Refraction',
    chapterLabel: 'Natural Phenomena · Unit III · Board scope',
    estimatedMinutes: 50,
    syllabusScope: 'Reflection by curved mirrors; spherical mirror terms, mirror formula and magnification; refraction, refractive index, spherical lenses, lens formula, magnification and power; human eye, defects and corrections; prism, dispersion and scattering.',
    overview: 'Mirrors reflect light and lenses refract it. Ray diagrams and sign conventions help predict where an image forms, while the human eye uses a lens to focus light on the retina.',
    learningGoals: [
      'Identify the principal terms for spherical mirrors and lenses.',
      'Use the mirror and lens formulae with the Cartesian sign convention.',
      'Calculate magnification and power of a lens.',
      'Explain common defects of vision and basic dispersion/scattering.'
    ],
    sections: [
      {
        id: 'curved-mirrors',
        title: '1. Spherical mirrors',
        explanation: 'A concave mirror has its reflecting surface curved inwards; a convex mirror curves outwards. The pole P is the centre of the reflecting surface, the centre of curvature C is the centre of the sphere, and the principal focus F is where rays parallel to the principal axis meet or appear to diverge from after reflection. The focal length is the distance PF and for a spherical mirror f = R/2.',
        keyPoints: [
          'Concave mirrors can form real or virtual images depending on object position.',
          'Convex mirrors form virtual, erect and diminished images for real objects.',
          'Use the Cartesian sign convention consistently in numerical problems.'
        ]
      },
      {
        id: 'mirror-formula',
        title: '2. Mirror formula and magnification',
        explanation: 'With the Cartesian sign convention, the mirror formula is 1/f = 1/v + 1/u, where u is object distance, v is image distance and f is focal length. Mirror magnification is m = hᵢ/hₒ = −v/u. The sign of magnification helps describe image orientation; a negative value indicates an inverted image.',
        keyPoints: [
          'Distances are measured from the pole along the principal axis.',
          'For a real object placed in front of a mirror, u is negative in the Cartesian convention.',
          'Substitute signed values; do not replace them with absolute values midway.'
        ]
      },
      {
        id: 'refraction-lenses',
        title: '3. Refraction and lenses',
        explanation: 'Refraction is the change in direction of light when it passes between transparent media because its speed changes. A convex lens is converging; a concave lens is diverging. For a thin lens, 1/f = 1/v − 1/u and magnification m = hᵢ/hₒ = v/u, using the Cartesian sign convention. Refractive index n = c/vₘ, where c is the speed of light in vacuum and vₘ is its speed in the medium.',
        keyPoints: [
          'A ray entering a denser medium obliquely bends towards the normal; entering a rarer medium it bends away from the normal.',
          'A convex lens can form real or virtual images depending on object position.',
          'A concave lens forms a virtual, erect and diminished image for a real object.'
        ]
      },
      {
        id: 'eye-dispersion',
        title: '4. Human eye, prism and dispersion',
        explanation: 'The eye lens focuses light on the retina. Myopia (near-sightedness) is corrected using a concave lens; hypermetropia (far-sightedness) is corrected using a convex lens. A prism can disperse white light into its component colours because different wavelengths refract by different amounts. Scattering depends on wavelength; shorter wavelengths are scattered more strongly by small particles.',
        keyPoints: [
          'Myopia: distant objects appear blurred; corrected with a concave lens.',
          'Hypermetropia: nearby objects appear blurred; corrected with a convex lens.',
          'Power of a lens P = 1/f when f is in metres; unit is dioptre (D).',
          'Dispersion separates white light into its constituent colours.'
        ]
      }
    ],
    workedExamples: [
      {
        id: 'light-example-1',
        title: 'Example 1 · Mirror focal length',
        question: 'A spherical mirror has radius of curvature 30 cm. Find its focal length.',
        steps: [
          'For a spherical mirror, f = R/2.',
          'Substitute R = 30 cm.',
          'f = 30/2 = 15 cm.',
          'The sign of f depends on whether the mirror is concave or convex; the magnitude is 15 cm.'
        ],
        answer: 'Focal-length magnitude = 15 cm.'
      },
      {
        id: 'light-example-2',
        title: 'Example 2 · Power of a lens',
        question: 'A convex lens has focal length +0.5 m. Find its power.',
        steps: [
          'Use P = 1/f when focal length is in metres.',
          'Substitute f = +0.5 m.',
          'P = 1/0.5 = +2.'
        ],
        answer: 'Power = +2 D.'
      },
      {
        id: 'light-example-3',
        title: 'Example 3 · Correct a vision defect',
        question: 'A student can see nearby objects clearly but distant objects look blurred. Which lens is used for correction?',
        steps: [
          'The defect is myopia (near-sightedness).',
          'A concave lens diverges incoming light before it enters the eye.',
          'This helps the eye focus the image on the retina.'
        ],
        answer: 'A concave lens.'
      }
    ],
    keyFacts: [
      { title: 'Mirror formula', detail: '1/f = 1/v + 1/u.' },
      { title: 'Lens formula', detail: '1/f = 1/v − 1/u.' },
      { title: 'Lens power', detail: 'P = 1/f (f in metres); unit dioptre.' },
      { title: 'Myopia', detail: 'Corrected by a concave lens.' }
    ],
    questions: [
      {
        id: 'sci-light-q1',
        prompt: 'What is the focal length of a spherical mirror with radius of curvature 40 cm?',
        choices: [{ id: 'a', text: '10 cm' }, { id: 'b', text: '20 cm' }, { id: 'c', text: '40 cm' }, { id: 'd', text: '80 cm' }],
        answer: 'b',
        explanation: 'For a spherical mirror, f = R/2 = 40/2 = 20 cm.'
      },
      {
        id: 'sci-light-q2',
        prompt: 'Which lens is used to correct myopia?',
        choices: [{ id: 'a', text: 'Convex lens' }, { id: 'b', text: 'Concave lens' }, { id: 'c', text: 'Cylindrical mirror' }, { id: 'd', text: 'Plane glass' }],
        answer: 'b',
        explanation: 'A concave lens diverges incoming rays and helps focus distant objects on the retina.'
      },
      {
        id: 'sci-light-q3',
        prompt: 'What is the SI-derived unit of lens power?',
        choices: [{ id: 'a', text: 'Metre' }, { id: 'b', text: 'Watt' }, { id: 'c', text: 'Dioptre' }, { id: 'd', text: 'Newton' }],
        answer: 'c',
        explanation: 'Power is measured in dioptres, equivalent to inverse metres.'
      },
      {
        id: 'sci-light-q4',
        prompt: 'Which formula is used for a thin lens under the Cartesian sign convention?',
        choices: [{ id: 'a', text: '1/f = 1/v + 1/u' }, { id: 'b', text: '1/f = 1/v − 1/u' }, { id: 'c', text: 'f = R/2 for every lens' }, { id: 'd', text: 'P = f' }],
        answer: 'b',
        explanation: 'The thin-lens formula is 1/f = 1/v − 1/u using the stated Cartesian sign convention.'
      }
    ],
    sourceUrl: scienceSource,
    sourceLabel: 'CBSE Science · Class X · 2026–27 · Unit III'
  },
  {
    id: 'electricity-and-magnetic-effects',
    curriculumItemId: 'sci-electric',
    subjectId: 'science',
    title: 'Electricity and Magnetic Effects of Current',
    chapterLabel: 'Effects of Current · Unit IV · Board scope',
    estimatedMinutes: 50,
    syllabusScope: 'Current, potential difference, Ohm’s law, resistance/resistivity, series and parallel combinations, heating effect, electrical power, magnetic fields, force on a current-carrying conductor, Fleming’s Left Hand Rule, AC/DC and domestic circuits. Motor, electromagnetic induction and generator are formative-only in this syllabus.',
    overview: 'Electric circuits allow charges to move and transfer energy. The same current can also create magnetic fields, linking electricity and magnetism in everyday devices and household wiring.',
    learningGoals: [
      'Use current, potential difference and resistance in circuit calculations.',
      'Apply Ohm’s law and compare series and parallel combinations.',
      'Calculate electrical heating and power.',
      'Describe magnetic fields around conductors and basic domestic-circuit safety.'
    ],
    sections: [
      {
        id: 'electric-current',
        title: '1. Current, potential difference and Ohm’s law',
        explanation: 'Electric current is the rate of flow of charge: I = Q/t. Potential difference is the work done per unit charge: V = W/Q. Ohm’s law states that, at constant physical conditions, current through a conductor is directly proportional to the potential difference across it: V = IR.',
        keyPoints: [
          'Current I is measured in amperes (A).',
          'Potential difference V is measured in volts (V).',
          'Resistance R is measured in ohms (Ω).',
          'The V–I graph for an ohmic conductor is a straight line through the origin.'
        ]
      },
      {
        id: 'resistance-combinations',
        title: '2. Resistance and circuit combinations',
        explanation: 'Resistance depends on the material, length, cross-sectional area and temperature of a conductor. For a uniform wire, R = ρl/A. In series, the same current passes through each resistor and Rₛ = R₁ + R₂ + …. In parallel, each resistor has the same potential difference and 1/Rₚ = 1/R₁ + 1/R₂ + ….',
        keyPoints: [
          'Longer wire → greater resistance, all else equal.',
          'Larger cross-sectional area → lower resistance, all else equal.',
          'Equivalent resistance in series is greater than any individual resistance.',
          'Equivalent resistance in parallel is less than the smallest branch resistance.'
        ]
      },
      {
        id: 'heating-power',
        title: '3. Heating effect and electrical power',
        explanation: 'When current flows through a resistance, electrical energy is converted to heat. Joule’s law gives H = I²Rt. Electrical power is the rate of energy transfer: P = VI. Using Ohm’s law, P = I²R = V²/R. Electrical energy consumed is power multiplied by time.',
        keyPoints: [
          'H = I²Rt, where time is measured in seconds for energy in joules.',
          'P = VI = I²R = V²/R.',
          'Commercial electrical energy is often measured in kilowatt-hours (kWh).',
          '1 kWh = 3.6 × 10⁶ joules.'
        ]
      },
      {
        id: 'magnetic-effects',
        title: '4. Magnetic effects and household circuits',
        explanation: 'A current-carrying conductor produces a magnetic field. The right-hand thumb rule gives the direction of the magnetic field around a straight conductor. A current-carrying conductor in a magnetic field can experience a force; Fleming’s Left Hand Rule gives its direction. Household appliances are connected in parallel so each receives the supply voltage and can operate independently. A fuse or circuit breaker protects against excessive current.',
        keyPoints: [
          'Magnetic field lines around a straight current-carrying wire are concentric circles.',
          'Fleming’s Left Hand Rule relates magnetic field, current and force directions.',
          'Live and neutral wires provide the supply path; earthing provides a safety path for leakage current.',
          'The formative-only motor, electromagnetic induction and generator content is not treated here as year-end board scope.'
        ]
      }
    ],
    workedExamples: [
      {
        id: 'electric-example-1',
        title: 'Example 1 · Ohm’s law',
        question: 'A 6 Ω resistor is connected across a 12 V battery. Find the current.',
        steps: [
          'Use V = IR.',
          'Rearrange: I = V/R.',
          'Substitute: I = 12/6.'
        ],
        answer: 'I = 2 A.'
      },
      {
        id: 'electric-example-2',
        title: 'Example 2 · Parallel resistance',
        question: 'Two resistors of 6 Ω and 3 Ω are connected in parallel. Find the equivalent resistance.',
        steps: [
          'Use 1/Rₚ = 1/R₁ + 1/R₂.',
          '1/Rₚ = 1/6 + 1/3 = 1/6 + 2/6 = 3/6.',
          'So 1/Rₚ = 1/2.'
        ],
        answer: 'Rₚ = 2 Ω.'
      },
      {
        id: 'electric-example-3',
        title: 'Example 3 · Electrical power',
        question: 'An appliance uses 2 A current at 220 V. Find its power.',
        steps: [
          'Use P = VI.',
          'Substitute V = 220 V and I = 2 A.',
          'P = 220 × 2.'
        ],
        answer: 'P = 440 W.'
      }
    ],
    keyFacts: [
      { title: 'Ohm’s law', detail: 'V = IR at constant physical conditions.' },
      { title: 'Series', detail: 'Rₛ = R₁ + R₂ + ….' },
      { title: 'Parallel', detail: '1/Rₚ = 1/R₁ + 1/R₂ + ….' },
      { title: 'Power', detail: 'P = VI = I²R = V²/R.' }
    ],
    questions: [
      {
        id: 'sci-electric-q1',
        prompt: 'A 4 Ω resistor is connected to a 12 V source. What current flows?',
        choices: [{ id: 'a', text: '2 A' }, { id: 'b', text: '3 A' }, { id: 'c', text: '4 A' }, { id: 'd', text: '48 A' }],
        answer: 'b',
        explanation: 'Ohm’s law gives I = V/R = 12/4 = 3 A.'
      },
      {
        id: 'sci-electric-q2',
        prompt: 'What is the equivalent resistance of 2 Ω and 3 Ω resistors connected in series?',
        choices: [{ id: 'a', text: '1.2 Ω' }, { id: 'b', text: '2.5 Ω' }, { id: 'c', text: '5 Ω' }, { id: 'd', text: '6 Ω' }],
        answer: 'c',
        explanation: 'Series resistances add: 2 + 3 = 5 Ω.'
      },
      {
        id: 'sci-electric-q3',
        prompt: 'Which rule gives the direction of force on a current-carrying conductor in a magnetic field?',
        choices: [{ id: 'a', text: 'Fleming’s Left Hand Rule' }, { id: 'b', text: 'Right-hand thumb rule only' }, { id: 'c', text: 'Law of reflection' }, { id: 'd', text: 'Snell’s law' }],
        answer: 'a',
        explanation: 'Fleming’s Left Hand Rule relates the direction of magnetic field, current and force.'
      },
      {
        id: 'sci-electric-q4',
        prompt: 'Why are household appliances generally connected in parallel?',
        choices: [{ id: 'a', text: 'Each gets a different supply voltage' }, { id: 'b', text: 'They all must switch on together' }, { id: 'c', text: 'Each receives the supply voltage and can operate independently' }, { id: 'd', text: 'The total resistance is always larger' }],
        answer: 'c',
        explanation: 'Parallel connection gives each appliance the same supply potential difference and independent operation.'
      }
    ],
    sourceUrl: scienceSource,
    sourceLabel: 'CBSE Science · Class X · 2026–27 · Unit IV'
  },
  {
    id: 'our-environment',
    curriculumItemId: 'sci-environment',
    subjectId: 'science',
    title: 'Our Environment',
    chapterLabel: 'Natural Resources · Unit V · Board scope',
    estimatedMinutes: 25,
    syllabusScope: 'Ecosystem, environmental problems, ozone depletion, waste production and solutions, and biodegradable/non-biodegradable substances.',
    overview: 'An ecosystem connects living organisms with their physical surroundings. Materials and energy move through it, and human activities can disrupt these connections when waste and pollution are not managed responsibly.',
    learningGoals: [
      'Identify biotic and abiotic parts of an ecosystem.',
      'Explain food chains and the roles of producers, consumers and decomposers.',
      'Distinguish biodegradable from non-biodegradable waste.',
      'Describe ozone depletion and practical waste-management solutions.'
    ],
    sections: [
      {
        id: 'ecosystem',
        title: '1. Ecosystems and food chains',
        explanation: 'An ecosystem includes living components (plants, animals and microorganisms) and non-living components (air, water, soil, light and temperature). Producers make food, consumers obtain energy by eating other organisms, and decomposers break down dead matter and return nutrients to the environment. A food chain shows one pathway of feeding relationships.',
        keyPoints: [
          'Producers form the starting point of most food chains.',
          'Consumers depend directly or indirectly on producers.',
          'Decomposers recycle nutrients from dead organisms and wastes.',
          'Energy flows through trophic levels; it is not recycled in the same way as matter.'
        ]
      },
      {
        id: 'waste',
        title: '2. Biodegradable and non-biodegradable waste',
        explanation: 'Biodegradable substances can be broken down by microorganisms under suitable conditions. Non-biodegradable substances do not break down easily and may persist or accumulate in the environment. Waste reduction, reuse, recycling, composting and safe disposal reduce the burden on ecosystems.',
        keyPoints: [
          'Food scraps and paper are generally biodegradable.',
          'Many plastics persist for long periods and require careful management.',
          'Segregating wet and dry waste makes treatment and recycling easier.',
          'Reduce and reuse before recycling when possible.'
        ]
      },
      {
        id: 'ozone',
        title: '3. Ozone depletion and environmental problems',
        explanation: 'The ozone layer in the stratosphere absorbs much of the Sun’s harmful ultraviolet radiation. Certain ozone-depleting substances, historically including chlorofluorocarbons (CFCs), release reactive chlorine compounds that break down ozone. Environmental problems also include air and water pollution, excessive waste and damage to habitats.',
        keyPoints: [
          'Stratospheric ozone protects life by absorbing much harmful UV radiation.',
          'CFCs can contribute to ozone depletion.',
          'Ozone depletion increases the amount of harmful UV radiation reaching Earth’s surface.',
          'International controls on ozone-depleting substances support recovery of the ozone layer.'
        ]
      },
      {
        id: 'solutions',
        title: '4. Practical solutions',
        explanation: 'Preventing waste is usually better than managing it after it is created. Choose durable products, avoid unnecessary single-use packaging, segregate waste, compost suitable organic material and send recyclable materials to appropriate collection systems. Community action and responsible industry practices are both needed.',
        keyPoints: [
          'Follow reduce, reuse and recycle.',
          'Composting returns nutrients from suitable organic waste to the soil.',
          'Do not burn mixed waste; it can release harmful pollutants.',
          'Protect local water bodies and habitats by preventing dumping.'
        ]
      }
    ],
    workedExamples: [
      {
        id: 'environment-example-1',
        title: 'Example 1 · Food chain',
        question: 'In grass → grasshopper → frog → snake, identify the producer and the primary consumer.',
        steps: [
          'Grass makes its own food by photosynthesis, so it is the producer.',
          'The grasshopper eats grass.',
          'The first organism that eats the producer is the primary consumer.'
        ],
        answer: 'Producer: grass. Primary consumer: grasshopper.'
      },
      {
        id: 'environment-example-2',
        title: 'Example 2 · Waste classification',
        question: 'Classify a banana peel and a plastic bottle as biodegradable or non-biodegradable.',
        steps: [
          'A banana peel can be broken down by microorganisms under suitable conditions.',
          'A plastic bottle persists for a long time and does not biodegrade easily.'
        ],
        answer: 'Banana peel: biodegradable. Plastic bottle: non-biodegradable.'
      },
      {
        id: 'environment-example-3',
        title: 'Example 3 · Ozone protection',
        question: 'Why is the ozone layer important for living organisms?',
        steps: [
          'The ozone layer is present in the stratosphere.',
          'It absorbs much of the Sun’s harmful ultraviolet radiation.',
          'Less harmful UV radiation reaches the surface when the ozone layer is protected.'
        ],
        answer: 'It protects life by absorbing much harmful ultraviolet radiation.'
      }
    ],
    keyFacts: [
      { title: 'Producer', detail: 'Makes its own food, usually using sunlight.' },
      { title: 'Decomposer', detail: 'Breaks down dead matter and recycles nutrients.' },
      { title: 'Biodegradable', detail: 'Can be broken down by microorganisms under suitable conditions.' },
      { title: 'Ozone layer', detail: 'Absorbs much of the Sun’s harmful ultraviolet radiation.' }
    ],
    questions: [
      {
        id: 'sci-environment-q1',
        prompt: 'Which organisms break down dead organic matter and recycle nutrients?',
        choices: [{ id: 'a', text: 'Producers' }, { id: 'b', text: 'Decomposers' }, { id: 'c', text: 'Only herbivores' }, { id: 'd', text: 'Abiotic factors' }],
        answer: 'b',
        explanation: 'Decomposers such as bacteria and fungi break down dead matter and return nutrients to the environment.'
      },
      {
        id: 'sci-environment-q2',
        prompt: 'Which material is generally biodegradable?',
        choices: [{ id: 'a', text: 'Banana peel' }, { id: 'b', text: 'Glass bottle' }, { id: 'c', text: 'Plastic wrapper' }, { id: 'd', text: 'Aluminium can' }],
        answer: 'a',
        explanation: 'A banana peel is organic matter that microorganisms can break down under suitable conditions.'
      },
      {
        id: 'sci-environment-q3',
        prompt: 'What does the stratospheric ozone layer absorb?',
        choices: [{ id: 'a', text: 'All visible light' }, { id: 'b', text: 'Much harmful ultraviolet radiation' }, { id: 'c', text: 'All sound waves' }, { id: 'd', text: 'Only infrared radiation' }],
        answer: 'b',
        explanation: 'Ozone absorbs much of the Sun’s harmful ultraviolet radiation.'
      },
      {
        id: 'sci-environment-q4',
        prompt: 'Which action follows the waste hierarchy most closely?',
        choices: [{ id: 'a', text: 'Buy disposable items for every use' }, { id: 'b', text: 'Burn mixed waste' }, { id: 'c', text: 'Reduce and reuse before recycling' }, { id: 'd', text: 'Dump waste into a water body' }],
        answer: 'c',
        explanation: 'Reducing consumption and reusing items prevent waste before recycling is needed.'
      }
    ],
    sourceUrl: scienceSource,
    sourceLabel: 'CBSE Science · Class X · 2026–27 · Unit V'
  }
,
  {
    id: 'carbon-and-its-compounds',
    curriculumItemId: 'sci-carbon',
    subjectId: 'science',
    title: 'Carbon and Its Compounds',
    chapterLabel: 'Chemical Substances · Unit I · Formative only',
    estimatedMinutes: 45,
    syllabusScope: 'Covalent bonding and properties; versatility of carbon; saturated and unsaturated hydrocarbons; homologous series; naming alkanes, alkenes, alkynes and functional groups (halogens, alcohols, ketones, aldehydes); combustion, oxidation, addition and substitution; properties/uses of ethanol, ethanoic acid, soaps and detergents. This topic is formative only.',
    overview: 'Carbon forms a huge variety of compounds because it makes four covalent bonds and can join to itself in long chains and rings. Learning the patterns of bonding and naming makes these compounds easier to understand.',
    learningGoals: [
      'Explain why carbon forms covalent bonds and many compounds.',
      'Distinguish saturated and unsaturated hydrocarbons.',
      'Recognise a homologous series and common functional groups.',
      'Describe important reactions and everyday uses of ethanol, ethanoic acid, soaps and detergents.'
    ],
    sections: [
      {
        id: 'carbon-bonding',
        title: '1. Covalent bonding and the versatility of carbon',
        explanation: 'Carbon has four electrons in its outermost shell. Losing or gaining four electrons is energetically difficult, so carbon usually shares electrons to form covalent bonds. Carbon shows catenation (bonding with other carbon atoms) and tetravalency (forming four covalent bonds), allowing chains, branches and rings.',
        keyPoints: [
          'Covalent bonds form by sharing electron pairs.',
          'Tetravalency means carbon forms four covalent bonds.',
          'Catenation is the ability of carbon atoms to bond with one another.',
          'Covalent compounds generally have relatively low melting/boiling points and do not conduct electricity well.'
        ]
      },
      {
        id: 'hydrocarbons',
        title: '2. Hydrocarbons and homologous series',
        explanation: 'Hydrocarbons contain only carbon and hydrogen. Saturated hydrocarbons have only single carbon-carbon bonds (alkanes). Unsaturated hydrocarbons contain at least one double bond (alkenes) or triple bond (alkynes). A homologous series is a family with the same functional group and general formula, in which successive members differ by a –CH₂– unit.',
        keyPoints: [
          'Alkanes: single bonds; general formula CₙH₂ₙ₊₂ for open-chain members.',
          'Alkenes: at least one double bond; general formula CₙH₂ₙ for one open-chain double bond.',
          'Alkynes: at least one triple bond; general formula CₙH₂ₙ₋₂ for one open-chain triple bond.',
          'Successive members of a homologous series differ by –CH₂– and by 14 u in molecular mass.'
        ]
      },
      {
        id: 'nomenclature-functional-groups',
        title: '3. Naming compounds and functional groups',
        explanation: 'The prefix tells the number of carbon atoms in the main chain: meth-, eth-, prop-, but-, pent- and so on. The ending indicates the family: -ane for an alkane, -ene for an alkene and -yne for an alkyne. Functional groups include halogens (–Cl, –Br), alcohol (–OH), aldehyde (–CHO) and ketone (>C=O).',
        keyPoints: [
          'Methane: CH₄; ethane: C₂H₆; ethene: C₂H₄; ethyne: C₂H₂.',
          'An alcohol contains the –OH functional group.',
          'An aldehyde has a terminal –CHO group.',
          'A ketone has a carbonyl group within the carbon chain.'
        ]
      },
      {
        id: 'carbon-reactions',
        title: '4. Reactions and useful compounds',
        explanation: 'Combustion of carbon compounds in sufficient oxygen forms carbon dioxide and water and releases energy. Oxidation can convert ethanol to ethanoic acid using suitable oxidising agents. Unsaturated hydrocarbons can undergo addition reactions; alkanes commonly undergo substitution reactions with halogens in sunlight. Ethanol is used as a solvent and fuel; ethanoic acid is the acid in vinegar. Soaps form scum in hard water, while detergents work better in hard water.',
        keyPoints: [
          'Complete combustion produces carbon dioxide and water.',
          'Addition reactions occur at carbon-carbon double or triple bonds.',
          'Substitution replaces an atom or group in a molecule, often in alkanes.',
          'Soap molecules form micelles that help remove oily dirt.'
        ]
      }
    ],
    workedExamples: [
      {
        id: 'carbon-example-1',
        title: 'Example 1 · Saturated or unsaturated?',
        question: 'Classify ethane (C₂H₆) and ethene (C₂H₄).',
        steps: [
          'Ethane has a single carbon-carbon bond only.',
          'A hydrocarbon with only single carbon-carbon bonds is saturated.',
          'Ethene has a carbon-carbon double bond, so it is unsaturated.'
        ],
        answer: 'Ethane is saturated; ethene is unsaturated.'
      },
      {
        id: 'carbon-example-2',
        title: 'Example 2 · Identify a functional group',
        question: 'Which functional group is present in ethanol, C₂H₅OH?',
        steps: [
          'Look for the characteristic group in the formula.',
          'The –OH group is called the hydroxyl group.',
          'Compounds containing this group are alcohols.'
        ],
        answer: 'The alcohol (–OH) functional group.'
      },
      {
        id: 'carbon-example-3',
        title: 'Example 3 · Homologous series',
        question: 'What is the next alkane after propane (C₃H₈)?',
        steps: [
          'Successive members of a homologous series differ by –CH₂–.',
          'Add one carbon and two hydrogen atoms to C₃H₈.',
          'The next formula is C₄H₁₀.'
        ],
        answer: 'Butane, C₄H₁₀.'
      }
    ],
    keyFacts: [
      { title: 'Tetravalency', detail: 'Carbon generally forms four covalent bonds.' },
      { title: 'Catenation', detail: 'Carbon bonds with other carbon atoms to form chains and rings.' },
      { title: 'Homologous series', detail: 'Successive members differ by –CH₂–.' },
      { title: 'Ethanol', detail: 'An alcohol containing the –OH group.' }
    ],
    questions: [
      {
        id: 'sci-carbon-q1',
        prompt: 'Why does carbon form covalent bonds in most of its compounds?',
        choices: [{ id: 'a', text: 'It always loses four electrons easily' }, { id: 'b', text: 'It shares electrons to complete its outer shell' }, { id: 'c', text: 'It has no valence electrons' }, { id: 'd', text: 'It forms only ionic bonds' }],
        answer: 'b',
        explanation: 'Carbon generally shares electrons rather than losing or gaining four electrons, forming covalent bonds.'
      },
      {
        id: 'sci-carbon-q2',
        prompt: 'Which compound is unsaturated?',
        choices: [{ id: 'a', text: 'Ethane' }, { id: 'b', text: 'Propane' }, { id: 'c', text: 'Ethene' }, { id: 'd', text: 'Methane' }],
        answer: 'c',
        explanation: 'Ethene contains a carbon-carbon double bond.'
      },
      {
        id: 'sci-carbon-q3',
        prompt: 'What is the difference between successive members of a homologous series?',
        choices: [{ id: 'a', text: '–CH₂–' }, { id: 'b', text: '–OH' }, { id: 'c', text: '–COOH' }, { id: 'd', text: 'One oxygen atom' }],
        answer: 'a',
        explanation: 'Successive members differ by one –CH₂– unit.'
      },
      {
        id: 'sci-carbon-q4',
        prompt: 'Why do detergents generally work better than soaps in hard water?',
        choices: [{ id: 'a', text: 'Detergents form insoluble scum more easily' }, { id: 'b', text: 'Detergents do not form the same insoluble calcium and magnesium salts' }, { id: 'c', text: 'Detergents contain no carbon' }, { id: 'd', text: 'Detergents cannot dissolve in water' }],
        answer: 'b',
        explanation: 'Soap forms insoluble salts with calcium and magnesium ions in hard water; many detergents do not.'
      }
    ],
    sourceUrl: scienceSource,
    sourceLabel: 'CBSE Science · Class X · 2026–27 · formative-only Unit I'
  },
  {
    id: 'heredity',
    curriculumItemId: 'sci-heredity',
    subjectId: 'science',
    title: 'Heredity',
    chapterLabel: 'World of Living · Unit II · Formative only',
    estimatedMinutes: 35,
    syllabusScope: 'Heredity, Mendel’s contribution and laws for inheritance of traits, and a brief introduction to sex determination. This topic is not assessed in the year-end examination; it may support portfolio/formative work.',
    overview: 'Heredity is the passing of traits from parents to offspring. Genes carry information, and the combination of genes inherited by an offspring helps explain similarities and variation within a family.',
    learningGoals: [
      'Distinguish inherited traits from acquired traits.',
      'Describe genes, chromosomes and alleles at an introductory level.',
      'Use a simple monohybrid cross to explain Mendel’s observations.',
      'Explain the basic XX–XY pattern of human sex determination.'
    ],
    sections: [
      {
        id: 'heredity-basics',
        title: '1. Traits, genes and chromosomes',
        explanation: 'A trait is a characteristic, such as seed shape or a blood group. Genes are segments of DNA that influence traits and are located on chromosomes. For many genes, an individual receives one allele from each biological parent. Different alleles can contribute to variation.',
        keyPoints: [
          'DNA stores inherited biological information.',
          'Genes are parts of DNA located on chromosomes.',
          'Alleles are alternative forms of a gene.',
          'An acquired change during life is not automatically inherited by offspring.'
        ]
      },
      {
        id: 'mendel',
        title: '2. Mendel and inheritance patterns',
        explanation: 'Gregor Mendel studied inheritance in pea plants. In a simple monohybrid cross, if a pure tall plant (TT) is crossed with a pure dwarf plant (tt), the F₁ offspring are Tt and tall when T is dominant. Crossing two F₁ plants (Tt × Tt) gives genotypes TT, Tt, Tt and tt, producing a 3:1 dominant-to-recessive phenotype ratio under this simplified model.',
        keyPoints: [
          'Dominant alleles can show their effect in a heterozygous pair.',
          'A recessive trait appears in this simple model when both alleles are recessive.',
          'The F₂ genotypic ratio in Tt × Tt is 1:2:1.',
          'The F₂ phenotypic ratio is 3:1 when complete dominance applies.'
        ]
      },
      {
        id: 'sex-determination',
        title: '3. Human sex determination',
        explanation: 'In the simplified human XX–XY system, most females have XX sex chromosomes and most males have XY. An egg normally carries an X chromosome. A sperm carries either X or Y, so fertilisation can form XX or XY. This is a simplified classroom model; biological sex development is more varied than this single chromosome pattern.',
        keyPoints: [
          'The egg normally contributes an X chromosome.',
          'An X-bearing sperm can produce an XX combination; a Y-bearing sperm can produce an XY combination.',
          'The probability is approximately 1:1 for XX and XY in this simple model.',
          'Do not blame or stigmatise a parent for a child’s sex.'
        ]
      }
    ],
    workedExamples: [
      {
        id: 'heredity-example-1',
        title: 'Example 1 · Monohybrid cross',
        question: 'Cross Tt × Tt, where T is dominant for tallness and t is recessive for dwarfness. What offspring genotypes are possible?',
        steps: [
          'Each parent can produce gametes T and t.',
          'Combine them: TT, Tt, Tt and tt.',
          'Count the genotypes: one TT, two Tt and one tt.'
        ],
        answer: 'Genotypic ratio = 1 TT : 2 Tt : 1 tt.'
      },
      {
        id: 'heredity-example-2',
        title: 'Example 2 · Phenotype ratio',
        question: 'Using Tt × Tt, what is the expected tall-to-dwarf phenotype ratio under complete dominance?',
        steps: [
          'TT is tall and both Tt offspring are also tall because T is dominant.',
          'Only tt is dwarf.',
          'There are three tall combinations and one dwarf combination.'
        ],
        answer: '3 tall : 1 dwarf.'
      },
      {
        id: 'heredity-example-3',
        title: 'Example 3 · Sex chromosomes',
        question: 'In the simple human XX–XY model, which parent can contribute either an X or a Y chromosome?',
        steps: [
          'An egg normally carries an X chromosome.',
          'Sperm can carry either X or Y in the simplified model.',
          'Therefore the sperm contribution determines whether the combination is XX or XY.'
        ],
        answer: 'The sperm-producing parent.'
      }
    ],
    keyFacts: [
      { title: 'Gene', detail: 'A segment of DNA associated with an inherited characteristic.' },
      { title: 'Alleles', detail: 'Alternative forms of a gene.' },
      { title: 'F₂ phenotype ratio', detail: '3:1 for the simple Tt × Tt complete-dominance example.' },
      { title: 'Human chromosomes', detail: 'The introductory model uses XX and XY combinations.' }
    ],
    questions: [
      {
        id: 'sci-heredity-q1',
        prompt: 'What is a gene?',
        choices: [{ id: 'a', text: 'A segment of DNA associated with a trait' }, { id: 'b', text: 'A type of blood cell' }, { id: 'c', text: 'A complete organ' }, { id: 'd', text: 'A food molecule' }],
        answer: 'a',
        explanation: 'A gene is a segment of DNA that carries information associated with an inherited characteristic.'
      },
      {
        id: 'sci-heredity-q2',
        prompt: 'In Tt × Tt, what is the genotype ratio?',
        choices: [{ id: 'a', text: '3:1' }, { id: 'b', text: '1:2:1' }, { id: 'c', text: '1:1' }, { id: 'd', text: '2:1' }],
        answer: 'b',
        explanation: 'The four combinations are TT, Tt, Tt and tt, giving a 1:2:1 genotypic ratio.'
      },
      {
        id: 'sci-heredity-q3',
        prompt: 'Which genotype expresses the recessive trait in the simple complete-dominance model?',
        choices: [{ id: 'a', text: 'TT' }, { id: 'b', text: 'Tt' }, { id: 'c', text: 'tt' }, { id: 'd', text: 'Both TT and Tt' }],
        answer: 'c',
        explanation: 'The recessive phenotype appears when both alleles are recessive (tt).'
      },
      {
        id: 'sci-heredity-q4',
        prompt: 'In the simplified human XX–XY model, which gamete can carry a Y chromosome?',
        choices: [{ id: 'a', text: 'Egg' }, { id: 'b', text: 'Sperm' }, { id: 'c', text: 'Both egg and sperm equally' }, { id: 'd', text: 'Neither' }],
        answer: 'b',
        explanation: 'An egg normally carries X, while sperm can carry either X or Y in the simplified model.'
      }
    ],
    sourceUrl: scienceSource,
    sourceLabel: 'CBSE Science · Class X · 2026–27 · formative-only Unit II'
  },
  {
    id: 'evolution',
    curriculumItemId: 'sci-evolution',
    subjectId: 'science',
    title: 'Evolution',
    chapterLabel: 'World of Living · Unit II · Formative only',
    estimatedMinutes: 35,
    syllabusScope: 'Acquired and inherited traits, speciation, evolution and classification, tracing evolutionary relationships, fossils, evolution by stages and human evolution. This topic is formative only.',
    overview: 'Evolution describes changes in inherited characteristics of populations over generations. Variation, inheritance and natural selection help explain how populations change and how new species may arise.',
    learningGoals: [
      'Distinguish acquired and inherited variations.',
      'Explain natural selection using a simple example.',
      'Describe fossils as evidence about past life.',
      'Recognise how classification and evolutionary relationships are connected.'
    ],
    sections: [
      {
        id: 'variation',
        title: '1. Acquired and inherited traits',
        explanation: 'Inherited variations are passed from parents to offspring through genetic material. Acquired traits develop during an organism’s lifetime, such as a scar or muscles strengthened by exercise, and generally do not change the DNA in reproductive cells. Such changes are therefore not normally inherited.',
        keyPoints: [
          'Inherited variations can be passed to offspring.',
          'Acquired characteristics are developed during life and are not normally inherited.',
          'Sexual reproduction and DNA-copying changes generate variation.'
        ]
      },
      {
        id: 'natural-selection',
        title: '2. Natural selection',
        explanation: 'Individuals in a population vary. Some inherited variations can help organisms survive and reproduce in a particular environment. Those traits may become more common over generations because individuals carrying them leave more offspring. Natural selection acts on existing inherited variation; organisms do not consciously develop a trait because they need it.',
        keyPoints: [
          'Variation exists within populations.',
          'The environment influences which variations affect survival and reproduction.',
          'A helpful inherited trait can become more common across generations.',
          'Natural selection changes populations over time, not an individual organism during its lifetime.'
        ]
      },
      {
        id: 'speciation-classification',
        title: '3. Speciation and classification',
        explanation: 'Speciation is the formation of new species. When populations become separated and gene flow is reduced, they may accumulate different variations over many generations. If reproductive isolation develops, they may become separate species. Classification groups organisms using shared characteristics and helps scientists study relationships.',
        keyPoints: [
          'Geographical or reproductive isolation can reduce gene flow.',
          'Different environments and variation can lead populations along different evolutionary paths.',
          'Classification uses similarities and differences to organise organisms.'
        ]
      },
      {
        id: 'fossils-human-evolution',
        title: '4. Fossils and tracing evolutionary relationships',
        explanation: 'Fossils are preserved remains, impressions or traces of ancient organisms. They provide evidence about organisms that lived in the past and the order in which forms appeared in rock layers. Comparative anatomy and other evidence can help trace relationships. Human evolution is a branching process, not a simple ladder from one modern species to another.',
        keyPoints: [
          'Fossils provide evidence about past life and changes over time.',
          'Deeper rock layers often contain older fossils, though geological processes can disturb layers.',
          'Evolutionary relationships are better represented as branching trees than as a ladder of progress.',
          'Modern humans and other living primates share common ancestors.'
        ]
      }
    ],
    workedExamples: [
      {
        id: 'evolution-example-1',
        title: 'Example 1 · Acquired or inherited?',
        question: 'A person develops a scar after an injury. Is the scar generally inherited by their children?',
        steps: [
          'The scar develops during the person’s lifetime.',
          'It does not normally alter the DNA in reproductive cells.',
          'Therefore it is an acquired characteristic, not normally passed to offspring.'
        ],
        answer: 'No. A scar is an acquired trait and is not normally inherited.'
      },
      {
        id: 'evolution-example-2',
        title: 'Example 2 · Natural selection',
        question: 'In a population of insects, darker insects are harder for predators to see on dark tree bark. What may happen over many generations?',
        steps: [
          'There is variation in colour within the population.',
          'Darker insects may survive and reproduce more often in this environment.',
          'If the colour difference is inherited, the dark-colour trait may become more common over generations.'
        ],
        answer: 'The inherited dark-colour trait may increase in frequency in that environment.'
      },
      {
        id: 'evolution-example-3',
        title: 'Example 3 · Fossil evidence',
        question: 'What can fossils tell scientists about the history of life?',
        steps: [
          'Fossils preserve evidence of past organisms or their activity.',
          'Their positions in rock layers help establish a relative sequence through time.',
          'Comparing fossils can reveal changes and relationships among organisms.'
        ],
        answer: 'Fossils provide evidence about past life and evolutionary change.'
      }
    ],
    keyFacts: [
      { title: 'Inherited variation', detail: 'Variation that can be passed from parents to offspring.' },
      { title: 'Natural selection', detail: 'Inherited traits linked to greater reproductive success can become more common.' },
      { title: 'Speciation', detail: 'Formation of new species, often following long-term population separation.' },
      { title: 'Fossil', detail: 'Preserved remains, impressions or traces of ancient life.' }
    ],
    questions: [
      {
        id: 'sci-evolution-q1',
        prompt: 'Which is generally an acquired trait?',
        choices: [{ id: 'a', text: 'A scar from an injury' }, { id: 'b', text: 'A gene variant inherited from a parent' }, { id: 'c', text: 'A chromosome inherited at fertilisation' }, { id: 'd', text: 'An inherited blood group allele' }],
        answer: 'a',
        explanation: 'A scar forms during an individual’s lifetime and is not normally inherited through reproductive-cell DNA.'
      },
      {
        id: 'sci-evolution-q2',
        prompt: 'Natural selection acts most directly on which level?',
        choices: [{ id: 'a', text: 'Inherited variation among individuals in a population' }, { id: 'b', text: 'A wish of an individual organism' }, { id: 'c', text: 'A single organism deciding to evolve' }, { id: 'd', text: 'Only fossils' }],
        answer: 'a',
        explanation: 'Natural selection is linked to differences in survival and reproduction associated with inherited variation.'
      },
      {
        id: 'sci-evolution-q3',
        prompt: 'What is speciation?',
        choices: [{ id: 'a', text: 'Formation of a new species' }, { id: 'b', text: 'Formation of a single cell' }, { id: 'c', text: 'Loss of all variation' }, { id: 'd', text: 'A type of acquired injury' }],
        answer: 'a',
        explanation: 'Speciation is the process by which new species arise.'
      },
      {
        id: 'sci-evolution-q4',
        prompt: 'What are fossils?',
        choices: [{ id: 'a', text: 'Only living organisms' }, { id: 'b', text: 'Preserved remains, impressions or traces of ancient organisms' }, { id: 'c', text: 'Artificial models only' }, { id: 'd', text: 'Modern genetic tests' }],
        answer: 'b',
        explanation: 'Fossils preserve physical or trace evidence of organisms that lived in the past.'
      }
    ],
    sourceUrl: scienceSource,
    sourceLabel: 'CBSE Science · Class X · 2026–27 · formative-only Unit II'
  },
  {
    id: 'motor-electromagnetic-induction-generator',
    curriculumItemId: 'sci-motor',
    subjectId: 'science',
    title: 'Motor, Electromagnetic Induction and Generator',
    chapterLabel: 'Effects of Current · Unit IV · Formative only',
    estimatedMinutes: 35,
    syllabusScope: 'Electric motor, electromagnetic induction and electric generator. These topics are included for formative learning but not assessed in the year-end examination.',
    overview: 'Electricity and magnetism are connected. A current can produce motion in a magnetic field, and a changing magnetic field can induce an electric current.',
    learningGoals: [
      'Explain the basic working idea of a simple electric motor.',
      'Describe electromagnetic induction.',
      'Distinguish an electric motor from an electric generator.',
      'Identify the energy conversion in each device.'
    ],
    sections: [
      {
        id: 'motor',
        title: '1. Electric motor',
        explanation: 'A simple DC motor uses the force on a current-carrying coil placed in a magnetic field. The forces on opposite sides of the coil act in opposite directions and create a turning effect. A split-ring commutator reverses the current in the coil every half-turn so that the coil continues rotating in the same direction.',
        keyPoints: [
          'An electric motor converts electrical energy into mechanical energy.',
          'The magnetic field and current interact to produce a force.',
          'A split-ring commutator reverses current every half-turn in a simple DC motor.'
        ]
      },
      {
        id: 'induction',
        title: '2. Electromagnetic induction',
        explanation: 'Electromagnetic induction is the production of an induced potential difference (and current in a closed circuit) when the magnetic field linked with a conductor or coil changes. This can happen by moving a magnet relative to a coil or moving the coil in a magnetic field.',
        keyPoints: [
          'Relative motion between a magnet and coil can change magnetic flux.',
          'A changing magnetic field can induce a potential difference.',
          'The direction of induced current depends on the direction of change and motion.'
        ]
      },
      {
        id: 'generator',
        title: '3. Electric generator',
        explanation: 'An electric generator uses electromagnetic induction. When a coil rotates in a magnetic field, the magnetic flux through it changes and an induced current is produced. A generator converts mechanical energy into electrical energy. The output may be alternating current or direct current depending on the construction.',
        keyPoints: [
          'A generator converts mechanical energy into electrical energy.',
          'A simple AC generator uses slip rings.',
          'A DC generator uses a split-ring commutator.',
          'A motor and a generator perform opposite energy-conversion roles.'
        ]
      }
    ],
    workedExamples: [
      {
        id: 'motor-example-1',
        title: 'Example 1 · Identify the device',
        question: 'A device uses electrical energy to rotate a fan. Which principle is used?',
        steps: [
          'The input is electrical energy.',
          'The output is mechanical rotation.',
          'A motor uses the force on a current-carrying conductor in a magnetic field.'
        ],
        answer: 'An electric motor.'
      },
      {
        id: 'motor-example-2',
        title: 'Example 2 · Induced current',
        question: 'A bar magnet is moved towards a coil connected to a galvanometer. Why may the galvanometer deflect?',
        steps: [
          'Moving the magnet changes the magnetic field linked with the coil.',
          'The changing magnetic field induces a potential difference.',
          'Because the circuit is closed, an induced current flows and the galvanometer deflects.'
        ],
        answer: 'Electromagnetic induction produces an induced current.'
      },
      {
        id: 'motor-example-3',
        title: 'Example 3 · Motor or generator?',
        question: 'Which device converts mechanical energy into electrical energy?',
        steps: [
          'A motor converts electrical energy to mechanical energy.',
          'A generator uses mechanical motion to induce electrical energy.'
        ],
        answer: 'An electric generator.'
      }
    ],
    keyFacts: [
      { title: 'Motor', detail: 'Electrical energy → mechanical energy.' },
      { title: 'Induction', detail: 'Changing magnetic flux can induce a potential difference.' },
      { title: 'Generator', detail: 'Mechanical energy → electrical energy.' },
      { title: 'Commutator', detail: 'A split ring reverses coil current every half-turn in a simple DC motor.' }
    ],
    questions: [
      {
        id: 'sci-motor-q1',
        prompt: 'What is the main energy conversion in an electric motor?',
        choices: [{ id: 'a', text: 'Electrical to mechanical' }, { id: 'b', text: 'Mechanical to electrical' }, { id: 'c', text: 'Chemical to nuclear' }, { id: 'd', text: 'Heat to chemical' }],
        answer: 'a',
        explanation: 'A motor converts electrical energy into mechanical movement.'
      },
      {
        id: 'sci-motor-q2',
        prompt: 'What is electromagnetic induction?',
        choices: [{ id: 'a', text: 'Production of an induced potential difference due to changing magnetic flux' }, { id: 'b', text: 'Heating a resistor only' }, { id: 'c', text: 'Reflection of light' }, { id: 'd', text: 'Charging an object by friction only' }],
        answer: 'a',
        explanation: 'A changing magnetic field linked with a conductor can induce a potential difference.'
      },
      {
        id: 'sci-motor-q3',
        prompt: 'What is the main energy conversion in an electric generator?',
        choices: [{ id: 'a', text: 'Electrical to mechanical' }, { id: 'b', text: 'Mechanical to electrical' }, { id: 'c', text: 'Light to sound' }, { id: 'd', text: 'Chemical to heat only' }],
        answer: 'b',
        explanation: 'A generator converts mechanical energy into electrical energy by electromagnetic induction.'
      },
      {
        id: 'sci-motor-q4',
        prompt: 'Which component reverses the current in a simple DC motor every half-turn?',
        choices: [{ id: 'a', text: 'Slip rings' }, { id: 'b', text: 'Split-ring commutator' }, { id: 'c', text: 'Fuse' }, { id: 'd', text: 'Resistor' }],
        answer: 'b',
        explanation: 'The split-ring commutator reverses the current every half-turn so the coil keeps turning in the same direction.'
      }
    ],
    sourceUrl: scienceSource,
    sourceLabel: 'CBSE Science · Class X · 2026–27 · formative-only Unit IV'
  }
,
  {
    id: 'periodic-classification-of-elements',
    curriculumItemId: 'sci-periodic',
    subjectId: 'science',
    title: 'Periodic Classification of Elements',
    chapterLabel: 'Chemical Substances · Unit I · Formative only',
    estimatedMinutes: 30,
    syllabusScope: 'Döbereiner’s Triads, Newlands’ Law of Octaves, Mendeleev’s Periodic Table, Modern Periodic Table and metallic/non-metallic properties. This topic is formative only.',
    overview: 'Scientists developed different ways to arrange elements so that patterns in their properties became easier to understand. The modern periodic table arranges elements by increasing atomic number.',
    learningGoals: [
      'Recall the main historical attempts to classify elements.',
      'Explain the basis of the modern periodic table.',
      'Distinguish groups and periods.',
      'Describe broad trends in metallic character and atomic size.'
    ],
    sections: [
      {
        id: 'historical-classification',
        title: '1. Early attempts at classification',
        explanation: 'Döbereiner grouped some elements into triads of three with similar properties; the atomic mass of the middle element was approximately the average of the other two. Newlands arranged elements in increasing atomic mass and noticed that every eighth element had similar properties, calling this the Law of Octaves. The patterns worked only for a limited set of elements.',
        keyPoints: ['Döbereiner’s Triads grouped elements in threes.', 'Newlands’ Law of Octaves noticed a repeating pattern for every eighth element.', 'Early systems revealed patterns but could not classify every known element successfully.']
      },
      {
        id: 'mendeleev',
        title: '2. Mendeleev’s Periodic Table',
        explanation: 'Mendeleev arranged elements mainly in increasing atomic mass while placing elements with similar chemical properties in the same groups. He left gaps for elements not yet discovered and predicted some of their properties. Later discoveries supported several predictions.',
        keyPoints: ['Similar chemical properties guided the grouping.', 'Gaps were left for undiscovered elements.', 'Some of Mendeleev’s predictions were confirmed by later discoveries.']
      },
      {
        id: 'modern-table',
        title: '3. Modern Periodic Table',
        explanation: 'The modern periodic law states that the properties of elements are periodic functions of their atomic numbers. Elements are arranged in increasing atomic number. A horizontal row is a period and a vertical column is a group. Elements in the same group often have similar chemical properties.',
        keyPoints: ['The modern table is arranged by increasing atomic number.', 'There are 7 periods and 18 groups.', 'The number of occupied electron shells generally corresponds to the period number.', 'Main-group elements in the same group often have the same number of valence electrons.']
      },
      {
        id: 'periodic-trends',
        title: '4. Broad periodic trends',
        explanation: 'Across a period from left to right, atomic size generally decreases because the nuclear charge increases while electrons are added to the same main shell. Down a group, additional shells are added, so atomic size generally increases. Metallic character generally decreases across a period and increases down a group.',
        keyPoints: ['Across a period: atomic size generally decreases.', 'Down a group: atomic size generally increases.', 'Metallic character generally decreases across a period.', 'Metallic character generally increases down a group.']
      }
    ],
    workedExamples: [
      {
        id: 'periodic-example-1',
        title: 'Example 1 · Period or group?',
        question: 'An element is in the third horizontal row of the modern periodic table. What is its period number?',
        steps: ['Horizontal rows are called periods.', 'The row number gives the period number.', 'The element is in the third row.'],
        answer: 'Period 3.'
      },
      {
        id: 'periodic-example-2',
        title: 'Example 2 · Trend down a group',
        question: 'How does atomic size generally change as you move down a group?',
        steps: ['Each step down a group adds another occupied electron shell.', 'The outer electrons are, on average, farther from the nucleus.', 'Therefore atomic size generally increases.'],
        answer: 'Atomic size generally increases down a group.'
      },
      {
        id: 'periodic-example-3',
        title: 'Example 3 · Why atomic number?',
        question: 'Why is the modern periodic table arranged by atomic number rather than atomic mass?',
        steps: ['Atomic number is the number of protons in the nucleus and uniquely identifies an element.', 'Arranging by atomic number gives a consistent periodic pattern in properties.', 'It resolves anomalies that appeared when elements were arranged only by atomic mass.'],
        answer: 'Periodic properties are based on atomic number, giving a consistent arrangement.'
      }
    ],
    keyFacts: [
      { title: 'Modern periodic law', detail: 'Properties of elements are periodic functions of atomic number.' },
      { title: 'Period', detail: 'A horizontal row in the periodic table.' },
      { title: 'Group', detail: 'A vertical column in the periodic table.' },
      { title: 'Metallic character', detail: 'Generally decreases across a period and increases down a group.' }
    ],
    questions: [
      {
        id: 'sci-periodic-q1',
        prompt: 'What is the basis of arrangement in the modern periodic table?',
        choices: [{ id: 'a', text: 'Increasing atomic mass only' }, { id: 'b', text: 'Increasing atomic number' }, { id: 'c', text: 'Increasing density' }, { id: 'd', text: 'Alphabetical order' }],
        answer: 'b',
        explanation: 'The modern periodic table is arranged in increasing atomic number.'
      },
      {
        id: 'sci-periodic-q2',
        prompt: 'What is a horizontal row called?',
        choices: [{ id: 'a', text: 'Group' }, { id: 'b', text: 'Family only' }, { id: 'c', text: 'Period' }, { id: 'd', text: 'Block boundary' }],
        answer: 'c',
        explanation: 'A horizontal row is a period; a vertical column is a group.'
      },
      {
        id: 'sci-periodic-q3',
        prompt: 'What generally happens to atomic size down a group?',
        choices: [{ id: 'a', text: 'It increases' }, { id: 'b', text: 'It decreases' }, { id: 'c', text: 'It is always zero' }, { id: 'd', text: 'It never changes' }],
        answer: 'a',
        explanation: 'Additional electron shells are added down a group, so atomic size generally increases.'
      },
      {
        id: 'sci-periodic-q4',
        prompt: 'Which scientist left gaps for undiscovered elements in the periodic table?',
        choices: [{ id: 'a', text: 'Newton' }, { id: 'b', text: 'Mendeleev' }, { id: 'c', text: 'Bohr' }, { id: 'd', text: 'Rutherford' }],
        answer: 'b',
        explanation: 'Mendeleev left gaps and predicted properties of elements that had not yet been discovered.'
      }
    ],
    sourceUrl: scienceSource,
    sourceLabel: 'CBSE Science · Class X · 2026–27 · formative-only Unit I'
  },
  {
    id: 'acids-bases-and-salts',
    curriculumItemId: 'sci-acid',
    subjectId: 'science',
    title: 'Acids, Bases and Salts',
    chapterLabel: 'Chemical Substances · Unit I · Formative only',
    estimatedMinutes: 40,
    syllabusScope: 'Definitions through H⁺ and OH⁻ ions, indicators, chemical properties, neutralisation, pH in daily life and preparation/uses of common salts. Logarithmic definition of pH is not required. This topic is formative only.',
    overview: 'Acids and bases have characteristic properties and can be identified using indicators. Their reactions help explain neutralisation and the preparation of useful salts used at home and in industry.',
    learningGoals: [
      'Identify acids and bases using indicators.',
      'Describe reactions of acids and bases with metals and carbonates.',
      'Explain neutralisation and the pH scale at the required level.',
      'Recall common salts and their uses.'
    ],
    sections: [
      {
        id: 'acids-bases',
        title: '1. Acids, bases and indicators',
        explanation: 'At this level, acids are described as substances that furnish hydrogen ions (H⁺) in aqueous solution, while bases furnish hydroxide ions (OH⁻). Acids turn blue litmus red; bases turn red litmus blue. Indicators such as litmus, turmeric and phenolphthalein show characteristic colour changes.',
        keyPoints: ['Acidic solutions furnish H⁺ ions in water.', 'Basic solutions furnish OH⁻ ions in water.', 'Blue litmus turns red in acid; red litmus turns blue in base.', 'Never taste laboratory chemicals.']
      },
      {
        id: 'acid-reactions',
        title: '2. Chemical properties',
        explanation: 'Acids react with many metals to form a salt and hydrogen gas. Acids react with metal carbonates or hydrogen carbonates to form a salt, carbon dioxide and water. Bases can neutralise acids to form salt and water. Many metal oxides are basic, while many non-metal oxides are acidic.',
        keyPoints: ['Acid + suitable metal → salt + hydrogen.', 'Acid + carbonate → salt + carbon dioxide + water.', 'Acid + base → salt + water (neutralisation).', 'Use teacher-supervised laboratory procedures for reactions that produce gas.']
      },
      {
        id: 'ph',
        title: '3. pH and everyday life',
        explanation: 'The pH scale indicates how acidic or basic an aqueous solution is. A value below 7 is acidic, 7 is neutral and above 7 is basic at this school level. The 2026–27 curriculum asks for the importance of pH in everyday life but says the logarithmic definition is not required.',
        keyPoints: ['pH below 7: acidic; pH 7: neutral; pH above 7: basic.', 'Soil pH affects plant growth and nutrient availability.', 'Tooth surfaces can become acidic when bacteria produce acids.', 'The pH scale is logarithmic, but its logarithmic definition is not required in this syllabus.']
      },
      {
        id: 'common-salts',
        title: '4. Common salts and their uses',
        explanation: 'Sodium hydroxide is used in soap and paper manufacture. Bleaching powder is used for bleaching and disinfecting water. Baking soda (sodium hydrogen carbonate) is used in baking and some antacids. Washing soda (sodium carbonate decahydrate) is used for cleaning and softening hard water. Plaster of Paris is used for casts and moulds; it is made by heating gypsum under controlled conditions.',
        keyPoints: ['Baking soda: NaHCO₃.', 'Washing soda crystals: Na₂CO₃·10H₂O.', 'Bleaching powder is commonly represented at this level as CaOCl₂.', 'Plaster of Paris: CaSO₄·½H₂O.']
      }
    ],
    workedExamples: [
      {
        id: 'acid-example-1',
        title: 'Example 1 · Indicator test',
        question: 'A solution turns red litmus blue. What can you infer?',
        steps: ['Red litmus changes to blue in a basic solution.', 'The observation indicates the solution is basic under the test conditions.'],
        answer: 'The solution is basic.'
      },
      {
        id: 'acid-example-2',
        title: 'Example 2 · Neutralisation',
        question: 'What are the products when hydrochloric acid reacts with sodium hydroxide?',
        steps: ['This is an acid-base neutralisation reaction.', 'The salt is sodium chloride and water is also formed.', 'Write and balance the equation.'],
        answer: 'HCl + NaOH → NaCl + H₂O.'
      },
      {
        id: 'acid-example-3',
        title: 'Example 3 · pH classification',
        question: 'Classify solutions with pH values 3, 7 and 10.',
        steps: ['A pH below 7 is acidic.', 'A pH of 7 is neutral.', 'A pH above 7 is basic.'],
        answer: 'pH 3: acidic; pH 7: neutral; pH 10: basic.'
      }
    ],
    keyFacts: [
      { title: 'Acid', detail: 'Furnishes H⁺ ions in aqueous solution.' },
      { title: 'Base', detail: 'Furnishes OH⁻ ions in aqueous solution.' },
      { title: 'Neutralisation', detail: 'Acid + base → salt + water.' },
      { title: 'Plaster of Paris', detail: 'CaSO₄·½H₂O.' }
    ],
    questions: [
      {
        id: 'sci-acid-q1',
        prompt: 'What happens to blue litmus in an acidic solution?',
        choices: [{ id: 'a', text: 'It turns red' }, { id: 'b', text: 'It turns green' }, { id: 'c', text: 'It remains blue in every case' }, { id: 'd', text: 'It becomes colourless' }],
        answer: 'a',
        explanation: 'Acids turn blue litmus red.'
      },
      {
        id: 'sci-acid-q2',
        prompt: 'Which gas is generally produced when an acid reacts with a metal carbonate?',
        choices: [{ id: 'a', text: 'Oxygen' }, { id: 'b', text: 'Hydrogen' }, { id: 'c', text: 'Carbon dioxide' }, { id: 'd', text: 'Nitrogen' }],
        answer: 'c',
        explanation: 'Acid + metal carbonate forms salt, carbon dioxide and water.'
      },
      {
        id: 'sci-acid-q3',
        prompt: 'A solution has pH 10. How is it classified?',
        choices: [{ id: 'a', text: 'Acidic' }, { id: 'b', text: 'Neutral' }, { id: 'c', text: 'Basic' }, { id: 'd', text: 'Always pure water' }],
        answer: 'c',
        explanation: 'A pH above 7 indicates a basic solution.'
      },
      {
        id: 'sci-acid-q4',
        prompt: 'What is the chemical formula of baking soda?',
        choices: [{ id: 'a', text: 'NaCl' }, { id: 'b', text: 'NaHCO₃' }, { id: 'c', text: 'Na₂CO₃·10H₂O' }, { id: 'd', text: 'CaSO₄·½H₂O' }],
        answer: 'b',
        explanation: 'Baking soda is sodium hydrogen carbonate, NaHCO₃.'
      }
    ],
    sourceUrl: scienceSource,
    sourceLabel: 'CBSE Science · Class X · 2026–27 · formative-only Unit I'
  },
  {
    id: 'metals-and-non-metals',
    curriculumItemId: 'sci-metal',
    subjectId: 'science',
    title: 'Metals and Non-metals',
    chapterLabel: 'Chemical Substances · Unit I · Formative only',
    estimatedMinutes: 40,
    syllabusScope: 'Physical and chemical properties, reactivity series, ionic compounds, basic metallurgical processes, corrosion and prevention. This topic is formative only.',
    overview: 'Metals and non-metals differ in their physical and chemical behaviour. Their reactivity helps predict displacement, while extraction and corrosion connect chemistry with everyday materials.',
    learningGoals: [
      'Compare common physical properties of metals and non-metals.',
      'Use the reactivity series to predict displacement.',
      'Explain the formation and properties of ionic compounds.',
      'Describe basic metal extraction and corrosion prevention.'
    ],
    sections: [
      {
        id: 'physical-properties',
        title: '1. Physical properties',
        explanation: 'Many metals are lustrous, malleable, ductile and good conductors of heat and electricity. Many non-metals are dull and poor conductors, but there are exceptions: graphite conducts electricity, and mercury is a liquid metal at room temperature. These are general patterns, not rules without exceptions.',
        keyPoints: ['Malleability: can be beaten into sheets.', 'Ductility: can be drawn into wires.', 'Metals are generally good conductors.', 'Graphite and mercury are important exceptions to simple generalisations.']
      },
      {
        id: 'reactivity-series',
        title: '2. Reactivity series',
        explanation: 'The reactivity series arranges metals in decreasing order of their tendency to react. A more reactive metal can displace a less reactive metal from its salt solution. The likelihood and vigour of reactions with water or acids depend on the metal’s position in the series.',
        keyPoints: ['A more reactive metal can displace a less reactive metal from its compound.', 'Potassium, sodium and calcium are highly reactive.', 'Copper, silver and gold are comparatively unreactive.', 'Use the series to predict whether a displacement reaction occurs.']
      },
      {
        id: 'ionic-compounds',
        title: '3. Ionic compounds',
        explanation: 'Ionic compounds form when electrons are transferred, commonly from a metal atom to a non-metal atom. The resulting positive and negative ions attract each other strongly. Ionic compounds generally have high melting points and conduct electricity when molten or dissolved in water because their ions can move; they do not conduct as solids because their ions are fixed in place.',
        keyPoints: ['Metals commonly form positive ions by losing electrons.', 'Non-metals commonly form negative ions by gaining electrons.', 'Ionic compounds are usually hard crystalline solids.', 'They conduct electricity when molten or in aqueous solution, not generally as solids.']
      },
      {
        id: 'metallurgy-corrosion',
        title: '4. Extraction and corrosion',
        explanation: 'Metallurgy involves concentrating an ore, converting it into a suitable form and reducing it to obtain the metal, followed by refining where required. The extraction method depends on reactivity. Corrosion is gradual damage by the environment; rusting of iron needs oxygen and moisture. Painting, oiling, galvanising and alloying can help prevent corrosion.',
        keyPoints: ['Highly reactive metals are generally extracted by electrolysis of their compounds.', 'Moderately reactive metals may be obtained by reduction of their oxides.', 'Rusting needs oxygen and water.', 'Galvanising coats iron or steel with zinc.']
      }
    ],
    workedExamples: [
      {
        id: 'metal-example-1',
        title: 'Example 1 · Predict displacement',
        question: 'Will zinc displace copper from copper sulphate solution?',
        steps: ['Zinc is above copper in the reactivity series.', 'A more reactive metal can displace a less reactive metal from its salt.', 'Zinc replaces copper in copper sulphate.'],
        answer: 'Yes. Zn + CuSO₄ → ZnSO₄ + Cu.'
      },
      {
        id: 'metal-example-2',
        title: 'Example 2 · Conductivity of ionic compounds',
        question: 'Why can molten sodium chloride conduct electricity but solid sodium chloride cannot?',
        steps: ['In solid sodium chloride, ions are held in fixed positions in a crystal lattice.', 'In the molten state, ions are free to move.', 'Moving ions carry electric charge through the molten substance.'],
        answer: 'Molten sodium chloride conducts because its ions are mobile; solid sodium chloride has fixed ions.'
      },
      {
        id: 'metal-example-3',
        title: 'Example 3 · Preventing rust',
        question: 'Why does galvanising protect iron from rusting?',
        steps: ['Galvanising coats the iron surface with zinc.', 'The coating reduces contact between iron, water and oxygen.', 'Zinc can also provide sacrificial protection if a small area is exposed.'],
        answer: 'A zinc coating protects iron from corrosion.'
      }
    ],
    keyFacts: [
      { title: 'Malleability', detail: 'Ability to be beaten into thin sheets.' },
      { title: 'Reactivity series', detail: 'More reactive metals can displace less reactive metals from compounds.' },
      { title: 'Ionic conductivity', detail: 'Ionic compounds conduct when molten or in aqueous solution.' },
      { title: 'Galvanising', detail: 'Protecting iron or steel with a zinc coating.' }
    ],
    questions: [
      {
        id: 'sci-metal-q1',
        prompt: 'Which non-metal is a good conductor of electricity?',
        choices: [{ id: 'a', text: 'Sulphur' }, { id: 'b', text: 'Phosphorus' }, { id: 'c', text: 'Graphite' }, { id: 'd', text: 'Oxygen' }],
        answer: 'c',
        explanation: 'Graphite has delocalised electrons that allow it to conduct electricity.'
      },
      {
        id: 'sci-metal-q2',
        prompt: 'Can zinc displace copper from copper sulphate solution?',
        choices: [{ id: 'a', text: 'Yes, because zinc is more reactive' }, { id: 'b', text: 'No, because copper is more reactive' }, { id: 'c', text: 'No metal can displace another' }, { id: 'd', text: 'Only if the solution is heated' }],
        answer: 'a',
        explanation: 'Zinc is more reactive than copper, so it displaces copper from copper sulphate.'
      },
      {
        id: 'sci-metal-q3',
        prompt: 'Why can molten ionic compounds conduct electricity?',
        choices: [{ id: 'a', text: 'Their ions are free to move' }, { id: 'b', text: 'Their electrons disappear' }, { id: 'c', text: 'They become metals' }, { id: 'd', text: 'Their atoms stop vibrating' }],
        answer: 'a',
        explanation: 'Mobile ions carry charge through the molten compound.'
      },
      {
        id: 'sci-metal-q4',
        prompt: 'Which process coats iron or steel with zinc?',
        choices: [{ id: 'a', text: 'Distillation' }, { id: 'b', text: 'Galvanising' }, { id: 'c', text: 'Crystallisation' }, { id: 'd', text: 'Neutralisation' }],
        answer: 'b',
        explanation: 'Galvanising uses a zinc coating to protect iron or steel from corrosion.'
      }
    ],
    sourceUrl: scienceSource,
    sourceLabel: 'CBSE Science · Class X · 2026–27 · formative-only Unit I'
  }
]

export const RESOURCE_BY_TOPIC: Record<string, string> = {
  'math-real': 'real-numbers',
  'math-poly': 'polynomials',
  'math-linear': 'pair-of-linear-equations',
  'math-quad': 'quadratic-equations',
  'math-ap': 'arithmetic-progressions',
  'math-coord': 'coordinate-geometry',
  'math-tri': 'triangles',
  'math-circle': 'circles',
  'math-trig': 'introduction-to-trigonometry',
  'math-ident': 'trigonometric-identities',
  'math-height': 'heights-and-distances',
  'math-area': 'areas-related-to-circles',
  'math-volume': 'surface-areas-and-volumes',
  'math-stats': 'statistics',
  'math-prob': 'probability',
  'sci-reaction': 'chemical-reactions-and-equations',
  'sci-life': 'life-processes',
  'sci-control': 'control-and-coordination',
  'sci-reproduction': 'reproduction',
  'sci-light': 'light-reflection-and-refraction',
  'sci-electric': 'electricity-and-magnetic-effects',
  'sci-environment': 'our-environment',
  'sci-carbon': 'carbon-and-its-compounds',
  'sci-heredity': 'heredity',
  'sci-evolution': 'evolution',
  'sci-motor': 'motor-electromagnetic-induction-generator',
  'sci-periodic': 'periodic-classification-of-elements',
  'sci-acid': 'acids-bases-and-salts',
  'sci-metal': 'metals-and-non-metals'
}

export function getChapter(id: string | undefined): AcademicChapter | undefined {
  return ACADEMIC_CHAPTERS.find(chapter => chapter.id === id)
}
