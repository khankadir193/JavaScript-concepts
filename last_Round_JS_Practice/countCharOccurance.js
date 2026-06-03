function charOccurance(str){
    str = str.toLowerCase();
    const freq = {};

    for(let ele of str){
        if(ele !== ' ')
        freq[ele] = (freq[ele] || 0) + 1;
        // console.log('ele..',ele);
    }

    return freq;

};
const str = 'hello';
console.log(charOccurance(str))