const p1 = Promise.resolve('promise 1');
const p2 = Promise.resolve('promise 2');
const p3 = Promise.resolve('promise 3');

/*
Promise All:- run multiple promise in parllel and waits all of them succeed.if any one promise
is failed entire operation failed immediately.
Fetching multiple APIs where all data is required.
*/
Promise.all([p1,p2,p3]).then((value)=>{
    console.log('promise all',value);
}).catch(console.log);

//promise race:-promise race it usually run the which is ever run is first whether pass or fail.
//promise race is return the first settled promise.
const fast = new Promise((resolve,reject)=> setTimeout(()=> resolve('race resolve within 5 second'),5000));
const slow = new Promise((resolve,reject)=> setTimeout(()=> resolve('race resolve with in 2 second'),2000));

Promise.race([slow,fast]).then(console.log);

//promise allSettled:- wait all promise to complete teh execution whether failed/success.
const sp1 = Promise.resolve('resolve settled');
const sp2 = Promise.reject('reject settled');
const sp3 = Promise.resolve('resolve settled');

Promise.allSettled([sp1,sp2,sp3]).then(result => {
    console.log('all setteled',result);
})


//promise.any:- it will return the first fulfilled promise or resolve promise.
//it only failse if all promise is failed.

const anyPromise1 = Promise.reject('reject any');
const anyPromise2 = Promise.resolve('resolve any');
const anyPromise3 = Promise.reject('reject any');

Promise.any([anyPromise1,anyPromise2,anyPromise3]).then((val)=>{
    console.log('promise any...',val);
})

/*

| Method                 | Waits For       | Rejects When             | Returns         |
| ---------------------- | --------------- | ------------------------ | --------------- |
| `Promise.all()`        | All fulfilled   | First rejection          | Array of values |
| `Promise.allSettled()` | All settled     | Never                    | Status objects  |
| `Promise.race()`       | First settled   | If first settled rejects | Winner result   |
| `Promise.any()`        | First fulfilled | All reject               | First success   |


*/

/*

Easy Memory Trick:-
Imagine 3 students taking an exam:

Promise.all():-Everyone must pass.One fail = whole team fails.

Promise.allSettled():-Wait for everyone's result.Pass or fail doesn't matter.

Promise.race():-First student to finish decides result.Pass or fail.

Promise.any():-First student who passes wins.Ignore failures.If everyone fails → failure.

*/
