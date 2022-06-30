// Write a function `logEach(array)` that prints every element of the array and its
// index to the console.
//
function logEach(array) {
  for (i=array.lengthOf-1; i>=0; i--) {
    console.log(array.indexOf(i) + ": " + array(i))
  }
} 
// Example:
//
logEach(["Anthony", "John", "Carson"]); // prints
// 0: Anthony
// 1: John
// 2: Carson