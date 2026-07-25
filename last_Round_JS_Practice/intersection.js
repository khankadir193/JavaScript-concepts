function intersection(arr1, arr2) {

    //first approach

    // const nums1 = [...new Set(arr1)];
    // const nums2 = [...new Set(arr2)];
    // // console.log(nums1, nums2)

    // const tempArr = [];
    // for (const element of nums1) {
    //     if (nums2.includes(element)) {
    //         tempArr.push(element);
    //     }
    // }
    // return tempArr;

    //second approach
    const set1 = new Set(arr1);
    const result = new Set();

    for(const ele of nums2){
        if(set1.has(ele)){
            result.add(ele);
        }
    }

    return [...result];
};

const nums1 = [4, 9, 5];
const nums2 = [9, 4, 9, 8, 4];
// const nums1 = [1, 2, 2, 1];
// const nums2 = [2, 2];

console.log(intersection(nums1, nums2));
