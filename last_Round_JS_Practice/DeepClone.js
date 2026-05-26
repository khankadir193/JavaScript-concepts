const user = {
    name:'Abdul Kadir Khan',
    address:{
        city:'Gorakhpur',
        zipCode:{
            zidAdd:272151
        }
    }
}

const copy = {...user};
copy.name = 'Jabir';
copy.address.city = 'pandri';
console.log('original Object',user); // name will be unchanged because it's copied direct primitive value.
console.log('copied object',copy); //  address object will be changed for both parent/child object because
//it's copied the reference of mememory and it's pointing same location.

//deep clone methods
const clone = structuredClone(user);
clone.address.city = 'lucknow';
console.log('clone original obj',user);
console.log('clone copied obj',clone);

// another method is the JSON.stringify. this is the old method.
console.log('json',JSON.stringify(user));
// Most Important Interview Point
// Spread operator (...) does NOT do deep clone.

