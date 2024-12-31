//encapsulation:- bundling data (properties) and methods (functions) inside an object.
//restricting direct access to some components to enforce modularity and maintainability.
class Car {
    constructor(brand,model){
        this.brand = brand;
        this.model = model;
    };

    displayDetails(){
        return `Car: ${this.brand} and ${this.model}`
    };
};

const carRef = new Car('Toyota','Fortuner');
console.log(carRef.displayDetails());

//inheritance:- inherit the properties and methods from parent class into child class.
console.log('inheritance');
class Vehicle {
    constructor(type){
        this.type = type;
    }


    displayVehicleDetails(){
        return `Vehicle Type:- ${this.type}`
    };
}

class bike extends Vehicle{
    constructor(type,brand){
        super(type);
        this.brand = brand;
    };

    
    describe(){
        return `${super.displayVehicleDetails()} it's a bike ${this.brand}`;
    }
};

const inherObj = new bike("Four wheeler","Yamha");
console.log(inherObj.describe());

console.log('Abstraction');

class BanckAccount {
    #balance;
    constructor(initialBalance){
        this.#balance = initialBalance; 
    };

    desposite(amount){
       this.#balance += amount; 
    };

    withdraw(amount){
        if(amount>0 && this.#balance>amount){
            this.#balance -= amount;
        };
    };


    getBalance(){
        return this.#balance;
    };
};

const bankAcc = new BanckAccount(1000);
bankAcc.desposite(200);
bankAcc.withdraw(400);
console.log('abstraction balance:-------',bankAcc.getBalance());

console.log('polymorphism...');

class Dog {
    speak(){
        console.log('Dog is barking...');
    }
};

class Cat extends Dog{
    speak(){
        console.log('Cat is Sparkling...');
    }
};

class Lion extends Cat{
    speak(){
        console.log('Lion is Roaring...');
    }
};

const animals = [new Lion(),new Cat(),new Dog()];

animals.forEach((animal)=> animal.speak());
