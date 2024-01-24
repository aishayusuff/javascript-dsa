// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  //Creat a character map fron the str
  const charMap = {};
  let max = 0;
  let maxChar = "";

  //For loop to check number of char occurrence in str

  for (let char of str) {
    charMap[char] = charMap[char] + 1 || 1;
  }
  //Return char key whose value is the max

  for (let char in charMap) {
    if (charMap[char] > max) {
        max = charMap[char];
        maxChar = char;
    }
  }

  return maxChar;
}

maxChar("sings");
module.exports = maxChar;
