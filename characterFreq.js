const charFreq = (str)=>{
    // const strArr = str.split(''); this split is the optional..
    // console.log('strArr....',strArr);

    const freqChar = {};

    for(let char of str){
        freqChar[char] = (freqChar[char] || 0) + 1;
    }
    
    return freqChar;
};

const str = "abdulkadirkhan";
console.log('....charFrequency....',charFreq(str));