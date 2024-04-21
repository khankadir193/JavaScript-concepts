//method chaining:- method chaining is a concept that multiple method called 
//same object in single statement.
//this thing is maintaing code more concise and redable rather than need to 
//write variable for each method calling.

//without method chaining.
let text = "Abdul Kadir Khan";
let upperCase = text.toUpperCase();
let concatinate = upperCase.concat(' Abdul Jabir Khan');

console.log('concatination....', concatinate);

//with method chaining.
console.log('---------with method chaining------------');
let statement = "iqra khan";
const res = statement.toUpperCase().concat(' Abdullah Khan');
console.log('result...', res);


//loop chaining method..
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

const flatMatrix = matrix.flat();
// console.log('flatMatrix',flatMatrix);

const newArr = flatMatrix.filter(item => item>4);

console.log('newArr...', newArr);
