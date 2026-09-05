function findMissingNumber(arr) {
    let count = arr[0];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === count) {
            count++;
        } else {
            return count;
        }
    }

    return count;
}

console.log(findMissingNumber([20, 21, 23, 24, 25])); // 22
console.log(findMissingNumber([20, 21, 22, 23, 24])); // 25