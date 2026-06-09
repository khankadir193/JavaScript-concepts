function longestSubstring(s) {
    const seen = new Map();
    let left = 0;
    let maxLength = 0;
    let start = 0;

    for (let right = 0; right < s.length; right++) {
        const char = s[right];

        if (seen.has(char)) {
            left = Math.max(left, seen.get(char) + 1);
        }

        seen.set(char, right);

        if (right - left + 1 > maxLength) {
            maxLength = right - left + 1;
            start = left;
        }
    }

    return s.substring(start, start + maxLength);
}

console.log(longestSubstring("abcabcbb")); // "abc"
console.log(longestSubstring("pwwkew"));   // "wke"