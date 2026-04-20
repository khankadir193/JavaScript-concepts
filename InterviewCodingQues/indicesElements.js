const indicesElement = (nums,target)=>{

    //brute force approach is to have two loops and check if the sum of two elements is equal to target and return the indices of those two elements. 
    // we can also use hash map to store the elements and their indices and then check if the complement of the current element is present in the hash map or not. If it is present then we can return the indices of the current element and the complement element.
    let temp = 0;
    for(let i=temp+1;i<nums.length;i++){
        if(nums[i] + nums[temp] === target && i !== temp){
            return [temp,i];
        }
        
        if(nums.length-1 === i){
            console.log('-----');
             i = temp;
             temp = i + 1;
        }
    }
    
    return -1;
};
const nums = [11, 15, 7, 2];
let target = 9;
console.log(indicesElement(nums,target));