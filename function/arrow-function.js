// Q1: Wrong usage of arrow functions as methods.

// const obj = {
//   i: 10,
//   b: () => console.log(this.i, this), // undefined, {}
//   c () {
//     console.log(this.i, this); // 10, { i: 10, b: [Function: b], c: [Function: c] }
//   },
// };
// obj.b();
// obj.c();




// Q2: Wrong usage of arrow function as getter of object property.

// const obj = {
//   a: 10,
// };
// Object.defineProperty(obj, 'b', {
//   get: () => {
//     console.log(this.a, typeof this.a, this); // undefined, 'undefined', {}
//     return this.a + 10;
//   }
// })
// console.log(obj.b); // NaN




// Q3: Wrong usage of arrow function as method inside an object.

// const foo = {
//   a: 1,
//   bar: () => {
//     console.log(this.a, this);
//   },
// }
// foo.bar(); // undefined, {}
// const { bar } = foo;
// bar(); // undefined, {}




// Q4: Arrow function uses this context of class with closure inside itself.
// class Foo {
//   a = 1;
//   bar = () => {
//     console.log(this.a, this);
//   };
// }
// const foo = new Foo();
// foo.bar(); // 1, Foo { a: 1, bar: [Function: bar] }
// const { bar } = foo;
// bar(); // 1, Foo { a: 1, bar: [Function: bar] }




// Q5: Arrow function uses this context of constructor function with closure inside itself.

// function Foo () {
//   this.a = 1;
//   return () => {
//     console.log(this.a, this); // 1, Foo { a: 1 }
//   }
// }
// const foo = new Foo();
// foo();




// Q6: Arrow function get this context of function as closure.

// console.log(this); // {}
// function foo () {
//   console.log(this); // Object [global]
//   this.a = 1;
//   return () => {
//     console.log(this.a, this); // 1, Object [global]
//   }
// }
// foo()();




// Q7: Precedence of '=>'

// let callback;
// // console.log(callback || () => {}); // SyntaxError: Malformed arrow function parameter list
// console.log(callback || (() => {})); // [Function (anonymous)]




// Q8: Arrow function with call, bind and apply (condiering this

// const obj = {
//   num: 100,
// };
// this.num = 42;
// const add = (a, b, c) => this.num + a + b + c;
// console.log(add.call(obj, 1, 2, 3)); // 48
// console.log(add.apply(obj, [1, 2, 3])); // 48
// const boundAdd = add.bind(obj);
// console.log(boundAdd(1, 2, 3));  // 48




// Q9: Arrow function usage for setTimeout in methods

// const a = 20;
// const obj1 = {
//   a: 10,
//   foo () {
//     console.log(this); // { a: 10, foo: [Function: foo] }
//     setTimeout(function () {
//       console.log(this); // Timeout object
//       this.a++;
//       console.log(this.a); // NaN
//     }, 300);
//   },
// };
// const obj2 = {
//   a: 10,
//   foo () {
//     setTimeout(() => {
//       console.log(this); // { a: 10, foo: [Function: foo] }
//       this.a++;
//       console.log(this.a); // 11
//     }, 300);
//   },
// };
// obj1.foo();
// obj2.foo();




// Q10: args in arrow function
// const a = (...args) => console.log(args[1], args); // 1, [ 0, 1 ]
// a(0, 1);