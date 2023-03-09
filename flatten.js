


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

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)) {
    console.log(`✅✅✅Assertion Passed: [${actual}] === [${expected}]`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: [${actual}] !== [${expected}]`);
  }
};

const flatten = function(arr) {
  let flatArr = [];

  // if (!Array.isArray(arr)){
  //   return arr;
  //

  for (let data of arr) {
    
    if (!Array.isArray(data)) {
      flatArr.push(data);
    } else {
      for (let input of data) {
        flatArr.push(input);
      }
    }
    // console.log('this is flatArr', flatArr);
  }

  // console.log(flatArr);
  return flatArr;
};

//flatArr is going to receive 1, 2, [3, 4]

flatten([1, 2, [3, 4], 5, [6]]); // => [1, 2, 3, 4, 5, 6]

assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), ([1, 2, 3, 4, 5, 6]));

// assertArraysEqual([1, 2, 3], [1, 2, 3]);
// assertArraysEqual([1, 2, 3], [1, 3, 3]);
// assertArraysEqual([1, '2', 3], [1, 2, 3]);
// assertArraysEqual([], []);


module.exports = flatten;

