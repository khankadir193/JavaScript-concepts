// https://www.geeksforgeeks.org/batch/gfg-160-problems/track/searching-bonus-problems/problem/implement-lower-bound

class Solution {
    lowerBound(arr, target) {
        // your code here
        const eleArr = arr.filter((item)=>{
            if(item>=target){
                return item;
            }
        });

        const mathArr = Math.min(...eleArr);
        console.log('findIndex...',arr.indexOf(mathArr))
    }
};

const solution = new Solution();
// const arr = [2, 3, 7, 10, 11, 11, 25], target = 9;
const arr = [2, 3, 7, 10, 11, 11, 25], target = 11;

solution.lowerBound(arr,target);