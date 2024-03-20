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