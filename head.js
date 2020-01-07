// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  return actual === expected;

};



const head = function(actual) {

    let firstIndex = actual[0];
    return firstIndex;

}; 

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
