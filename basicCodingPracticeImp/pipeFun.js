// Takes multiple functions and runs them from left to right, passing the result of one function 
// into the next.

const add = (a) => a + 25;

const subtract = (a) => a - 19;

const multiply = (a) => a * 34;

const devide = (a) => a / 87;

const pipe = (...rest) => (initialValue) => rest.reduce((acc, cur) => cur(acc), initialValue);

const res = pipe(add, subtract, multiply, devide);
console.log('pipe function...', res(20));