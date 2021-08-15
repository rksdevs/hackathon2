const readline = require("readline-sync");
const matrixCreate = require("./matrixCreate");

let matrix1;
function matrixDim2() {
  let matrixDimension1 = readline.question(
    "Enter dimensions of Matrix 1 (First Row then Column separated by space): \n"
  );

  dimension1 = matrixDimension1
    .trim()
    .split(" ")
    .map((ele) => Number(ele));
  matrix1 = matrixCreate.newMatrix(dimension1);
}

module.exports = matrixDim2;
