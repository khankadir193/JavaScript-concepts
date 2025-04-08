//currying:-currying is technique to convert a function with multiple arguments 
// into sequence of functions with single argument.

// const curryAdd = (a)=>{
//     return function(b){
//         return function(c){
//             return a+b+c;
//         };
//     };
// };


const curryAdd = (a) => (b) => (c) => a + b + c;

console.log(curryAdd(10)(2)(3)); // Output: 6