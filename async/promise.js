// Q1: plain promise

// const promsie = new Promise(() => console.log('a'))
// const promiseWithResolve = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('Success!');
//   }, 250);
// });
// const promiseWithResolveWithThen = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve('Success!');
//   }, 250);
// }).then((data) => console.log(data));
// const promiseResolved = Promise.resolve('Success!')
// promiseResolved.then((data) => console.log(data));