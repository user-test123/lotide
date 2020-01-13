// FUNCTION IMPLEMENTATION
// const assertEqual = function(actual, expected) {
//   return actual === expected;

// };
const assertEqual = require('./assertEqual');

const tail = function(actual) {

  let tailElements = actual.slice(0);
  return tailElements;

};


// if (assertEqual("Lighthouse Labs", "Bootcamp")) {
//   console.log('Failed: "Lighthouse Labs" !== "Bootcamp"');
// } else if (assertEqual(1, 1)) {
//   console.log("Assertion Passed: 1 === 1");
// }

// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3);

module.exports = tail;