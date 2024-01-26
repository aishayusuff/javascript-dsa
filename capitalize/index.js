// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
  //capitalise first letter in each word
  //return capitalised string

  //create a capitalised string array
  //convert string into array
  //loop through array
  //convert element[0] toUpperCase
  //add it to element.slice(1)
  //push into capitalised array
  //return capitalised string

  const capitalised = [];

  for (let element of str.split(" ")) {
    capitalised.push(element[0].toUpperCase() + element.slice(1));
  }

  return capitalised.join(' ');
  
}

module.exports = capitalize;
