// Generic Types
// const names: Array<string | number> = [];

// const promise: Promise<string> = new Promise((res, rej) => {
//   setTimeout(() => {
//     res('Done!')
//   }, 2000);
// });


function merge<T extends object, U extends object>(objA: T, objB: U) {
  return Object.assign({}, objA, objB)
}

const mergedObj = merge({ name: 'Max' }, { age: 30 });
console.log(mergedObj.age) //valid due to generic

interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descText = 'No value received';
  if (element.length === 1) {
    descText = 'Got 1 element';
  }
  else if (element.length > 1) {
    descText = 'Got ' + element.length + ' elements.';
  }
  return [element, descText]
}

console.log(countAndDescribe('Hello!')) // works because str has a length property


function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
  return 'Value: ' + obj[key]
}

extractAndConvert({ name: 'Jim' }, 'name');

class DataStorage<T extends string | number | boolean> { //primitive types only to avoid having to do the object nonsense below
  private data: T[] = [];

  addItem(item: T) {
    this.data.push(item)
  }
  removeItem(item: T) {
    if (this.data.indexOf(item) === -1) {
      return;
    }
    this.data.splice(this.data.indexOf(item), 1);
  }
  getItems() {
    return [...this.data]
  }
}

const textStorage = new DataStorage<string>();
textStorage.addItem('str')
textStorage.addItem('str2')
console.log(textStorage.getItems());

const numberStorage = new DataStorage<number>();
numberStorage.addItem(24)

// const objectStorage = new DataStorage<object>();
// const maxStorage = { name: 'Max' }
// objectStorage.addItem(maxStorage)
// objectStorage.addItem({ name: 'Phil' });
// objectStorage.removeItem(maxStorage)
// console.log(objectStorage.getItems()) // the object being removed must be declared and referenced first like this, because otherwise objects as reference types would just remove the last object regardless of the data being passed in

