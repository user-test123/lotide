// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  return actual === expected;

};

const tail = function(actual) {

  let tailElements = actual.slice(0);
  return tailElements;

};

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3);