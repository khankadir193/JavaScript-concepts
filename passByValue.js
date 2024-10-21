//when ever primitive type (float,int,bool,null,undefined) passed into the the function
// know as the pass by value..

function passByValue(x){
    x = 30;
    console.log('x....',x);
};
let a = 10;
passByValue(a);

console.log('a....',a); // it will not change the original value.