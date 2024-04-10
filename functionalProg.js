//first class function:-we can call also first class citizen, which means they
// assigned to a variable and passed as argument to other functions.
// returned from a functions..
//this is like higher order function : taking argument as a function and return
// result  of the function.

function applyOperation(operation,x,y){
    return operation(x,y);
};

function add(x,y){
    return x+y;
};

console.log('firstClassFunction...',applyOperation(add,54,14));

//pure function:-pure functions are functions that have no side effects and  always.
// return the same result the from same input.
// Example of a pure function
function add(x, y) {
  return x + y;
}

console.log(add(2, 3)); // Output: 5

//immutability..in functional programming immutable data is preferred means 
// data can not be changed after created.
const arr1 = [1,2,3];
const arr2 = [...arr1,4];

console.log('arr222...',arr2);

//coffee generator
//generator is a function that we can pause and resume the function multiple times.
//when generator function is called is returns generator object.
function* coffeeGenerator(){
    const coffeeTypes = ['latte', 'cappuccino', 'espresso', 'americano'];
    for(let i=0;i<coffeeTypes.length;i++){
        yield coffeeTypes[i];
    }
}

const coffee = coffeeGenerator();
console.log('coffee...?',coffee.next());
console.log('coffee...?',coffee.next());
console.log('coffee...?',coffee.next());
console.log('coffee...?',coffee.next());
console.log('coffee...?',coffee.next());

//javascript hoisting
// javascript hoisting is a unexpected behavior it's moving the top of the scope
// we accessing a variable before declaring it.var is only hoisting.
//only declarations are hoisted.
console.log('x hoisting:--',x);
var x = 110;
console.log('user hoisted',user);
console.log('user hoisted',user);

var user = 'Abdul Kadir Khan';
function myFunction(){
    console.log('Hello..World..!!!!');
}