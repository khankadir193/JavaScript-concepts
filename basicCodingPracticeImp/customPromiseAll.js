const p1 = new Promise(resolve =>
    setTimeout(() => resolve("First"), 3000)
);

const p2 = new Promise(resolve =>
    setTimeout(() => resolve("Second"), 1000)
);

const p3 = new Promise(resolve =>
    setTimeout(() => resolve("Third"), 2000)
);

function myPromiseAll(arr) {

    return new Promise((resolve, reject) => {
        const result = [];
        let completedCount = 0;
        if(arr.length === 0){
             resolve([]);
             return;
        };

        arr.forEach((promise,index) => {
            Promise.resolve(promise).then((data)=>{
                result[index] = data;
                completedCount++;

                if(arr.length === completedCount){
                    resolve(result);
                }
            }).catch((error)=>{
                reject(error)
            })
        });
    })
}
// myPromiseAll([p1, p2, p3]).then((data)=> console.log('--',data)).catch((err)=> console.log(err));

myPromiseAll([
    Promise.resolve("First"),
    "Second",
    100
]).then((data)=> console.log('--',data)).catch((err)=> console.log(err));