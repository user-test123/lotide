const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');
// const assertEqual = function(actual, expected) {
//     if (actual === expected) {
//       console.log(`\u2714 \u2714 Assertion Passed: ${actual} === ${expected}`);
//     } else {
//       console.log(`\u2716 \u2716 Assertion Failed: ${actual} !== ${expected}`);
//     }
//   };

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);

assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);

