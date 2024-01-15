var a = 'hi';
var arr = [];
arr.push('str');
arr.push(5);
console.log(a);
function generateEmail(input) {
    return "".concat(input.firstName, ".").concat(input.lastName);
}
console.log(generateEmail({
    firstName: 'John',
    lastName: 'Doe'
}));
