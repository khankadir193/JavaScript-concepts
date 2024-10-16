// function createCaffeineAddict(coffeeType){
//     const additction = `addicted to ${coffeeType}`;
//     console.log('outer function..',additction);
//     return function getHigh(){
//         const highMessage = `Feeling weired and ${additction}`;
//         console.log(highMessage);
//     };
// };
// const latteLover = createCaffeineAddict('Latte');
// const expressoLover = createCaffeineAddict('expresso');
// latteLover();
// expressoLover();

//arrow function
const createCaffeineAddict = (coffeeType) => {
    const addiction = `addicted to ${coffeeType}`;
    console.log('outer function..', addiction);
    return () => {
        const highMessage = `Feeling weird and ${addiction}`;
        console.log(highMessage);
    };
};

const latteLover = createCaffeineAddict('Latte');
const espressoLover = createCaffeineAddict('espresso');
latteLover();
espressoLover();


//another approach  for closure..
const  greet = (name) =>{
    return ()=>{
        console.log(`Hi ${name}`);     
    }
};

greet('Abdul Kadir Khan')(); //calling the function
