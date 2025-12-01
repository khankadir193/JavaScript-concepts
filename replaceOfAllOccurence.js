// https://www.geeksforgeeks.org/dsa/find-and-replace-all-occurrence-of-a-substring-in-the-given-string/

function replaceOfAllOccurence(s,s1,s2){
    // s.replace(s1)
    let flag = false;
    for(let i=0;i<s.length;i++){
        for(let j=i+1;j<s1.length;j++){
            if(s[i] === s1[j]){
                flag = true;
            }else{
                flag = false;
                break;
            }
        };
        if(flag){
            let tempArr = s.split('');
            tempArr.splice();
        }
    }
};

const s = "abababa", s1 = "aba", s2 = "a";

console.log('replaceOfOccurence...',replaceOfAllOccurence(s,s1,s2));
