function flattendArray(arr) {
    console.log('arr...???', arr);

    // return arr.reduce((acc, val) => 
    //     Array.isArray(val) ? acc.concat(flattendArray(val)) : acc.concat(val),[]);

    // or
    const tempArr = [];
    for (let element of arr) {
        if (Array.isArray(element)) {
            tempArr.push(...flattendArray(element));
        } else {
            tempArr.push(element);
        }
    }

    return tempArr;
};


// or

const flattenArray = (arr) => {
    return arr.reduce((result, element) => {
        if (Array.isArray(element)) {
            return result.concat(flattenArray(element));
        }

        result.push(element);
        return result;
    }, []);
};

const nestedArray = [1, [2, [3, [4, [5]]]]];
console.log('FlattendArray...', flattendArray(nestedArray));