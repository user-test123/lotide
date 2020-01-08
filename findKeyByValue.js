// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {

    if(actual === expected) {
      console.log('Assertion Passed');
   } else {
      console.log('Assertion Failed');
   }
  };
  

const findKeyByValue = function(showGenre, showTitle) {
  console.log(showGenre);
  for (const category of Object.keys(showGenre)) {

    if(showGenre[category] === showTitle) {
        return category;

    } 
  }
    return undefined;
}

const bestTVShowsByGenre = { 
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire"
};
  

  assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);