const p1 = Promise.resolve('promise 1');
const p2 = Promise.resolve('promise 2');
const p3 = Promise.resolve('promise 3');

Promise.all([p1,p2,p3]).then((value)=>{
    console.log(value);
}).catch(console.log);

//promise race:-promise race it usually run the which is ever run is first whether pass or fail.
const fast = new Promise((resolve,reject)=> setTimeout(()=> reject('resolve within 1 second'),5000));
const slow = new Promise((resolve,reject)=> setTimeout(()=> resolve('resolve with in 2 second'),2000));

Promise.race([slow,fast]).then(console.log);

//allSettled,any,resolve,reject i will do the later.