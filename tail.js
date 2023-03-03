// Function Implementation

const assertEqual = require('./assertEqual');
const assertArraysEqual = require('./assertArraysEqual');

//Tail function

const tail = function(arr) {
  let newArray = arr.slice(1);
  // console.log(arr);
  // console.log(newArray);
  return newArray;
};

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

assertArraysEqual(tail(["This", "is", "only", "three"]), ["is", "only", "three"]);




