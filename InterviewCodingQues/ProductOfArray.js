//this is the brute force approach.just i need optimized.
const productExceptSelf = (arr) => {
    // const sumOfArr = arr.reduce((acc, curr) => acc * curr, 1);
    // console.log('sumOf arr', sumOfArr);
    const tempArr = [];

    for (let i = 0; i < arr.length; i++) {
        let product = 1;
        for (let j = 0; j < arr.length; j++) {
            if(i != j){
                product *= arr[j];
            }
        }
        tempArr[i] = product;
    }

    console.log('product...',tempArr);
};
// const arr = [1, 2, 3, 4];
// const arr = [3,5,2,6];
const arr = [3, 5, 3, 6];
console.log(productExceptSelf(arr));