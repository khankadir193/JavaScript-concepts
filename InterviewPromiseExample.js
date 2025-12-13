//promise is a object used to handle asyncronous operation..

// const firstAsync = async () => {
//     // console.log('first async');
//     return 'First Promise';
// };

// const secondAsync = async() => {
//     // console.log('second async');
//     return 'Second Promise';
// };

// const thirdAsync = async() => {
//     // console.log('third async');
//     return 'Third Promise';
// };

//promise lets you multiple promise run parllel and get you promise result together once
// all promise is succeed..if one promise is failed it will be fail all promise..
//we can fetch multiple api's at once.

const p1 = Promise.reject('first promise');
const p2 = Promise.resolve('second promise');
const p3 = Promise.resolve('third promise');

Promise.all([p1, p2, p3])
    .then((res) => {
        console.log('result promise', res);
        return 'khan'
    }).catch((err) => {
        console.log('error has been occured..', err);
        return 'kadir'
    })
    .finally((finl) => {
        console.log('done for the all promise...', finl);
    })

//promise.allSettled();

// wait all promise to finish whether succes or faild.
// it never fails always returns an array of results.
console.log('----promise allSettled()----');
Promise.allSettled([p1, p2, p3]).then(console.log);

//Promise.race();
//returns the result of first promise that settles whether resolve or rejected.
console.log('-----race promise----');
Promise.race([p1, p2, p3])
    .then((res) => console.log('res of race promise:--', res))
    .catch((err) => console.error('error of the race promise:--', err))


//promsie any:- returns first succesfull promise rest are the promise if failed..

Promise.any([p1, p2, p3]).then((response) => {
    console.log('response of any() promise..:---', response);
})
    .then((err) => {
        console.log('error of the any promise :', err);
    })