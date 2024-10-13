const promise = new Promise(function (resolve,reject){
    const success = true;

    if(success){
        resolve('Promises has been successfully resolved...!');
    }else{
        resolve('Promises has been failed...!');
    }
});

promise.then(function(msg){
    console.log('msg..?',msg);
}).catch(function(err){
    console.log('error...',err);
})