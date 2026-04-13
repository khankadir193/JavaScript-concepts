var findMaxConsecutiveOnes = function(nums) {
    console.log('nums...',nums);
    
    let tempCountOne = [];
    
    let countOne = 0;
    
    for(let i=0;i<nums.length;i++){
      // console.log('ele',ele);
      if(nums[i] === 1){
        countOne++;
      }else{
        tempCountOne.push(countOne);
        countOne = 0;
      }
      
      if(nums[i] === 1 && nums.length-1 === i){
        tempCountOne.push(countOne);
      }
    };
    
    return Math.max(...tempCountOne);
};
const nums = [1,1,10,1,1,1,1,1];
// const nums = [1,0,1,1,0,1]
console.log(findMaxConsecutiveOnes(nums))