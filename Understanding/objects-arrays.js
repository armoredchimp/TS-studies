"use strict";
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
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 5] = "ADMIN";
    Role[Role["READ_ONLY"] = 6] = "READ_ONLY";
    Role[Role["AUTHOR"] = 7] = "AUTHOR";
})(Role || (Role = {}));
const person = {
    name: "Matt",
    age: 34,
    hobbies: ["Sports", "Cooking"],
    role: Role.AUTHOR,
};
// person.role.push("admin"); //push is an exception and is allowed even when the role only has n inside and the push exceeds that
// person.role[1] = 10;
let favoriteActivities;
favoriteActivities = ["Sports"];
let sample;
sample = ["a", 2];
console.log(person.name);
// for (const hobby of person.hobbies) {
//   console.log(hobby.toUpperCase());
//   console.log(hobby.map()); // correct TS error, map not for strings
// }
