//first question
// Best practice
// ❌ Avoid mutating arrays inside map()
// ✅ Use map() only for transformation

const arr = [1,2,3,4];
const result = arr.map((num)=>{
    arr.push(num * 2);

    return num * 3;
});

console.log(arr.length,result);

//giving the input values...
function Foo() {}
Foo.prototype.value = 1;

const obj1 = new Foo();
const obj2 = new Foo();

obj1.value = 2;
Foo.prototype.value = 3;
delete obj1.value;

console.log(obj1.value, obj2.value);
// What's the output and why?

// third step
Promise.resolve()
  .then(() => {
    console.log(1);
    return Promise.resolve(2);
  })
  .then(res => {
    console.log(res);
    throw new Error('3');
  })
  .catch(err => {
    console.log(err.message);
    return 4;
  })
  .then(res => {
    console.log(res);
    return new Promise(resolve => {
      setTimeout(() => resolve(5), 0);
    });
  })
  .then(res => console.log(res));

setTimeout(() => console.log(6), 0);
console.log(7);

// fourth problem
function createCounter() {
  let count = 0;
  
  return {
    increment: () => ++count,
    get value() { return count; },
    set value(val) { 
      count = val * 2;
    }
  };
}

const counter = createCounter();
counter.increment();
counter.value = 5;
console.log(counter.value, counter.increment());
// What's the output and why?

// third step
async function test(){
    return 10;
};

console.log(test())