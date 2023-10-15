"use strict";
function adddd(n1, n2, showResult, phrase) {
    const result = n1 + n2;
    return result;
}
function combine(input1, input2, resultConversion) {
    let result;
    if ((typeof input1 === "number" && typeof input2 === "number") ||
        resultConversion === "as-number") {
        result = +input1 + +input2;
    }
    else {
        result = input1.toString() + input2.toString();
    }
    return result;
    // if (resultConversion === "as-number") {
    //   return +result;
    // } else {
    //   return result.toString();
    // }
    // return result;
}
const combinedAges = combine(30, 26, "as-number");
console.log(combinedAges); //56
const combinedNames = combine("Jim", "Jimothy", "as-text"); //string
console.log(combinedNames);
