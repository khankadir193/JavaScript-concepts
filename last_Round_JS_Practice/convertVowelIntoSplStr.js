function convertVowelIntoSpclStr(str){
    let specialStr = '$%#@*?';

    str = str.split('');
    for(let i=0;i<str.length;i++){
        let lChar = str[i].toLowerCase();
        if('aeiou'.includes(lChar)){
            let randomVal = Math.floor(Math.random() * specialStr.length);
            str[i] = specialStr[randomVal];
        }
    }
    return str.join('');
};

// const str = 'Hello World';
const str = 'hello my name is abdul kadir khan';
console.log(convertVowelIntoSpclStr(str));