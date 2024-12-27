const recursionFact = (n)=>{

    if(n===0) return 1;
    console.log('n...',n);
    return n * recursionFact(n-1);
};

console.log(recursionFact(5));