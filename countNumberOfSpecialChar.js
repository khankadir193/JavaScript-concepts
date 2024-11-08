function noOfSpecialChar(str) {
    let count = 0;
    let strArr = str.split('').sort().join('');
    let tempArr = '';
    let tempCount = 0;
    for(let i=0;i<strArr.length;i++){
        if(strArr.charCodeAt(i)>=65 && strArr.charCodeAt(i)<=90){
            tempArr += strArr.charAt(i);
            tempCount++;
        }
    }

    let set = new Set(strArr);
    strArr = Array.from(set).join('');

    for(let i=tempCount;i<strArr.length;i++){
        if(strArr.charAt(i)===tempArr.charAt(i-tempCount).toLowerCase()){
            count++;
        }else{
            continue;
        }
    }

    return count;
}

const str = "aaAbcBC";

console.log(noOfSpecialChar(str));