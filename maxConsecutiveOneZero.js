// https://www.geeksforgeeks.org/dsa/maximum-consecutive-ones-or-zeros-in-a-binary-array/
function maximumConsecutiveOne(arr) {
    let tempOne = 0, tempZero = 0;
    const tempArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0) {
            tempArr.push(tempOne);
            tempOne = 0;
            tempZero++;
        } else if (arr[i] === 1) {
            tempArr.push(tempZero);
            tempZero = 0;
            tempOne++;
        }
    }

    if (tempOne > tempZero) tempArr.push(tempOne);
    else tempArr.push(tempZero);
    return Math.max(...tempArr);
}

const arr = [0, 0, 0, 1, 0, 1, 1, 1];
// const arr = [0, 0, 1, 0, 1, 0];
// const arr = [0, 0, 0, 0];
console.log('maximumConsecutive...?', maximumConsecutiveOne(arr));