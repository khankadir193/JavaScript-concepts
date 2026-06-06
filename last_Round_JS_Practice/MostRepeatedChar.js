function mostRepeatedChar (str){
    let rChar = {};

    for(let char of str){
        rChar[char] = (rChar[char] || 0) + 1;
    }

    console.log('frequency of the character',rChar);

    let maxValue = 0, mostRChar = '';

    for(let [key,value] of Object.entries(rChar)){
        if(maxValue < value && key !== ' '){
            maxValue = value
            mostRChar = key;
        }
    }

    return mostRChar;

};
// const str = "javascript";
const str = 'how are you kya haal hai bhai mai abdul nnnnnnnnn    kadir khan bol raha hu n non no no n     ';
console.log(mostRepeatedChar(str));