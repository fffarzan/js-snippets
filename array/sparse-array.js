/* */
/* */
/* */
/* */
/* spares */
// const a = Array(5);
// console.log("a", a); // [ <5 empty items> ]

// const b = [1, 2, , , 5];
// console.log("b", b); // [ 1, 2, <2 empty items>, 5 ]

// const c = [1, 2];
// c[4] = 5;
// console.log("c", c); // [ 1, 2, <2 empty items>, 5 ]

// const d = [1, 2];
// d.length = 5;
// console.log("d", d); // [ 1, 2, <3 empty items> ]

// const e = [1, 2, 3, 4, 5];
// delete e[2];
// console.log("e", e); // [ 1, 2, <1 empty item>, 4, 5 ]
/* */
/* */
/* */
/* */
/* Q: putting undefined for sparsed item */
// const arr = [1, 2, , , 5];
// console.log(arr[2]); // undefined

// for (const i of arr) {
//   console.log(i); // 1 2 undefined undefined 5
// }

// const another = [...arr];
// console.log("another", another); // [ 1, 2, undefined, undefined, 5 ]
/* */
/* */
/* */
/* */
/* Q: skipping empty slots */
// const arr = [1, 2, , , 5];

// const mapped = arr.map((i) => i + 1);
// console.log("mapped", mapped); // [ 2, 3, <2 empty items>, 6 ]

// arr.forEach((i) => console.log(i)); // 1 2 5

// const filtered = arr.filter(() => true);
// console.log("filtered", filtered); // [ 1, 2, 5 ]

// const hasFalsy = arr.some((k) => !k);
// console.log("hasFalsy", hasFalsy); // false

// const keys = Object.keys(arr);
// console.log("keys", keys); // [ '0', '1', '4' ]

// for (const key in arr) {
//   console.log(key); // '0' '1' '4'
// }
/* */
/* */
/* */
/* */
/* Q: Spreading into an object uses property enumeration, not the array's iterator */
// const objectSpread = { ...arr };
// console.log("objectSpread", objectSpread); // { '0': 1, '1': 2, '4': 5 }
