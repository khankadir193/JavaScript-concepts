function pattern(n){
    let result = '';
    for(let i=0;i<n;i++){
        for(let j=i+1;j<=n;j++){
            // console.log('j..',j)
            result += j + ' ';
        }
        result += '\n';
    }

    return result;
}
let n = 5;
console.log(pattern(n));