class Solution {
    subArraySum(arr, target) {
        let sum = 0;
        let flag = false;
        for(let i=0; i<arr.length-1; i++) {
            sum = arr[i];
            for(let j=i+1; j<arr.length; j++) {
                if(arr.includes(target)){
                    return [arr.indexOf(target)+1, arr.indexOf(target)+1];
                }
                sum += arr[j];
                if(sum === target){
                    flag = true;
                    return [i+1, j+1];
                }
            }
            sum = 0;
        }

        if(!flag){
            return -1;
        }

    }
}

const obj = new Solution();
// console.log(obj.subArraySum([1,2,3,7,5], 12));
// console.log(obj.subArraySum([1,2,3,4,5,6,7,8,9,10], 15));
// console.log(obj.subArraySum([7,2,1], 2));
console.log(obj.subArraySum([5,3,4], 2));
