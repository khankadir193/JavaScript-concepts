// https://www.geeksforgeeks.org/dsa/reverse-words-in-a-given-string/
function ReverseWords(str) {
    let flag = false;
    let arrSplit = str.split('.');
    if (arrSplit.length === 1) {
        arrSplit = str.split(' ');
        flag = true;
    }

    let tempStr = '';
    if (flag === false) {
        // console.log('....',arrSplit.reverse());
        arrSplit.reverse();
        arrSplit.forEach((item, index) => {
            if (arrSplit.length - 1 === index) {
                tempStr += item;
            } else {
                tempStr += item + '.';
            }
        });
    } else {
        arrSplit.reverse();
        arrSplit.forEach((item, index) => {
            tempStr += item + ' ';
        });
    }

    console.log('tempStr....', tempStr);
};
// const str = 'i.like.this.program.very.much';
// const str = 'i like this program very much';
const str = '..geeks..for.geeks.' ;
console.log('ReverseWord', ReverseWords(str));