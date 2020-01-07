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

   assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
   assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false);

   assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true);
   assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);


// TEST CODE
/*if (eqArray([1, 2, 3], [3, 2, 1])) {
  console.log('false');
} else if (eqArray([1, 2, 3], [1, 2, 3])) {
  console.log("true");
}
*/