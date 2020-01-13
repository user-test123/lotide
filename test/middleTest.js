// const assertArraysEqual = require('../assertArraysEqual')
const assert = require('chai').assert;
const middle = require('../middle');


describe("#tail", () => {
    it("returns [] for [1]", () => {
      assert.deepEqual(middle([1]), [])
    });
});

describe("#tail", () => {
    it("returns [] for [1, 2]", () => {
      assert.deepEqual(middle([1, 2]), [])
   
    });
});


describe("#tail", () => {
    it("returns [2] for [1, 2, 3]", () => {
      assert.deepEqual(middle([1, 2, 3]), [2])
 
    });
});


describe("#tail", () => {
    it("returns [2, 3] for [1, 2, 3, 4]", () => {
      assert.deepEqual(middle([1, 2, 3, 4]), [2, 3]);
    });
});

describe("#tail", () => {
    it("returns [3, 4] for [1, 2, 3, 4, 5, 6]", () => {
      assert.deepEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);

    });
});



// assertArraysEqual(middle([1]),[]) // => [] 
// assertArraysEqual(middle([1, 2]),[]) // => [] //false
// assertArraysEqual(middle([1, 2, 3]), [2]) // => [2] //true
// assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]) // => [3] //true
// assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]) // => [2, 3] //true
// // console.log(middle([1,2,3,4]))
// // console.log(middle([1,2,3,4,5,6]))
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]) // => [3, 4] //true 
