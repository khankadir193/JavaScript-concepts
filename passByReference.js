//pass by reference means passing the reference of the object to function
// which pointing same memory address of the object.
// when objects(object,array,function) are passed, they are pass by reference.
// In JavaScript, objects are passed by reference, which means that when a function
// modifies an object passed as an argument, the original object is modified as well.


const obj = {
    name:"Abdul Kadir Khan",
    address:"Uttarpradesh,Gorakhpur"
};

function userName(obj){
    obj.name = 'Abdul Jabir Khan';  //pass by reference 
};

userName(obj);
console.log('obj...',obj); //obj... { name: 'Abdul Jabir Khan', address: 'Uttarpradesh,Gorakhpur' }