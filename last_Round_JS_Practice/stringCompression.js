const stringCompression = (str)=>{
    let count = 1;
    let tempStr = '';
    for(let i=0;i<str.length;i++){
        if(str[i] === str[i+1]){
            count++;
        }else{
            tempStr += str[i];
            console.log('---',count);

            if(count>1){
                tempStr += count;
            }
            count = 1;
        }
    }

    return tempStr;
}
// let str = "aaabbcccc";
let str = 'abbcccddd';
// let str = "ababab";
console.log(stringCompression(str));