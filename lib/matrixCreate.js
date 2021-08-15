const readline = require("readline-sync");

let matrix1;
let matrix2;
function matrixCreate() {
  matrix1 = newMatrix(dimension1);
  matrix2 = newMatrix(dimension2);
}

// console.log(dimension1);

function newMatrix(dimensions) {
  let matrix = [];
  for (i = 0; i < dimensions[0]; i++) {
    let row = [];
    for (j = 0; j < dimensions[1]; j++) {
      let col = Number(readline.question(`Enter Matrix[${i}][${j}]:`).trim());
      row.push(col);
    }
    matrix.push(row);
  }
  return matrix;
}

module.exports = matrixCreate;
