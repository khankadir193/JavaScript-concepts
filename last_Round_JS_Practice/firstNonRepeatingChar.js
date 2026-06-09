function firstNonRepeatingChar (str){
    const myMap = new Map();

    for(let char of str){
        let key = char = char;
        let value = (myMap.get(char) || 0) + 1;
        myMap.set(key,value);
    }

    // console.log('myMap values..',myMap);
    let tempChar = '';
    for(let [key,value] of myMap){
        if(value === 1){
            tempChar = key;
            break;
        }
    } 

    return tempChar;
}
// const str = 'leetcode';
const str = 'racecar';
console.log(firstNonRepeatingChar(str));