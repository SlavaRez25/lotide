# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @SlavaRez25/lotide`

**Require it:**

`const _ = require('@SlavaRez25/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertEqual`: function that takes 2 values and returns true if equal and false otherwise
* `head`: retrieves the first element from the array
* `tail`: returns every element except the first
* `eqArrays`: checks if 2 arrays are equal (true) or not equal (false)
* `assertArraysEqual`: function that prints an appropriate message after comparing two arrays
* `without`: takes in source array and items to remove array and returns original array without items in the second array
* `flatten`: takes in array of elements of which some are nested arrays and flattens into a single-level array
* `middle`: takes in an array and returns the middle element of the array
* `countOnly`: takes items and returns count for a specific subset of those items
* `countLetters`: takes a sentence and returns a count of each of the letters in the sentence
* `letterPositions`: returns all indices of letter positions in the sentence
* `findKeyByValue`: function that takes in an object and a value and returns the first key that corresponds to that value
* `eqObjects`: takes in 2 objects and checks if they're equal (true) or not (false)
* `assertObjectsEqual`: function that takes in 2 objects and returns true if they are equal and false otherwise
* `map`: returns a new array based on the results of the callback on each item in the array
* `takeUntil`: takes in an array and callback and returns a slice of the array based on the criteria specified in the callback
* `findKey`: takes in an object and callback and returns the first key that meets the criteria specified in callback
* `index`: an object list of all the functions
