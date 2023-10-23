//A. Take a sentence as an input and reverse every word in that sentence.
//      a. Example - This is a sunny day > shiT si a ynnus yad.

const str = "This is a random string";
const arr = str.split(" ");

for (let i = 0; i < arr.length; i++) {
  let word = arr[i];
  let revWord = "";

  for (let j = word.length - 1; j >= 0; j--) {
    revWord = revWord + word[j];
  }

  arr[i] = revWord;
}

const reversedStr = arr.join(" ");

console.log(reversedStr);