const obj = {
  1: 5,
  2: 7,
  3: 4,
  4: 6,
};
const entries = Object.entries(obj); // [ [ '1', 5 ], [ '2', 7 ], [ '3', 4 ], [ '4', 6 ] ]
const sortedEntries = entries.sort((a, b) => b[1] - a[1]); // [ [ '2', 7 ], [ '4', 6 ], [ '1', 5 ], [ '3', 4 ] ]
const sortedObj = Object.fromEntries(sortedEntries);

console.log("sortedObj:", sortedObj); // js automatically sorts by keys in show case! fuck! (object is sorted in values under the hood)

const newObj = {
  a1: 5,
  a2: 7,
  a3: 4,
  a4: 6,
};
const newEntries = Object.entries(newObj);
const sortedNewEntries = newEntries.sort((a, b) => b[1] - a[1]);
const sortedNewObj = Object.fromEntries(sortedNewEntries);

console.log("sortedNewObj:", sortedNewObj);

// const mapObj = {
//   1: 5,
//   2: 7,
//   3: 4,
//   4: 6,
// };
// const mapEntries = Object.entries(mapObj);
// const sortedMapEntries = mapEntries.sort((a, b) => b[1] - a[1]);
// const sortedMap = new Map(Object.fromEntries(sortedMapEntries));

// console.log("sortedMap", [...sortedMap]);
