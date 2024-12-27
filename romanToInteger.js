var romanToInt = function (s) {
    const romanSymbol = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };
    
    let totalValue = 0;

    for (let i = 0; i < s.length; i++) {
        const current = romanSymbol[s[i]];
        const next = romanSymbol[s[i + 1]];

        if (next && current < next) {
            totalValue -= current;
        } else {
            totalValue += current;
        }
    }

    return totalValue;
};

console.log(romanToInt('MCMXCIV')); // Output: 1994
