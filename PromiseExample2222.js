//explicitly 
const myPromise = new Promise((resolve, reject)=>{
    resolve = false;
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


//using async/await:- we can use async/await in place of .then and .catch
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