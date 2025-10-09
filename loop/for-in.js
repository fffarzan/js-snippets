const object = { a: 1, b: 2, c: 3 };
/* */
/* */
/* */
/* */
/* for-in with const */
// for (const prop in object) {
//   console.log("const prop in for-in loop", prop);
// }
// console.log(prop); // ReferenceError: prop is not defined
/* */
/* */
/* */
/* */
/* for-in with let */
// for (let prop in object) {
//   console.log("let prop in for-in loop", prop);
// }
// console.log(prop); // ReferenceError: prop is not defined
/* */
/* */
/* */
/* */
/* for-in with var */
// for (var prop in object) {
//   console.log("var prop in for-in loop", prop);
// }
// console.log(prop); // c
/* */
/* */
/* */
/* */
/* for-in with var and use-strict */
// ("use strict");
// for (var prop in object) {
//   console.log("var prop in for-in loop", prop);
// }
// console.log(prop); // c
/* */
/* */
/* */
/* */
/* adding ennumerable prototype to object */
// function ColoredTriangle() {
//   this.color = "red";
// }
// ColoredTriangle.prototype = object;
// const coloredTriangle = new ColoredTriangle();
// for (const prop in coloredTriangle) {
//   if (Object.hasOwn(coloredTriangle, prop)) {
//     console.log(prop, `obj.${prop} = ${coloredTriangle[prop]}`);
//   }
// }
// for (const prop in coloredTriangle) {
//   console.log(prop);
// }
/* */
/* */
/* */
/* */
/* Q1: */
// for (const prop in object) {
//   console.log(`obj.${prop} = ${object[prop]}`); // ??
//   object.d = 4;
// }
/* */
/* */
/* */
/* */
/* Q2: overriding prototype property */
// const proto = { a: 1 };
// const obj = {
//   __proto__: proto,
//   a: 2,
// };
// for (const prop in obj) {
//   console.log(`obj.${prop} = ${obj[prop]}`); // ??
// }
/* */
/* */
/* */
/* */
/* Q3: change setting of property */
// const obj = { a: 1 };
// Object.defineProperty(obj, "a", { enumerable: false });
// for (const prop in obj) {
//   console.log(`obj.${prop} = ${obj[prop]}`); // ??
// }
/* */
/* */
/* */
/* */
/* Q4: change prototype of object */
// for (const prop in object) {
//   console.log(`obj.${prop} = ${object[prop]}`); // ??
//   Object.setPrototypeOf(object, { d: 4 });
// }
/* */
/* */
/* */
/* */
/* Q5: deleting property of object before visiting */
// for (const prop in object) {
//   console.log(`obj.${prop} = ${object[prop]}`); // ??
//   delete object.c;
// }
/* */
/* */
/* */
/* */
/* Q6: deleting property of object after visiting */
// for (const prop in object) {
//   console.log(`obj.${prop} = ${object[prop]}`); // ??
//   delete object.a;
// }
/* */
/* */
/* */
/* */
/* Q7: update property of prototype */
// const proto = {};
// const obj = { __proto__: proto, a: 1, b: 2 };
// for (const prop in obj) {
//   console.log(`obj.${prop} = ${obj[prop]}`);
//   proto.c = 3;
// }
/* */
/* */
/* */
/* */
/* Q8: sparse array. for...in will not visit the empty slots. */
const array = [1, 2, , 3];
for (const prop in array) {
  console.log(`array.${prop} = ${array[prop]}`); // ??
}
