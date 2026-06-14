function isAnagram(str1,str2){
    if(str1.length !== str2.length) return false;

    str1 = str1.split('').sort().join('');
    str2 = str2.split('').sort().join('');

    if(str1 === str2){
        return true;
    }

    console.log(str1,str2);
    return false;
}

// const str1 = 'listen',str2 = 'silent';
const str1 = 'race',str2 = 'care';
console.log(isAnagram(str1,str2));