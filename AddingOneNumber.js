function addingOneNumber(arr){
    // const totalSum = arr.reduce((curr,acc)=> curr+acc);

    let totalVal = '';
    for(let i=0;i<arr.length;i++){
        totalVal += arr[i];
    }

    console.log('totalVal..',totalVal);

    return Number(totalVal) + 1;
};
const arr = [1,2,4];
// const arr = [9, 9, 9];
console.log('addingSum...',addingOneNumber(arr));