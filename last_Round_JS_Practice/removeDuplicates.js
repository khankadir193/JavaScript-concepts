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
    // const seen = {};
    // const seenArr = [];
    // for(let element of arr){
    //     if(!seen[element]){
    //         seen[element] = true;
    //         seenArr.push(element);
    //     }
    // }

    // return seenArr;
    
    // third approach for set object.
    const set = new Set(arr); // set is a object which store the collections of elements in unique.
    console.log('set...values',Array.from(set)); // array.from is a static method which is 
    // creates the new shallow copied array instance from an iterable or array like object.
};

const arr = [1, 2, 2, 3, 4, 4, 5];
console.log(removeDuplicates(arr))
