function Person(name){
    this.name = name;
};

Person.prototype.display = function(){
    return `This is my name ${this.name}`;
};

const perObj = new Person("Abdul Kadir Khan");

console.log(perObj.display());