// Implement a simple promise-based delay function.
function delay(delay){
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve('Promise has been resolve...');
        },delay)
    })
}

const handlePromise = async()=>{
    try{
        let result = await delay(5000);
        return result;
    }catch(err){
        console.log(err);
        throw new Error('getting error');
    }
}
handlePromise().then((val)=> console.log('---',val));