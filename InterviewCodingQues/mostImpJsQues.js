let obj = {a:1,b:2,c:43};
// output: [["a",1],["b",2]];
//built in method
console.log('built in method:-',Object.entries(obj));

// manual method
const tempArr = [];
for(let ele in obj){
    tempArr.push([ele,obj[ele]]);
};
console.log('tempArr...',tempArr);

//third manual approach
const res = Object.keys(obj).map((item)=>{
    const newArr = new Array(item,obj[item]);
    // console.log('newArr',newArr);
    return newArr;
});

console.log('result..',res);

//remove duplicates number
console.log('remove the duplicates number');
function removeDuplicates(arr){
    const set = new Set(arr);
    let freq = {};
    // console.log('---',...set);
    for(let ele of arr){
        freq[ele] = (freq[ele] || 0) + 1;
    };
    
    for(let val in freq){
        console.log('val...',val);
    }
    console.log(freq);
}

// let arr = [1,2,3,2,4,1,5,1];
let arr = [4,5,2,4,2,3,4,3,6,5,5,6,54,43,3,3,3,3];
console.log(removeDuplicates(arr));
//second approach
function removeDuplicates2(arr){
    const set = new Set(arr);
    let obj = {};
    let tempArr = [];
    for(let i=0;i<arr.length;i++){
        if(!obj[arr[i]]){
            obj[arr[i]] = true;
            tempArr.push(arr[i]);
        }
    };
    return tempArr;    
};

console.log('secondApproach',removeDuplicates2(arr))


