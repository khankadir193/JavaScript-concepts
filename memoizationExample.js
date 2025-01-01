const memoizationTechnique = () => {
    const temp = {};
    return (props) => {
        if (props in temp) {
            console.log('props...',temp);
            return temp[props];
        } else {
            let sum = props + 43;
            return temp[props] = sum;
        }
    };
};

const memoized = memoizationTechnique();

console.time();
console.log(memoized(34));
console.timeEnd();

console.log('again calling same input');
console.time();
console.log(memoized(23));
console.timeEnd();