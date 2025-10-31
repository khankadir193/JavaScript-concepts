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
        // arrSplit.forEach((item)=>{
        //     // tempStr.concat(item);
        //     tempStr += item + '.';
        // });
        for(ele of arrSplit){
            tempStr += ele + '.';
        }
    }

    console.log('tempStr....', tempStr);
};
const str = 'i.like.this.program.very.much';
// const str = 'i like this program very much';
console.log('ReverseWord', ReverseWords(str));