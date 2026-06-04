"use strict";
const x = function (execFn) {
  try {
    return !!execFn();
  } catch (error) {
    console.log("error", error);
    return true;
  }
};

console.log(
  x(() => {
    throw new Error("test");
  }),
);

console.log(
  x(() => {
    const a = 1;
    return false;
  }),
);

// =======

let x = 1;

function test(x) {
  x = 2;
}

test(x);
console.log(x);
