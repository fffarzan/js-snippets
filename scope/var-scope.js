// Q1
var xQ1 = 0
var xQ1 = 3

function fooQ1() {
  var xQ1 = 1;

  console.log('xQ1:', xQ1); // 1
}

fooQ1();

// ====================================================================================================================

// Q2
function fooQ2() {
  var xQ2 = 1;

  function barQ2() {
	  console.log('xQ2: (first)', xQ2); // undefined

	  var xQ2 = 2;
    var yQ2 = 2;

    console.log('xQ2: (second)', xQ2); // 2
    console.log('yQ2:', yQ2); // 2
  }

  barQ2();

  console.log('xQ2: (third)', xQ2); // 1
//   console.log('yQ2', yQ2); // ReferenceError, yQ2 is not defined
}

fooQ2();

// ====================================================================================================================

// Q3
for (var aQ3 of [1, 2, 3]) {
	console.log('aQ3:', aQ3); // 1, 2, 3
}

// ====================================================================================================================

// Q4
for (var aQ4 of [1, 2, 3]);

console.log('aQ4:', aQ3); // 3

// ====================================================================================================================

// Q5
var xQ5 = 1;
var xQ5 = 2;

console.log('xQ5 (first):', xQ5); // 2

var xQ5;

console.log('xQ5 (second):', xQ5); // 2; not undefined

// ====================================================================================================================

// Q6
var xQ6 = 1;

function xQ6() {}

console.log('xQ6:', xQ6); // 1

// ====================================================================================================================

// Q7
var xQ7 = 1;
// let xQ7 = 2; // SyntaxError: Identifier 'xQ7' has already been declared

// ====================================================================================================================

// Q8
let xQ8 = 1;

{
  // var xQ8 = 1; // SyntaxError: Identifier 'xQ7' has already been declared
}

// ====================================================================================================================

// Q9
var xQ9 = 1;
{
  let xQ9 = 2;
}

console.log('xQ9:', xQ9); // 1

// ====================================================================================================================

// Q10
function fooxQ10(xQ10) {
  console.log('xQ10', xQ10); // 2

  var xQ10 = 1;

  console.log('xQ10:', xQ10); // 1
}

fooxQ10(2);

// ====================================================================================================================

// Q11
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