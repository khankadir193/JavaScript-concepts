function maxProductTriplet(arr){
    let maxProduct = Number.NEGATIVE_INFINITY;

    for(let i=0;i<arr.length-1;i++){
        for(let j=i+1;j<arr.length;j++){
            let tProduct = arr[i] * arr[j] * arr[j+1];
            if(maxProduct<tProduct){
                maxProduct = tProduct;
            }
        };
    };

    return maxProduct;

};

// const arr = [10, 3, 5, 6, 20];
// const arr = [-10, -3, -5, -6, -20];
const arr =  [1, -4, 3, -6, 7, 0];
console.log('maxProduct',maxProductTriplet(arr));