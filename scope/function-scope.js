// Q1: const, let, var in function declaration scope

// function foo () {
//   const x = 1;
//   console.log(x); // 1
// }
// foo();
// console.log(x); // ReferenceError: x is not defined

// function bar () {
//   let y = 1;
//   console.log(y); // 1
// }
// bar();
// console.log(y); // ReferenceError: y is not defined

// function baz () {
//   var z = 1;
//   console.log(z); // 1
// }
// baz();
// console.log(z); // ReferenceError: z is not defined




// Q2: const, let, var in function expression scope

// const foo = function () {
//   const x = 1;
//   console.log(x); // 1
// }
// foo();
// console.log(x); // ReferenceError: x is not defined

// const bar = function () {
//   let y = 1;
//   console.log(y); // 1
// }
// bar();
// console.log(y); // ReferenceError: y is not defined

// const baz = function () {
//   var z = 1;
//   console.log(z); // 1
// }
// baz();
// console.log(z); // ReferenceError: z is not defined




// Q2: const, let, var in arrow function scope

// const foo = () => {
//   const x = 1;
//   console.log(x); // 1
// }
// foo();
// console.log(x); // ReferenceError: x is not defined

// const bar = () => {
//   let y = 1;
//   console.log(y); // 1
// }
// bar();
// console.log(y); // ReferenceError: y is not defined

// const baz = () => {
//   var z = 1;
//   console.log(z); // 1
// }
// baz();
// console.log(z); // ReferenceError: z is not defined




// Q4: IIFE scope