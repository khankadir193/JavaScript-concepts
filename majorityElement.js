function MajorityElement(arr){
    const n = arr.length;
    const filterElement = arr.filter((item)=> item > arr);
    const freqElement = {};

    for(let i=0;i<arr.length;i++){
        freqElement[arr[i]] = (freqElement[arr[i]] || 0) + 1;
    };
    
    const tempArr = [];
    for(let [key,value] of Object.entries(freqElement)){
        if(value>n/3){
            tempArr.push(key);
        }
    };

    return Number(tempArr.join(''));
};
const arr = [2, 2, 3, 1, 3, 2, 1, 1]
console.log(MajorityElement(arr));