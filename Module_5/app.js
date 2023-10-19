var Derpartment = /** @class */ (function () {
    function Derpartment(id, name) {
        this.id = id;
        this.name = name;
        // private name: string = "Default";
        this.employees = [];
        // this.name = n;
    }
    Derpartment.prototype.describe = function () {
        console.log("Derpatment" + this.id + this.name);
    };
    Derpartment.prototype.addEmployee = function (employee) {
        this.employees.push(employee);
    };
    Derpartment.prototype.printEmployeeInfo = function () {
        console.log(this.employees.length);
        console.log(this.employees);
    };
    return Derpartment;
}());
var dept1 = new Derpartment("1", "Dept1");
dept1.addEmployee("bill");
dept1.addEmployee("sally");
dept1.describe();
var dept1Copy = { name: "s", describe: dept1.describe };
// dept1Copy.describe();
console.log(dept1);
