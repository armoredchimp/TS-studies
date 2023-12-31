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
  return function <T extends { new(...args: any[]): { name: string } }>(originalConstructor: T) {
    return class extends originalConstructor {
      constructor(..._: any) {
        super();
        const hookEl = document.getElementById(hookId);

        if (hookEl) {
          hookEl.innerHTML = template;
          hookEl.querySelector('h1')!.textContent = this.name
        }
      }
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

//Accessor Decorator
function Log2(target: any, name: string, descriptor: PropertyDescriptor) {
  console.log('Accessor Decorator)')
  console.log(target)
  console.log(name)
  console.log(descriptor)

}

//Method Decorator
function Log3(target: any, name: string | symbol, descriptor: PropertyDescriptor) {
  console.log('Method Decorator)')
  console.log(target)
  console.log(name)
  console.log(descriptor)
}

//Parameter Decorator
function Log4(target: any, name: string | symbol, position: number) {
  console.log('Parameter Decorator)')
  console.log(target)
  console.log(name)
  console.log(position)
}

class Product {
  @Log
  title: string;
  private _price: number;

  @Log2
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

  @Log3
  getPriceWithTax(@Log4 tax: number) {
    return this.price * (1 + tax);
  }
}

function autobind(_: any, _2: string, descriptor: PropertyDescriptor) {
  const originalMethod = descriptor.value;
  const adjDescriptor: PropertyDescriptor = {
    configurable: true,
    enumerable: false,
    get() {
      const boundFn = originalMethod.bind(this);
      return boundFn;
    }
  }
  return adjDescriptor;
}

class Printer {
  message = 'This works';

  @autobind //for when the event listener messes with .this and you need to use bind, this accomplishes the same thing but is re-usable
  showMessage() {
    console.log(this.message)
  }
}

const p = new Printer()

const button = document.querySelector('button')
button?.addEventListener('click', p.showMessage)

interface ValidatorConfig {
  [property: string]: {
    [validProp: string]: string[] //['required', 'positive'] etc.
  }
}

const registeredValidators: ValidatorConfig = {};

function Required(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propName]: ['required']
  }
}

function PosNumber(target: any, propName: string) {
  registeredValidators[target.constructor.name] = {
    ...registeredValidators[target.constructor.name],
    [propName]: ['positive']
  }
}

function validate(obj: any) {
  const objValidatorConfig = registeredValidators[obj.constructor.name]
  if (!objValidatorConfig) {
    return true;
  }
  let isValid = true;
  for (const prop in objValidatorConfig) {
    console.log(prop)
    for (const validator of objValidatorConfig[prop]) {
      switch (validator) {
        case 'required':
          isValid = isValid && !!obj[prop]
          break;
        case 'positive':
          isValid = isValid && obj[prop] > 0;
          break;
      }
    }
  }
  return isValid;
}

class Course {
  @Required
  title: string;
  @PosNumber
  price: number;

  constructor(t: string, p: number) {
    this.title = t;
    this.price = p;
  }
}


const cForm = document.querySelector('form'); // doesn't actually exist this is just for reference
cForm?.addEventListener('submit', event => {
  event.preventDefault()
  const titleEl = document.getElementById('title') as HTMLInputElement
  const priceEl = document.getElementById('price') as HTMLInputElement

  const title = titleEl.value;
  const price = +priceEl.value;

  const createdCourse = new Course(title, price)

  if (!validate(createdCourse)) {
    alert('invalid!')
    return
  }
  console.log(createdCourse);
})