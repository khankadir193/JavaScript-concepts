// https://www.geeksforgeeks.org/dsa/fizz-buzz-implementation/
function fizzBuzz(n) {
    let tempArr = [];

    for (let i = 1; i <= n; i++) {
        if(i%3 === 0 && i%5===0){
            tempArr.push("FizzBuzz");
        }else if (i % 3 === 0) {
            tempArr.push("Fizz");
        } else if (i % 5 === 0) {
            tempArr.push("Buzz");
        } else {
            let tempElement = String(i);
            tempArr.push(tempElement);
        }
    }

    return tempArr;
};

let n = 20;

console.log('fizzbuzz result..??', fizzBuzz(n));