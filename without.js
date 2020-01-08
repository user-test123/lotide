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



// FUNCTION IMPLEMENTATION
/*const assertEqual = function(actual, expected) {

  if(actual === expected) {
    console.log('true');
 } else {
   console.log('false');
 }
};*/

const eqArrays = function(firstArray, secondArray) {

  for (let i = 0; i < firstArray.length; i++) {
    //if (str[i] != str[lastIndex - i]) return false;
      if (firstArray[i] !== secondArray[i]) {
        return false;
      }
  } return true;

};

const without = function(source, itemsToRemove) {

  let arr = [];

  for (let i = 0; i < source.length; i++) {
    let sameElem = false;
    for (let j = 0; j < itemsToRemove.length; j++){
    
      if(source[i] === itemsToRemove[j]) {
        sameElem = true;
      }
    } 
    if(!sameElem) {
      arr.push(source[i]);

    
  }
}
  return arr;
}

console.log(without([1, 2, 3], [1]));


