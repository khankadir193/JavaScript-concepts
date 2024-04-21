//method chaining:- method chaining is a concept that multiple method called 
//same object in single statement.
//this thing is maintaing code more concise and redable rather than need to 
//write variable for each method calling.

//without method chaining.
let text = "Abdul Kadir Khan";
let upperCase = text.toUpperCase();
let concatinate = upperCase.concat(' Abdul Jabir Khan');

console.log('concatination....',concatinate);

//with method chaining.
console.log('---------with method chaining------------');
let statement = "iqra khan";
const res = statement.toUpperCase().concat(' Abdullah Khan');
console.log('result...',res);