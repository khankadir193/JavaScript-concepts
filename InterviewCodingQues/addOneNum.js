var plusOne = function(digits) {
    
    //this is the first approach but it will not work for large numbers as it will exceed the limit of number in js
    
    let bigNum = BigInt(digits.join(''));
    // console.log('first-approach',String(strNum+1).split('').map(Number));
    
    let addBigNum = bigNum + 1n;
    
    
    const n = Array.from(String(addBigNum),(char)=> Number(char));
    
    // console.log('n...',n)
    return n;
};



// const digits = [1,2,3];
// const digits = [1,9,9];
const digits = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3];

console.log(plusOne(digits));