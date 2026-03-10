// Never use arrow functions when defining methods on prototypes if you need this.
if (!Array.prototype.myMap) {

    Array.prototype.myMap = function (callback) {
        const newArray = [];
        if (typeof callback !== 'function') {
            throw new TypeError('callback must be a function');
        }


        for (let i = 0; i < this.length; i++) {
            newArray.push(callback(this[i], i, this));
        }

        return newArray;
    }
};

const arr = [1, 2, 3, 4];
const result = arr.myMap((item)=> item * 3);
console.log('result..',result);


//simple expamle for understand the callback function.
// callback is a function which is accepting argument as a function and call otherfunction into
// current fuction.

function myFun(callback){
    callback('hello i am abdul kadir khan');
};

myFun((e)=>{
    console.log(e);
});

//polyfills of filter
if(!Array.prototype.myFilter){
    Array.prototype.myFilter = function(callback){

        const newArr = [];

        for(let i=0;i<this.length;i++){
            const value = callback(this[i],i,this);
            console.log('value...',value);
            if(value){
                newArr.push(this[i]);
            }
        }

        return newArr;
    }
}

const arrs = [3,4,5,6];
const filarr = arrs.myFilter((item)=> item);
console.log('filarr',filarr);