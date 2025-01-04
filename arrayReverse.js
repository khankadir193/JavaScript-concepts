const reverseArray = (arr) => {
    // first way to reverse the array
    // arr.reverse();

    // second way reverse
    const newArr = [];
    let counter = 0;
    for(let i=arr.length-1;i>=0;i--){
        newArr[counter] = arr[i];
        counter++;
    }

    console.log('newArr',newArr);
};

let arr = [1, 4, 3, 2, 6, 5];
console.log(reverseArray(arr));