function groupBy(array, iteratee) {
    const obj = {};

    for(const ele of array){
        // console.log(iteratee(ele));
        const key = iteratee(ele);
        if(obj[key]){
            obj[key].push(ele);
            // tempArr = [];
        }else{
            obj[key] = [ele]
        }
    }

    // console.log(obj)
    return obj;
}

// console.log(groupBy([1.1, 2.2, 2.9], Math.floor));
// console.log(groupBy(['apple', 'banana', 'cherry'], word => word[0]));
console.log(groupBy([6.1, 4.2, 6.3], Math.floor))