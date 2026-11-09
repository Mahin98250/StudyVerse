export interface MasteryExample {
  title: string
  question: string
  working: string[]
  answer: string
  examinerNote?: string
}

export interface MasterySection {
  id: string
  title: string
  explanation: string
  keyIdeas: string[]
  example?: MasteryExample
}

export interface MasteryPack {
  chapterId: string
  subject: string
  focus: string
  outcomes: string[]
  sections: MasterySection[]
  formulaDesk: { label: string; formula: string; note: string }[]
  commonMistakes: { mistake: string; correction: string }[]
  answerBlueprints: { marks: string; prompt: string; structure: string[] }[]
  finalChecklist: string[]
}

export const CHAPTER_MASTERY: Record<string, MasteryPack> = {
  'real-numbers': {
    chapterId: 'real-numbers',
    subject: 'Mathematics',
    focus: 'Prime factorisation, the Fundamental Theorem of Arithmetic and proofs of irrationality.',
    outcomes: [
      'State the Fundamental Theorem of Arithmetic precisely and explain what uniqueness means.',
      'Use prime factorisation to reason about integers and their prime factors.',
      'Write a complete contradiction proof for the irrationality of √2, √3 or √5.',
      'Present a proof with clear assumptions, divisibility arguments and a final contradiction.'
    ],
    sections: [
      {
        id: 'prime-building-blocks',
        title: '1. Prime numbers are the building blocks',
        explanation: 'A prime number is a natural number greater than 1 that has exactly two positive factors: 1 and itself. A composite number has more than two positive factors. The number 1 is neither prime nor composite. Every composite natural number can be split into smaller factors until only primes remain. Those primes are its prime factors.',
        keyIdeas: [
          'Examples of primes: 2, 3, 5, 7, 11 and 13. The only even prime is 2.',
          'Prime factorisation writes a composite number as a product of prime numbers. For example, 84 = 2 × 2 × 3 × 7 = 2² × 3 × 7.',
          'The exponent records how many times a prime factor appears. It is a compact way to write repeated multiplication.',
          'A factor tree is a method, not the theorem itself: different factor trees must end with the same prime factors, apart from order.'
        ],
        example: {
          title: 'Read a prime factorisation correctly',
          question: 'Express 180 as a product of prime powers.',
          working: [
            'Divide by the smallest prime: 180 = 2 × 90.',
            'Continue: 90 = 2 × 45, and 45 = 3 × 15.',
            'Finish: 15 = 3 × 5. All factors are now prime.',
            'Collect repeated factors: 180 = 2 × 2 × 3 × 3 × 5.'
          ],
          answer: '180 = 2² × 3² × 5.',
          examinerNote: 'Do not stop while a factor is still composite. The final factors must all be prime.'
        }
      },
      {
        id: 'fundamental-theorem',
        title: '2. Fundamental Theorem of Arithmetic',
        explanation: 'The Fundamental Theorem of Arithmetic says that every composite natural number can be expressed as a product of primes, and this prime factorisation is unique apart from the order of the factors. In simple words, a number has one fixed prime-factor recipe. You may rearrange the recipe, but you cannot replace it with a different collection of primes.',
        keyIdeas: [
          'Existence: a composite natural number can be broken down into prime factors.',
          'Uniqueness: the prime factors and their powers are fixed, even when the order changes.',
          'For example, 2 × 3 × 5 and 5 × 2 × 3 are the same factorisation written in a different order.',
          'The theorem is useful because it lets us compare integers by examining their prime factors and powers.'
        ],
        example: {
          title: 'Explain why a factorisation is unique',
          question: 'Two students write 150 as 2 × 3 × 5² and 5 × 3 × 2 × 5. Are these different prime factorisations?',
          working: [
            'Rearrange the second expression into increasing prime order: 2 × 3 × 5 × 5.',
            'Group the repeated prime 5: 2 × 3 × 5².',
            'Both expressions contain exactly the same primes with the same powers.'
          ],
          answer: 'They are the same prime factorisation; only the order is different.'
        }
      },
      {
        id: 'irrationality-proof',
        title: '3. How to prove a square root is irrational',
        explanation: 'A rational number can be written as a/b, where a and b are integers, b ≠ 0, and the fraction is in lowest terms. An irrational number cannot be written in this form. To prove that √2 is irrational, assume the opposite: √2 = a/b, where a and b have no common factor other than 1. Squaring gives a² = 2b². Therefore a² is even, so a is even. Put a = 2k. Substitution gives 4k² = 2b², so b² = 2k² and b is also even. This means a and b share the factor 2, contradicting the assumption that a/b was in lowest terms. The assumption must be false.',
        keyIdeas: [
          'Start by assuming that the square root is rational and write it as a fraction in lowest terms.',
          'Square both sides carefully; do not drop the denominator or forget to square it.',
          'Use the fact that if a prime divides the square of an integer, it divides the integer itself.',
          'Show that both numerator and denominator are divisible by the same prime. This is the contradiction.',
          'For √3 and √5, use the same structure with 3 and 5 respectively. The argument works because 3 and 5 are prime.'
        ],
        example: {
          title: 'Proof structure for √3',
          question: 'Show that √3 is irrational.',
          working: [
            'Assume √3 = a/b, where a and b are coprime integers and b ≠ 0.',
            'Squaring: 3 = a²/b², so a² = 3b². Thus 3 divides a², so 3 divides a.',
            'Let a = 3k. Then 9k² = 3b², so b² = 3k². Hence 3 divides b.',
            'Both a and b are divisible by 3, contradicting that they are coprime.'
          ],
          answer: 'Therefore √3 is irrational.',
          examinerNote: 'The final coprime contradiction is essential. A proof that stops after showing a is divisible by 3 is incomplete.'
        }
      },
      {
        id: 'proof-writing',
        title: '4. Write proofs so every logical step earns credit',
        explanation: 'A proof is a chain of statements where each line follows from the previous one. In an irrationality proof, the examiner must be able to see the assumed fraction, the lowest-terms condition, the squared equation, the divisibility conclusion and the contradiction. Keep the variables consistent throughout and explicitly state why an even square has an even root, or why divisibility by a prime passes from a square to the number.',
        keyIdeas: [
          'Define a and b as coprime integers before starting the algebra.',
          'Write b ≠ 0 and mention that the fraction is in lowest terms.',
          'When concluding that a is even, state the number property being used.',
          'End with the contradiction and the conclusion that the original square root is irrational.'
        ]
      }
    ],
    formulaDesk: [
      { label: 'Prime factor form', formula: 'n = p₁ᵃ × p₂ᵇ × …', note: 'Each p is prime and each exponent counts repetitions.' },
      { label: 'Rational number', formula: 'a / b, where a, b ∈ ℤ and b ≠ 0', note: 'For a lowest-terms proof, a and b must be coprime.' },
      { label: 'Contradiction pattern', formula: 'Assume rational → derive common factor → contradiction', note: 'Use this structure for √2, √3 and √5.' }
    ],
    commonMistakes: [
      { mistake: 'Calling 1 a prime number.', correction: '1 has only one positive factor, so it is neither prime nor composite.' },
      { mistake: 'Stopping a factor tree at a composite number.', correction: 'Continue splitting until every final factor is prime.' },
      { mistake: 'Assuming √2 = a/b without saying the fraction is in lowest terms.', correction: 'State that a and b are coprime; that condition makes the contradiction work.' },
      { mistake: 'Showing only that the numerator is even.', correction: 'Substitute back and show that the denominator is also even.' },
      { mistake: 'Ending a proof without stating the contradiction.', correction: 'Explicitly say that a and b have a common prime factor, contradicting coprimality.' }
    ],
    answerBlueprints: [
      { marks: '2 marks', prompt: 'State the Fundamental Theorem of Arithmetic.', structure: ['Mention every composite natural number can be expressed as a product of primes.', 'Mention that the factorisation is unique apart from the order of factors.'] },
      { marks: '3–4 marks', prompt: 'Prove that √2 (or √3 / √5) is irrational.', structure: ['Assume it is rational and write it as a/b in lowest terms.', 'Square and rearrange to show the relevant prime divides a.', 'Substitute a = pk to show the same prime divides b.', 'State the contradiction and conclude irrationality.'] }
    ],
    finalChecklist: [
      'I can distinguish prime, composite and 1.',
      'I can completely factorise an integer into prime powers.',
      'I can state both existence and uniqueness in the Fundamental Theorem.',
      'I can prove √2, √3 and √5 irrational without skipping the coprime contradiction.'
    ]
  },
  polynomials: {
    chapterId: 'polynomials',
    subject: 'Mathematics',
    focus: 'Zeros of quadratic polynomials, their geometrical meaning and the relationship between zeros and coefficients.',
    outcomes: [
      'Identify the degree and coefficients of a polynomial.',
      'Check whether a number is a zero by substitution.',
      'Interpret zeros as x-axis intersections of the graph.',
      'Use the sum and product of zeros to verify or form a quadratic polynomial.'
    ],
    sections: [
      {
        id: 'polynomial-language',
        title: '1. Understand the language of polynomials',
        explanation: 'A polynomial in x is an expression made from constants and non-negative integer powers of x, combined using addition, subtraction and multiplication. In 3x² − 5x + 2, the terms are 3x², −5x and 2. The coefficient of x² is 3, the coefficient of x is −5, and the constant term is 2. The highest power with a non-zero coefficient is the degree. This expression has degree 2, so it is quadratic.',
        keyIdeas: [
          'A non-zero constant polynomial has degree 0; a linear polynomial has degree 1; a quadratic polynomial has degree 2.',
          'The zero polynomial has no defined degree in the usual school convention.',
          'A variable in a denominator, a negative power or a fractional power does not make a polynomial in that variable.',
          'Always include the sign with a coefficient: the coefficient of x in 3x² − 5x + 2 is −5.'
        ],
        example: {
          title: 'Read coefficients accurately',
          question: 'For p(x) = 4x² + 7x − 9, state the degree and coefficients a, b and c.',
          working: ['Compare the expression with ax² + bx + c.', 'The coefficient of x² is a = 4.', 'The coefficient of x is b = 7; the constant term is c = −9.'],
          answer: 'Degree = 2; a = 4, b = 7, c = −9.'
        }
      },
      {
        id: 'zeros-of-polynomial',
        title: '2. Zeros: the values that make the polynomial zero',
        explanation: 'A number α is a zero of p(x) if p(α) = 0. Substitution is the safest way to test a proposed zero. For p(x) = x² − 5x + 6, p(2) = 4 − 10 + 6 = 0, so 2 is a zero. A quadratic can have two distinct real zeros, one repeated real zero, or no real zeros. The graph helps us see these possibilities.',
        keyIdeas: [
          'A zero is an input value, not the value of the polynomial at that input.',
          'For a quadratic, there can be at most two real zeros.',
          'If a graph crosses the x-axis twice, it has two distinct real zeros; if it touches once, it has a repeated real zero.',
          'If the graph stays entirely above or below the x-axis, it has no real zero.'
        ],
        example: {
          title: 'Verify both zeros',
          question: 'Check whether 2 and 3 are zeros of p(x) = x² − 5x + 6.',
          working: ['p(2) = 2² − 5(2) + 6 = 4 − 10 + 6 = 0.', 'p(3) = 3² − 5(3) + 6 = 9 − 15 + 6 = 0.', 'Both values make the polynomial equal to zero.'],
          answer: 'The zeros are 2 and 3.'
        }
      },
      {
        id: 'coefficients-and-zeros',
        title: '3. Connect zeros with coefficients',
        explanation: 'For p(x) = ax² + bx + c, where a ≠ 0, let the zeros be α and β. Then α + β = −b/a and αβ = c/a. These formulas are not guesses: when a quadratic is written as a(x − α)(x − β), expanding it gives a[x² − (α + β)x + αβ]. Comparing coefficients produces the two relationships. The sign in the sum formula is especially important.',
        keyIdeas: [
          'Sum of zeros = −b/a. The negative sign belongs to the formula.',
          'Product of zeros = c/a. Keep the constant term sign exactly as written.',
          'The leading coefficient a cannot be zero; otherwise the expression is not quadratic.',
          'Use these relationships to check roots and construct a monic quadratic when the sum and product are known.'
        ],
        example: {
          title: 'Verify the relationships',
          question: 'For 2x² − 7x + 3, find the sum and product of its zeros.',
          working: ['Identify a = 2, b = −7 and c = 3.', 'Sum = −b/a = −(−7)/2 = 7/2.', 'Product = c/a = 3/2.', 'Factorisation gives (2x − 1)(x − 3), so the zeros are 1/2 and 3; their sum and product match.'],
          answer: 'Sum = 7/2; product = 3/2.',
          examinerNote: 'Showing the coefficient method and a quick factorisation check makes the reasoning easy to follow.'
        }
      },
      {
        id: 'forming-quadratics',
        title: '4. Form a quadratic when the sum and product are known',
        explanation: 'If the sum of the zeros is S and their product is P, a monic quadratic polynomial is x² − Sx + P. For a non-monic polynomial, any non-zero constant multiple has the same zeros. To avoid sign errors, write the template first and then substitute the given sum and product.',
        keyIdeas: [
          'Template: x² − (sum of zeros)x + (product of zeros).',
          'If the sum is negative, the coefficient of x becomes positive after subtracting the negative sum.',
          'If the product is negative, the constant term is negative.',
          'Verify a formed polynomial by checking that its zero sum and product match the given values.'
        ],
        example: {
          title: 'Construct a polynomial',
          question: 'Form a monic quadratic whose zeros have sum 5 and product 6.',
          working: ['Use x² − Sx + P.', 'Substitute S = 5 and P = 6.', 'The expression becomes x² − 5x + 6.'],
          answer: 'x² − 5x + 6.'
        }
      }
    ],
    formulaDesk: [
      { label: 'General quadratic', formula: 'p(x) = ax² + bx + c, a ≠ 0', note: 'a, b and c are real coefficients.' },
      { label: 'Sum of zeros', formula: 'α + β = −b/a', note: 'For a quadratic with zeros α and β.' },
      { label: 'Product of zeros', formula: 'αβ = c/a', note: 'Keep the sign of c unchanged.' },
      { label: 'Forming a monic quadratic', formula: 'x² − Sx + P', note: 'S is the sum; P is the product of its zeros.' }
    ],
    commonMistakes: [
      { mistake: 'Writing the coefficient b without its sign.', correction: 'In 2x² − 7x + 3, b = −7, not +7.' },
      { mistake: 'Using b/a for the sum.', correction: 'The correct sum is −b/a.' },
      { mistake: 'Using −c/a for the product.', correction: 'The correct product is c/a.' },
      { mistake: 'Calling the y-value a zero.', correction: 'A zero is the x-value for which p(x) = 0.' },
      { mistake: 'Forgetting that a must be non-zero.', correction: 'If a = 0, the expression is not a quadratic polynomial.' }
    ],
    answerBlueprints: [
      { marks: '2 marks', prompt: 'Find the sum and product of zeros.', structure: ['Identify a, b and c with their signs.', 'Write the two relationships.', 'Substitute and simplify clearly.'] },
      { marks: '3 marks', prompt: 'Form a quadratic polynomial from the sum and product.', structure: ['Write x² − Sx + P.', 'Substitute the values with signs.', 'Expand only if required and state the final polynomial.'] },
      { marks: '3–4 marks', prompt: 'Verify a proposed zero or pair of zeros.', structure: ['Substitute each value into p(x).', 'Show the arithmetic line by line.', 'Conclude whether p(α) = 0.'] }
    ],
    finalChecklist: [
      'I can identify a, b and c without losing negative signs.',
      'I can verify a zero using substitution.',
      'I can explain the x-axis meaning of zeros.',
      'I can apply both coefficient relationships and form a polynomial from S and P.'
    ]
  },
  'pair-of-linear-equations': {
    chapterId: 'pair-of-linear-equations',
    subject: 'Mathematics',
    focus: 'Graphical and algebraic solutions, consistency and word problems involving two unknowns.',
    outcomes: [
      'Translate a situation into two linear equations in two variables.',
      'Solve a pair using substitution or elimination and verify the answer.',
      'Explain unique, no-solution and infinitely-many-solution cases.',
      'Interpret the intersection of two lines in the context of a word problem.'
    ],
    sections: [
      {
        id: 'two-unknowns',
        title: '1. What does a pair of linear equations represent?',
        explanation: 'A linear equation in two variables has the form ax + by + c = 0, where a and b are not both zero. One equation usually has infinitely many ordered-pair solutions; each solution is a point on its straight-line graph. A pair asks for points that satisfy both equations at the same time. The common solution, when it exists, is the point where the two lines intersect.',
        keyIdeas: [
          'A solution is an ordered pair (x, y), not two unrelated numbers.',
          'A correct solution must satisfy both equations, not just one.',
          'Two non-parallel lines meet once, parallel distinct lines never meet, and coincident lines share every point.',
          'The variables should be defined in words before forming equations from a story.'
        ],
        example: {
          title: 'Translate a simple situation',
          question: 'The sum of two numbers is 18 and their difference is 4. Form a pair of equations.',
          working: ['Let the numbers be x and y.', 'Their sum is 18: x + y = 18.', 'Their difference is 4: x − y = 4.'],
          answer: 'x + y = 18 and x − y = 4.'
        }
      },
      {
        id: 'graphical-meaning',
        title: '2. Read the graphical solution',
        explanation: 'Draw both equations as straight lines on the same coordinate plane. If the lines intersect at exactly one point, the coordinates of that point satisfy both equations and the pair has a unique solution. If the lines are parallel and distinct, there is no common point and no solution. If the lines lie exactly on top of each other, every point on the line is common and there are infinitely many solutions.',
        keyIdeas: [
          'Unique solution: intersecting lines; the pair is consistent and independent.',
          'No solution: parallel distinct lines; the pair is inconsistent.',
          'Infinitely many solutions: coincident lines; the equations represent the same line.',
          'Choose a scale carefully and plot at least two accurate points for each line.'
        ]
      },
      {
        id: 'substitution-elimination',
        title: '3. Solve algebraically',
        explanation: 'In substitution, rearrange one equation to express one variable in terms of the other, then substitute that expression into the second equation. In elimination, multiply one or both equations if necessary so that the coefficients of one variable become equal or opposite. Add or subtract the equations to remove that variable, solve the remaining equation and substitute back. Both methods should lead to the same ordered pair.',
        keyIdeas: [
          'Keep equations aligned and preserve signs when moving terms across the equals sign.',
          'In elimination, multiply every term on both sides of an equation by the same non-zero number.',
          'After finding one variable, substitute it into an original equation to find the other.',
          'Check the pair in both original equations to catch arithmetic mistakes.'
        ],
        example: {
          title: 'Elimination step by step',
          question: 'Solve x + y = 18 and x − y = 4.',
          working: ['Add the equations: (x + y) + (x − y) = 18 + 4.', 'The y terms cancel: 2x = 22, so x = 11.', 'Substitute into x + y = 18: 11 + y = 18, so y = 7.', 'Check: 11 + 7 = 18 and 11 − 7 = 4.'],
          answer: 'The solution is (x, y) = (11, 7).'
        }
      },
      {
        id: 'consistency-tests',
        title: '4. Decide how many solutions exist',
        explanation: 'For a₁x + b₁y + c₁ = 0 and a₂x + b₂y + c₂ = 0, compare the ratios of corresponding coefficients. If a₁/a₂ is not equal to b₁/b₂, the lines meet once and there is a unique solution. If a₁/a₂ = b₁/b₂ but c₁/c₂ is different, the lines are parallel and there is no solution. If all three ratios are equal, the equations represent the same line and there are infinitely many solutions. When a denominator is zero, compare the equivalent cross-products or reason directly from the equations instead of dividing by zero.',
        keyIdeas: [
          'Unique solution: a₁/a₂ ≠ b₁/b₂.',
          'No solution: a₁/a₂ = b₁/b₂ ≠ c₁/c₂.',
          'Infinitely many solutions: a₁/a₂ = b₁/b₂ = c₁/c₂.',
          'Write the equations in the same standard form before comparing coefficients.'
        ]
      },
      {
        id: 'word-problems',
        title: '5. Build and solve word problems confidently',
        explanation: 'Most word problems become easier when the variables are chosen carefully. Read the question once for context, then again to identify the two unknown quantities and the relationships between them. Convert each sentence into one equation. Solve the pair and finally answer the question in words with the correct units. A numerical pair without a contextual conclusion is often incomplete.',
        keyIdeas: [
          'Define each variable with a unit where relevant: for example, x = number of adult tickets.',
          'Use the total relationship for one equation and the difference, rate or cost relationship for the other.',
          'Reject answers that violate the context, such as a negative number of people.',
          'Substitute the final values into the original statements to validate the model.'
        ]
      }
    ],
    formulaDesk: [
      { label: 'Standard form', formula: 'a₁x + b₁y + c₁ = 0', note: 'Write both equations in the same form before comparing.' },
      { label: 'Unique solution', formula: 'a₁/a₂ ≠ b₁/b₂', note: 'The two lines intersect once.' },
      { label: 'No solution', formula: 'a₁/a₂ = b₁/b₂ ≠ c₁/c₂', note: 'The two lines are parallel and distinct.' },
      { label: 'Infinitely many', formula: 'a₁/a₂ = b₁/b₂ = c₁/c₂', note: 'The two equations represent the same line.' }
    ],
    commonMistakes: [
      { mistake: 'Reporting x and y but not the ordered pair.', correction: 'Write (x, y) and explain what each value represents.' },
      { mistake: 'Changing a sign incorrectly during elimination.', correction: 'Keep each equation aligned and show the addition or subtraction line.' },
      { mistake: 'Multiplying only one term of an equation.', correction: 'Multiply every term on both sides by the same factor.' },
      { mistake: 'Checking the answer in only one equation.', correction: 'Substitute into both original equations.' },
      { mistake: 'Dividing by a zero coefficient ratio.', correction: 'Use cross-products or inspect the equations directly when a denominator is zero.' }
    ],
    answerBlueprints: [
      { marks: '3 marks', prompt: 'Solve a pair by elimination or substitution.', structure: ['Write the equations in standard form.', 'Show the elimination/substitution steps.', 'Find the ordered pair and verify it in both equations.'] },
      { marks: '4–5 marks', prompt: 'Solve a contextual word problem.', structure: ['Define both variables with meaning and units.', 'Form two equations from the given relationships.', 'Solve using a named method.', 'Check the values and state the final answer in context.'] }
    ],
    finalChecklist: [
      'I can define variables and form both equations from a situation.',
      'I can solve by substitution and elimination.',
      'I can explain all three graphical cases.',
      'I can use coefficient ratios without dividing by zero.',
      'I always verify the final ordered pair in both equations.'
    ]
  },
  'quadratic-equations': {
    chapterId: 'quadratic-equations',
    subject: 'Mathematics',
    focus: 'Factorisation, the quadratic formula, discriminant and applications of quadratic equations.',
    outcomes: [
      'Recognise a quadratic equation and write it in standard form.',
      'Solve by factorisation when suitable and by the quadratic formula.',
      'Use the discriminant to determine the nature of roots.',
      'Form and solve equations from suitable real-life situations.'
    ],
    sections: [
      {
        id: 'standard-form',
        title: '1. Recognise the standard form',
        explanation: 'A quadratic equation in one variable can be written as ax² + bx + c = 0, where a, b and c are real numbers and a ≠ 0. The x² term makes it quadratic. Before choosing a method, move every term to one side and arrange the equation in descending powers of x. This makes the coefficients unambiguous and prevents sign errors.',
        keyIdeas: [
          'The equation must be equal to zero before using the standard formula.',
          'The coefficient a must not be zero.',
          'The signs of a, b and c are exactly the signs shown after rearranging.',
          'An equation is not solved merely by finding factors; set each factor equal to zero.'
        ],
        example: {
          title: 'Convert into standard form',
          question: 'Write 2x(x − 3) = 5 in standard form and identify a, b and c.',
          working: ['Expand: 2x² − 6x = 5.', 'Bring 5 to the left: 2x² − 6x − 5 = 0.', 'Compare with ax² + bx + c = 0.'],
          answer: 'a = 2, b = −6 and c = −5.'
        }
      },
      {
        id: 'factorisation',
        title: '2. Solve by factorisation',
        explanation: 'Factorisation rewrites a quadratic expression as a product of two linear factors. The zero-product property says that if a product is zero, at least one factor must be zero. For example, (x − 2)(x − 3) = 0 gives x − 2 = 0 or x − 3 = 0. Therefore x = 2 or x = 3. Always verify roots in the original equation when the algebra is complicated.',
        keyIdeas: [
          'Look for two numbers whose product is ac and whose sum is b when using the splitting-middle-term method.',
          'For a monic quadratic, look for factors whose product is c and sum is b.',
          'Set each factor equal to zero separately.',
          'Factorisation is efficient when the factors are simple; the formula works more generally.'
        ],
        example: {
          title: 'Factorise and solve',
          question: 'Solve x² − 5x + 6 = 0.',
          working: ['Find two numbers with product 6 and sum −5: −2 and −3.', 'Write x² − 5x + 6 = (x − 2)(x − 3).', 'Set x − 2 = 0 or x − 3 = 0.'],
          answer: 'x = 2 or x = 3.'
        }
      },
      {
        id: 'quadratic-formula',
        title: '3. Use the quadratic formula',
        explanation: 'When factorisation is difficult, use the quadratic formula. For ax² + bx + c = 0, the roots are obtained by substituting the coefficients into the formula. Be especially careful with brackets around negative b and with the entire expression under the square root. A reliable routine is: identify a, b, c; calculate the discriminant; substitute; simplify; then check the roots.',
        keyIdeas: [
          'Write the formula before substituting values.',
          'Use −b, not simply the opposite of what you remember b to be; preserve brackets.',
          'The denominator is 2a and applies to the entire numerator.',
          'If a common factor can simplify the equation first, do so without changing its roots.'
        ],
        example: {
          title: 'Apply the formula',
          question: 'Solve x² − 4x + 1 = 0.',
          working: ['Here a = 1, b = −4 and c = 1.', 'D = b² − 4ac = 16 − 4 = 12.', 'x = [−(−4) ± √12] / 2 = [4 ± 2√3] / 2.', 'Simplify both values.'],
          answer: 'x = 2 ± √3.'
        }
      },
      {
        id: 'discriminant',
        title: '4. The discriminant tells the nature of roots',
        explanation: 'The expression D = b² − 4ac is called the discriminant. It is the part under the square root in the quadratic formula, so its sign tells us what kind of roots are possible. A positive discriminant gives two distinct real roots, zero gives equal real roots, and a negative discriminant gives no real roots. The discriminant does not by itself give the roots; it classifies them.',
        keyIdeas: [
          'D > 0: two distinct real roots.',
          'D = 0: two equal real roots (a repeated root).',
          'D < 0: no real roots.',
          'For D > 0, the roots may be rational or irrational; the sign alone does not decide that.'
        ]
      },
      {
        id: 'applications',
        title: '5. Model a word problem with a quadratic',
        explanation: 'A quadratic model appears when a situation contains a product of two quantities that depend on the same unknown, such as length × breadth or consecutive integers. Define the unknown clearly, translate the relationship into an equation and rearrange to standard form. After solving, select only values that make sense in the original situation. Length, time and number of objects are generally non-negative, so a mathematically valid negative root may need to be rejected.',
        keyIdeas: [
          'Draw and label a simple diagram when the problem describes dimensions or geometry.',
          'Keep units consistent before forming the equation.',
          'State why an unsuitable root is rejected; do not silently discard it.',
          'Write the final answer in the units and context asked by the question.'
        ]
      }
    ],
    formulaDesk: [
      { label: 'Standard form', formula: 'ax² + bx + c = 0, a ≠ 0', note: 'Rearrange first and identify all signs.' },
      { label: 'Quadratic formula', formula: 'x = [−b ± √(b² − 4ac)] / 2a', note: 'The denominator 2a applies to the whole numerator.' },
      { label: 'Discriminant', formula: 'D = b² − 4ac', note: 'D > 0: distinct real; D = 0: equal real; D < 0: no real roots.' }
    ],
    commonMistakes: [
      { mistake: 'Using coefficients before rearranging the equation to zero.', correction: 'First write ax² + bx + c = 0, then identify a, b and c.' },
      { mistake: 'Forgetting the negative sign in −b.', correction: 'Substitute b with brackets, for example −(−4).' },
      { mistake: 'Putting only part of the numerator over 2a.', correction: 'Use brackets around the complete numerator.' },
      { mistake: 'Calling D = 0 two different roots.', correction: 'The roots are equal; it is one repeated value.' },
      { mistake: 'Keeping a negative root that makes a length negative.', correction: 'Check every root against the original context and explain the rejection.' }
    ],
    answerBlueprints: [
      { marks: '3 marks', prompt: 'Solve a quadratic equation.', structure: ['Write standard form and identify a, b and c.', 'Show factorisation or formula substitution.', 'State both roots clearly and verify if appropriate.'] },
      { marks: '2 marks', prompt: 'Find the nature of roots.', structure: ['Calculate D = b² − 4ac.', 'State whether D is positive, zero or negative.', 'Give the corresponding nature of the roots.'] },
      { marks: '4–5 marks', prompt: 'Solve a real-life quadratic problem.', structure: ['Define the unknown and any units.', 'Form the quadratic equation from the condition.', 'Solve using a suitable method.', 'Reject any contextually impossible root with a reason.', 'State the final answer in context.'] }
    ],
    finalChecklist: [
      'I can rearrange an equation into standard form without sign errors.',
      'I can solve by factorisation and by the quadratic formula.',
      'I can classify roots using the discriminant.',
      'I can explain why a root is rejected in a word problem.'
    ]
  },
  'chemical-reactions-and-equations': {
    chapterId: 'chemical-reactions-and-equations',
    subject: 'Science',
    focus: 'Writing and balancing equations, reaction types, energy changes, oxidation and reduction.',
    outcomes: [
      'Identify evidence that a chemical reaction has occurred.',
      'Write a balanced chemical equation using correct symbols and state labels.',
      'Classify combination, decomposition, displacement and double-displacement reactions.',
      'Explain oxidation, reduction, exothermic change, corrosion and rancidity.'
    ],
    sections: [
      {
        id: 'reaction-evidence',
        title: '1. Recognise a chemical reaction',
        explanation: 'A chemical reaction changes one or more substances into new substances with different properties. Common observations include a change in colour, evolution of a gas, formation of a precipitate, change in temperature or change in state. An observation is evidence, but the explanation should identify the substances involved whenever possible. A physical change such as melting is not automatically a chemical reaction.',
        keyIdeas: [
          'Reactants are written on the left side of an equation; products are written on the right.',
          'A precipitate is an insoluble solid formed when solutions react.',
          'Gas bubbles, a colour change or a temperature change can indicate a reaction.',
          'Do not decide that a reaction occurred from one observation alone when the context suggests a physical change.'
        ],
        example: {
          title: 'Describe an observation precisely',
          question: 'When lead nitrate solution is mixed with potassium iodide solution, a yellow solid appears. What does this indicate?',
          working: ['The yellow solid is an insoluble product.', 'The formation of a solid from two solutions is called precipitation.', 'The new solid is lead iodide.'],
          answer: 'A precipitation reaction occurs and a yellow precipitate of lead iodide is formed.'
        }
      },
      {
        id: 'chemical-equations',
        title: '2. Write and balance a chemical equation',
        explanation: 'A word equation names the reactants and products. A chemical equation uses symbols and formulae. A skeletal equation may not be balanced. A balanced equation has the same number of atoms of each element on both sides, following the law of conservation of mass. Balance by changing coefficients in front of formulae; never change the small numbers inside a chemical formula because that would change the substance itself.',
        keyIdeas: [
          'Write the correct formulae before balancing. For example, water is H₂O, not HO.',
          'Count atoms on both sides, including atoms inside brackets in a formula.',
          'Use the smallest whole-number coefficients when possible.',
          'Add state symbols when the question or experiment requires them: (s), (l), (g) and (aq).',
          'A catalyst or reaction condition is usually written above or beside the arrow, not as a reactant.'
        ],
        example: {
          title: 'Balance the formation of water',
          question: 'Balance H₂ + O₂ → H₂O.',
          working: ['There are 2 oxygen atoms on the left and 1 on the right. Put 2 before H₂O.', 'Now the right side has 4 hydrogen atoms. Put 2 before H₂.', 'Count again: left has 4 H and 2 O; right has 4 H and 2 O.'],
          answer: '2H₂ + O₂ → 2H₂O.'
        }
      },
      {
        id: 'reaction-types',
        title: '3. Classify common reaction patterns',
        explanation: 'A combination reaction forms a single product from two or more reactants. A decomposition reaction breaks one compound into simpler substances, often using heat, light or electricity. In a displacement reaction, a more reactive element replaces a less reactive element from its compound. In a double-displacement reaction, ions are exchanged between two compounds; precipitation and neutralisation can follow this pattern.',
        keyIdeas: [
          'Combination: A + B → AB. Example: 2Mg + O₂ → 2MgO.',
          'Thermal decomposition: a compound breaks down on heating. Example: CaCO₃ → CaO + CO₂.',
          'Displacement: Zn + CuSO₄ → ZnSO₄ + Cu.',
          'Double displacement: Na₂SO₄ + BaCl₂ → BaSO₄ + 2NaCl.',
          'The pattern of reactants and products is the clue; do not classify only by the number of substances shown.'
        ],
        example: {
          title: 'Identify a displacement reaction',
          question: 'Zinc is added to copper sulphate solution. What happens?',
          working: ['Zinc is more reactive than copper.', 'Zinc displaces copper from copper sulphate.', 'The products are zinc sulphate and copper metal.'],
          answer: 'Zn + CuSO₄ → ZnSO₄ + Cu; this is a displacement reaction.'
        }
      },
      {
        id: 'energy-redox',
        title: '4. Energy changes and redox reactions',
        explanation: 'An exothermic reaction releases energy to its surroundings, often as heat. An endothermic reaction absorbs energy. Oxidation and reduction occur together in a redox reaction. In the school-level oxygen/hydrogen description, oxidation can mean gain of oxygen or loss of hydrogen, while reduction can mean loss of oxygen or gain of hydrogen. The substance oxidised and the substance reduced should be identified from the same reaction.',
        keyIdeas: [
          'Respiration is an example of an exothermic process because energy is released from food.',
          'Thermal decomposition of calcium carbonate requires heat and is endothermic.',
          'In CuO + H₂ → Cu + H₂O, copper oxide loses oxygen and is reduced.',
          'Hydrogen gains oxygen to form water and is oxidised.',
          'Oxidation and reduction happen simultaneously in a redox reaction.'
        ]
      },
      {
        id: 'corrosion-rancidity',
        title: '5. Corrosion and rancidity in everyday life',
        explanation: 'Corrosion is the gradual damage of a metal by reaction with substances in its environment. Rusting of iron requires oxygen and moisture. Painting, oiling, greasing, galvanising and alloying can help protect metals by reducing contact with corrosive conditions or changing the material. Rancidity is the oxidation of fats and oils in food, which can produce unpleasant smell and taste. Airtight storage, refrigeration, antioxidants and packing with nitrogen can slow it down.',
        keyIdeas: [
          'Rust is hydrated iron(III) oxide; rusting is not simply a colour change.',
          'Galvanising coats iron or steel with zinc.',
          'Food packets may be flushed with nitrogen to reduce oxidation.',
          'Refrigeration slows many reactions but does not make food permanently safe.'
        ]
      }
    ],
    formulaDesk: [
      { label: 'Conservation of mass', formula: 'Atoms of each element: left = right', note: 'The number of atoms is conserved in a balanced chemical equation.' },
      { label: 'Combination pattern', formula: 'A + B → AB', note: 'Two or more reactants form one product.' },
      { label: 'Decomposition pattern', formula: 'AB → A + B', note: 'One compound breaks into simpler products.' },
      { label: 'Displacement pattern', formula: 'A + BC → AC + B', note: 'A more reactive element displaces a less reactive one.' }
    ],
    commonMistakes: [
      { mistake: 'Changing a formula subscript to balance atoms.', correction: 'Change coefficients only; subscripts define the substance.' },
      { mistake: 'Forgetting to count atoms inside brackets.', correction: 'Multiply the atoms inside a bracket by the number outside it.' },
      { mistake: 'Calling every reaction with two reactants a combination reaction.', correction: 'A combination reaction forms one product; inspect the products.' },
      { mistake: 'Describing oxidation and reduction as separate events in one redox reaction.', correction: 'They occur together: one species is oxidised while another is reduced.' },
      { mistake: 'Saying rusting needs only air.', correction: 'Oxygen and moisture are both required for ordinary rusting of iron.' }
    ],
    answerBlueprints: [
      { marks: '2 marks', prompt: 'Balance a chemical equation.', structure: ['Write the correct formulae.', 'Balance one element at a time using coefficients.', 'Show a final atom count or clearly state that atoms balance.'] },
      { marks: '3 marks', prompt: 'Classify a reaction and justify the answer.', structure: ['Write or identify the balanced equation.', 'Name the reaction type.', 'Explain the pattern using the reactants and products.'] },
      { marks: '3–5 marks', prompt: 'Explain a redox reaction.', structure: ['Identify which substance gains or loses oxygen/hydrogen.', 'State which species is oxidised and which is reduced.', 'Support each statement with the relevant equation or change.'] }
    ],
    finalChecklist: [
      'I can recognise evidence of a chemical reaction.',
      'I can write correct formulae and balance equations without changing subscripts.',
      'I can distinguish combination, decomposition, displacement and double displacement.',
      'I can explain energy changes, oxidation, reduction, corrosion and rancidity.'
    ]
  },
  'life-processes': {
    chapterId: 'life-processes',
    subject: 'Science',
    focus: 'Nutrition, respiration, transport and excretion in plants and animals.',
    outcomes: [
      'Explain why organisms need life processes to maintain life.',
      'Compare autotrophic and heterotrophic nutrition and describe human digestion.',
      'Explain aerobic and anaerobic respiration and the role of ATP.',
      'Describe transport in plants, double circulation in humans and urine formation.'
    ],
    sections: [
      {
        id: 'life-process-basics',
        title: '1. Why organisms need life processes',
        explanation: 'Living organisms constantly use energy and materials to maintain their bodies. Life processes such as nutrition, respiration, transport and excretion keep cells supplied with raw materials, release usable energy, distribute substances and remove metabolic wastes. Movement or growth may be visible, but many essential life processes continue inside the body even when an organism appears still.',
        keyIdeas: [
          'Nutrition provides or makes food materials needed for energy, growth and repair.',
          'Respiration releases energy from food in a form cells can use.',
          'Transport distributes food, gases and other substances to different parts of the organism.',
          'Excretion removes metabolic wastes that could become harmful if they accumulate.'
        ]
      },
      {
        id: 'nutrition-plants',
        title: '2. Nutrition in plants: photosynthesis',
        explanation: 'Green plants are autotrophs: they make organic food from simpler inorganic materials. During photosynthesis, chlorophyll captures light energy and helps convert carbon dioxide and water into carbohydrates, with oxygen released. Carbon dioxide enters mainly through stomata in leaves, while water is absorbed by roots and transported to leaves. The food produced may be used immediately or stored, often as starch.',
        keyIdeas: [
          'Raw materials: carbon dioxide and water. Conditions: light and chlorophyll.',
          'Stomata are pores in leaves; guard cells help regulate their opening and closing.',
          'Chlorophyll is present in chloroplasts and absorbs light energy.',
          'A leaf starch test uses iodine; a blue-black colour indicates starch.',
          'Plants also respire. Photosynthesis and respiration are different processes.'
        ],
        example: {
          title: 'Explain the starch test',
          question: 'Why is a leaf boiled in alcohol during the starch test?',
          working: ['Chlorophyll gives the leaf a green colour that can hide the iodine colour change.', 'Alcohol removes chlorophyll from the leaf.', 'The leaf is then rinsed and iodine solution is added.'],
          answer: 'Alcohol decolourises the leaf so the blue-black starch test result can be observed clearly.'
        }
      },
      {
        id: 'nutrition-human',
        title: '3. Nutrition in humans: digestion and absorption',
        explanation: 'Human nutrition is holozoic: food is taken into the body, digested, absorbed and used. Digestion breaks large, insoluble food molecules into smaller soluble substances. Salivary amylase begins starch digestion in the mouth. The stomach churns food and gastric juice contains hydrochloric acid and pepsin. Bile from the liver helps make fats easier to digest by emulsifying them, while pancreatic and intestinal enzymes complete digestion. The small intestine has villi that provide a large surface area for absorption.',
        keyIdeas: [
          'Mouth: chewing increases surface area; saliva moistens food and amylase acts on starch.',
          'Stomach: muscular churning mixes food; hydrochloric acid creates an acidic medium and pepsin digests proteins.',
          'Small intestine: digestion is completed and nutrients are absorbed through villi.',
          'Large intestine: water and some salts are absorbed; undigested material is removed.',
          'Bile is made by the liver and stored in the gall bladder; it is not an enzyme.'
        ]
      },
      {
        id: 'respiration',
        title: '4. Respiration releases usable energy',
        explanation: 'Respiration is the cellular process through which food molecules are broken down and energy is released. In aerobic respiration, glucose is broken down in the presence of oxygen and the products are carbon dioxide and water; a large amount of energy is released. When oxygen is insufficient, some organisms and cells use anaerobic pathways. Yeast forms ethanol and carbon dioxide, while human muscle cells may form lactic acid for a short period during intense activity. ATP acts as an immediately usable energy currency for cellular work.',
        keyIdeas: [
          'Aerobic respiration uses oxygen and releases more energy per glucose molecule than anaerobic pathways.',
          'In humans, gas exchange takes place in alveoli of the lungs; their thin walls and rich blood supply support diffusion.',
          'Breathing is the movement of air; cellular respiration is a chemical process inside cells.',
          'Glucose breakdown begins in the cytoplasm; later steps of aerobic respiration occur in mitochondria.',
          'ATP supplies energy for processes such as muscle contraction, synthesis and active transport.'
        ],
        example: {
          title: 'Do not confuse breathing and respiration',
          question: 'A student says breathing and respiration mean the same thing. Correct the statement.',
          working: ['Breathing is the physical movement of air into and out of the lungs.', 'Respiration is the chemical release of energy from food in cells.', 'Breathing supplies oxygen and removes carbon dioxide, supporting aerobic respiration.'],
          answer: 'Breathing and cellular respiration are linked but are not the same process.'
        }
      },
      {
        id: 'transport',
        title: '5. Transport in plants and humans',
        explanation: 'Plants use xylem to transport water and minerals mainly from roots towards leaves. Transpiration, the loss of water vapour from aerial parts, creates a pull that helps move water upward. Phloem transports food such as sucrose from regions where it is made or stored to regions where it is needed; this movement is called translocation and requires energy. In humans, blood transports oxygen, carbon dioxide, nutrients, hormones and wastes. The heart keeps blood moving through a double-circulation system.',
        keyIdeas: [
          'Xylem transports water and minerals; phloem transports food.',
          'Transpiration also helps cool plant surfaces.',
          'Arteries carry blood away from the heart; veins carry blood towards the heart.',
          'Capillaries have thin walls that allow exchange between blood and tissues.',
          'In double circulation, blood passes through the heart twice in one complete circuit: pulmonary and systemic circulation.',
          'The separation of oxygenated and deoxygenated blood supports efficient oxygen delivery.'
        ]
      },
      {
        id: 'excretion',
        title: '6. Excretion and the nephron',
        explanation: 'Excretion removes metabolic wastes such as urea, excess salts and excess water. In humans, kidneys filter blood and help maintain water and salt balance. Each kidney contains many nephrons, the structural and functional units of filtration. Blood is filtered in the glomerulus into Bowman’s capsule. Useful substances such as glucose, amino acids, salts and much of the water are selectively reabsorbed according to the body’s needs. The remaining fluid becomes urine and passes through the ureters to the urinary bladder.',
        keyIdeas: [
          'The nephron includes the glomerulus, Bowman’s capsule and a long renal tubule.',
          'Filtration moves water and small dissolved substances out of blood; blood cells and most proteins remain in the blood.',
          'Selective reabsorption returns useful substances and needed water to the blood.',
          'Urine travels: kidneys → ureters → urinary bladder → urethra.',
          'Plants remove or store wastes in different ways, including diffusion, storage in leaves/bark and secretion of substances such as gums and resins.'
        ],
        example: {
          title: 'Explain why urine composition can change',
          question: 'Why may the amount of water in urine change after a person drinks a large amount of water?',
          working: ['The kidneys regulate water balance in the body.', 'When more water is available than needed, less water needs to be conserved.', 'A greater amount of dilute urine may be produced.'],
          answer: 'The kidneys adjust water reabsorption to maintain the body’s water balance.'
        }
      }
    ],
    formulaDesk: [
      { label: 'Photosynthesis', formula: '6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂', note: 'Light and chlorophyll are required; simplified overall equation.' },
      { label: 'Aerobic respiration', formula: 'Glucose + oxygen → carbon dioxide + water + energy', note: 'Occurs in cells and releases energy captured in ATP.' },
      { label: 'Plant transport', formula: 'Xylem: water/minerals · Phloem: food', note: 'Remember the different transported materials.' },
      { label: 'Urine pathway', formula: 'Kidney → ureter → bladder → urethra', note: 'Learn the sequence in the correct order.' }
    ],
    commonMistakes: [
      { mistake: 'Saying plants only respire at night.', correction: 'Plants respire day and night; photosynthesis requires light.' },
      { mistake: 'Calling bile an enzyme.', correction: 'Bile is not an enzyme; it emulsifies fats and helps create suitable conditions for digestion.' },
      { mistake: 'Confusing breathing with respiration.', correction: 'Breathing moves air; respiration releases energy chemically inside cells.' },
      { mistake: 'Swapping xylem and phloem functions.', correction: 'Xylem carries water and minerals; phloem carries food.' },
      { mistake: 'Writing that veins always carry deoxygenated blood.', correction: 'Veins carry blood towards the heart; pulmonary veins are an important exception to the oxygenation shortcut.' },
      { mistake: 'Saying filtration alone forms final urine.', correction: 'Filtration is followed by selective reabsorption and other adjustments in the nephron.' }
    ],
    answerBlueprints: [
      { marks: '3 marks', prompt: 'Explain nutrition or respiration in a named organism.', structure: ['Name the process and where it occurs.', 'Describe the main stages or organs in order.', 'Mention important substances, conditions and products.'] },
      { marks: '5 marks', prompt: 'Explain transport or urine formation with a labelled diagram.', structure: ['Start with the purpose of the process.', 'Describe the route or structures in the correct sequence.', 'Explain the function of each major part.', 'Add a neat labelled diagram where requested.', 'Use the correct scientific terms.'] }
    ],
    finalChecklist: [
      'I can explain photosynthesis and the role of stomata and chlorophyll.',
      'I can describe digestion and the function of key digestive organs.',
      'I can distinguish breathing, aerobic respiration and anaerobic respiration.',
      'I can compare xylem and phloem and explain double circulation.',
      'I can describe filtration and selective reabsorption in a nephron.'
    ]
  }
}

export function getMasteryPack(chapterId: string) {
  return CHAPTER_MASTERY[chapterId]
}
