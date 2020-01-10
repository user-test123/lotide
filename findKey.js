// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {

    if(actual === expected) {
      console.log('true');
   } else {
     console.log('false');
   }
};



const findKey = function(diffFindKey, callback) {


        for(const names of Object.keys(diffFindKey)) {
            //   console.log(names);
                if(callback(diffFindKey[names])) {
                    console.log(names);
                    return names;
                    // console.log(diffFindKey[names]);
                }
                    // console.log(callback[names]);
                    // console.log(callback(diffFindKey[names]));
        // }    
    }
}


findKey({
    "Blue Hill": { stars: 1 },
    "Akaleri":   { stars: 3 },
    "noma":      { stars: 2 },
    "elBulli":   { stars: 3 },
    "Ora":       { stars: 2 },
    "Akelarre":  { stars: 3 }
  }, x => x.stars === 2) // => "noma"



// const findKeyByValue = function(showGenre, showTitle) {
//     console.log(showGenre);
//     for (const category of Object.keys(showGenre)) {
  
//       if(showGenre[category] === showTitle) {
//           return category;
  
//       } 
//     }
//       return undefined;
//   }
  
//   const bestTVShowsByGenre = { 
//       sci_fi: "The Expanse",
//       comedy: "Brooklyn Nine-Nine",
//       drama:  "The Wire"
//   };
    
  
//     assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
//     assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined)