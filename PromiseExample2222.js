//explicitly 
const myPromise = new Promise((resolve, reject)=>{
    try{
        if(resolve) {
            resolve('Promise resolved successfully');
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