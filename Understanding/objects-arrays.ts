// const person: {
//   name: string;
//   age: number;
// } = {
//   name: "Matt",
//   age: 34,
// };

// const person: {
//   name: string;
//   age: number;
//   hobbies: string[];
//   role: [number, string];
// } = {
//   name: "Matt",
//   age: 34,
//   hobbies: ["Sports", "Cooking"],
//   role: [2, "author"],
// };
enum Role {
  ADMIN = 5,
  READ_ONLY, //6 (increments correctly)
  AUTHOR,
}

const person = {
  name: "Matt",
  age: 34,
  hobbies: ["Sports", "Cooking"],
  role: Role.AUTHOR,
};

// person.role.push("admin"); //push is an exception and is allowed even when the role only has n inside and the push exceeds that
// person.role[1] = 10;

let favoriteActivities: string[];
favoriteActivities = ["Sports"];
let sample: any[];
sample = ["a", 2];

console.log(person.name);

// for (const hobby of person.hobbies) {
//   console.log(hobby.toUpperCase());
//   console.log(hobby.map()); // correct TS error, map not for strings
// }
