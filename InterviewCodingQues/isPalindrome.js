function isPalindrome(str){
    const removeSpace = str.split('').filter((ele)=> ele.trim()).join('');
    const isPalind = removeSpace === removeSpace.split('').reverse().join('');

    console.log('removeSpace...',removeSpace);

    //second approach..
    // for(let i=0;i<removeSpace.length;i++){
    //     if(removeSpace.charAt(i) !== removeSpace.charAt(removeSpace.length-1-i)){
    //         return false;
    //     }
    // }

    // return true;
    return isPalind;
};
// const str = 'madam';
const str = 'nurses run';
console.log('....isPalindrome..',isPalindrome(str));