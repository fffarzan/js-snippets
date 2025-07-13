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