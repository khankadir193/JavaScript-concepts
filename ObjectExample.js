const obj = {
    name:'Abdul Kadir Khan',
    address:'Gorakhpur',
    greet:function(){
        console.log(`hi my name is ${this.name}`);
    }
};

console.log('obj....',obj);
obj.greet();

//assign method
const obj2 = {
    name:'Abdul Jabir Khan',
    address:'Basti'
};

Object.assign(obj,obj2); // it is used for copying object(target,source);
console.log('obj2222',obj);

//freez method is used for we can modify the object
Object.freeze(obj2);
obj2.name = 'khan';
console.log('afterFreezobj',obj2);

//seal method:- this method is used for preventing add/remove but allow modification
Object.seal(obj);
obj['addProperty'] = 'newProperty'; // this will not work
obj['name'] = 'Rehan khan'; // it will work accordingly...
console.log('afterSealMethod...',obj);

