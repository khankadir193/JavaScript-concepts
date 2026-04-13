var nextGreaterElement = function(nums1, nums2) {
    const tempArr = [];

    //brute force approach is to find the index of element in nums2 and then find the next 
    // greater element for that element in nums2 and push it to tempArr and return tempArr at 
    // the end of the loop.
    
    for(let i=0;i<nums1.length;i++){
      let findEleIndx = nums2.indexOf(nums1[i]);
      // console.log('findEleIndx',findEleIndx);
      for(let j=findEleIndx;j<nums2.length;j++){
        if(nums2[j]>nums1[i]){
          tempArr.push(nums2[j]);
          break;
        }
        // else if(nums2[j] < nums1[i] && nums2.length-1 === j){
        //   tempArr.push(-1);
        // }
        else if((nums2.length-1 === j)){
          tempArr.push(-1);
        }
      }
    }
    
    return tempArr;
};

// const nums1 = [4,1,2], nums2 = [1,3,4,2];
const nums1 = [2,4], nums2 = [1,2,3,4]
console.log(nextGreaterElement(nums1,nums2));