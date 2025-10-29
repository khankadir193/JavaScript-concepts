//ladder element issue is need to fix..
function LadderElement(arr) {
    const tempArr = [];
    let maximumElement = arr[arr.length-2];
    for(let i=arr.length-3;i=>0;i--){
        if(maximumElement < arr[i]){
            maximumElement = arr[i];
            tempArr.push(maximumElement);
        }else{
            tempArr.push(maximumElement);
        }

    };
    tempArr.reverse();
    tempArr.push(arr[arr.length-1]);
    const set = new Set(tempArr);
    console.log('tempArr...',Array.from(set));
};

// const arr = [16, 17, 4, 3, 5, 2];

// const arr = [1, 2, 3, 4, 5, 2];
const arr = [9, 8, 7, 6, 5];

console.log('LadderElement...',LadderElement(arr));

