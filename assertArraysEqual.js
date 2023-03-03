
const eqArrays = require('./eqArray');

// const eqArrays = function(firstArr, secondArr) {
//   if (firstArr.length !== secondArr.length) {
//     return false;
//   }
//   for (let i = 0; i < firstArr.length; i++) {
//     if (firstArr[i] !== secondArr[i]) {
//       return false;
//     }
//   }
//   return true;
// };

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
   console.log(`✅✅✅Assertion Passed: [${actual}] === [${expected}]`);
 } else {
   console.log(`🛑🛑🛑Assertion Failed: [${actual}] !== [${expected}]`);
 }
}

// assertArraysEqual([1, 2, 3], [1, 2, 3]);
// assertArraysEqual([1, 2, 3], [1, 3, 3]);
// assertArraysEqual([1, '2', 3], [1, 2, 3]);
// assertArraysEqual([], []);


module.exports = assertArraysEqual;
