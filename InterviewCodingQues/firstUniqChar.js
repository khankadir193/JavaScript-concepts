var firstUniqChar = function(s) {
    const freq = {};
    for(let ele of s){
        freq[ele] = (freq[ele] || 0) + 1
    }
    
    console.log('freq...',freq)
    
    let char = '';
    for(const [key,value] of Object.entries(freq)){
        if(value === 1){
            char = key;
            break;
        }
    }
    // console.log('--',char)
    return char ? s.indexOf(char) : -1;
};

const s = "leetcode";
// const s = "loveleetcode";
// const s = 'aabb';
console.log(firstUniqChar(s));