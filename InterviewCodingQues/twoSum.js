const twoSum = (arr,target)=>{
    //first approach using brute force.
    // for(let i=0;i<arr.length-1;i++){
    //     for(let j=i+1;j<arr.length;j++){
    //         // console.log(arr[i],arr[j])
    //         if(arr[i] + arr[j] === target) return [i,j];
    //     }   
    // }
    // return [];

    const map = new Map();

    for(let i=0;i<arr.length;i++){
        let complement = target - arr[i];

        if(map.has(complement)){
            return [map.get(sum),i];
        }
        
        map.set(arr[i],i);
    }

    return [];

}
const arr = [2, 7, 11, 15];
const target = 20;
// const arr = [3, 2, 4];
// const target = 8;
console.log(twoSum(arr,target));