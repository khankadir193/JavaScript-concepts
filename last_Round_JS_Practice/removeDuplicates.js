function removeDuplicates(arr){

    //first approach
    // const freq = {};
    // const tempArr = [];
    // for(let ele of arr){
    //     freq[ele] = (freq[ele] || 0) + 1;
    // }
    
    // Object.keys(freq).forEach((key)=>{
    //     tempArr.push(Number(key));
    // })
    
    // return tempArr;

    //second most better approach
    const seen = {};
    const seenArr = [];
    for(let element of arr){
        if(!seen[element]){
            seen[element] = true;
            seenArr.push(element);
        }
    }

    return seenArr;
};

const arr = [1, 2, 2, 3, 4, 4, 5];
console.log(removeDuplicates(arr))
