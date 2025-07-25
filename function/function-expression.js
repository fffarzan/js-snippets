// Q1: Name changing in function expression

// "use strict"; // important!
// function foo() {
//   foo = 1;
// }
// foo();
// console.log(foo); // 1
// (function foo() {
//   foo = 1; // TypeError: Assignment to constant variable.
// })();