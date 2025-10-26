//short and concise way..
//does not have arguments object 
//it's not pointing this object
const add = (a,b)=> a+b;
console.log('short-concise',add(10,23));
//regular function
//it's having own argument objects
//it's pointing this objects
function addReg(a,b){
    return a+b;
};
console.log('regular-function',addReg(32,23));
