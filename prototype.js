//prototype:- prototype is a object. we can inherit the method and property from other
//object to object.

function Person(name){
    this.name = name;
};

//Adding a method to the protype of person.
Person.prototype.sayHello = function(){
    console.log(`Hello?,${this.name}`);
};

const personObj = new Person("Abdul Kadir Khan");
console.log('personObj....',personObj);
personObj.sayHello();