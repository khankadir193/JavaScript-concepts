const charFreq = (str)=>{
    const strArr = str.split('');
    console.log('strArr....',strArr);

    const freqChar = {};

    for(let char of strArr){
        freqChar[char] = (freqChar[char] || 0) + 1;
    }
    
    return freqChar;
};

const str = "abdulkadirkhan";
console.log('....charFrequency....',charFreq(str));