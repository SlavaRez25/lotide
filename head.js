"use strict";

// Function Implementation

const assertEqual = function(actual, expected) {

  if (typeof actual === 'string' && typeof expected === 'string' && actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else if (typeof actual === 'string' && typeof expected === "string" && actual !== expected) {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !=== ${expected}`);
  } else if (typeof actual === 'number' && typeof expected === 'number' && actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const head = function(arg) {
  let firstElement = arg[0];
  return firstElement
}


// Test code

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head(["blue", "brown", "red"]), "brown");
assertEqual(head([6]), 5);
assertEqual(head([]), 5);

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual("Bootcamp", "Bootcamp");
assertEqual(1, 1);
assertEqual(1, 2);





