const sym = Symbol();
console.log('sym...',sym);

const sym1 = Symbol('kadir khan');
console.log('sym1...',sym1);

// Create a constant
const MY_CONSTANT = Symbol('MY_CONSTANT', { constant: true });

console.log(MY_CONSTANT);