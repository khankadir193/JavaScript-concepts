//explicitly 
const myPromise = new Promise((resolve, reject)=>{
    // resolve = false;
    try{
        if(resolve) {
            resolve('Promise resolved successfully...');
        }else if(reject) {
            reject('Promise rejected');
        }else{
            throw new Error('Promise neither resolved nor rejected');
        }
    }catch(err){
        console.error(err);
    }
});



myPromise.then((result)=> console.log('result...Passed~~~',result))
.catch((err)=> console.error('error....Failed!!!',err));


//2..using async/await:- we can use async/await in place of .then and .catch
// Promises can be used in with async/await syntax for cleaner and more
// readable asynchronous code. 
async function fetchData(params) {
    try{
        const result = await myPromise;
        console.log('fetchData result....',result);
    }catch(err){
        console.error('fetchData error....',err);
    }
};

fetchData();


//3..chaining promises:- we can chain promises using .then and .catch methods
// when multiple asynchronous operations need to be performed in sequence,
// chaining promises can be a good option.

myPromise.then((res)=>{
    console.log('first then...',res);
    return 'Next operation by abdul kadir khan';
}).then((nextResult)=>{
    console.log('second then...',nextResult);
}).catch((err)=>{
    console.error('error in chaining promises...',err);
});

//4.combining promises:- when multiple promises need to be resolve together
// we can use Promise.all() method to combine promises.

const promises1 = Promise.resolve('Promise 1 resolved');
const promises2 = Promise.resolve('Promise 2 resolved');
const promises3 = Promise.resolve('Promise 3 resolved');

Promise.all([promises1,promises2,promises3]).then((result)=>{
    console.log('All promises resolved...',result);
})

//5.. combining promises:- Promise.allSettled() method can be used to combine
// waits for all promises to completed. regardless of whether they are
// resolved or rejected.

const promises4 = Promise.reject('Promises has been rejected');
Promise.allSettled([promises1,promises2,promises3,promises4]).then((result)=>{
    console.log('All promises settled...',result);
});

//Promise.race:- resolves or rejects the as soon as any one promise settles.
// first promise need to be completed.
const slowPromise = new Promise((resolve)=> setTimeout(resolve,2000,'Slow'));
const fastPromise = new Promise((resolve)=> setTimeout(resolve,1000,'Fast'));

Promise.race([slowPromise,fastPromise]).then((result)=>
    console.log(result) // Fast
);