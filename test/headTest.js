
const assertEqual = require('../assertEqual');
const head = require('../head');


// Head test code

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([225,226,227]), 5);
assertEqual(head(['blue', 'yellow', 'red']), 'red');
assertEqual(head([]), 5);
assertEqual(head([1]), 1);
assertEqual(head([2]), 5);