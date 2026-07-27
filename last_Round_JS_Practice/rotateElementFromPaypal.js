//without using the inbuilt methods like push,pop,shift,unshift
function rotateArray(arr){
    let lastElement = arr[arr.length - 1];
    let temp = 0;
    for(let i=0;i<arr.length;i++){
            temp = lastElement;
            lastElement = arr[i];
            arr[i] = temp
    }
    return arr;
};
// const arr = [10,20,30,40,50];
const arr = [1,2,3,4,5]
console.log(rotateArray(arr))