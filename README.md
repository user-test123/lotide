# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @david.he613@gmail.com/lotide`

**Require it:**

`const _ = require('@david.he613@gmail.com/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* head: takes in an array and returns a first value
* tail: takes in an array and returns an array 
* middle: takes an array and sorts it and returns the values in the middle, if there is an even number of eleemtns it will return the middle
* assertEqual: Test case, compares two arrays and returns true if they are the same 
* assertArraysEqual: compares two arrays and returns true if they are the same
* assertObjectsEqual: test case, compares 2 objects and returns true if they are the same
* countLetters: counts the number of times each letter occurs in a string
* countOnly: given an array, and a value and returns how many times the value occurs  
* eqArrays: given two arrays, comapres them and return true if they are the same
* eqObjects: takes an array and sorts it and returns the values in 
* findKey in an array and returns a first value
* findKeyByValue: array and returns an array 
* flatten: makes an array and sorts it and returns the values in t there is an even number of eleemtns it will return the middle
* letterPosition: will return all the indices (zero-based positions) in the string where each character is found
* takeUntil: Creates a slice of array with elements taken from the beginning. Continues until the callback returns a truthy value.
* without: without function should be returning a new array and not modify the original array that is passed in
