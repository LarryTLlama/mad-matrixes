const {Matrix, parseMatrix} = require("./index.js");

console.log("Testing a 3x3 matrix grid, setting each value to 1.");

let m = new Matrix(3, 3, 2);
console.log(m);

console.log("Painting line of 0s in the middle row/column.")

console.log(m.addHorizontalLine(1, 0, 2, 0))
console.log(m.addVerticalLine(1, 0, 2, 0))

console.log("Testing method chaining")
console.log(m.addHorizontalLine(1, 0, 2, 0).addVerticalLine(1, 0, 2, 0))

let matrix = [
    [[1], [2], [3]],
    [[4], [5], [6]],
    [[7], [8], [9]]
];

console.log("Testing Matrix parse")
console.log(new Matrix(matrix))
console.log("Testing Utils parse")
console.log(parseMatrix(matrix))

console.log("Testing get width/height")

console.log(m.getHeight(matrix))
console.log(m.getWidth(matrix))

console.log("Tests done!")

