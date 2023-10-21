class Derpartment {
  // private name: string = "Default";
  private employees: string[] = [];
  constructor(private readonly id: string, public name: string) {
    // this.name = n;
  }

  describe(this: Derpartment) {
    console.log("Derpatment" + this.id + this.name);
  }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInfo() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDerpartment extends Derpartment {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }
}
class AccountingDerpartment extends Derpartment {
  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
  }

  addReport(text: string) {
    this.reports.push(text);
  }
  getReports() {
    console.log(this.reports);
  }
}
const dept1 = new Derpartment("1", "Dept1");

dept1.addEmployee("bill");
dept1.addEmployee("sally");

dept1.describe();

const dept1Copy = { name: "s", describe: dept1.describe };
// dept1Copy.describe();
console.log(dept1);
