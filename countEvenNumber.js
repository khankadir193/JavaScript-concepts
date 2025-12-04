function countEvens(arr) {
  // your solution here
  const tempArr = [];
  for(let i=0;i<arr.length;i++){
    if(arr[i] % 2 === 0){
        tempArr.push(arr[i]);
    }
  }

  return tempArr.length;
};

// const arr = [1,2,3,4];
// const arr = [-2,-5,-8]
// const arr = [0,2,3];
const arr = []

console.log('countEvens..Number',countEvens(arr));