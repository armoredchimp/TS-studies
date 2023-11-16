function Logger(logString: string) {
  return function (constructor: Function) {
    console.log(logString)
    console.log(constructor)
  }

}

// function WithTemplate(template: string, hookId: string) {
//   return function (_: Function) {
//     const hookEl = document.getElementById(hookId);
//     if (hookEl) {
//       hookEl.innerHTML = template
//     }
//   }
// }
function WithTemplate(template: string, hookId: string) {
  return function (constructor: any) {
    const hookEl = document.getElementById(hookId);
    const p = new constructor();
    if (hookEl) {
      hookEl.innerHTML = template;
      hookEl.querySelector('h1')!.textContent = p.name
    }
  }
}

@Logger('LOGGING - PERSON')
@WithTemplate('<h1>HTML Thing Here</h1>', 'app') //bottom decorator executes first, but creation of decorators happen in top to bottom order (WTF?)
class Person {
  name = 'Max';

  constructor() {
    console.log('Creating')
  }
}

const pers = new Person()

console.log(pers)

//Property Decorator
function Log(target: any, propertyName: string | symbol) {
  console.log('Property decorator')
  console.log(target, propertyName)
}
class Product {
  @Log
  title: string;
  private _price: number;

  set price(val: number) {
    if (val > 0) {
      this._price = val;
    } else {
      throw new Error('Invalid!')
    }
  }

  constructor(t: string, p: number) {
    this.title = t;
    this._price = p;
  }
  getPriceWithTax(tax: number) {
    return this.price * (1 + tax);
  }
}