
// const add = (a) => {
//     return (b) => {
//         return (c) => {
//             return a + b + c;
//         }
//     }
// };

// simple concise short way:-

// const add = (a) => (b) => (c) => a + b + c;
// console.log(add(10)(20)(30));

// currying vs normal function

//normal function
// function multiply(a,b){
//     return a * b;
// }

// console.log(multiply(10,20));
// console.log(multiply(20,30));
// console.log(multiply(30,40));

// curryed

// const multiply = (a) => (b) => a * b;
// const double = multiply(10);
// console.log(double(5));
// console.log(double(6));
// console.log(double(7));


const calculatePrice = discount => tax => price =>
  price - price * discount + price * tax;

const with10PercentDiscount = calculatePrice(0.10);

console.log(with10PercentDiscount(0.18)(100));
console.log(with10PercentDiscount(0.18)(500));
