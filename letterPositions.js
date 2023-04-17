
const assertArraysEqual = require('./assertArraysEqual');


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

console.log(letterPositions("hello"));

assertArraysEqual(letterPositions("hello").e, [1]);

module.exports = letterPositions;
