// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  //reverse the order of n

  //convert n toString
  //reverse nString

  //convert back to int

  //check for edge cases, like negative ints

  //return it as number

  const newN = parseInt(n.toString().split("").reverse().join(""));

  if (n < 0) {
    return newN * -1;
  }

  return newN;
}


module.exports = reverseInt;
