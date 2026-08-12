function stringify(value, seen = new WeakSet()) {
    // null
    if (value === null) return "null";

    // string
    if (typeof value === "string") {
        return `"${value}"`;
    }

    // number or boolean
    if (typeof value === "number" || typeof value === "boolean") {
        return String(value);
    }

    // undefined
    if (value === undefined) {
        return "null";
    }

    // Array
    if (Array.isArray(value)) {
        let result = value.map(item => stringify(item, seen));
        return "[" + result.join(",") + "]";
    }

    // Object
    if (typeof value === "object") {
        if (seen.has(value)) {
            return '"[Circular]"';
        }

        seen.add(value);

        let result = [];

        for (let key in value) {
            result.push(`"${key}":${stringify(value[key], seen)}`);
        }

        return "{" + result.join(",") + "}";
    }
}

console.log(stringify({ a: 1, b: "hello", c: [2, 3], d: null }));
// {"a":1,"b":"hello","c":[2,3],"d":null}

// console.log(stringify([1, { a: 2, b: [3] }]));
// [1,{"a":2,"b":[3]}]

// const obj = {};
// obj.self = obj;

// console.log(stringify(obj));
// {"self":"[Circular]"}