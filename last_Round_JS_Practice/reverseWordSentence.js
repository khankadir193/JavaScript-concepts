function reverseWordSentence(str){
    const splitArr = str.split(' ').reverse().join(' ');
    
    // console.log(splitArr);
    return splitArr;
}
// const str = 'I love React';
const str = 'Hello, Abdul Kadir Khan'
console.log(reverseWordSentence(str));