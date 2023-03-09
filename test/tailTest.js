
const assert = require('chai').assert;
const tail = require('../tail')

describe("#tail", () => {
  it("returns is only three for [This is only three]", () => {
    assert.deepEqual(tail(["This", "is", "only", "three"]), ["is", "only", "three"]);
  });

  it("returns 2, 3, 4, 5 for [1, 2, 3, 4, 5]", () => {
    assert.deepEqual(tail([1, 2, 3, 4, 5]), [2, 3, 4, 5]);
  });
});




// const assertEqual = require('../assertEqual');
// const assertArraysEqual = require('../assertArraysEqual');
// const tail = require('../tail');


// // Test Case: Check the original array

// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!

// assertArraysEqual(tail(["This", "is", "only", "three"]), ["is", "only", "three"]);

