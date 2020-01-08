// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {

    if(actual === expected) {
      console.log('Assertion Passed');
   } else {
      console.log('Assertion Failed');
   }
  };


  const countLetters = function(allItems) {

    //needs  to return a proper report on all the strings found in the input array, and respective counts.
    const results = {};
    const allStrings = allItems.split(" ").join(""); 

    for (const item of allStrings) {
        
        if (results[item]) {
            results[item] += 1;
          } else {
            results[item] = 1;
          }
          console.log(item);
        }
          return results;
    }
        
    console.log(countLetters('lighthouse in the house'));