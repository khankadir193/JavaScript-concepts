const person = {
    name:"Abdul Kadir",
    greet(lastName){
        console.log(`Hi my firstName is ${this.name} && lastName is ${lastName}`);
    }
};

person.greet('Khan');