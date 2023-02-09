

const assertEqual = function(actual, expected) {
  if (actual === expected) {
   console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
 } else {
   console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
 }
 
};

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


assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => false

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => false




// assertEqual("Lighthouse Labs", "Bootcamp");

// assertEqual("Bootcamp", "Bootcamp");

// assertEqual(1, 1);

// assertEqual(1, 2);
