//shallow copy:- 1.shallow copy stores the reference of the original object
//2. whenever the shallow copy object is changed the original object is also changed.
//3. a shallow copy is faster than deep copy.

const originalObj = {
    name:"Abdul Kadir Khan",
    age:25,
    address:{
        home:'Gorakhpur',
        zipCode:'272151'
    }
};

const shallowCopy = {...originalObj};
shallowCopy.address.home = 'Lucknow';
shallowCopy['address']['zipCode'] = '275178';

console.log('originalObj...',originalObj);
console.log('shallowCopy...',shallowCopy);
