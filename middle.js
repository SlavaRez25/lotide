

const middle = function(arr) {
  let length = arr.length;
  let midChars = Math.floor(length / 2);
  
  if (arr.length <= 2) {
    return [];
  } else if (arr.length % 2 === 0) {
    return [arr[midChars - 1], arr[midChars]];
  } else {
    return [arr[midChars]];
  }

};

// export function
module.exports = middle;


