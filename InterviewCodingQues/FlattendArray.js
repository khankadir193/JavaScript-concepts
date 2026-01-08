function flattendArray(arr) {

    return arr.reduce((acc, val) => Array.isArray(val) ? acc.concat(flattendArray(val)) : acc.concat(val),[]);
};

const nestedArray = [1, [2, [3, [4, [5]]]]];
console.log('FlattendArray...', flattendArray(nestedArray));