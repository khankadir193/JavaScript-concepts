
const task1 = ()=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve('Task1');
        },1000)
    })
};

const task2 = ()=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve('Task2');
        },1000)
    })
};

const task3 = ()=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve('task3');
        },1000)
    })
};


const runPromiseSeq = async()=>{
    console.log(await task1());
    console.log(await task2());
    console.log(await task3());
}

runPromiseSeq();