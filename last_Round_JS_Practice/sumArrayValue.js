// i need to practice more
function sumArray(arr) {
    
    if (arr.length === 0) {
        return 0;
    }
    let firstNumber = arr[0];

    const restOfArray = arr.slice(1);
    return firstNumber + sumArray(restOfArray);
}

console.log(sumArray([5, 2, 4]));
// console.log(sumArray([10,90,80,30,40]));