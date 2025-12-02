// https://namastedev.com/practice/custom-sort
function customSort(arr) {
    console.log('arrElements..',arr);
    // arr.sort((a, b) => a - b);
    const tempArr = [];
    for (let i = 0; i < arr.length; i++) {
        let char = arr[i];
        console.log('...cd..ak',char?.charCodeAt(0));
        // if (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 122) {
        //     tempArr.push(arr[i]);
        // }
    };

    console.log('tempArrray has been render int his console...', tempArr);
};

const input = ["g", "s", 5, 2, "c", "e", 6, 1, "a"];
console.log(customSort(input));