// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

//SOLN 1
// function vowels(str) {
//     //create a counter variable
//     //loop through str
//         // if ( object keys includes [a, e, i, o, u])
//             //return counter++

//     //return counter

//     let counter = 0;

//     for (let char of str.toLowerCase()) {
//         if (["a", "e", "i", "o", "u"].includes(char)) {
//             counter++;
//         }
//     }
//     return counter;
// }

function vowels(str) {
  //use regEEx--> 'g' means [makes sure we don't stop at the first match found]
  //and 'i' means [case insensitive, which removes use of lowerCase]
  const matches = str.match(/[aeiou]/gi);

  return !matches ? 0 : matches.length;
}

module.exports = vowels;
