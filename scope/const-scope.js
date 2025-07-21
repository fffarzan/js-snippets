// Q1: const block scoping

// const a = 7;
// if (a === 7) {
//   const a = 20;
//   console.log(a); // 20
// }
// console.log(a); // 7




// Q2: const begins declarations, not statements.

// if (true) const a = 1; //  SyntaxError: Lexical declaration cannot appear in a single-statement context
// if (true) b = 2;