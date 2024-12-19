var removeDuplicates = function(nums) {
    const set = new Set(nums);
    const newArr = Array.from(set);
    console.log('newArr....',newArr);
};
// let arr = [0,0,1,1,1,2,2,3,3,4];
let arr = [1,1,2];

removeDuplicates(arr);