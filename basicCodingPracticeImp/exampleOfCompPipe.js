// This works, but with many functions, nested calls become difficult to read.
// That's where Pipe and Compose help!
const add = (num) => num + 5;
const subtraction = (num) => num - 3;
const multiply = (num) => num * 2;


const result = subtraction(multiply(add(10)));
console.log('----result.', result);

/*
Question:- what is Pipe in javascript.
Ans:- Pipe means executing function LEFT to RIGHT.

Question:- what is Compose in javascript.
Ans:- Compose means executing function RIGHT to LEFT.

*/

const Pipe = (...functions) => {
    return (value) => {
        return functions.reduce((result, fun) => fun(result), value);
    }
};

const calculate = Pipe(add, multiply, subtraction);
console.log('calculate the Pipe Function :-', calculate(10));


const compose = (...functions)=>{
    return (value) => {
        return functions.reduceRight((result,fun) => fun(result),value);
    }
};

const composeCalculate = compose(add,multiply,subtraction);
console.log('compose calucate...',composeCalculate(10));



