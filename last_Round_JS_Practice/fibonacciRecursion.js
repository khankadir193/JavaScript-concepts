function getFibonacciRecursive(n) {
    if (n < 0) return [];
    if (n === 1) return [0];
    if (n === 2) return [0, 1];

    // console.log(n)
    const arr = getFibonacciRecursive(n - 1);
    console.log('...arr',arr);
    arr.push(arr[arr.length - 1] + arr[arr.length - 2]);

    return arr;
}

console.log(getFibonacciRecursive(8));