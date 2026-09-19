const nestedObject = (obj , parentKey = '') => {
    if(typeof obj !== 'object' || obj === null ){
        return obj;
    }

    let copy = {};

    for(let ele in obj){
        let fullPath = parentKey ? `${parentKey}.${ele}` : ele;
        // console.log('full path...',fullPath);
        const value = obj[ele];

        if(typeof obj[ele] === 'object'){
            const nestObj = nestedObject(obj[ele] , fullPath);
            console.log('nested obj...',nestObj);
            Object.assign(copy,nestObj);
        }else{
            copy[fullPath] = value;
        }  
    }

    return copy;
};

const input = {
  user: {
    name: "John",
    address: {
      city: "Delhi"
    }
  }
};

// const input = {
//     user: {
//         name: "John",
//         age: 30,
//         address: {
//             city: "Delhi",
//             country: "India"
//         }
//     },
//     company: {
//         name: "ABC"
//     }
// };

console.log(nestedObject(input));

