

const assertEqual = function(actual, expected) {

  if (typeof actual === 'string' && typeof expected === 'string' && actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  // } else if (typeof actual === 'string' && typeof expected === "string" && actual !== expected) {
    // console.log(`🛑🛑🛑 Assertion Failed: ${actual} !=== ${expected}`);
  } else if (typeof actual === 'number' && typeof expected === 'number' && actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else if (typeof actual === 'boolean' && typeof expected === 'boolean' && actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
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
