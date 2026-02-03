const findMaxDifference = (arr)=>{
    let maxValue = arr[0];
    let minValue = arr[0];
    for(let i=0;i<arr.length;i++){
        //first approach
        // if(maxValue < arr[i]){
        //     maxValue = arr[i];
        // };

        // if(minValue > arr[i]){
        //     minValue = arr[i];
        // };

        //second approach
        maxValue = Math.max(maxValue,arr[i]);
        minValue = Math.min(minValue,arr[i]);
    };



    // using spread operator
    // maxValue = Math.max(...arr);
    // minValue = Math.min(...arr);

    return maxValue - minValue;
};
// const arr = [2, 3, 10, 6, 4, 8, 1];
const arr = [5, 1, 9, 3, 7, 8, 2, 4];

console.log('Maximum Difference...',findMaxDifference(arr));