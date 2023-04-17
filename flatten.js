

const assertArraysEqual = require('./assertArraysEqual');

const flatten = function(arr) {
  let flatArr = [];

  for (let data of arr) {
    if (!Array.isArray(data)) {
      flatArr.push(data);
    } else {
      for (let input of data) {
        flatArr.push(input);
      }
    }
  }
  return flatArr;
};


flatten([1, 2, [3, 4], 5, [6]]); // => [1, 2, 3, 4, 5, 6]

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), ([1, 2, 3, 4, 5, 6]));

// export function
module.exports = flatten;

