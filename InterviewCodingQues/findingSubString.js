const findSubString = (str, subStr) => {
    let subCount = 0;

    for (let i = 0; i < str.length; i++) {
        let charCount = 0;

        while (
            charCount < subStr.length &&
            str[i + charCount] === subStr[charCount]
        ) {
            charCount++;
        }

        if (charCount === subStr.length) {
            subCount++;
            i += subStr.length - 1;
        }
    }

    return subCount;
};
// const str = "I like apple and apple juice."
// const subStr = "apple";
const str = "aapple";
const subStr = "apple";
console.log(findSubString(str, subStr));