const myPromise = new Promise((resolve, reject) => {
    const success = false;
    try {
        if (success) {
            resolve('Promise has been resolved...');
        } else {
            reject('Promise has been rejected...');
        };
    }catch(err){
        console.error('getting error...');
    }

});

myPromise.then((res)=>{
    console.log('result Passed....',res);
}).catch((err)=>{
    console.log('getting promise rejected error');
})


