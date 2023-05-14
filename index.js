/**
 * Default class for Matrixes (or matrices)
 */

class Matrix {
    /**
     * Creates a new matrix with width x and height y.
     * Matrixes/matrices always have a top-left value of 0, 0 and go to
     * whatever the value of x and y are. 
     * This constructor can also parse a matrix. Just stick it as the first argument!
     * @arg {Number} x Must be an integer. The width of the matrix. 
     * @arg {Number} y Must be an integer. The height of the matrix.
     * @param {any} defaultValue The value to automatically set all the value as. If omitted, this value will be "0"
     * @returns Matrix with all values set as the defaultValue or "0"
     */
    constructor(x, y, defaultValue) {
        if (typeof x == Array) {
            this.matrix = x;
            return this.matrix;
        }
        let array = [];
        // For each y level
        for (let i = 0; i < y; i++) {
            // Create a new row
            array[i] = [];
            // For each x box in each y level
            for (let i2 = 0; i2 < x; i2++) {
                // And set the required number of x levels
                console.log(array)
                console.log(i2)
                console.log(i)
                array[i][i2] = defaultValue ?? 0;
            }
        }
        this.matrix = array;
        return this;
    }

    /**
    * Sets a horizontal (Left/Right) 1-wide line to a matrix. This will overwrite/overlap any colliding points. X1 must be the smaller value
    * @arg {Number} y Must be an integer. The y point the line will be found along. 
    * @arg {Number} x1 Must be an integer, and the smaller value. The left-most point to start drawing across from.
    * @arg {Number} x2 Must be an integer, and the largest value. The right-most point to finish drawing across to.
    * @returns The edited matrix.
    */
    addHorizontalLine(x, y1, y2, value) {
        if (y1 > y2) {
            throw new Error("The y1 value must be less than (or equal to) the y2 value.")
        }
        for (let i = y1; y2 > i > y1; i++) {
            this.matrix[i][x] = value;
        }
        return this;
    }

    /**
     * Sets a vertical (Up/Down) 1-wide line to a matrix. This will overwrite/overlap any colliding points. Y1 must be the smaller value
     * @arg {Number} x Must be an integer. The x point the line will be found along. 
     * @arg {Number} y1 Must be an integer, and the smaller value. The top point to start drawing down from.
     * @arg {Number} y2 Must be an integer, and the largest value. The bottom point to finish drawing down to.
     * @returns The edited matrix.
     */
    addVerticalLine(x, y1, y2, value) {
        if (y1 > y2) {
            throw new Error("The y1 value must be less than (or equal to) the y2 value.")
        }
        for (let i = y1; y2 > i > y1; i++) {
            this.matrix[i][x] = value;
        }
        return this;
    }

    getArray() {
        return this.array;
    }

    /**
     * Helper method for getting the width of a matrix. If the matrix is empty, a value of 0 is returned.
     * @param {Matrix} matrix The matrix to get the width of.
     * @returns A number representing the width of the matrix
     */
    getWidth(matrix) {
        if (!matrix[0]) return 0;
        return matrix[0].length;
    }

    /**
     * Helper method for getting the height of a matrix. If the matrix is empty, a value of 0 is returned.
     * @param {Matrix} matrix The matrix to get the height of.
     * @returns A number representing the height of the matrix
     */
    getHeight(matrix) {
        if (!matrix) return 0;
        return matrix.length;
    }
}

/**
     * Parses a matrix into a Matrix Object
     * @param {Array} matrix An array containing matrix data.
     * @example 
     * // 3x3 Matrix
     * let m = [
     * [[], [], []],
     * [[], [], []],
     * [[], [], []],
     * ];
     * const {parseMatrix} = require("matrixes");
     * parseMatrix(m);
     */
function parseMatrix(matrix) {
    return new Matrix(matrix)
}

module.exports = { Matrix, parseMatrix }