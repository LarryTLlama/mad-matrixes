# Matrixes
A dead simple library built for quick editing of matrixes (or matrices).
Made for those who can't be bothered to type out the whole thing. 

# Installation

Get it from npm ➡️ `npm install --save matrixes`.

# Examples
```javascript
const {Matrix, parseMatrix} = require("matrixes");
```
Create a new Matrix of size 3x3 where each point has a value of "something":
```javascript
let m = new Matrix(3, 3, "something")
let myMatrix = m.getArray();
/*
let myMatrix = [
    [["something"],["something"],["something"]],
    [["something"],["something"],["something"]],
    [["something"],["something"],["something"]]
];
*/
```

Make a line vertically down a column in a matrix:
```javascript
let myOtherMatrix = m.addVerticalLine(1, 0, 2, "something else").getArray();
/*
let myOtherMatrix = [
    [["something"],["something else"],["something"]],
    [["something"],["something else"],["something"]],
    [["something"],["something else"],["something"]]
];
*/
```
(Note the `.addVerticalLine` and `.addHorizontalLine` methods can be chained!)

```javascript
let anotherMatrix = m.addVerticalLine(1, 0, 2, "something else").addHorizontalLine(1, 0, 2, "something else").getArray();
/*
let myOtherMatrix = [
    [["something"],["something else"],["something"]],
    [["something else"],["something else"],["something else"]],
    [["something"],["something else"],["something"]]
];
*/
```
Got one of your own that you want to use? Don't like the normal constructor? Want to just be *different*? Use the parser!

```javascript
const {parseMatrix} = require("matrixes");

let mySpecialMatrix = [
    [["something"],["something"],["something"]],
    [["something"],["something"],["something"]],
    [["something"],["something"],["something"]]
];

// Returns a Matrix object, which you can use all the standard features on.
parseMatrix(mySpecialMatrix);

// Or, if you already required the Matrix class, you can pass the array as the first argument :)

let mySpecialMatrix = [
    [["something"],["something"],["something"]],
    [["something"],["something"],["something"]],
    [["something"],["something"],["something"]]
];

new Matrix(mySpecialMatrix)
```

# FAQ
## What is a Matrix?
Unfortunatelty, we're not talking about the movie. 😔
A matrix is a 2D grid represented by JavaScript arrays. They can become quite big though, and this library aims to remove dealing with super long arrays.

## How do I get it as an array?
If you're wanting to use your Matrix somewhere, you'll probably be wanting to know this. You can call the `.getArray()` method on any Matrix object to get it as a fancy array!



