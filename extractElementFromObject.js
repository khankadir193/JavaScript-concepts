//program is   i have to 
const extractElement = {
    first:0,
    second:1,
    arr:[2,3,0,4,5,0],
    three:0,
    obj:{
        val1:6,
        val2:7,
        val3:8
    },
    four:9
};
// Object.keys(extractElement)
// 
const tempArr = [];
for(const [key,value] of Object.entries(extractElement)){

    console.log('val..typeof', key,'value......',value);
    if(typeof value === 'object' && value.length > 0){
        console.log('type of-------')
        value.map((item)=>{
            const tempVal = item > 0 && item;
            tempVal && tempArr.push(tempVal);
            console.log('tempVal....',tempVal);
        })
    }else if(typeof value === 'object'){
        console.log('empty...condition');
    }else{
        const val = value>0 && Number(value)
        console.log('val....elsepart',val);
        val && tempArr.push(val);
    }
    // console.log('ele....',key,'value...',value);
}

console.log('tempArr...',tempArr);

// console.log('extractElement...',extractElement);