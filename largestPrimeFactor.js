class Solution {
    isPrime(n) {
        // console.log('n...',n);
        if (n <= 1) return false;

        for (let i = 2; i * i <= n; i++) {
            if (n % i === 0) return false;
        }

        return true;
    }
    largestPrimeFactor(n) {
        let primeNum = 2;
        for (let i = 2; i < n / 2; i++) {
            if (n % i === 0) {
                if (this.isPrime(i)) {
                    primeNum = i;
                }
                // console.log('---',this.isPrime(i));
            }
        };

        return primeNum;
    }
};

// const num = 24;
const num = 13195;
const solutionObj = new Solution();
console.log(solutionObj.largestPrimeFactor(num));