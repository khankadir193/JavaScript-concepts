// https://www.geeksforgeeks.org/dsa/check-two-strings-k-anagrams-not/

function TwoAnagramString(str1,str2,k){
    str1 = str1.split('').sort();
    str2 = str2.split('').sort();
    if(str1.length !== str2.length) return 'NO';

    for(let i=0;i<str1.length;i++){
        if(str1[i] !== str2[i]){
            k--;
        }
    };

    console.log('k value...',k);

    if(k<0) return 'NO';

    return 'YES';
};

const str1 = "anagram" , str2 = "grammar" , k = 3;
// const str1 = "geeks", str2 = "eggkf", k = 1;
console.log('twoANagramString..',TwoAnagramString(str1,str2,k));