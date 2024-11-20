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