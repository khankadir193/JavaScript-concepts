class Solution {
    armstrongNumber(n) {
        // code here
        let strNum = String(n);
        let totalVal = 0;
        for(let numChar of strNum){
            const num = Number(numChar);
            totalVal += num * num * num;
        }

        if(totalVal === n) return true;

        return false;
    }
}

// const n = 153;
const n = 123;
const newObjRef = new Solution(n);
console.log(newObjRef.armstrongNumber(n));
