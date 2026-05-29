// reduce is the method which calculate the array of elements into single value.
//basically we can use for sum,multiply,max value etc.
const arr = [10,20,30,40,50];
const reduceResult = arr.reduce((accumulator,currentValue)=>{
    console.log('accu',accumulator);
    return accumulator+currentValue;
},0);

console.log('result',reduceResult);

