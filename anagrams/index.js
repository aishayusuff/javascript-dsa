// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False



//SOLN 1
// function anagrams(stringA, stringB) {
//     //make a character map object from each string - create a helper function to help with this
//     // compare if the length of one object matches the other
//         //return false if not matching
    
//     //loop through one object
//         // check that the value of the current key in the loop matches the value of that key in the other object
//             //if not, return false;

//     // return true

//     const stringAMap = createsCharMap(stringA);
//     const stringBMap = createsCharMap(stringB);

//     if (Object.keys(stringAMap).length !== Object.keys(stringBMap).length) {
//         return false;
//     }

//     for (let char in stringAMap) {
//         if (stringAMap[char] !== stringBMap[char]) {
//             return false;
//         }
//     }

//     return true;
// }

// //Helper function
// function createsCharMap(str) {
//     //create a map object
//    //loop through the str to convert to map by assigning key/value pairs
//    //return map

//    const charMap = {};
//    for (let char of str) {
//         charMap[char] = 1 || charMap[char]++;
//    }
//    return charMap
// }

//SOLN 2
function anagrams(stringA, stringB) {
    return sortsString(stringA) === sortsString(stringB);
}

//helper function

const sortsString = function(str) {
   return str.replace(/[^\w]/g, "").toLowerCase().split("").sort().join("")
}

module.exports = anagrams;
