function getFibonacciSeries(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];
    if(n === 2) return [0,1];

    const arr = [0, 1];

    for (let i = 0; i < n - 2; i++) {
        const temp = Number(arr[i]) + Number(arr[i + 1]);
        console.log('temp...',temp);
        arr.push(temp);
    }

    return arr;
}

console.log(getFibonacciSeries(8))