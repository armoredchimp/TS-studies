function returnKeys<T extends Object>(arg: T) {
  console.log(Object.keys(arg))
  return arg
}

const afad = returnKeys({
  abc: 'def'
})

interface Persona<T> {
  name: string,
  age: number,
  special: T
}

const Yonathan: Persona<string> = {
  special: 'Elite Operative',
  name: 'Yonathan',
  age: 44
}

class Observable<T extends Persona<string>>{
  subscribe(arg: T) {
    console.log(`Subscribed to ${arg.name}`)
  }
}

new Observable<typeof Yonathan>().subscribe(Yonathan)