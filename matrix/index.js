// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
  //Create a result array and push in n number of empty arrays using a For loop
  //Create a counter variable at 1
  //create temporary variables for startRow, endRow, startCol, and endCol
  //while startRow <= endRow and the startCol <= endCol
  //mutliple for loops to get the elements inside each sub arrays

  //one for loop for the TOP ROW (startCol to endCol)
  //asign counter variable to result[startRow][i]
  //counter++

  //startRow++
  //another for loop for the RIGHT COL (startRow to endRow)
  //Assign counter variable to result[i][endCol];
  //counter++

  // endCol--
  //for loop for BOTTOM ROW (decrease from endCol to startCol)
  //assign counter variable to results[endRow][i]
  //counter++

  //endRow--
  //lastly, for loop for LEFT COL (decreases from endRow to startRow)
  //assign counter variable to results[i][startCol]
  //counter++
  //startCol++

  //Return results

  const results = [];
  for (let i = 0; i < n; i++) {
    results.push([]);
  }

  let counter = 1;
  let startRow = 0;
  let endRow = n - 1;
  let startCol = 0;
  let endCol = n - 1;

  while (startRow <= endRow && startCol <= endCol) {
    //Top row
    for (let i = startCol; i <= endCol; i++) {
      results[startRow][i] = counter;
      counter++;
    }
    startRow++;

    //Right Col
    for (let i = startRow; i <= endRow; i++) {
      results[i][endCol] = counter;
      counter++;
    }
    endCol--;

    //Bottom Row
    for (let i = endCol; i >= startCol; i--) {
      results[endRow][i] = counter;
      counter++;
    }
    endRow--;

    //Left Col
    for (let i = endRow; i >= startRow; i--) {
      results[i][startCol] = counter;
      counter++;
    }
    startCol++;
  }

  return results;
}



//Soln for Linear matrix 
function linearMatrix (n) {
    //create a result array
    //create an initialValue
    //use for loop to push in n sub arrays into results representing row
        // use another for loop to create n cols
        //assign initialValue variable to result[row][col]

    const results = [];
    let initialValue = 1;

    for (let row = 0; row < n; row++) {
        results.push([]);

        for (let col = 0; col < n; col++) {
            results[row][col] = initialValue;
            initialValue++;
        }
    }

    return results;

}



//Another matrix function that accepts  params for row and col and initialValue

function linearMatrix2 (rows, cols, initialValue = 1) {
    //create a result array
    //use for loop to push in row number ofsub arrays into results
        // use another for loop to create col number of cols
        //assign initialValue variable to result[row][col]

    const results = [];

    for (let row = 0; row < rows; row++) {
        results.push([]);

        for(let col = 0; col < cols; col++) {
            results[row][col] = initialValue;
            initialValue++;
        }
    }

    return results;

}

module.exports = matrix;
