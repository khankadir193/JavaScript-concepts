class Solution {
    // Function is to check whether two strings are anagram of each other or not.
    areAnagrams(s1, s2) {
        // code here
        if(s1.length !== s2.length) return false;
        s1 = s1.split('').sort().join('');
        s2 = s2.split('').sort().join('');
        
        for(let i=0;i<s1.length;i++){
            if(s1[i] !== s2[i]) return false;
        }

        return true;
    }
};

const anagram = new Solution();
// console.log(anagram.areAnagrams("listen", "silent")); // Output: true
console.log(anagram.areAnagrams("hello", "world")); // Output: false