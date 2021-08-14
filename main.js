const readline = require ("readline-sync");

let matrix1 = [];
let matrix2 = [];
let dimension1;
let dimension2;

function welcome () {
    console.log("Welcome choose from below options");
    console.log("Type 1 for Matrix Addition")
    console.log("Type 2 for Matrix Subtraction")
    console.log("Type 3 for Matrix Transpose")
    console.log("Type 4 for Matrix Multiplication")
    console.log("Type 5 for Matrix Reverse")
}

welcome ();

let option = readline.question("Please type your option & press enter: ");

switch (option) {
    case "1":
        matrixDim1();
        if (dimension1[0] == dimension2[0] && dimension1[1] == dimension2[1]) {
            matrixCreate();
            console.log (matAdd (matrix1, matrix2));
        } else {
            console.log("A matrix can only be added to (or subtracted from) another matrix if the two matrices have the same dimensions.");
        }
        break;
    case "2":
        matrixDim1();
        if (dimension1[0] == dimension2[0] && dimension1[1] == dimension2[1]) {
            matrixCreate();
            console.log (matSub (matrix1, matrix2));
        } else {
            console.log("A matrix can only be added to (or subtracted from) another matrix if the two matrices have the same dimensions.");
        }
        break;
    case "3":
        matrixDim2();
        console.log (matTranspose (matrix1));
        break;
    case "4":
        matrixDim();
        console.log (matMultiply (matrix1, matrix2));
        break;
    case "5":
        matrixDim();
        console.log (matReverse (matrix1, matrix2));
        break;
    default:
        console.log("Enter valid option");
}

/* taking input of dimensions for 2 arrays*/ 

function matrixDim1 () {
    let matrixDimension1 = readline.question("Enter dimensions of Matrix 1 (First Row then Column separated by space): \n");
    let matrixDimension2 = readline.question("Enter dimensions of Matrix 2 (First Row then Column separated by space): \n");

    dimension1 = matrixDimension1.trim().split(" ").map((ele) => Number(ele));
    dimension2 = matrixDimension2.trim().split(" ").map((ele) => Number(ele));
}

function matrixDim2 () {
    let matrixDimension1 = readline.question("Enter dimensions of Matrix 1 (First Row then Column separated by space): \n");

    dimension1 = matrixDimension1.trim().split(" ").map((ele) => Number(ele));
    matrix1 = newMatrix(dimension1);
}

function matrixCreate () {
    matrix1 = newMatrix(dimension1);
    matrix2 = newMatrix(dimension2);
}


// console.log(dimension1);




function newMatrix (dimensions) {
    let matrix =[];
    for (i=1; i <= dimensions[0]; i++){
        let row =[];
        for (j=1; j<= dimensions[1]; j++){
            let col = Number(readline.question(`Enter Matrix[${i}][${j}]:`).trim()) ;
            row.push(col);
        }
        matrix.push(row);
    }
    return matrix;
}

// matrix1 = newMatrix(dimension1);
// matrix2 = newMatrix(dimension2);

function matAdd(a, b) {
    let result = [];
    for (let i = 0; i < a.length; i++) {
      let row = [];
      for (let j = 0; j < a[i].length; j++) {
        let col = a[i][j] + b[i][j];
        row.push(col);
      }
      result.push(row);
    }
    return result;
  }

  function matSub(a, b) {
    let result = [];
    for (let i = 0; i < a.length; i++) {
      let row = [];
      for (let j = 0; j < a[i].length; j++) {
        col = a[i][j] - b[i][j];
        row.push(col);
      }
      result.push(row);
    }
    return result;
  }

  function matTranspose(A) {
      let result =[];
    for (i = 0; i < A[0].length; i++) {
      let col = [];
      for (j = 0; j < A.length; j++) {
        col.push(A[j][i]);
      }
      result.push(col);
    }
    return result;
  }