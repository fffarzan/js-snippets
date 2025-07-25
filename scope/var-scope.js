// Q1: var scoope

// var x = 0
// var x = 3
// function foo() {
//   var x = 1;
//   console.log(x); // 1
// }
// foo();




// Q2: var hoisting and scope

// function foo() {
//   var x = 1;
//   function bar() {
// 	  console.log(x); // undefined
// 	  var x = 2;
//     var y = 2;
//     console.log(x); // 2
//     console.log(y); // 2
//   }
//   bar();
//   console.log(x); // 1
//   console.log(y); // ReferenceError, yQ2 is not defined
// }
// foo();




// Q3: var scope in a block

// for (var a of [1, 2, 3]) {
// 	console.log(a); // 1, 2, 3
// }
// for (var b of [1, 2, 3]);
// console.log(b); // 3




// Q4
var xQ5 = 1;
var xQ5 = 2;

console.log('xQ5 (first):', xQ5); // 2

var xQ5;

console.log('xQ5 (second):', xQ5); // 2; not undefined

// ====================================================================================================================

// Q5
var xQ6 = 1;

function xQ6() {}

console.log('xQ6:', xQ6); // 1

// ====================================================================================================================

// Q6
var xQ7 = 1;
// let xQ7 = 2; // SyntaxError: Identifier 'xQ7' has already been declared

// ====================================================================================================================

// Q7
let xQ8 = 1;

{
  // var xQ8 = 1; // SyntaxError: Identifier 'xQ7' has already been declared
}

// ====================================================================================================================

// Q8
var xQ9 = 1;
{
  let xQ9 = 2;
}

console.log('xQ9:', xQ9); // 1

// ====================================================================================================================

// Q9
function fooxQ10(xQ10) {
  console.log('xQ10', xQ10); // 2

  var xQ10 = 1;

  console.log('xQ10:', xQ10); // 1
}

fooxQ10(2);

// ====================================================================================================================

// Q10
var xQ11 = 0;

console.log('typeof zQ11:', typeof zQ11); // undefined

function fooQ11() {
  var yQ11 = 2;

  console.log('xQ11 (first):', xQ11); // 0
  console.log('yQ11 (first):', yQ11); // 2

  function barQ11() {
    xQ11 = 3;
    yQ11 = 4;
    zQ11 = 5;
    // (Throws a ReferenceError in strict mode)
  }

  barQ11();

  console.log('xQ11 (second):', xQ11); // 3
  console.log('yQ11 (second):', yQ11); // 4
  console.log('zQ11 (second):', zQ11); // 5
}

fooQ11();

console.log('xQ11 (third):', xQ11); // 3
console.log('zQ11 (third):', zQ11); // 5
console.log('typeof yQ11:', typeof yQ11); // undefined