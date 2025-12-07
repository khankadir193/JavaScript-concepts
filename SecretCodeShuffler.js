// https://namastedev.com/practice/secret-code-shuffler
const secretCodeShuffler = (s) => {
    const tempArr = [];
    for(let i=0;i<s.length-1;i += 2){
        const char = s.charAt(i);
        const ascii = char.charCodeAt(0);
        const val = ascii + Number(s.charAt(i+1));
        tempArr.push(String.fromCharCode(val));
    }
    return tempArr.join('');
};
// const s = 'a2b3c1';
// const s = 'x1y2z3';
const s = 'a0b0c0'
console.log('secretShuffler...', secretCodeShuffler(s));