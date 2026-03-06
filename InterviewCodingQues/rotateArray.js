function rotateByArray(arr,k){
    const extArr = arr.slice(0,k);
    arr = arr.slice(k)
    arr.push(...extArr);
    // console.log(extArr);
    console.log(arr)
};
const arr = [1,2,3,4,5], k=1;

rotateByArray(arr,k);


