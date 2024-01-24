var a: string = 'hi';

var arr: string[] = []
arr.push('str')
arr.push(5 as any);

console.log(a)

type job = 'Engineer' | 'Garbage Man'



interface Person {
  firstName: string,
  lastName: string,
  job?: job
  isVisitor?: boolean
}

function generateEmail(input: Person, force?: boolean): string | undefined {
  if (input.isVisitor && !force) {
    return undefined
  } else {
    return `${input.firstName}.${input.lastName}`
  }
}

function isPerson(potentialPerson: any): boolean {
  if ('firstName' in potentialPerson && 'lastName' in potentialPerson) {
    return true
  } else {
    return false
  }
}

function printEmailIfPerson(potentialPerson: any): void {
  if (isPerson(potentialPerson)) {
    console.log(generateEmail(potentialPerson))
  } else {
    console.log('Not a person')
  }
}

printEmailIfPerson({
  firstName: 'John',
  lastName: 'Doe'
})



// console.log(generateEmail({
//   firstName: 'John',
//   lastName: 'Doe',
//   job: 'Garbage Man',
//   isVisitor: true
// }, true))