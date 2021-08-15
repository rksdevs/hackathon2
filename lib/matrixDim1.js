const readline = require("readline-sync");

let dimension1;
let dimension2;

function matrixDim1() {
  let matrixDimension1 = readline.question(
    "Enter dimensions of Matrix 1 (First Row then Column separated by space): \n"
  );
  let matrixDimension2 = readline.question(
    "Enter dimensions of Matrix 2 (First Row then Column separated by space): \n"
  );

  dimension1 = matrixDimension1
    .trim()
    .split(" ")
    .map((ele) => Number(ele));
  dimension2 = matrixDimension2
    .trim()
    .split(" ")
    .map((ele) => Number(ele));
}

module.exports = matrixDim1;
