//memoization is technique which is make function faster,and optimized.
// it is cache previous calculated result.
// if passing same argument then returning cache result.rather than calculating 
// same result again is again.
const memoizationAddition = ()=>{
    let cache = {};

    return (value)=>{
        if(value in cache){
            // console.log('cache results...??',cache);
            return cache[value];
        }else{
            // console.log('calculating results...??');
            let result = value + 10;

            cache[value] = result;
            return result;
        }
    }
}

const computedFunction = memoizationAddition();

// Measure execution time for first calculation (without cache)
console.time("First Call");
console.log(computedFunction(10));
console.timeEnd("First Call");  // Logs the time taken for the first execution

// Measure execution time for second calculation (from cache)
console.time("Second Call");
console.log(computedFunction(10));
console.timeEnd("Second Call");  // Logs the time taken for the second execution

// or
// console.log(memoizationAddition()(10));
// console.log(memoizationAddition()(10));
