"use strict";

// Function Implementation

const assertEqual = function(actual, expected) {

  if (typeof actual === 'string' && typeof expected === 'string' && actual === expected) {
    console.log(`โโโAssertion Passed: ${actual} === ${expected}`);
  } else if (typeof actual === 'string' && typeof expected === "string" && actual !== expected) {
    console.log(`๐๐๐ Assertion Failed: ${actual} !=== ${expected}`);
  } else if (typeof actual === 'number' && typeof expected === 'number' && actual === expected) {
    console.log(`โโโAssertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`๐๐๐ Assertion Failed: ${actual} !== ${expected}`);
  }
};

// Test code

assertEqual("Lighthouse Labs", "Bootcamp");

assertEqual("Bootcamp", "Bootcamp");

assertEqual(1, 1);

assertEqual(1, 2);



