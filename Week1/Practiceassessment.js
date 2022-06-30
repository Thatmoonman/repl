/******************************************************************************
** Write a function average(num1, num2) that returns the average of two numbers.
**
** Examples:
**
average(10, 20); // => 15
average(5, 7); // => 6
average(24, 32); // => 28
*/

function average(num1, num2) {
  return (num1 + num2)/2
}

//console.log(average(10, 20)); // => 15
//console.log(average(5, 7)); // => 6
//console.log(average(24, 32)) // => 28

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = average

/*******************************************************************************
** Write a function tripler(array) that takes in an array and returns a new array
** containing 3 times every element of the original array.
**
** Examples:
**
** tripler([1,2,3]); // => [ 3, 6, 9 ]
** tripler([4, 1, 7]); // => [ 12, 3, 21 ]
*/

function tripler(array) {
  return array.map(array => array*3)
}

//console.log(tripler([1,2,3])); // => [ 3, 6, 9 ]
//console.log(tripler([4, 1, 7])); // => [ 12, 3, 21 ]
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = tripler

/******************************************************************************
** Write a function oddRange(end) that takes in a number and returns an array containing
** all positive odd numbers up to `end`.
**
** Examples:
**
** oddRange(13); // => [ 1, 3, 5, 7, 9, 11, 13 ]
** oddRange(6); // => [ 1, 3, 5 ]
*/

function oddRange(end) {
  let odds = []
  for (i=0; i <= end; i++)
    if (i % 2 !== 0) {
      odds.push(i)
    } return odds
}

//console.log(oddRange(13)); // => [ 1, 3, 5, 7, 9, 11, 13 ]
//console.log(oddRange(6)); // => [ 1, 3, 5 ]
/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = oddRange;