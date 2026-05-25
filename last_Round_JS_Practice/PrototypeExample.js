// defined the constructor function.
// constructor is a special type of methods or function it's used to create and initialize the object 
// instace.
function Person(name){
    this.name = name;
    return name;
};

Person.prototype.dispay = function (){
    console.log('prototypes methods.');
};

Person.prototype.khan = function (name){
    console.log('Hello,Mr. Abdul Kadir Khan',name);
};

const p1 = new Person('Kadir');
console.log('p1',p1);
p1.dispay();
p1.khan('Abdul Jabir Khan');