// https://www.geeksforgeeks.org/dsa/sort-array-wave-form-2/
function adjacentPairElement(arr) {
    // let tempVal = arr.length % 2 === 0;

    for (let i = 0; i < arr.length - 1; i++) {
        let temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        i++;
    }

    return arr;
};
// const arr = [1, 2, 3, 4, 5];
const arr = [2, 4, 7, 8, 9, 10];
console.log('adjacentElement...??', adjacentPairElement(arr));
// output
// Output: [2, 1, 4, 3, 5]

