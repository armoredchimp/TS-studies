function adddd(n1: number, n2: number, showResult: boolean, phrase: string) {
  const result = n1 + n2;
  return result;
}

type nsb = number | string | boolean;
type conversor = "as-number" | "as-text";

function combine(input1: nsb, input2: nsb, resultConversion: conversor) {
  let result;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-number"
  ) {
    result = +input1 + +input2;
  } else {
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
