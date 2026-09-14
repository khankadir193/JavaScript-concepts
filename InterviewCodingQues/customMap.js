Array.prototype.customMap = function (callBack){
    console.log('00000',typeof callBack);

    if(typeof callBack !== 'function'){
        throw new Error('callback is not a function.');
    }

    const tempArr = [];

    for(let i=0;i<this.length;i++){
        // console.log('kadir',i in this);
        if(this[i] !== undefined)
        tempArr.push(callBack(this[i],i,this));
    }

    return tempArr;
}

const arr = [1,3,,10,,5,6]; // sparse array
const res = arr.customMap((item)=>item);
console.log('result...',res);