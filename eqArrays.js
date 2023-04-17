

const eqArrays = function(firstArr, secondArr) {
  // checks if the array lengths match and if not return false
  if (firstArr.length !== secondArr.length) {
    return false;
  }

  // checks if elements of arrays match and if not return false otherwise true
  for (let i = 0; i < firstArr.length; i++) {
    if (firstArr[i] !== secondArr[i]) {
      return false;
    }
  }
  return true;
};

// exporting function
module.exports = eqArrays;