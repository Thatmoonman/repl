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
function pigLatinize(word) {
  let vowels = ["a","e","i","o","u"]
  for (i=0;i<vowels.length;i++) {
    if (word[0] === vowels[i]) {
      return word + "yay";
    }
  } return word.slice(1,word.length) + word[0] + "ay"
}
// Examples:
//
console.log(pigLatinize("teacher")); // => "eachertay"
console.log(pigLatinize("trash")); // => "ashtray"
console.log(pigLatinize("eat")); // => "eatyay"
console.log(pigLatinize("orange")); // => "orangeyay"