// https://www.geeksforgeeks.org/dsa/move-zeroes-end-array/
function moveAllZeroEndOfArray(arr){
    const tempArr1 = [];
    const tempArr2 = [];

    for(let i=0;i<arr.length;i++){
        if(arr[i] === 0){
            tempArr1.push(arr[i]);
        }else{
            tempArr2.push(arr[i]);
        }
    }

    tempArr2.push(...tempArr1);
    return tempArr2;
};
// const arr = [1, 2, 0, 4, 3, 0, 5, 0];
// const arr = [10, 20, 30];
const arr = [0, 0,1,3,4,4,54,0,23,0,0];
console.log('moveAllZeroEndOfArray..',moveAllZeroEndOfArray(arr));