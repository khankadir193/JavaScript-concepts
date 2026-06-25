let delay = new Promise(function (resolve,reject){
    setTimeout(function(){
        resolve('wait for 3 seconds...');
    },3000);

    //understanding of promsie and i uncomment this it will run ony one why?
    // let flag = true;
    // if(flag){
    //     reject('promise rejected...');
    // }
});

delay.then(console.log).catch(console.log)