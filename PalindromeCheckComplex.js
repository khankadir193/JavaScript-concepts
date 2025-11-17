// https://www.geeksforgeeks.org/dsa/sentence-palindrome-palindrome-removing-spaces-dots-etc/

function PalindromeCheck(s){

    let removeSymbol = s.replace(/[^a-zA-Z0-9]/g,'').toLowerCase();

    console.log('removeSymbol',removeSymbol);

    // let newString = s.replaceAll(" ","");


    for(let i=0;i<removeSymbol.length;i++){
        if(removeSymbol.charAt(i) !== removeSymbol.charAt(removeSymbol.length-i-1)){
            return false;
        }
    }

    console.log('str...',removeSymbol);
    return true;
};
// let s = "Too hot to hoot.";
// let s = "Abc 012..##  10cbA";
let s = "ABC $. def01ASDF..";
console.log('palindromeCheck...',PalindromeCheck(s));