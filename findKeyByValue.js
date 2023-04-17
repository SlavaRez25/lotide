

const assertEqual = require('./assertEqual');


const findKeyByValue = function(obj, val) {
  for (const keys in obj) {
    if (obj[keys] === val) {
      return keys;
    } 
  }
  return undefined;
};


const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

//TEST
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
assertEqual(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"), "comedy");

// export function
module.exports = findKeyByValue;

