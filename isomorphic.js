// https://leetcode.com/problems/isomorphic-strings/description/

function Isomorphic(s, t) {
    if (s.length !== t.length) return 'NO';

    const frequency = {};
    const freq = {};
    // for(let i=0;i<s.length;i++){
    //     frequency[i] = (frequency[s[i]] || 0);
    // };

    for (let char of s) {
        frequency[char] = (frequency[char] || 0) + 1;
    }

    for (let char of t) {
        freq[char] = (freq[char] || 0) + 1;
    }


    const v1 = Object.values(frequency);
    const v2 = Object.values(freq);

    // if(keys1.length !== keys2.length){
    //     return false;
    // };

    const isSame = v1.length === v2.length && v1.every((val, i) => val === v2[i]);
    // console.log('isSame...',isSame);

    // console.log('freq...', freq);
    // console.log('frequency...', frequency);


    return isSame;

};

// const s = "egg", t = "add";
const s = "fookk", t = "bkkaa"
console.log('twoANagramString..', Isomorphic(s, t));