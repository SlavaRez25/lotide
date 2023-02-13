
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


const letterPositions = function(sentence) {
  const results = {};

  for (let i = 0; i < sentence.length; i++) {
    let letter = sentence[i];
    if (letter === ' ') {
      continue;
    } else if (!results[letter]) {
      results[letter] = [i];
    
    } else {
      results[letter].push(i);
    }
      
  } return results;
};

//Test
console.log(letterPositions("lighthose in the house"));
// console.log(letterPositions("testing this function"));
console.log(letterPositions("hello"));

assertArraysEqual(letterPositions("hello").e, [1]);
