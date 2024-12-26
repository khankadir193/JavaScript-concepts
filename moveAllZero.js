class Solution {
    // Function returns the all zero to end
    pushZerosToEnd(arr) {
        const zeroElement = arr.filter((ele)=> ele === 0);
        const nonZeroElement = arr.filter((ele)=> ele !== 0);

        console.log('zero',zeroElement);
        console.log('nonzero',nonZeroElement);
        const newArr = [...nonZeroElement,...zeroElement];
        console.log('newArr',newArr);
    }
};

const arr = [1, 2, 0, 4, 3, 0, 5, 0]
const classRef = new Solution(arr);
classRef.pushZerosToEnd(arr);