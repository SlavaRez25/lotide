
const words = ["ground", "control", "to", "major", "tom"];

const assertArraysEqual = require('./assertArraysEqual');

const map = function(array, callback) {

  const results = [];

  for (let item of array) {
    results.push(callback(item));
  }
  
  return results;
};

const results1 = map(words, word => word[0]);
console.log(results1);


assertArraysEqual(words, ["ground", "control", "to", "major", "tom"]);
assertArraysEqual(results1, ["g", "c", "t", "m", "t"]);

const results2 = map(words, word => word[1]);
assertArraysEqual(results2, ["r", "o", "o", "a", "o"]);

const result3 = map(words, word => word.length);
assertArraysEqual(result3, [6, 7, 2, 5, 3]);



module.exports = map;

