class Solution {
    // Function returns the second largest element
    getSecondLargest(arr) {
        // Code Here
        arr.sort((a,b)=>b-a);
        const set = new Set(arr);
        arr = Array.from(set);

        if(arr.length === 1) return -1;
        
        return arr[1];
    }
}


const classRef = new Solution();
// const arr = [12, 35, 1, 10, 34, 1];
// const arr = [10, 5, 10];
const arr = [10, 10, 10];
console.log(classRef.getSecondLargest(arr));

