//first approach
// var removeElement = function(nums, val) {
//     return nums.filter(item=> item !== val).length;
// };

//second approach
var removeElement = function(nums, val) {
    const k = nums.filter(item=> item !== val);
    return k.sort((a,b)=> a-b);
};
// const nums = [3,2,2,3]; 
// const val = 3;
const nums = [0,1,2,2,3,0,4,2], val = 2;

console.log('removeElement...',removeElement(nums,val));