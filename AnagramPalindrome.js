function PalindromeAnagramStr(str){
    const frequ = {}; 
    for(let i=0;i<str.length;i++){
        frequ[str.charAt(i)] = (frequ[str.charAt(i)] || 0) + 1;
    };

    let counter = 0;
    Object.keys(frequ).forEach((key)=>{
        if(frequ[key] === 1){
            counter++;
        };
    });

    if(counter>1) return false;
    else return true;

    // console.log('frqu...',frequ);
};

// const str = 'geeksogeeks';
const str = 'abc';
// const str = 'geeksforgeeks';

console.log('palindrome number...',PalindromeAnagramStr(str));