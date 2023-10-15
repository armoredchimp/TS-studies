"use strict";
function add(n1, n2) {
    return n1 + n2;
}
// function printResult(num: number): void {
//   // void = doesn't have return statement
//   console.log("Result: " + num);
// }
function addAndHandle(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
// printResult(add(5, 12));
let combinedValues;
combinedValues = add;
console.log(combinedValues(8, 8));
addAndHandle(10, 20, (result) => {
    console.log(result);
});
