function reverseArrayGroup(arr,k){
    let noOfRep = Math.ceil(arr.length/k);

    let j = k;
    const tempArray = [];
    // for(let i=0;i<arr.length;i++){
    //     let tempArr = arr.slice(i,j);
    //     i += k -1;
    //     j += k -1;

    //     tempArray.push(...tempArr.reverse());
    // };
    let i = 0;
    while(i<noOfRep){
        let tArr = arr.slice(0,k);

        tempArray.push(...tArr.reverse());

        arr = arr.slice(k);

        i++;
    }

    return tempArray;
};

// const arr = [1, 2, 3, 4, 5, 6, 7, 8], k = 3;
// const arr = [1, 2, 3, 4, 5], k = 3
const arr = [5, 6, 8, 9], k = 3

console.log('reverseArray..',reverseArrayGroup(arr,k));