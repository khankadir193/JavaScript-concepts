// [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]] .

function displaySortArray(array2D) {

    // for(let i=0;i<array2D.length;i++){
    // }
    // console.log(array2D);

    const flatSortedArray = array2D.flat(1).sort((a, b) => a - b);

    console.log('----',flatSortedArray);
}



const array2D = [
    [11, 9, 3, 8],
    [12, 2, 7, 10],
    [6, 4, 1, 5]
];
displaySortArray(array2D);