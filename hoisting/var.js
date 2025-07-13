// Q1
xQ1 = 2;

console.log('xQ1:', xQ1); // 2

var xQ1;

// ====================================================================================================================

// Q2
console.log('xQ2:', xQ2); // undefined (inside tdz)

xQ2 = 2;
var xQ2;

// ====================================================================================================================

// Q3
function fooQ3() {
  console.log('xQ3 (first):', xQ3); // undefined (inside local tdz)

  var xQ3 = 1;

  console.log('xQ3 (second):', xQ3); // 1
}

fooQ3();
