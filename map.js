  
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


const map = function(array, callback) {

    const results = [];
    for (let item of array) {
        results.push(callback(item));
      }
      return results;

}


const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
console.log(results1);


assertArraysEqual((map(["ground", "control", "to", "major", "tom"], function(element) { return element })), ["ground", "control", "to", "major", "tom"]);

