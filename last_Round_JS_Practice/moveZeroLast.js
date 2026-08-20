function moveZeroIntoLast(arr){

    //first approach with new array...
    // const tempArr = [];
    // for(let i=0;i<arr.length;i++){
    //     if(arr[i] !== 0){
    //         tempArr.push(arr[i]);
    //     }
    // }

    // const remainingLength = arr.length - tempArr.length;
    // // tempArr.splice(tempArr.length,0,...new Array(remainingLength).fill(0));
    // tempArr.push(...new Array(remainingLength).fill(0));
    // console.log(tempArr);

    //second approach with only single orighinal array.
    let index = 0;
    for(let i=0;i<arr.length;i++){
        if(arr[i] !== 0){
            arr[index] = arr[i]
            index++;
        }
    }

    for(let i=index;i<arr.length;i++){
        arr[i] = 0;
    }

    console.log('array of elements...',arr);
};

// const arr = [0,1,0,3,12];
const arr = [4,2,0,5,8,0,2,3,4,0,3,2,1,9,0,12,34,56];
moveZeroIntoLast(arr);