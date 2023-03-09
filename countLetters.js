
const assertEqual = require('./assertEqual');

const countLetters = function(str) {
  const count = {};
  console.log(str);
  let strNew = str.split(" ").join("").toLowerCase();
  for (let i = 0; i < strNew.length; i++) {
    let char = strNew.charAt(i);
    if (count[char]) {
      count[char]++;
    } else {
      count[char] = 1;
    }
  }
  return count;
};

// TEST CODE

assertEqual(countLetters("Lighthouse in the house")["s"], 2);
assertEqual(countLetters("Lighthouse in the house")["h"], 4);
assertEqual(countLetters("Lighthouse in the house")["e"], 3);

module.exports = countLetters;