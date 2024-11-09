class Solution {
    // Function to find the missing number in the array.
    missingNumber(arr) {
        // code here
        if(arr.length === 1){
            return arr[0] !== 1 ? 1 : arr[0]+1;
        }
        arr.sort((a,b)=>a-b);
        // console.log('After sorting arr.....',arr)
        // const arrs = fillArray(arr[0], arr.length);
        const arrs = [];
        for(let i = arr[0] !== 0 ? 1 : 0;i<=arr.length+1;i++){
            arrs.push(i);
        }

        console.log('arrs.....',arrs);
        for(let i=0;i<arr.length;i++){
            if(arr[i]!==arrs[i]){
                return arrs[i];
            }
        }

        return arrs[arr.length];
    }
}


function fillArray(start, end) {
    return [...Array(end - start + 1).keys()].map(i => i + start);
}


const missNumber = new Solution();
// console.log(missNumber.missingNumber([4, 0, 3, 1])); // Output: 2
// console.log(missNumber.missingNumber([8, 2, 4, 5, 3, 7, 1]));
// console.log(missNumber.missingNumber([1])); // Output: 2
// console.log(missNumber.missingNumber([2,1])); // Output: 2
// console.log(missNumber.missingNumber([13 ,5 ,4 ,10, 7 ,11, 1 ,9 ,12 ,8 ,2 ,6])); // Output: 10
console.log(missNumber.missingNumber([3]));