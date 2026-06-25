//what is promise:-promise is a javascript object which is used handle the async operation.
//it's define the for give you the future result whether success/failed.
//promise having 3 states
//1.Fulfilled:-l.p
//

let promise = new Promise(function (resolved,rejected){
    let success = false;
    if(success){
        resolved('Task completed successfully...');
    }else{
        rejected('Task has been faild');
    }
});

promise.then((pr)=>{
    console.log('success response:-',pr);
}).catch((err)=>{
    console.log('promise is getting the error:-',err);
}).finally(()=>{
    console.log('Done....');
})

//async/await:- this is the write the promise in modern way it's built on over the promise.
// it's always return the promise. await is pause the line until promise is resolved.

async function promiseExample(){
    try{
        const result = await promise;
        console.log('result...',result);
    }catch(error){
        console.log('getting error',error);
    }
}
promiseExample();

//i have above code doubt order of execution.reject promise is different order.
// and resolve promise is different order.

//👉 Microtask queue order depends on WHEN they are scheduled, not just that they are microtasks