class Solution {

    findMaximum(arr) {
        // your code here
        // for(const ele of arr){

        //     console.log('element...',ele);
        // }
        return Math.max(...arr);
        // console.log('arr...',arr);
    }
}


const solution = new Solution();
// const arr = [1, 2, 4, 5, 7, 8, 3];
const arr = [120, 100, 80, 20, 0]
console.log(solution.findMaximum(arr));