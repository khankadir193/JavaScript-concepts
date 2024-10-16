const person = {
    name:"Abdul Kadir",
    greet(lastName){
        console.log(`Hi my firstName is ${this.name} && lastName is ${lastName}`);
    }
};

person.greet('Khan');

//call method

function greet(profession){
    console.log(`my name is ${this.name} && my profession is ${profession}`);
};

const obj = {
    name:"Abdul Kadir Khan"
};

greet.call(obj,'Software Engineer');


//this keyword is reference to the context. which  context is calling the function.
// suppose if i declare a function inside an object then this keyword will be reference to the object.
// if i declare a function outside an object then this keyword will be reference to the global object.