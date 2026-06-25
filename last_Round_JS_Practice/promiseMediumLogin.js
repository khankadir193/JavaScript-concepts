function login(userName,password){
    return new Promise((resolve,reject)=>{
        //first approach for different-2 setTimeout

        // if(userName === 'Kadir' && password === '1234'){
        //     setTimeout(()=>{
        //         resolve('login has been successfull');
        //     },3000);
        // }else{
        //     setTimeout(()=>{
        //         reject('Login has been failed');
        //     },3000);
        // }

        //second approach same setTimeout.

        setTimeout(()=>{
            if(userName === 'Kadir' && password === '1234'){
                resolve('Login has been success.');
            }else{
                reject('Login has been failed');
            }
        },3000)
    })
};

login('Kadir','1234').then(console.log).catch(console.log);