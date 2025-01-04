const memoizationTechnique = () => {
    const cache = {};
    return (input) => {
        console.time(`Time taken for input: ${input}`);
        if (input in cache) {
            console.log('Cache hit:', cache);
            console.timeEnd(`Time taken for input: ${input}`);
            return cache[input];
        } else {
            const result = input + 43;
            cache[input] = result;
            console.log('Cache miss:', cache);
            console.timeEnd(`Time taken for input: ${input}`);
            return result;
        }
    };
};

const memoized = memoizationTechnique();

console.log('First call with input 34:');
console.log('Result:', memoized(34));

console.log('\nCalling with input 34:');
console.log('Result:', memoized(34));

// console.log('\nCalling again with input 34:');
// console.log('Result:', memoized(34));

// console.log('\nCalling again with input 23:');
// console.log('Result:', memoized(23));
