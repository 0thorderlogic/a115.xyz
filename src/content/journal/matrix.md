---
title: "How best to re-learned Matrices for a pre-requisite of Linear Algebra"
date: 2026-04-06
description: "A bunch of YouTube Links"
---

More links: [Algorithm Archive](https://www.algorithm-archive.org/)

I have a new motto in life, don't do things a chat-bot can.

In complete honesty a chat-bot can make you a list of things you need to learn x
before you learn y, especially if x,y belong to STEM. But it can't watch and
tell you if a video is legit which is why I made this list.

- Matrix basics and notation: https://www.youtube.com/watch?v=yRwQ7A6jVLk
- Matrix transpose: https://www.youtube.com/watch?v=Yaqaz-PO6TI
- Determinant of a matrix
  - https://www.youtube.com/watch?v=3ROzG6n4yMc
  - https://www.youtube.com/watch?v=Ip3X9LOh2dk&t=149s
- Matrix multiplication
  - https://www.youtube.com/watch?v=vzt9c7iWPxs
  - https://www.youtube.com/watch?v=p8VnTCfJHAo
  - https://www.youtube.com/watch?v=XkY2DOUCWMU
- Matrix inverse
  - https://www.youtube.com/watch?v=p8VnTCfJHAo

If there are terms/concepts you don't understand use [Claude](https://claude.ai)
_FUCK Dario tho_ don't be an idealist use things that help you go faster.

**These four needs to be done all together:**

Gaussian elimination (or Gauss-Jordan)

Row echelon form (REF)+Reduced Row echelon form (RREF)

Systems of linear equations matrix form

- https://www.youtube.com/watch?v=2j5Ic2V7wq4
- https://www.youtube.com/watch?v=ShonVncOAB4
- https://www.youtube.com/watch?v=eDb6iugi6Uk

**Rank of a Matrix**:

## Questions and Doubts (Answers from Claude)

- **Is (CE)ᵀ = EᵀCᵀ always true?** Yes, always. Called the reverse order law.
  Extends to (CDE)ᵀ = EᵀDᵀCᵀ.
- **Does AᵀA also result in a symmetric matrix like AAᵀ?** Yes. Both AAᵀ and AᵀA
  are always symmetric, just not the same matrix.
- **Do I need to do determinants for larger than 3×3?** No. 2×2 and 3×3 is
  enough. Larger ones are computed programmatically.
- **What is the purpose of Gaussian Elimination?** To solve systems of linear
  equations (Ax = b) by simplifying the augmented matrix [A|b] into REF or RREF,
  from which you read off the unknowns.
- **What's the point of all three — Gaussian Elimination, REF, RREF?** Gaussian
  Elimination is the process. REF is the intermediate goal enabling
  back-substitution. RREF is the final goal where the solution is directly
  readable. It's one process with two stopping points.
- **What is the leading coefficient/leading entry in a matrix?** The first
  non-zero element in a row. Also called the pivot. Same thing, interchangeable
  terms.
- **What is a triangular matrix and what is the leading coefficient in it?**
  Square matrix where all elements either above (lower triangular) or below
  (upper triangular) the diagonal are zero. The leading coefficient in each row
  is always the diagonal element.
- **If we replace non-diagonal elements with 0, is it still triangular?** Yes.
  Definition only requires the correct side to be zero. Other elements including
  non-diagonal ones can be anything including zero.
- **Is Gauss-Jordan Elimination the same as Gaussian Elimination?** Not exactly.
  Gaussian Elimination stops at REF, then you back-substitute. Gauss-Jordan goes
  all the way to RREF, no back-substitution needed. Gauss-Jordan is Gaussian
  taken all the way.
- **Is upper-triangular the necessary first step in Gauss-Jordan?** Yes. You
  eliminate downward first (upper triangular = REF), then upward to reach RREF.
  Lower triangular doesn't fit the process.
- **What is the significance of pivot position?** Determines the rank (number of
  pivots = rank), whether a unique solution exists, and which variables are
  basic vs free.
- **What does "augment" mean in general and in this context?** Generally: to
  extend or append something. In this context: appending the constants column b
  to matrix A giving [A|b], so row operations apply to both sides
  simultaneously.
- **What is the determinant's role in elimination?** If a pivot becomes 0 during
  elimination, you either swap rows or the matrix is singular (det = 0), meaning
  no unique solution exists.
- **What is REF?** Row Echelon Form — leading entry of each row is right of the
  one above, all zero rows at bottom, zeros below each pivot.
- **What is RREF?** Reduced Row Echelon Form — everything in REF plus each pivot
  = 1 and zeros above and below every pivot.
- **What is the use of REF and RREF?** REF: enables back-substitution, useful
  for rank and determinant. RREF: solution directly readable, used for finding
  inverse (augment with I), determining rank and free variables.
- **What is rank?** Number of non-zero rows in REF/RREF, equivalently the number
  of pivot positions.
- **Are pivot positions the same in REF and RREF?** Yes. Row operations don't
  change pivot positions, only what's around them.

I can't remove the made with AI footer badge for just this page too much work.
And I prefer not to ship any javascript
