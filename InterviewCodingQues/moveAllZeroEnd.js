function moveAllZeroEnd(arr) {
    const totalSize = arr.length;
    arr = arr.filter((ele) => ele);
    const remainingSize = totalSize - arr.length;

    for (let i = arr.length; i < totalSize; i++) {
        arr[i] = 0;
    };

    console.log('ffff', arr);
    console.log('remainingSize...', remainingSize)

};

// const arr = [0, 1, 0, 3, 0, 12];
const arr = [3,0,4,7,12,0,4,3,0,12,0,9,10]
console.log(moveAllZeroEnd(arr));

//Move All Zeros to End (Without Extra Array)

// function findDuplicate(arr){
//     // console.log(arr.length);
//     const freq = {};
//     for(const ele of arr){
//         if(freq[ele]){
//             freq[ele] = true;
//         }else{
//             freq[ele] = (freq[ele] || 0) + 1;
//         }
//     }
    
//     for(let [key,value] of Object.entries(freq)){
//         if(freq[key] === true)
//         console.log('key..',key);
//     }
//     console.log(freq)
// };
// const arr = [1,2,3,2,4,5,1];
// console.log(findDuplicate(arr));