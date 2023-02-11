


const assertEqual = function(actual, expected) {
  if (actual === expected) {
   console.log(`✅✅✅Assertion Passed: ${actual} === ${expected}`);
 } else {
   console.log(`🛑🛑🛑Assertion Failed: ${actual} !== ${expected}`);
 }
 
};


const countOnly = function(allItems, itemsToCount) {

}


const firstNames = ["Karl", "Salima", "Agouhanna", "Fang", "Kavith", "Jason", "Salima", "Fang", "Joe";]

const result1 = countOnly(firstNames, { "Jason": true})


