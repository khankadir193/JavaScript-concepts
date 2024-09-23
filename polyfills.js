function userName(){
    console.log(this.name,' ',this.address);
};

function getName(args){
    console.log(`${this.name} live in`,args);
};

const obj = {
    name:"Abdul Kadir Khan",
    address:"Uttarpradesh,Gorakhpur"
};

//MyBind method is a polyfill for bind method
Function.prototype.MyBind = function (obj){
    const fun = this;
    console.log('fun...??',fun);
    return function (args){
        fun.call(obj,args);
    }
}
// const newFunction = userName.bind(obj); // this is the call back function for bind method
const newFunction = getName.MyBind(obj);
newFunction('mumbai'); // Output: Abdul Kadir Khan