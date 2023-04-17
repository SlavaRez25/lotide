

const assertEqual = require('./assertEqual');


const countOnly = function(allItems, itemsToCount) {
  const results = {};

  for (const item of allItems) {
    if (itemsToCount[item] === true) {
      if (results[item]) {
        results[item] += 1;
      } else {
        results[item] = 1;
      }
    }
  }
  return results;
};

const firstNames = ["Karl", "Salima", "Agouhanna", "Fang", "Kavith", "Jason", "Salima", "Fang", "Joe"];

const result1 = countOnly(firstNames, { "Jason": true, "Karina": true, "Fang": true, "Agouhanna": false });


assertEqual(result1["Jason"], 1);
assertEqual(result1["Karina"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);

module.exports = countOnly;
