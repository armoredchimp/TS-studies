// console.log("Sending...");
// function sendAnalytics(data) {
//   console.log(data);
// }
// sendAnalytics("here is datas");

const ag = (a: string, b: number = 1) => console.log(a, b); //1 is a default argument. Has to be last
const pront: (a: number | string) => void = (output) => console.log(output);

const booton = document.querySelector("button");

if (button) {
  button.addEventListener("click", (event) => console.log(event));
}

const hobbies = ["Sports", "Cooking"];
const activeHobbies = ["Hiking", ...hobbies];
activeHobbies.push(...hobbies);

const parson = {
  namen: "Preacher Max",
  age: 40,
};

const copiedParson = { ...parson }; // actual copy of original object, not just memory pointer like below
// const copiedParson = parson

const added = (...numbers: number[]) => {
  numbers.reduce((curResult, curValue) => {
    return curResult + curValue;
  }, 0);
};
const addedNumbs = added(10, 12, 19, 16.5);
console.log(addedNumbs);

const [hobby1, hobby2, ...remainingHobbies] = hobbies; //does not modify original array, new ones are copies

const { namen: userNamen, age } = parson; //object destructuring is different because order not guaranteed, based on exact match
console.log(userNamen, age);
