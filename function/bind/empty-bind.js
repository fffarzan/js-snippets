const f = function () {
  console.log("inside of f");
};
console.log("f", f);

// just a clone of f function with fixed this (just wrapped)
const g = f.bind();
console.log("g", g);

console.log("is equal", f === g); // false
