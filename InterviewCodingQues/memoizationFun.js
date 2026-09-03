//this is the memoization just i need practice more
const memoizeAdd = () => {
    let cache = {};

    return (a, b) => {
        console.time('memoize');
        let key = `${a} + ${b}`;
        // console.log('key....',key);

        if (key in cache) {
            console.timeEnd('memoize');
            return cache[key];
        }

        let sum = a + b;
        cache[key] = sum;
        console.timeEnd('memoize');
        return sum;

    }
}

const memoize = memoizeAdd();

console.log(memoize(10, 20));
console.log(memoize(10, 20));