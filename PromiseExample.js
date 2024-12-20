const promise = new Promise(function (resolve,reject){
    const success = false;

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
});

return new Promise((resolve, reject) => {
  if(resolve){
    resolve('This promise has been resolved....');
  }else{
    reject('This promise has been rejected...');
  }
});
