// Q. Write a function to find the index of an alphabet (e.g., 'a' should return 1).
//asked by zoho in interview.

function findIndexAlphabets(string){
    const letterIndex = [];
    for(let element of string){
        let asciiValue = element.charCodeAt();

        if(asciiValue>=65 && asciiValue<=90){
            const calculate = (65-asciiValue)+1;
            letterIndex.push(calculate);
        }else if(asciiValue>=97 && asciiValue<=122){
            const calculate = (asciiValue - 97)+1;
            letterIndex.push(calculate);
        }
        // console.log(element,'element...',asciiValue);
    };
    // console.log('letterIndex..',letterIndex);
    return letterIndex;
};

const str = "abdulkadir";

console.log(findIndexAlphabets(str));
