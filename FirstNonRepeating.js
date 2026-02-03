// https://www.geeksforgeeks.org/dsa/given-a-string-find-its-first-non-repeating-character/

function firstNonRepeatingChar(str){
    const frequency = {};
    for(const ele of str){
        frequency[ele] = (frequency[ele] || 0) + 1;
    };

    for(let [key,value] of Object.entries(frequency)){
        if(value === 1){
            return key;
        }
    }

    return '$';
};
const str = 'geeksforgeeks';
// const str = 'racecar';
// const str = 'aabbccc';
console.log('first non repeating char',firstNonRepeatingChar(str));