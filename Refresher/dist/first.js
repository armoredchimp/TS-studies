var a = 'hi';
var arr = [];
arr.push('str');
arr.push(5);
console.log(a);
function generateEmail(input, force) {
    if (input.isVisitor && !force) {
        return undefined;
    }
    else {
        return "".concat(input.firstName, ".").concat(input.lastName);
    }
}
function isPerson(potentialPerson) {
    if ('firstName' in potentialPerson && 'lastName' in potentialPerson) {
        return true;
    }
    else {
        return false;
    }
}
function printEmailIfPerson(potentialPerson) {
    if (isPerson(potentialPerson)) {
        console.log(generateEmail(potentialPerson));
    }
    else {
        console.log('Not a person');
    }
}
printEmailIfPerson({
    firstName: 'John',
    lastName: 'Doe'
});
// console.log(generateEmail({
//   firstName: 'John',
//   lastName: 'Doe',
//   job: 'Garbage Man',
//   isVisitor: true
// }, true))
