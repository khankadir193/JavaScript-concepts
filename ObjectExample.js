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

