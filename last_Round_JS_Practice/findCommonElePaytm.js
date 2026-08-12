//without any built in methods.
function findCommonElement(arr1,arr2){
    const tempArr = [];

    //this is first approach brute force approach.
    // for(let i=0;i<arr1.length;i++){
    //     for(let j=0;j<arr2.length;j++){
    //      if(arr1[i] === arr2[j]){
    //          tempArr.push(arr1[i]);
    //          break;
    //      }
    //     }
    // }

    // return tempArr;


    //this is the second approach but not fully correct.
    // let j = 0;
    // for(let i=0;i<arr1.length;i++){
    //     if(arr1[i] === arr2[j] && j !== arr2.length){
    //         tempArr.push(arr1[i]);
    //         j++;
    //         i = -1;
    //     }else if(i === arr1.length - 1 && j < arr2.length){
    //         i = -1;
    //         j++
    //     }else if(j === arr2.length){
    //         break;
    //     }
    // }

    //second approach two pointer method...but it only works when array is sorted.
    // let i = 0;
    // let j = 0;
    // const result = [];

    // while (i < arr1.length && j < arr2.length) {
    //     if (arr1[i] === arr2[j]) {
    //         result.push(arr1[i]);
    //         i++;
    //         j++;
    //     } else if (arr1[i] < arr2[j]) {
    //         i++;
    //     } else {
    //         j++;
    //     }
    // }

    // return result;


    //this is the third approach using hashtable.best approach

    const map = {};
    const result = [];

    for (let i = 0; i < arr1.length; i++) {
        map[arr1[i]] = true;
    }

    for (let j = 0; j < arr2.length; j++) {
        if (map[arr2[j]]) {
            result.push(arr2[j]);
            map[arr2[j]] = false; // avoid duplicates
        }
    }

    return result;

};

const arr1 = [1,2,3,4,5];
// const arr2 = [3,7,2,5,3,9];
const arr2 = [3,7,2,5,3,8,10,11,12,4];
console.log(findCommonElement(arr1,arr2))