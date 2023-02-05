// Function Implementation

const assertEqual = function(actual, expected) {
  if (typeof actual === 'string' && typeof expected === 'string' && actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else if (typeof actual === 'string' && typeof expected === 'string' && actual !== expected) {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  } else if (typeof actual === 'number' && typeof expected === 'number' && actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
  
};

//Tail function

const tail = function(arr) {
  let newArray = arr.slice(1);
  console.log(arr);
  console.log(newArray);
  return newArray;
};

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!


//Test code assertEqueal

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(12, 1);
assertEqual('bootcamp', 'bootcamp');
assertEqual('bootcamp', 'bootcampers');



