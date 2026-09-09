function maximumMinimum(arr) {
    let maxValue = -Infinity;
    let minValue = Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (maxValue < arr[i]) {
            maxValue = arr[i];
            // minValue = arr[i];
        }
        
        if(minValue>arr[i]){
            minValue = arr[i];
        }
    }

    return { minValue, maxValue };
}
// const arr = [23, 20,10, 25, 95, 19, 87, 50, 21];
// const arr = [-1000, -500,3, -2000, -1];
const testCases = [
    [23, 20, 10, 25, 95, 19, 87, 50, 21],
    [5],
    [1, 2, 3, 4, 5],
    [5, 4, 3, 2, 1],
    [10, 10, 10, 10],
    [-1, -5, -2, -10],
    [-10, 0, 10],
    [0, 0, 0],
    [100, -100, 50, -50],
    [2, 100, 3, 4, 5],
    [100, 2, 3, 4, 5],
    [2, 3, 4, 5, 1],
    [1, 5, 3, 4, 2],
    [-1000, -500, -2000, -1]
];

testCases.forEach((test)=>{
    console.log(`All test cases:-> ${test}`,maximumMinimum(test));
})