function missingNumber(arr){
    let n = arr.length + 1;

    //this first approach is good but tc = O(nlogn)
    // arr = arr.sort((a,b)=> a-b);
    // console.log(arr)
    // for(let i=0;i<n;i++){
    //     if(arr[i] !== i+1 ){
    //         return i+1;
    //     }
    // }

    //this second approach is more optimal log(n)
    // const expectedSum = (n * (n + 1))/2;
    // const actualSum = arr.reduce((acc,curr)=> acc + curr,0);

    // return expectedSum - actualSum;

    //third xor approach
    let xor = 0;
    for(let i = 1;i <= n; i++){
        xor ^= i;
    }

    // console.log('xor..',xor);

    for(const num of arr){
        xor ^= num;
    }

    return xor;
};

const numbers = [1, 2, 3, 4];
// const numbers = [1, 2, 3, 4, 6, 7, 8];
console.log(missingNumber(numbers));
