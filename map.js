
const words = ["ground", "control", "to", "major", "tom"];

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

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

const map = function(array, callback) {

  const results = [];

  for (let item of array) {
    // console.log("item Before ", item);
    // console.log("item After ", callback(item));
    // console.log('---')
    results.push(callback(item));
  }
  
  return results;
};

const results1 = map(words, word => word[0]);
console.log(results1);


assertArraysEqual(words, ["ground", "control", "to", "major", "tom"]);
assertArraysEqual(results1, ["g", "c", "t", "m", "t"]);

const results2 = map(words, word => word[1]);
assertArraysEqual(results2, ["r", "o", "o", "a", "o"]);

const result3 = map(words, word => word.length);
assertArraysEqual(result3, [6, 7, 2, 5, 3]);





