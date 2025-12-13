function flatArray(arr){
    const tempArr = [];
    for(let i=0;i<arr.length;i++){
        const nArr = arr[i];
        if(nArr.length > 1){
            nArr.forEach((item)=>{
                tempArr.push(item);
            })
        }else{
            tempArr.push(arr[i]);
        }
    }

    console.log('tempArr',tempArr);

};

const arr = [10,20,[-2,99,84],[25,11],-45,0]

console.log(flatArray(arr));