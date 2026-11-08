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
]

export const RESOURCE_BY_TOPIC: Record<string, string> = {
  'math-real': 'real-numbers',
  'math-poly': 'polynomials',
  'math-linear': 'pair-of-linear-equations',
  'math-quad': 'quadratic-equations',
  'math-ap': 'arithmetic-progressions',
  'math-coord': 'coordinate-geometry'
}

export function getChapter(id: string | undefined): AcademicChapter | undefined {
  return ACADEMIC_CHAPTERS.find(chapter => chapter.id === id)
}
