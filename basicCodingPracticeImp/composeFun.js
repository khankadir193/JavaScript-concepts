//Takes multiple functions and runs them from right to left, passing the result of one function 
// into the next.
// In mathematics, function composition is traditionally written as f(g(x)). You evaluate x in 
// function g first, and pass the result to function f.

const add = (a) => a + 25;

const subtract = (a) => a - 19;

const multiply = (a) => a * 34;

const devide = (a) => a / 87;

const componse = (...rest) => (initialValue) => rest.reduceRight((acc, cur) => cur(acc), initialValue);

const res = componse(add, subtract, multiply, devide);
console.log('compose function...', res(10));