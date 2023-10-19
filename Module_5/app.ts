class Derpartment {
  name: string = "Default";

  constructor(n: string) {
    this.name = n;
  }
}

const dept1 = new Derpartment("Dept1");

console.log(dept1);
