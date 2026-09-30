//i need to understand
const mergeIntervals = (intervals) => {
    const result = [];

    let current = intervals[0];

    for (let i = 1; i < intervals.length; i++) {
        const next = intervals[i];

        // If intervals overlap
        if (next[0] <= current[1]) {
            current[1] = Math.max(current[1], next[1]);
        } else {
            // No overlap
            result.push(current);
            current = next;
        }
    }

    result.push(current);

    return result;
};

const arr = [[1, 3], [2, 6],[5,7], [8, 10], [9, 12]];

console.log(mergeIntervals(arr));