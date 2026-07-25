function cloneDeep(value){
    
    if(value === null || typeof value !== 'object'){
        return value;
    }
    
    const copy = Array.isArray(value) ? [] : {};
    
    for(let key in value){
        copy[key] = cloneDeep(value[key]);
    }
    
    return copy;
}

// const obj = {
//   a: 1,
//   b: {
//     c: 2
//   }
// };
const obj = [{ a: 1 }, { b: 2 }];
const copy = cloneDeep(obj);
// copy.b.c = 12;
// console.log('original obj',obj)
console.log('copy....',copy);