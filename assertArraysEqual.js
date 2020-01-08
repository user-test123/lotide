// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {

  if(actual === expected) {
    console.log('true');
 } else {
    console.log('false');
 }
};

const eqArrays = function(firstArray, secondArray) {

  for (let i = 0; i < firstArray.length; i++) {
    //if (str[i] != str[lastIndex - i]) return false;
      if (firstArray[i] !== secondArray[i]) {
        return false;
      }
  } return true;

};

const assertArraysEqual = function(arrayOne, arrayTwo) {

    if(eqArrays(arrayOne, arrayTwo)) {
      console.log("Assertion Passed");
    } else {
       console.log("Assertion Failed");
    }
}

assertArraysEqual([1,3333], [1,2]);


