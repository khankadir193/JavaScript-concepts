// function outerFunction(outerVariable){
//     function innerFunction(){
//         console.log(outerVariable);
//     };

//     return innerFunction;
// };

// const outer = outerFunction('first outer function');
// outer()


const arrowFun = (name)=>{
    return (lastName) =>{
        console.log('name...',name,'lastName',lastName);
    };
};

const newFun = arrowFun('Abdul Kadir')('Khan')
