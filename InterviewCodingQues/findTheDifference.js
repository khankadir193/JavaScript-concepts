var findTheDifference = function(s, t) {
    let sumOfS = 0;
    let sumOfT = 0;
    for(let char of s){
        sumOfS += char.charCodeAt(0);
    }
    
    for(let char of t){
        sumOfT += char.charCodeAt(0);
    }
    
    return String.fromCharCode(sumOfT - sumOfS);
};
let s = "abcd", t = "abcde";
console.log(findTheDifference(s,t));