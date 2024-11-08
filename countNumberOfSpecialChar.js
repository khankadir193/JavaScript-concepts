function noOfSpecialChar(str) {
    let count = 0;
    let strArr = str.split('').sort().join('');
    const tempArr = '';
    let tempCount = 0;
    for(let i=0;i<strArr.length;i++){
        if(strArr.charCodeAt(i)>=65 && strArr.charCodeAt(i)<=90){
            tempArr += strArr.charAt(i);
            tempCount++;
        }
    }

    console.log('tempCount...',tempCount);

    for(let i=tempCount;i<strArr.length;i++){
        if(strArr.charAt(i)===tempArr[i-tempCount].toLowerCase()){
            count++;
        }else{
            continue;
        }
    }

    return count;
    // console.log('tempArr....',tempArr);
}

const str = "aaAbcBC";

console.log(noOfSpecialChar(str));