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