// Q1: Intersection (A & B)

// const firstSet = new Set([1, 2, 3]);
// const secondSet = new Set([3, 4, 5]);
// const firstArrQ1 = Array.from(firstSet);
// const result = new Set(firstArrQ1.filter(el => secondSet.has(el)));
// console.log(result); // Set { 3 }




// Q2: Difference (A - B)

// const firstSetQ2 = new Set([1, 2, 3]);
// const secondSetQ2 = new Set([3, 4, 5]);
// const firstArrQ2 = Array.from(firstSetQ2);
// const customDifference = new Set(firstArrQ2.filter(el => !secondSetQ2.has(el)))
// console.log(customDifference); // Set { 1, 2 }




// Q3: Symmetric Difference (A - B) & (B - A)

// First Soultion
// const firstSet = new Set([1, 2, 3]);
// const secondSet = new Set([3, 4, 5]);
// const firstMinusSecondArr = [...new Set(Array.from(firstSet).filter(el => !secondSet.has(el)))];
// const secondMinusFirstArr = [...new Set(Array.from(secondSet).filter(el => !firstSet.has(el)))];
// const result = new Set(firstMinusSecondArr.concat(secondMinusFirstArr));
// console.log(result); // Set { 1, 2, 4, 5 }

// Second Solution
// const firstSet = new Set([1, 2, 3]);
// const secondSet = new Set([3, 4, 5]);
// const result = new Set(firstSet);
// for (let i = 0; i < secondSet.size; i++) {
//   if (result.has(Array.from(secondSet)[i])) {
//     result.delete(Array.from(secondSet)[i]);
//     continue;
//   }
//   result.add(Array.from(secondSet)[i]);
// }
// console.log(result); // Set { 1, 2, 4, 5 }




// Q4: Remove duplicates from an array

// const nums = [2, 13, 4, 4, 2, 13, 13, 4, 4, 5, 5, 6, 6, 7, 5, 32, 13, 4, 5];
// const str = 'fffarzan';
// const numsResult = Array.from(new Set(nums));
// const strResult = Array.from(new Set(str));
// console.log(numsResult, strResult); // [2, 13, 4, 5, 6, 7, 32], [ 'f', 'a', 'r', 'z', 'n' ];




// Q5: Check uniqueness of a list of value

// const arr = [1, 2, 3, 3];
// const isUnique = arr.length === (new Set(arr)).size;
// console.log(isUnique);

