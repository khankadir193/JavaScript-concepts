function deepClone (obj){
    if(obj === null || typeof obj !== "object"){
        return obj;
    }

    let copy = Array.isArray(obj) ? [] : {};

    for(let key in obj){
        copy[key] = deepClone(obj[key]);
    }

    return copy;
};


const user = {
    name:'Abdul Kadir Khan',
    address:{
        city:'Gorakhpur',
        zipCode:{
            zidAdd:272151
        }
    }
};

const copy = deepClone(user);
copy.address.city = 'Mumbai';
console.log('original object..',user)
console.log('copied object...',copy);