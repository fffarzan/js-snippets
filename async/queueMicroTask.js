// Q1

// console.log('start');
// queueMicrotask(() => {
//   console.log('executing microtask');
// });
// console.log('end');




// Q2: Task queue creation with queueMicrotask.

// const taskQueue = [];
// function addToTaskQueue (task) {
//   taskQueue.push(task);
//   queueMicrotask(processTaskQueue);
// }
// function processTaskQueue () {
//   const task = taskQueue.shift();
//   if (task) {
//     task();
//     queueMicrotask(processTaskQueue);
//   }
// }
// function logTask (text) {
//   return () => console.log(text);
// }
// addToTaskQueue(logTask('Task 1'));
// addToTaskQueue(logTask('Task 2'));
// addToTaskQueue(logTask('Task 3'));




// Q3: setTimeout and queueMicroTask.

// const log = console.log;
// const callback = () => log("Regular timeout callback has run");
// const urgentCallback = () => log("*** Oh noes! An urgent callback has run!");
// log("Main program started");
// setTimeout(callback, 0);
// queueMicrotask(urgentCallback);
// log("Main program exiting");




// Q5: queueMicroTask in a function

// const log = console.log;
// const callback = () => log("Regular timeout callback has run");
// const urgentCallback = () => log("*** Oh noes! An urgent callback has run!");
// const doWork = () => {
//   let result = 1;
//   queueMicrotask(urgentCallback);
//   for (let i = 2; i <= 10; i++) {
//     result *= i;
//   }
//   return result;
// };
// log("Main program started");
// setTimeout(callback, 0);
// log(`10! equals ${doWork()}`);
// log("Main program exiting");
