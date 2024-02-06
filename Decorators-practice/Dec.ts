const someObj = {
  someProperty: 'value'
}
class Manager {
  // @watchChange
  @linkValue(someObj)
  someProperty: string

}

const manager: Manager = new Manager();

manager.someProperty = '123';
console.log('someObj.someProperty: ' + someObj.someProperty)
manager.someProperty = '456'
console.log('someObj.someProperty: ' + someObj.someProperty)
// watchChange(Manager.prototype, 'someProperty')

function linkValue(otherObject: any) {
  return function (target: any, key: string) {

    let property = target[key];

    const getter = () => {

      return property
    }
    const setter = (newVal: any) => {


      property = newVal;
      otherObject[key] = newVal
    }

    Object.defineProperty(target, key, {
      get: getter,
      set: setter,
      configurable: true,
      enumerable: true
    })
  }
}


function watchChange(target: any, key: string) {



  let property = target[key];

  const getter = () => {
    console.log(`${key as string} returned as ${property}`)
    return property
  }
  const setter = (newVal: any) => {

    console.log(`${key as string} changed from ${property} to ${newVal}`)
    property = newVal;
  }

  Object.defineProperty(target, key, {
    get: getter,
    set: setter,
    configurable: true,
    enumerable: true
  })

}
