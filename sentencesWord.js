class Solution {
    wordSentencesCount = (txt) => {
        if(txt.length === 1) return '1 1';

        console.log('word length...',txt.length);
    };
}

const obje = new Solution();
const text = 'Sentences';
console.log(obje.wordSentencesCount(text));

// problem link
// https://www.geeksforgeeks.org/problems/counting-number-of-sentences-and-words-in-text3226/1?page=4&category=Strings&sortBy=latest