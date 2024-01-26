// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

/*REVERSING A STRING */

//MTHD 1
// function reverse(str) {
//   return str.split("").reverse().join("");
// }

//MTHD 2 - might not use this since it uses classical FOR loop
// function reverse(str) {
//     //MTHD 1
//     let revString = [];
//     for (let i = str.length -1; i >= 0; i--) {
//       revString.push(str[i]);
//     }
//     const reversedString = revString.join("");
//     return reversedString;
// }

//MTHD 3
function reverse(str) {
    let reversed= '';

    for (let char of str) {
        reversed = char + reversed;
        debugger;
    }
    return reversed;
}


//MTHD 4 - WOW Solution
// function reverse(str) {
//     return str.split('').reduce((reversed, char) => char + reversed, '')
// }

reverse('asdf');

module.exports = reverse;

//NOTE: Try to avoid classic FOR loop, and use FOR/OF because there are too many places to commit errors