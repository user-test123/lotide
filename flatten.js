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


const flatten = function(array) {

  var emptyArray = [];

  for(let i = 0 ; i < array.length; i++) {

    if(Array.isArray(array[i])) {
     for(let j = 0; j < array[i].length; j++) {
      emptyArray.push(array[i][j]);
     }
    
    } else {
      emptyArray.push(array[i]);
      } 

      

    }

return emptyArray;
  }

 

console.log(flatten([1, 2, [3, 4], 5, [6]]));


