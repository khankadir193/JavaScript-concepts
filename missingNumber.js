class Solution {
    // Function to find the missing number in the array.
    missingNumber(arr) {
        // code here
        arr.sort();
        const arrs = Array.from({length: arr.length+1}, (_, i) => i);
        console.log('arrs.....',arrs);
        for(let i=0;i<arr.length;i++){
            if(arr[i]!==arrs[i]){
                return arrs[i];
            }
        }
    }
}

const missNumber = new Solution();
console.log(missNumber.missingNumber([4, 0, 3, 1])); // Output: 2