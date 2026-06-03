function findLongestWord (str){
    let splArr = str.split(' ');
    let maxValue = '';
    for(let i=0;i<splArr.length;i++){
        let lengthWord = splArr[i].length;
        // console.log('lengthWOrd..',lengthWord)
        //first approach
        // maxValue = maxValue.length >= lengthWord ? maxValue : splArr[i];

        //second approach
        if(maxValue.length<lengthWord){
            maxValue = splArr[i];
        }
    }
    
    // let lenWords = Math.max(...splArr.length);
    
    return maxValue;
};
let str = "I love javascript programming";
// let str = 'abdul kadir khan rehan';
console.log(findLongestWord(str)); 