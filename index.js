

const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');
const assertArraysEqual = require('./assertArraysEqual');
const eqObjects = require('./eqObjects');
const assertObjectsEqual = require('./assertObjectsEqual');
const countOnly = require('./countOnly');
const countLetters = require('./countLetters');
const findKey = require('./findKey');
const findKeyByValue = require('./findKeyByValue');
const flatten = require('./flatten');
const letterPositions = require('./letterPositions');
const map = require('./map');
const takeUntil = require('./takeUntil');
const without = require('./without');

// exporting object of functions
module.exports = {
  head,
  tail,
  middle,
  assertEqual,
  eqArrays,
  assertArraysEqual,
  eqObjects,
  assertObjectsEqual,
  countOnly,
  countLetters,
  findKey,
  findKeyByValue,
  flatten,
  letterPositions,
  map,
  takeUntil,
  without
};


