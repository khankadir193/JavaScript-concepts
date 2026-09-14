/*
call method:- invokes the function immediately and passes argument one by one.
apply method:- invokes the function immediately and pass the argument an array.
bind method:- bind does not execute the function immediately. it returns new function
with this parmanently associated with the object you provide. or we call it later.
*/
const user = {
    name:"Abdul Kadir Khan",
    age:30,
}

function greet(message,city){
    console.log('call method :- ',`${message} my name is ${this.name} and i am from ${city}`);
}

greet.call(user,'hello','Mumbai');

function applyExample(city,education){
    console.log('appyMethod:- ',`Hello my name is the ${this.name} and my age: ${this.age} ${city} ${education}`);
};

applyExample.apply(user,['mumbai','MCA']);

function bindMethod(){
    console.log('This is the bind method :-',`my name is ${this.name} and my age is ${this.age}`);
};

const newBindMethod = bindMethod.bind(user);

newBindMethod();
