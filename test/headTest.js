const assert = require('chai').assert;
const head = require('../head');

describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });

  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5'); 
  });

  it("returns 'Lighthouse Labs' for ['Lighthouse Labs', 'Bootcamp']", () => {
    assert.strictEqual(head(['Lighthouse Labs', 'Bootcamp']), 'Lighthouse Labs'); 
  });

  it("returns '1' for ['1']", () => {
    assert.strictEqual(head(['1']), '1'); 
  });

  
  it("returns '34' for ['34, 1']", () => {
    assert.strictEqual(head(['34', '1']), '34'); 
  });

  it("returns '5' for ['5, 6', '7']", () => {
    assert.strictEqual(head(['5', '6', '7']), '5'); 
  });

  it("returns 'hello' for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(head(['Hello', 'Lighthouse', 'Labs']), 'Hello'); 
  });
  

});


// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1,1);
// assertEqual(34,1);
// assertEqual("hello", "hello");

// assertEqual(head([5,6,7]), 5);
// assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
