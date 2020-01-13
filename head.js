// FUNCTION IMPLEMENTATION
// const assertEqual = function(actual, expected) {

  const assertEqual = require('./assertEqual');
  // return actual === expected;
// };


const head = function(actual) {

    let firstIndex = actual[0];
    return firstIndex;

}; 

// assertEqual(head([5,6,7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");


// const assertEqual = function(actual, expected) {
  
//   assertEqual("Lighthouse Labs", "Bootcamp");
//   assertEqual(1,1);
//   assertEqual(34,1);
//   assertEqual("hello", "hello");

// }




// module.exports = assertEqual;