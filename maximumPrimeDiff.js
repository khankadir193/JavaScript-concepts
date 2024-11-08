const isPrime = (num) =>{
    let bool = true;
    if(num <  2)
        return false;

    for(let i=2; i<=Math.sqrt(num); i++){
        if(num % i === 0){
            bool = false;
            break;
        }
    };

    if(bool){
        const index = nums.findIndex(num);
    };

    return index;
};
function  maximumPrimeDiff(arr){
    let maxDiff = 0;
    const indexNum = [];
    const isPrimeArr = isPrime(arr);
};


let nums = [4,2,9,5,3];
maximumPrimeDiff(nums);

