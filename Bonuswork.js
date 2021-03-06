//Bonus 1
// Write a function `pigLatinize(word)` that translates a single word into its pig
// latin equivalent. The rules for the translation are as follows:
//
// 1) For words that begin with a non-vowel, all letters before the initial
// vowel are placed at the end of the word sequence. Then, "ay" is added to the end.
//   Examples
//   "pig" → "igpay"
//   "banana" → "ananabay"
//   "trash" → "ashtray
//
// 2) For words that begin with vowel sounds, just adds "yay" to the end
//   Examples
//   "eat" → "eatyay"
//   "omelet" → "omeletyay"
//   "are" → "areyay"
//
// Note: y should not be considered a vowel
//
// function pigLatinize(word) {
//   let vowels = ["a","e","i","o","u"]
//   for (i=0;i<vowels.length;i++) {
//     if (word[0] === vowels[i]) {
//       return word + "yay";
//     }
//   } return word.slice(1,word.length) + word[0] + "ay"
// }

function pigLatinize(word) {
  let vowels = 'aeiou';
  if (vowels.includes(word[0])) return word + 'yay';
  let newWord = '';

  for (let i = 0; i < word.length; i++) {
    if (vowels.includes(word[i])) {
      return word.slice(i) + word.slice(0, i) + 'ay'
    }
  }

  return newWord
}
// Examples:
//
console.log(pigLatinize("teacher")); // => "eachertay"
console.log(pigLatinize("trash")); // => "ashtray"
console.log(pigLatinize("eat")); // => "eatyay"
console.log(pigLatinize("orange")); // => "orangeyay"


// Write a function `inPigLatin(sentence)` that translates an entire sentence into
// pig latin. Any words that were capitalized in the input sentence should be also
// capitalized in the new sentence. Use the `pigLatinize(word)` function you created earlier.
//
function inPigLatin(sentence) {
  let pigSplit = sentence.split(" ");
  let piggy = pigSplit.map(pigLatinize);
  
  return piggy.join(" ")
}
// Examples:
//
console.log(inPigLatin("Shmanthony is the best teacher")); // => 'Anthonyshmay isyay ethay estbay eachertay'
console.log(inPigLatin("let us Dance")); // => 'etlay usyay Anceday'
console.log(inPigLatin("this is the time of my life")); // => 'isthay isyay ethay imetay ofyay myay ifelay"

//Problem 3
// Write a function `maxPairProduct(array)` that takes in an array of numbers and
// returns the largest product of any pair of numbers from the array.  
//
//  
function maxPairProduct(array){
  let bigNumOne = 0
  let bigNumTwo = 0

  for(i=0;i<array.length;i++) {
    if (array[i] > bigNumOne) {
      bigNumOne = array[i]
    } else if (array[i] > bigNumTwo) {
      bigNumTwo = bigNumOne
      bigNumOne = array[i]
    }
  }
  return bigNumOne*bigNumTwo
}
console.log(maxPairProduct([5, 7, 6, 9, 3])); // => 63
console.log(maxPairProduct([4, 2, 5, 6])); // => 30
