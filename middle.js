
// const eqArrays = require('./eqArrays');

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



// const assertArraysEqual = function(actual, expected) {
//   if (eqArrays(actual, expected)) {
//     console.log(`✅✅✅Assertion Passed: [${actual}] === [${expected}]`);
//   } else {
//     console.log(`🛑🛑🛑Assertion Failed: [${actual}] !== [${expected}]`);
//   }
// };

// let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const middle = function(arr) {
  let length = arr.length;
  let midChars = Math.floor(length / 2);
  
  if (arr.length <= 2) {
    // midChars = [];
    // console.log(midChars);
    return [];
  } else if (arr.length % 2 === 0) {
    // console.log (arr[midChars - 1], arr[midChars]);
    return [arr[midChars - 1], arr[midChars]];
  } else {
    // console.log(arr[midChars]);
    return [arr[midChars]];
  }

};
// console.log(middle([1, 2]));


module.exports = middle;


