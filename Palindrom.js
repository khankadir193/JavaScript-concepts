function PalindromeAnagramStr(str){ 
    for(let i=0;i<str.length;i++){
        if(str.charAt(i) !== str.charAt(str.length-i-1)){
           return true; 
        };
    };
};

const str = 'geeksogeeks';

console.log('palindrome number...',PalindromeAnagramStr(str));