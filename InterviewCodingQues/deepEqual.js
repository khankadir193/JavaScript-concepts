const deepEqual = (obj1,obj2)=>{
    if(obj1 === obj2){
        return true;
    }

    if(obj1 === null || obj2 === null || typeof obj1 !== 'object' || typeof obj2 !== 'object'){
        return false;
    }

    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);

    if(Array.isArray(obj1) !== Array.isArray(obj2)){
        return false;
    }

    if(keys1.length !== keys2.length){
        return false;
    }

    for(let key of keys1){
        // console.log('key...',key)
        if(!Object.hasOwn(obj2,key)){
            return false;
        }

        if(!deepEqual(obj1[key],obj2[key])){
            return false;
        }
    }

    return true;
}

const obj1 = {
  name: "Rahul",
  address: {
    city: "Delhi"
  }
};

const obj2 = {
  name: "Rahul",
  address: {
    city: "Delhi"
  }
};
console.log(deepEqual(obj1,obj2));