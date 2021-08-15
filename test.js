// let sampleMatrix = [];

// function newMatrix(dimensions) {
//   sampleMatrix = newSampleMatrix(dimensions);

//   let matrix = [];
//   for (i = 0; i < dimensions[0]; i++) {
//     let row = [];
//     for (j = 0; j < dimensions[1]; j++) {
//       console.log(sampleMatrix);
//       let col = readline.question(`[${sampleMatrix[i][j]}]:`).trim();
//       row.push(Number(col));
//     }
//     matrix.push(row);
//   }
//   return matrix;
// }
// let i = 0;
// let j = 0;
// function newSampleMatrix(dimensions) {
//   let matrix = [];
//   for (i = 1; i <= dimensions[0]; i++) {
//     let row = [];
//     for (j = 1; j <= dimensions[1]; j++) {
//       let col = [i][j];
//       row.push(col);
//     }
//     matrix.push(row);
//   }
//   return matrix;
// }

// console.log(newSampleMatrix([2, 3]));

let a = [
  [1, 2, 3],
  [4, 5, 6],
];
let b = [
  [2, 3],
  [2, 3],
  [2, 3],
];

function matMul(a, b) {
  let result = [];
  for (i = 0; i <= a.length - 1; i++) {
    let row = [];
    for (j = 0; j <= b[0].length - 1; j++) {
      let ele = 0;
      for (k = 0; k <= a[0].length - 1; k++) {
        ele = ele + a[i][k] * b[k][j];
      }
      row.push(ele);
    }
    result.push(row);
  }
  return result;
}

console.log(matMul(a, b));
