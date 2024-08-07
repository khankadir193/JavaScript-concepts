//memoization is technique which is make function faster,and optimized.
// it is cache previous calculated result.
// if passing same argument then returning cache result.rather than calculating 
// same result again is again.
const memoizationAddition = ()=>{
    let cache = {};

    return (value)=>{
        if(value in cache){
            console.log('cache results...??',cache);
            return cache[value];
        }else{
            console.log('calculating results...??');
            let result = value + 10;

            cache[value] = result;
            return result;
        }
    }
}

const computedFunction = memoizationAddition();
console.log(computedFunction(10));
console.log(computedFunction(10));

// or
// console.log(memoizationAddition()(10));
// console.log(memoizationAddition()(10));
