const charFreq = (str)=>{
    const strArr = str.split('');
    console.log('strArr....',strArr);

    const freqChar = {};

    for(let i=0;i<strArr.length;i++){
        freqChar[strArr[i]] = (freqChar[strArr[i]] || 0) + 1;
    }
    
    console.log('freqChar....??',freqChar);
    // for(let i=0;i<arr.length;i++){
    //     for(let j=i+1;j<arr.length-1;j++){
    //         console.log('j....',j);
    //     };
    // };
};

const str = "abdulkadirkhan";
console.log('....charFrequency....',charFreq(str));