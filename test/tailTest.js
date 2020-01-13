const assert = require('chai').assert;
const tail = require('../tail');


describe("#tail", () => {
    it("returns [1, 2] for [8, 1, 2]", () => {
      assert.deepEqual(tail([8, 1, 2]), [1, 2])
    console.log(tail([8, 1, 2]));
    });
});

// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3);


