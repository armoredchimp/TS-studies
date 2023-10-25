abstract class Derpartment {
  // private name: string = "Default";
  protected employees: string[] = [];
  constructor(readonly id: string, public name: string) {
    // this.name = n;
  }

  static createEmployee(name: string) {
    ///static - call a class method without instance of class
    return { name: name };
  }

  abstract describe(this: Derpartment): void;

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInfo() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

const employee1 = Derpartment.createEmployee("Jim");

class ITDerpartment extends Derpartment {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id, "IT");
    this.admins = admins;
  }
  describe() {
    console.log("Derpatment" + this.id);
  }
}
class AccountingDerpartment extends Derpartment {
  private lastReport: string;
  private static instance: AccountingDerpartment;
  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("no report found");
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("add a value");
    }
    this.addReport(value);
  }
  static getInstance() {
    if (AccountingDerpartment.instance) {
      return this.instance;
    }
    this.instance = new AccountingDerpartment("d3", []);
    return this.instance;
  }
  private constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }
  addEmployee(name: string) {
    if (name === "Max") {
      return;
    }
    this.employees.push(name);
  }
  addReport(text: string) {
    this.reports.push(text);
    this.lastReport = text;
  }
  getReports() {
    console.log(this.reports);
  }
  describe() {
    console.log("Derpatment" + this.id);
  }
}
// const dept1 = new Derpartment("1", "Dept1");

// dept1.addEmployee("bill");
// dept1.addEmployee("sally");

// dept1.describe();
const accounting = AccountingDerpartment.getInstance();
const accounting2 = AccountingDerpartment.getInstance(); // will be the same instance
// const dept1Copy = { name: "s", describe: dept1.describe };
// dept1Copy.describe();
// console.log(dept1);
accounting.mostRecentReport = "report A";
const it = new ITDerpartment("3", ["Bill"]);
accounting.describe();
it.describe();
console.log(accounting.mostRecentReport);
