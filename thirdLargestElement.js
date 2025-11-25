function thirdLargestElement(arr){
    arr.sort((a,b)=> a-b);

    console.log('thidLargestElement...?',arr);

    return arr[arr.length-3];
};
const arr = [1, 14, 2, 16, 10, 20];
console.log(thirdLargestElement(arr));