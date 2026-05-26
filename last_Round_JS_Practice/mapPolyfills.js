if (!Array.prototype.yourMap) {

    Array.prototype.yourMap = function (callback) {
        // console.log('callback...', callback);
        const newArray = [];
        if (typeof callback !== 'function') {
            throw new Error('this is the not callback function');
        }

        for (let i = 0; i < this.length; i++) {
            if(i in this){
                newArray.push(callback(this[i], i, this));
            }
        }

        return newArray;
    }
};

const arr = [10, , 30, 40];

console.log(arr.yourMap((ele) => ele))

