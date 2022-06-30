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
//printReverse(13, 18) // prints
// 17
// 16
// 15
// 14
//
//printReverse(90, 94) // prints
// 93
// 92
// 91

//Problem 5
// Write a function `sumNums(max)` that returns the sum of all positive numbers less
// than or equal to max.
//
function sumNums(max) {
  let sum = 0
  for (i=0; i<=max; i++) {
  sum += i
  }
  return sum
}

// Examples:
//
//console.log(sumNums(4)); // => 10
//console.log(sumNums(10)); // => 55
//console.log(sumNums(365)); // => 66795

//Problem 6
// Define a function `isFactorOf(number, factor)` that returns `true` if `factor`
// is a factor of `number`. `false` otherwise. A factor is a number that divides
// another number without a leftover remainder.
//
function isFactorOf(number,factor) {
  return number % factor === 0
}
// Examples:
//
//console.log(isFactorOf(6,2)); // => true
//console.log(isFactorOf(-6, 2)); // => true
//console.log(isFactorOf(5,0)); // => false
//console.log(isFactorOf(22, 7)); // => false

// Problem 7
// Define a function `fizzBuzz(max)` that takes a number and prints  every number
// from 0 to `max` that is divisible by either 3 or 5, but not both.
//
function fizzBuzz(max) {
  for (i=0; i<=max; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      continue
    } else {
      if (i % 3 === 0 || i % 5 === 0) {
        console.log(i)
    }
  }
}
}
// Examples:
//
//fizzBuzz(20); // prints
// 3
// 5
// 6
// 9
// 10
// 12
// 18

// Problem 8
// Define a function `isPrime(number)` that returns `true` if `number` is prime.
// Otherwise, false. Assume `number` is a positive integer.
//
function isPrime(number) {
  if (number < 2) {
    return false //eliminate 2 problem
  }
  for (i=2; i<number; i++) {
    if (number % i === 0) {
      return false //only stops loop if its false
    }
  } return true //implied true because function never breaks
}

// Examples:
//
console.log(isPrime(2)); // => true
console.log(isPrime(10)); // => false
console.log(isPrime(11)); // => true
console.log(isPrime(9)); // => false
console.log(isPrime(2017)); // => true