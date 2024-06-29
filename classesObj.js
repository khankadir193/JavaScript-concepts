class Bike {
    constructor(color,modal){
        this.color = color;
        this.modal = modal;
    };

    getDetails(){
        return 'color is:-'+' '+this.color+' '+'modal is:-'+this.modal;
    };
};

const newObj = new Bike('purple','2012');
console.log(newObj.getDetails());