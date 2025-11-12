// https://www.geeksforgeeks.org/dsa/find-a-pair-with-the-given-difference/
function PairWithDifference(arr,x){
    for(let i=0;i<arr.length-1;i++){
        for(let j=i+1;j<arr.length;j++){
            if(Math.abs(arr[j] - arr[i]) === x) return 'Yes';
        }
    };

    return 'No';
};

// const arr = [5, 20, 3, 2, 50, 80], x = 78;
const arr = [90, 70, 20, 80, 50], x = 45;
console.log('PairWithDifference...',PairWithDifference(arr,x));