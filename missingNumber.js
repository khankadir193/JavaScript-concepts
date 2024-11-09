class Solution {
    // Function to find the missing number in the array.
    missingNumber(arr) {
        // code here
        if(arr.length === 1){
            return arr[0]+1;
        }
        arr.sort();
        const arrs = fillArray(arr[0], arr.length);
        console.log('arrs.....',arrs);
        for(let i=0;i<arr.length;i++){
            if(arr[i]!==arrs[i]){
                return arrs[i];
            }
        }
    }
}


function fillArray(start, end) {
    return [...Array(end - start + 1).keys()].map(i => i + start);
}


const missNumber = new Solution();
// console.log(missNumber.missingNumber([4, 0, 3, 1])); // Output: 2
// console.log(missNumber.missingNumber([8, 2, 4, 5, 3, 7, 1]));
console.log(missNumber.missingNumber([1])); // Output: 2
