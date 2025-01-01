function myAtoi(s) {
    let i = 0, sign = 1, result = 0;
    const INT_MAX = 2 ** 31 - 1; // Maximum 32-bit signed integer
    const INT_MIN = -(2 ** 31);  // Minimum 32-bit signed integer

    // 1. Skip leading whitespaces
    while (i < s.length && s[i] === ' ') {
        i++;
    }

    // 2. Handle optional sign
    if (i < s.length && (s[i] === '+' || s[i] === '-')) {
        sign = s[i] === '-' ? -1 : 1;
        i++;
    }

    // 3. Read digits and convert to integer
    while (i < s.length && s[i] >= '0' && s[i] <= '9') {
        const digit = s[i].charCodeAt(0) - '0'.charCodeAt(0); // Convert character to digit
        result = result * 10 + digit;

        // 4. Handle overflow
        if (sign === 1 && result > INT_MAX) {
            return INT_MAX;
        }
        if (sign === -1 && result * sign < INT_MIN) {
            return INT_MIN;
        }
        i++;
    }

    // 5. Apply the sign and return the result
    return result * sign;
}

// Usage Example
console.log(myAtoi("   -42")); // Output: -42
console.log(myAtoi("4193 with words")); // Output: 4193
console.log(myAtoi("words and 987")); // Output: 0
console.log(myAtoi("-91283472332")); // Output: -2147483648 (INT_MIN)
