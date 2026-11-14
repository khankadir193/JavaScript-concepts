function findSecondLargest(arr){
    let largetst = -Infinity;
    let secondLargest = -Infinity;

    for(let i=0;i<arr.length;i++){
        if(arr[i] > largetst){
            secondLargest = largetst;
            largetst = arr[i];
        }else if(arr[i] < largetst && arr[i] > secondLargest){
            secondLargest = arr[i];
        }
    }

    return secondLargest === -Infinity ? -1 : secondLargest;
}

const arr = [10, 5, 20, 8, 20, 15];
console.log(findSecondLargest(arr));
// console.log(findSecondLargest([5, 5, 4, 3]));
// console.log(findSecondLargest([1, 2]));
// console.log(findSecondLargest([10, 20, 20, 15]));
// console.log(findSecondLargest([10, 10, 10]));

//i will do the later
//Question: Find the third-largest distinct number in an array without using sort().


