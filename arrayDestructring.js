const arr = [19,23,54,534,64,34,6,24,56];

const [firstNum,secondNum,thirdNum,...args] = arr;

console.log('firstNum',firstNum);
console.log('secondNum',secondNum);
console.log('thirdNum',thirdNum);
console.log('args...',args);