// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {

  if(actual === expected) {
    console.log('true');
 } else {
    console.log('false');
 }
};


const assertArraysEqual = function(arrayOne, arrayTwo) {

    if(eqArrays(arrayOne, arrayTwo)) {
      console.log("Assertion Passed");
    } else {
       console.log("Assertion Failed");
    }
}

const eqArrays = function(firstArray, secondArray) {

  for (let i = 0; i < firstArray.length; i++) {
    //if (str[i] != str[lastIndex - i]) return false;
      if (firstArray[i] !== secondArray[i]) {
        return false;
      }
  } return true;

};

const middle = function(array) {
  
  if(array.length % 2 != 0) {
    let value = array[Math.floor(array.length/2)];
    
    return [value];
  
  } else {
    let firstBaseIndex = Math.floor(array.length/2);
    let secondBaseIndex = firstBaseIndex - 1;
    let firstValue = array[firstBaseIndex];
    let secondValue = array[secondBaseIndex];
    
    return [firstValue, secondValue];
  }
 
}

console.log(middle([1, 2, 3, 4, 5, 6]));
console.log(middle([1, 6, 8, 9, 10]));

