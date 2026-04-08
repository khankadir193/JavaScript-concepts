var searchInsert = function(nums, target) {
    let ind = 0;
    
    for(let i=0;i<nums.length;i++){
        if(nums[i]>target){
            ind = i;
            break;
        }else if(nums[i] === target){
            ind = i;
            break;
        }else if(i===nums.length-1){
            ind = nums.length;
        }
    }
    
    return ind;
};

// const nums = [1,3,5,6], target = 5;
const nums = [1,3,5,6], target = 2;
// const nums = [1,3,5,6], target = 7
console.log(searchInsert(nums,target))
