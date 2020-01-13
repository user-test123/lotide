// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  return actual === expected;
};

// TEST CODE
if (assertEqual("Lighthouse Labs", "Bootcamp")) {
  console.log('Failed: "Lighthouse Labs" !== "Bootcamp"');
} else if (assertEqual(1, 1)) {
  console.log("Assertion Passed: 1 === 1");
}

// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1,1);
// assertEqual(34,1);
// assertEqual("hello", "hello");

module.exports = assertEqual;
