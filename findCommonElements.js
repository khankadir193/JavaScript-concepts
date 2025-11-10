function findCommonElementThreeArr(arr1,arr2,arr3){
    const tempArr = [];

    for(const ele of arr1){
        if(arr2.includes(ele) && arr3.includes(ele)){
            tempArr.push(ele);
        };
    };

    return tempArr;
};

// let arr1 = [1, 5, 10, 20, 30], arr2 = [5, 13, 15, 20], arr3 = [5, 20];

const arr1 = [2, 5, 10, 30], arr2 = [5, 20, 34], arr3 = [5, 13, 19]

console.log('commonElements..::',findCommonElementThreeArr(arr1,arr2,arr3));