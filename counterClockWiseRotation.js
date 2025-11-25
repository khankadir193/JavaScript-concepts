function antClockRotation(arr,d){
    if(arr.length < d){
        let numRotate = d - arr.length;
        // console.log('nu..',numRotate);
        const tArr = arr.slice(numRotate);
        const rArr = arr.slice(0,numRotate);

        tArr.push(...rArr);
        return tArr; 
    };

    const tempArr = arr.slice(d,arr.length);
    const rotateArr = arr.slice(0,d);
    
    // console.log('tempArr...',tempArr);
    // console.log('rotateArr..',rotateArr);

    tempArr.push(...rotateArr);

    return tempArr;
};
// const arr = [1, 2, 3, 4, 5, 6], d = 7;
const arr = [1, 2, 3], d = 1;
console.log('antiClockWiseDirection...',antClockRotation(arr,d));