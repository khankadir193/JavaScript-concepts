function capitalizeLetter(str){
    let splitArr = str.split(' ').filter((item)=> item);
    let tempStr = '';
    for(let element of splitArr){
        tempStr += element.slice(0,1).toUpperCase() + element.slice(1) + ' ';
    }
    // console.log('tempStr...',tempStr);
    return tempStr.trim();
};

const str = 'hello world what are you   doing i';
console.log('capitalize Word..',capitalizeLetter(str));