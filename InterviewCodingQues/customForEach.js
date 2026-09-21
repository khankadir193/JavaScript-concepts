
//explaining why callback.call(thisArg, ...) exists and how it interacts with arrow functions vs 
// normal functions. That's exactly the kind of follow-up an interviewer may ask.
Array.prototype.myEach = function(callback,thisArgs){
    if(typeof callback !== 'function'){
        throw new Error('this is not a function');
    }

    console.log('this...',this)
    for(let i=0;i<this.length;i++){
        if(i in this)
        callback.call(thisArgs,this[i],i,this);
    }
}

const arr = [1,2,3,4,5,,,6];

for(let i=0;i<arr.length;i++){
    console.log('-----',i)
}

const obj = {
    name:'Abdul Kadir Khan',
    address:'gorakhpur',
    zip:272151
}

arr.myEach(function (item){ console.log(this.name,item)});