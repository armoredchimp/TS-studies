// interface Person {
//   name: string;
//   age: number;

//   greet(phrase: string): void;
// }

// let user1: Person;

// user1 = {
//   name: "Max",
//   age: 30,
//   greet(phrase: string) {
//     console.log(phrase + "" + this.name);
//   },
// };

interface AddFn {
  (a: number, b: number): number;
}
// type AddFn = (a: number, b: number) => number;

let add: AddFn;

add = (n1: number, n2: number) => {
  return n1 + n2;
};

interface Named {
  readonly name: string;
}

interface Greetable extends Named {
  // readonly name: string; // can add readonly to interfaces, not public or private. readonly = set once and can't be changed after

  greet(phrase: string): void;
}

class Person implements Greetable {
  // classes can implement 2 or more interfaces
  name: string;
  age = 30;
  constructor(n: string) {
    this.name = n;
  }

  greet(phrase: string) {
    console.log(phrase + "" + this.name);
  }
}

let user1: Greetable;

user1 = new Person("Max");

user1.greet("Hi there, it is I");
console.log(user1);
