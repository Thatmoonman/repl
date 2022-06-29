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
  

console.log(fizzbuzz(30))
console.log(fizzbuzz(10))
console.log(fizzbuzz(12))
(wizzbuzz(1, 30))