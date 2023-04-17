

const assertArraysEqual = require('./assertArraysEqual');

const without = function(source, itemsToRemove) {
  const separated = [];
  for (let i = 0; i < source.length; i++) {
    let shouldRemove = false;
    for (let j = 0; j < itemsToRemove.length; j++) {
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

assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [ 1, 2, "3"]), ["1", "2"]);

// exporting function
module.exports = without;