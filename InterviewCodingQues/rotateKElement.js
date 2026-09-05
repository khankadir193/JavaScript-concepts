function rotateElement(arr,k){
    // this is the inbuilt methods
    // const rotateElement = arr.slice(arr.length - k);
    // const remainingElement = arr.slice(0,arr.length - k);
    // return [...rotateElement,...remainingElement];
    const tempArr = [];
    let n = arr.length;
    k = k%n;

    for(let i=n-k;i<n;i++){
        tempArr.push(arr[i]);
    }
    // console.log(tempArr);

    for(let i=0;i<n-k;i++){
        tempArr.push(arr[i]);
    }

    for(let i=0;i<n;i++){
        arr[i] = tempArr[i];
    }
    
    return arr;
}
const arr = [1, 2, 3, 4, 5];
const k = 2;
console.log(rotateElement(arr,1));