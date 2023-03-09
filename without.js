


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

const without = function(source, itemsToRemove) {
  const separated = [];
  for (let i = 0; i < source.length; i++) {
    // console.log(source[i]);
    // console.log(itemsToRemove[i]);
    // itemsToRemove .includes(source[i])
    let shouldRemove = false;
    for (let j = 0; j < itemsToRemove.length; j++) {
      // console.log(itemsToRemove[j]);
      if (source[i] === itemsToRemove[j]) {
        shouldRemove = true;
      }
    }
    if (!shouldRemove) {
      separated.push(source[i]);
    }
  }
  return separated;
};

const originalWords = ["hello", "world", "lighthouse"];
const newArray = without(originalWords, ["lighthouse", "test"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(originalWords, ["hello", "world", "lighthouse"]);
assertArraysEqual(newArray, ["hello", "world"]);

// without([1, 2, 3], [1]) // => [2, 3]
// without(["1", "2", "3"], [ 1, 2, "3"]) // => ["1", "2"]

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [ 1, 2, "3"]), ["1", "2"]);


module.exports = without;