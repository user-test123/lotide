const assertEqual = require('../assertEqual');
const head = require('../head');


// assertEqual("Lighthouse Labs", "Bootcamp");
// assertEqual(1,1);
// assertEqual(34,1);
// assertEqual("hello", "hello");

assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");