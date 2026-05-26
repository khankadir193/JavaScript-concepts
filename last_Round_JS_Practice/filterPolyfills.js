if(!Array.prototype.yourFilter){
    Array.prototype.yourFilter = function(callback){
        const newArray = [];

        if(typeof callback !== 'function'){
            throw new Error('this is the not callback function');
        }

        for(let i=0;i<this.length;i++){
            const result = callback(this[i],i,this);
            if(result){
                newArray.push(this[i]);
            }
        }

        return newArray;
    }
};

console.log([2,'',3,4,5,8].yourFilter((ele)=> ele > 3 ));