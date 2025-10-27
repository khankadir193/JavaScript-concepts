// https://www.geeksforgeeks.org/dsa/pangram-checking/

function Pangram(str){
    let smallLetter = str.toLowerCase();
    let strArr = smallLetter.split('');
    strArr.sort();
    let strSort = strArr.join('').trim();

    const set = new Set(strSort);
    const unDuplicateArr = Array.from(set);

    console.log('set.....',unDuplicateArr);

    if(unDuplicateArr.length < 26) return false;

    let counter = 97;
    let flag = true;
    unDuplicateArr.forEach((char)=>{
        if(char.charCodeAt(0) !== counter){
            flag = false;
            return false;
        };
        counter++;
    });

    return flag;
};

// let str = 'The quick brown fox jumps over the lazy dog';
let str = 'The quick brown fox jumps over the dog';

console.log('Pangram is',Pangram(str));