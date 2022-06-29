console.log("hey")

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
// for (i=0, i<num,i++) {
  
// }
console.log(fizzbuzz(30))
console.log(fizzbuzz(10))
console.log(fizzbuzz(12))