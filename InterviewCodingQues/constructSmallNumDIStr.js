var diStringMatch = function(s) {
    let low=0,high = s.length;
    const arr = [];
    for(let i=0;i<s.length;i++){
        if(s[i] === 'I'){
            arr.push(low);
            low++;
        }else{
            arr.push(high);
            high--;
        }
    };
    arr.push(high);
    return arr;
};

// const s = 'IDID';
// const s = "III";
const s = 'DDI';
console.log(diStringMatch(s))