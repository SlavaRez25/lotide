
const assertEqual = require('./assertEqual');

// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
//  } else {
//    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
//  }
 
// };

const eqArrays = function(firstArr, secondArr) {
  if (firstArr.length !== secondArr.length) {
    return false;
  }
  for (let i = 0; i < firstArr.length; i++) {
    if (firstArr[i] !== secondArr[i]) {
      return false;
    }
  }
  return true;
};


module.exports = eqArrays;