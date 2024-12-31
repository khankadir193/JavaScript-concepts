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