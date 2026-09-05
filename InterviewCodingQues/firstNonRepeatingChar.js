//this is the best approach
function firstNonRepeatingChar(str){
    const map = {};
    for(const char of str){
        map[char] = (map[char] || 0) + 1;
    }

    console.log(map);
    
    for(let char of str){
        if(map[char] === 1){
            return char;
        }
    }

    return null;
}
// const str = "ababa"
const str = "a2b"
console.log(firstNonRepeatingChar(str));