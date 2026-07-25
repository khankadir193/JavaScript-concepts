function countBy(array, iteratee) {
    const freq = {};
    for(const ele of array){
        const key = iteratee(ele);
        freq[key] = (freq[key] || 0) + 1;
    }
    
    return freq;
}

// console.log(countBy([6.1, 4.2, 6.3], Math.floor));
// console.log(countBy(['one', 'two', 'three'], word => word.length));
console.log(countBy(['one', 'two', 'three', 'four', 'five'], word => word.length));