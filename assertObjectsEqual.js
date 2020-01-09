// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {

    if(actual === expected) {
      console.log('Assertion Passed');
   } else {
      console.log('Assertion Failed');
   }
  };


  // Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = function(object1, object2) {

    if (Object.keys(object1).length !== Object.keys(object2).length) {

        return false;
    }
        
    //for(const keysObjects of Object.keys(object1)) {

    //if(Array.isArray(Object.keys(object1)) && Array.isArray(Objects.keys(object2))) {

    for(const property in object1) {

     
        
        if(Array.isArray(object1[property]) && Array.isArray(object2[property])) {
            if (!(eqArrays(object1[property], object2[property]))) {
                return false;
            
            }
        } else if(object1[property] !== object2[property]) {

            return false;
        }    
                

        }

      //  if(object1[keysObjects] !== object2[keysObjects]) {

        //    return false;
        //}    
        return true;
       };
       



const eqArrays = function(firstArray, secondArray) {

    for (let i = 0; i < firstArray.length; i++) {
      //if (str[i] != str[lastIndex - i]) return false;
        if(firstArray.length !== secondArray.length){
            return false;
        }
      if (firstArray[i].isArray !== secondArray[i].isArray) {
          return true;
        }
    } return true;
  
  };

  const assertObjectsEqual = function(actual, expected) {
  
    const inspect = require('util').inspect;
    console.log(`Example label: ${inspect(actual)}`);

    if(eqObjects(actual, expected)) {
      console.log(`Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
    } else {
       console.log(`Assertion Failed: ${inspect(actual)} === ${inspect(expected)}` );
    }

  
}




const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
eqObjects(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" };
eqObjects(ab, abc); // => false


assertObjectsEqual(eqObjects(ab, ba), true);
assertObjectsEqual(eqObjects(ab, abc), false);


const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
eqObjects(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
eqObjects(cd, cd2); // => false

assertObjectsEqual(cd, dc);
assertObjectsEqual(cd, cd2);