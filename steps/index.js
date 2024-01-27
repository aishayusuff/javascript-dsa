// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'


//SOLN 1
// function steps(n) {
//     // loop through N for rows 
//         // create a variable step
//         //loop through N for columns
//             //if current loop col < = current loop row
//                 //add # to step variable
//             //else
//                 //add space to step variable
//         //console.log(step)

//     for (let row = 0; row < n; row++) {
//         let step = "";

//         for (let col = 0; col < n; col++) {
//             if (col <= row) {
//                 step += "#";
//             } else {
//                 step += " ";
//             }
//         }
//         console.log(step);
//     }
// }

//SOLN 2
function steps(n) {
  
}

module.exports = steps;
