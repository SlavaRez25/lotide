

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countOnly = function(string) {
  const count = {};

  let strNoSpace = string.replace(/\s/g, '');
  let strArray = strNoSpace.split('');

  for (const items of strArray) {
    if (count[items] !== ' ') {
      if (count[items]) {
        count[items] += 1;
      } else {
        count[items] = 1;
      }
    }
    // console.log(items);
  }


  
  
  return count;
};


const letterCout = (countOnly("Lighthouse in the house"));

assertEqual(letterCout["s"], 2);
assertEqual(letterCout["h"], 4);
assertEqual(letterCout["e"], 3);