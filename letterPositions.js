// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {

    if(actual === expected) {
      console.log('True');
   } else {
      console.log('Fails');
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


const letterPositions = function(sentence) {
    
    const results = {};
    let positionLetter = sentence.split(' ').join();
    let indexArray = [];

    // for (const item of positionLetter) {

    //     if (results[item]) {
    //         results[item] += indexArray;
    //       } else {
    //         results[item] = 1;
    //       }
    //       console.log(item);
        
    //       return results;

    // }

    for (let i = 0; i < positionLetter.length; i++) {

     
        // if(positionLetter[i] === result[item]){
                            
        //     indexArray.push(positionLetter[i]);
       
        // }
        if(results[positionLetter[i]]) {
            results[positionLetter[i]].push(i);
        } else {
            results[positionLetter[i]] = [];
            results[positionLetter[i]].push(i);

        }
    }
    return results;
}

console.log(letterPositions('Lighthouse Labs'));