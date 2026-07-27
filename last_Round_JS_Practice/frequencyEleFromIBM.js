function freqElement(arr){
    const newMap = new Map();
    
    for(const ele of arr){
        if(newMap.has(ele)){
            const val = newMap.get(ele);
            // console.log('value...',val)
            newMap.set(ele,val + 1);
        }else{
            newMap.set(ele,1);
        }
    }
    
    // console.log(newMap)
    return newMap;
};

const arr = [1,2,3,2,2,1,4]

console.log(freqElement(arr));