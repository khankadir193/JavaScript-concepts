//call :- invoke the function immediately setting this explicitly and passing argument one by one.
function greetFun(state,city){
    console.log(this.fullName+' '+this.address+' ',state,city);
};

const obj = {
    fullName:'Abdul Kadir Khan',
    address:'SiddharthNagar'
};

greetFun.call(obj,'Uttarpradesh','Gorakhpur');

//apply :- same as call method but argument passed as an array
console.log('apply method functionality...');

function greetApply(...args){
    console.log(this.name+' '+args);
};

const user = {
    name : 'Kadir'
};

const arr = [12,3,45,49];
greetApply.apply(user,arr);

//bind :- does not execute immediately.
// returns a new function with this parmanently bound.
// return a new function which we can execute later..
console.log('bind method starting.............');
function greet(city,country){
    console.log(this.firstName+' '+this.lastName,city,country);
};

const person = {
  firstName: 'Bob',
  lastName: 'Johnson'
};

const boundFunction = greet.bind(person,'tokyo','Japan');
boundFunction();
