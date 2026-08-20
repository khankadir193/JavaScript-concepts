function longestWord(str){
    let tempStr = str.split(' ');
    let size = 0;
    for(let element of tempStr){
        if(size < element.length){
            size = element.length;
        }
        // console.log(element,element.length)
    }
    return size;
}
const str = "I love programming noproblemwithjavascript javascript";
console.log(longestWord(str));