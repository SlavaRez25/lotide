

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
 
};


const findKey = function(object, callback) {
  let keyArr = Object.keys(object);

  console.log("---");
  // console.log(keyArr.length);
  // console.log(keyArr);

  for (const keys of keyArr) {
    // console.log(keyArr[keys], callback(object[keyArr[keys]], object[keyArr[keys]].stars));

    // console.log(keys);

    if (callback(object[keys])) {
      // console.log(keys);
      return keys;
    }
    // return keyArr[keys];
  }
  return undefined;
};

// object["Blue Hill"]

let object = {
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
};
                   



//Test code
let actual1 = findKey(object, x => x.stars === 2);
let expected1 = "noma";
assertEqual(actual1, expected1);

let actual2 = findKey(object, x => x.stars === 1);
let expected2 = "Blue Hill";
assertEqual(actual2, expected2);

let actual3 = findKey(object, x => x.stars === 10);
let expected3 = undefined;
assertEqual(actual3, expected3);
// console.log(actual1);


