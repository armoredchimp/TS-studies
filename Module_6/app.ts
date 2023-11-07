//////// INTERSECTION TYPES
type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

// interface ElevatedEmployee extends Employee, Admin {} /// same thing as the type below

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: 'Max',
  privileges: ['create-server'],
  startDate: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;


function add(a1: string, b1: string)
function add(a1: number, b1: number): number
function add(a1: Combinable, b1: Combinable): Combinable {
  if (typeof a1 === 'string' || typeof b1 === 'string') {
    return a1.toString() + b1.toString();
  }
  return a1 + b1
}

const result = add('Max', 'Schwarz');
result.split(' ')

const fetchedData = {
  id: 'u1',
  name: 'Jeb',
  job: { title: 'CEO', description: 'JebCo' }
}

// console.log(fetchedData.job && fetchedData.job.title) Traditional JS method
console.log(fetchedData?.job?.title) // 'CEO' if fetchedData and job exist

const userInput = null;

const storedData = userInput ?? 'DEFAULT'; //Nullish Coalescing: if null or undefined, use fallback ('DEFAULT') 




type UnknownEmployee = Employee | Admin;

function printEmployeeInfo(emp: UnknownEmployee) {
  console.log('Name' + emp.name);
  if ('privileges' in emp) {
    console.log('Privileges' + emp.privileges);
  }
  if ('startDate' in emp) {
    console.log('Privileges' + emp.startDate);
  }
}

class Car {
  drive() {
    console.log('Driving');
  }
}

class Truck {
  drive() {
    console.log('Driving a truck');
  }
  loadCargo(amount: number) {
    console.log('Loading cargo...' + amount)
  }
}


type Vehicle = Car | Truck;

const v1 = new Car
const v2 = new Truck

function useVehicle(vehicle: Vehicle) {
  vehicle.drive()
  if (vehicle instanceof Truck) {
    vehicle.loadCargo(1000)
  }
}

useVehicle(v1)
useVehicle(v2)


////DISCRIMINATED UNIONS
interface Bird {
  type: 'bird';
  flyingSpeed: number;
}

interface Horse {
  type: 'horse';
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed;
  switch (animal.type) {
    case 'bird':
      speed = animal.flyingSpeed;
      break;
    case 'horse':
      speed = animal.runningSpeed;
  }
  console.log('Moving at speed: ' + speed)
}

moveAnimal({ type: 'bird', flyingSpeed: 10 });


////// TYPE CASTING
// const userInputElement = document.getElementById('user-input')! as HTMLInputElement;
// const userInputElement = <HTMLInputElement>document.getElementById('user-input') same thing as above
const userInputElement = document.getElementById('user-input')


if (userInputElement) {
  (userInputElement as HTMLInputElement).value = 'Hi there!';
}

interface ErrorContainer {
  id: string; // must adhere to the parameters 'string' in this case
  [key: string]: string;
}

const errorBag: ErrorContainer = {
  id: 'Fail',
  email: 'support@email.com'
}