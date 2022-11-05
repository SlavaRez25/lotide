"use strict";

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

const tail = function(arr) {
  
  let newArr = arr.slice(1);
  // console.log(newArr);
  return newArr;
};

/// Test Case: Check the original array 
const words = ["Hello", "Lighthouse", "Labs"];

console.log(tail(words)); 

tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
assertEqual(words.length, 2);


