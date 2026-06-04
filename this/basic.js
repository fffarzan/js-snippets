// function expressionFunc() {
//   console.log("expression function this:", this); // expression function this: Window
// }

// const arrowFunc = () => {
//   console.log("arrow function this:", this); // expression function this: Window
// };

// var name = "f";
// // const name = "ff";
// const obj = {
//   name: "fff",
//   get() {
//     console.log("expression function inside object this:", this, this.name); // expression function inside object this: {name: 'fff', get: ƒ, set: ƒ} fff
//   },
//   set: () => {
//     console.log("arrow function inside object this:", this, this.name); // expression function inside object this: Window f
//   },
// };

// expressionFunc();
// arrowFunc();
// obj.get();
// obj.set();

// ======

// const obj = {
//   name: "John",
//   greet: function () {
//     const greetArrow = () => {
//       console.log(`Hello, ${this.name}!`);
//     };
//     greetArrow();
//   },
// };

// obj.greet(); // Output: 'Hello, John!'
