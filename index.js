//console.log("hey")

function fizzbuzz(num) {
  //take in a number and return all of the numbers that are either divisible b three
  //or five but not both
  let arr = []
  if (num % 3 === 0 && num % 5 === 0) {
    return
  } else {
    if (num % 3 === 0) {
      arr.push(num)
    } else {
      if (num % 5 === 0) {
        arr.push(num)
      }
    }
  }
  return arr
}

function wizzbuzz(lowNum, highNum) {
  for (i=lowNum; i<=highNum; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      continue
    } else {
      if (i % 3 ===0 || i % 5 === 0) {
        console.log(i)
      }
    }
  }
}
  

//console.log(fizzbuzz(30))
//console.log(fizzbuzz(10))
//console.log(fizzbuzz(12))
//wizzbuzz(1, 15)

//problem set

// Define a function `logBetween(lowNum, highNum)` that will print every number
// from `lowNum` to `highNum`, inclusive. Inclusive means that the range includes
// `lowNum` and `highNum`. Hint: this function only needs to print using `console.log`,
// it does not need to return.
//
function logBetween(lowNum, highNum) {
  for (i = lowNum; i <=highNum; i++) {
    console.log(i)
  }
}
// Examples:
//
//logBetween(-1, 2); // prints
// -1
// 0
// 1
// 2
//
//logBetween(14, 6); // prints nothing
//
//logBetween(4,6); // prints
// 4
// 5
// 6

//problem 2
// Write a function `logBetweenStepper(min, max, step)` that takes in 3 numbers as
// parameters. The function should print out numbers between `min` and `max` at `step`
// intervals. See the following examples.
//
function logBetweenStepper(min, max, step) {
  for (i=min; i<=max; i+=step) {
    console.log(i);
  }
}
// Examples:
//
//logBetweenStepper(5, 9, 1) // prints
// 5
// 6
// 7
// 8
// 9
//
//logBetweenStepper(-10, 15, 5) // prints
// -10
// -5
// 0
// 5
// 10
// 15

//Problem 3
// Write a function `printFives(max)` that prints out the multiples of 5 that are
// less than max.
//
// Try to solve this in two ways, using a conditional (if) and without using a
// conditional
//
//function printFives(max) {
  // for (i=0; i<max; i++) {
  //   if (i % 5 === 0) {
  //     console.log(i)
  //   }
  // }
// }

function printFives(max) {
  for (i=0; i<max; i+=5) {
    console.log(i)
  }
}
// Example:
//
//printFives(20) // prints
// 0
// 5
// 10
// 15

// Problem 4
// Write a function `printReverse(min, max)` that print out all numbers from max
// to min (exclusive), in reverse order.
//
function printReverse(min,max) {
  for (i=max-1; i>min; i--) {
    console.log(i)
  }
}
// Examples
//
printReverse(13, 18) // prints
// 17
// 16
// 15
// 14
//
printReverse(90, 94) // prints
// 93
// 92
// 91