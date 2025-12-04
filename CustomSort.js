// https://namastedev.com/practice/custom-sort
function customSort(arr) {
    console.log('arrElements..',arr);
    let str = arr.join('');
    // console.log('arr...??',typeof arr);
    let tempArr = [];
    let tempArr2 = [];
    for (let i = 0; i < str.length; i++) {
        let char = str.charAt(i);
        console.log('...cd..ak',char?.charCodeAt(0));
        if (char.charCodeAt(0) >= 65 && char.charCodeAt(0) <= 122) {
            tempArr.push(arr[i]);
        }else{
            tempArr2.push(char);
        }
    };

    tempArr = tempArr.sort();
    tempArr2 = tempArr2.sort((a,b)=> a-b);


    console.log('tempArrray has been render int his console...', tempArr);
    console.log('tempArrray2222...', tempArr2);

    //convert string array into number array..
    return [...tempArr,...tempArr2.map(Number)];
};

const input = ["g", "s", 5, 2, "c", "e", 6, 1, "a"];
console.log('-------',customSort(input));