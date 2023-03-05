// Function Implementation
// const assertEqual = require('./assertEqual');


// const assertEqual = function(actual, expected) {
//   if (typeof actual === 'string' && typeof expected === 'string' && actual === expected) {
//     console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
//   } else if (typeof actual === 'string' && typeof expected === 'string' && actual !== expected) {
//     console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
//   } else if (typeof actual === 'number' && typeof expected === 'number' && actual === expected) {
//     console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
//   }
  
// };

//Head function

const head = function(argument) {
  let headElement = argument[0];
  return headElement;
};

//Test code for AssertEqual

// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1, 1);
// assertEqual(12, 1);
// assertEqual('bootcamp', 'bootcamp');
// assertEqual('bootcamp', 'bootcampers');

//Test code for Head

module.exports = head;