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

//split the string with comma and semi colon
const list = 'apple,samsung;vivo';
const splitArr = list.split(/[,;]/);
console.log('splitArr..',splitArr);


//zomato interview question
console.log('lion emoji')
async function getLion(){
    return '🦁'
};

const lion = getLion();
console.log(lion === '🦁');

//walmart question
console.log('walmart analytical question');
let users = {
    frontendmaster:{},
    kadir:{}
};

let name = 'kadir';
// let name = 'constructor' || 'toString'; // this would be also true because it will check the prototype chain
// for only obj i can use the Object.hasOwn(users[name]);

if(users[name]){
    console.log('BOSS');
}else{
    console.log('GUEST');
}

//print deep neested objected.
console.log('Nested Object...');
function printObj(obj){
    // console.log(typeof obj === 'object');
    for(let element in obj){
        if(typeof obj[element] === 'object'){
            // console.log('------')
            printObj(obj[element]);
        }else{
            console.log(obj[element]);
        }
    }
}

const company = {
    name:'Tech Corp',
    deparment:{
        name:'Engineering',
        employee:{
            empId:101,
            empName:'Abdul Kadir Khan'
        }
    }
};

printObj(company);

//comparing the boolean and objects
console.log('comparing boolean and objects..');
console.log(false == []); //if one value is boolean convert [] into '' string and this is falsy value.
console.log(false == ![]); // here [] is truthy value directly convert into false.
console.log([] != []); // arrays are objects it's compared by reference not value.
console.log([1] == [1]); // arrays are objects compared by reference. === does NOT do type coercion Objects are still compared by reference
console.log({} != {}); // Arrays and objects are compared by reference

//count the word
console.log('count the word');
function countWord(str){
    //first approach along with inbuilt method..
    // let splitArr = str.split(' ').filter(item => item.trim());
    // console.log(splitArr.length);
    
    //second logical approach..
    // const splArr = str.split(' ');
    // let count = 0;
    // for(let word of splArr){
    //     if(word !== ''){
    //         count++
    //         console.log(word)
    //     }
    // }

    // return count;

    // third pure logic approach
    let count = 0;
    let isWord = false;
    for(let i=0;i<str.length;i++){
        if(str[i] !== ' ' && !isWord){
            count++;
            isWord = true;
        }else if(str[i] === ' '){
            isWord = false;
        }
    }

    return count;
    
    // console.log('---',count);
};

let str = 'code    step   by       step        khan';
console.log('countword----',countWord(str));

//missing Number 
console.log('missing number');

function missingNum(arr){
    //first approach
    // let count = 1;
    // for(let i=0;i<arr.length;i++){
    //     if(arr[i] === count){
    //         count++;
    //     }else{
    //         return count;
    //     }
    // }

    //second approach
    let n = 5;

    let total = n*(n+1)/2;
    let totalSum = arr.reduce((pre,curr) => pre + curr,0);
    let missNum = total - totalSum;

    return missNum;
};


const missNum = [1,2,3,5];

console.log('missNumber',missingNum(missNum));

console.log('Empty Items...');
function removeEmptyItems(arr){
    //first approach with inbuilt method
    // const filterEle = arr.filter(item => item);
    // console.log(filterEle);
    
    //second approach logical approach    
    const filterEle2 = arr.filter(Boolean);
    console.log('filterEle222',filterEle2);
};

const emptyArr = [20,4,6,,1,5,1,6,2,,,,7,3];
console.log('--',removeEmptyItems(emptyArr));

// using object property using short cut
console.log('using object along with short cut...');
const user = {
    name:'Kadir',
    address:{
        city:'Gorakhpur'
    }
};

// if(user && user.address && user.address.city){
//     console.log(user.address.city);
// }else{
//     console.log('something went wrong.');
// }

// or
console.log(user.address?.city && user.address.city);
console.log(user.address?.city ?? 'something went wrong');

console.log('convert capital letter into small letter');
function convertInSmall(info){
    let string = '';
    for(let i=0;i<info.length;i++){
        let code = info.charCodeAt(i);
        if(code<=90 && code >= 65){
            string += String.fromCharCode(code+32);
        }else{
            string += info[i];
        }
    };
    
    console.log('smallLetters...',string)
};
// let info = 'heLLo How aRe You.';
let info = 'Abdul KADIR khaN'
convertInSmall(info);
