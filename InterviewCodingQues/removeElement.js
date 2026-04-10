var removeElement = function(nums, val) {
    // console.log('nums...',nums);
    let left = 0;
    
    for(let i=0;i<nums.length;i++){
        if(nums[i] !== val){
            nums[left] = nums[i];
            left++;
        }
    };
    console.log(nums)
    return left;
};
const nums = [3,2,2,3], val = 3;
// const nums = [0,1,2,2,3,0,4,2], val = 2
console.log(removeElement(nums,val))