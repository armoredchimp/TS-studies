var a: string = 'hi';

var arr: string[] = []
arr.push('str')
arr.push(5 as any);

console.log(a)

type job = 'Engineer' | 'Garbage Man'

interface Person {
  firstName: string,
  lastName: string,
  job: job
}

function generateEmail(input: Person): string {
  return `${input.firstName}.${input.lastName}`
}

console.log(generateEmail({
  firstName: 'John',
  lastName: 'Doe',
  job: 'Garbage Man'
}))