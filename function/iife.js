// Q1: IIFE to initalize a variable (looks wierd these days!)

// const value = (() => {
//   const randomValue = Math.random();
//   if (randomValue > 0.5) {
//     return "heads";
//   }
//   return "tails";
// })();
// console.log(value);




// Q2: (I don't like this snipeets. For later ...)

// const makeWithdraw = (balance) =>
//   ((copyBalance) => {
//     let balance = copyBalance; // This variable is private
//     const doBadThings = () => {
//       console.log("I will do bad things with your money");
//     };
//     doBadThings();
//     return {
//       withdraw(amount) {
//         if (balance >= amount) {
//           balance -= amount;
//           return balance;
//         }
//         return "Insufficient money";
//       },
//     };
//   })(balance);
// const firstAccount = makeWithdraw(100); // "I will do bad things with your money"
// console.log(firstAccount.balance); // undefined
// console.log(firstAccount.withdraw(20)); // 80
// console.log(firstAccount.withdraw(30)); // 50
// console.log(firstAccount.doBadThings); // undefined; this method is private
// const secondAccount = makeWithdraw(20); // "I will do bad things with your money"
// console.log(secondAccount.withdraw(30)); // "Insufficient money"
// console.log(secondAccount.withdraw(20)); // 0




// Q3: var in for loops with iife to presice the i

// bad
// for (var i = 0; i < 2; i++) {
//   const button = document.createElement("button");
//   button.innerText = `Button ${i}`;
//   button.onclick = function () {
//     console.log(i);
//   };
//   document.body.appendChild(button);
// }
// console.log(i); // 2

// good
// for (var i = 0; i < 2; i++) {
//   const button = document.createElement("button");
//   button.innerText = `Button ${i}`;
//   button.onclick = (function (copyOfI) {
//     return function () {
//       console.log(copyOfI);
//     };
//   })(i);
//   document.body.appendChild(button);
// }
// console.log(i); // 2




// Q4: Async IIFE

// function resolveAfter2Seconds(x) {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve(x);
//     }, 2000);
//   });
// }
// (async function (x) {
//   const p1 = resolveAfter2Seconds(20);
//   const p2 = resolveAfter2Seconds(30);
//   return x + (await p1) + (await p2);
// })(10).then((v) => {
//   console.log(v); // prints 60 after 2 seconds.
// });