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

//Head function

const head = function(argument) {
  let headElement = argument[0];
  return headElement;
};

//Test code for AssertEqual

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(12, 1);
assertEqual('bootcamp', 'bootcamp');
assertEqual('bootcamp', 'bootcampers');

//Test code for Head
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([225,226,227]), 5);
assertEqual(head(['blue', 'yellow', 'red']), 'red');
assertEqual(head([]), 5);
assertEqual(head([1]), 1);
assertEqual(head([2]), 5);
