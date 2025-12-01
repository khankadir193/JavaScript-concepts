function generateAtoZ(){
    let tempArr = [];

    for(let i=65;i<=90;i++){
        let char = String.fromCharCode(i);
        tempArr.push(char);
    };

    return tempArr;
};

console.log('generateAtoZ',generateAtoZ());

// method for convert char into ascii value
let char = 'A';
char.charCodeAt(0);

//method for convert ascii value into char
let ascii = 65;
let chars = String.fromCharCode(ascii);

let val = String.from

//method String.fromCodePoint()
console.log(String.fromCodePoint(72, 101, 108, 108, 111));

