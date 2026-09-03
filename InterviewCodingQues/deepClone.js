const original = {
  name: "John",
  age: 30,
  address: {
    city: "Delhi",
    country: "India"
  },
  skills: ["JavaScript", "React"],
  company: {
    name: "ABC",
    details: {
      founded: 2020
    }
  }
};

const deepClone = (original)=>{
    if(original === null || typeof original !== 'object'){
        return original;
    }

    let copy = Array.isArray(original) ? [] : {};

    for(let element in original){
        // console.log('---',typeof element);
        copy[element] = deepClone(original[element]);
    } 

    return copy;
}
const clone = deepClone(original);
// console.log('---',clone);

clone.address.city = 'orakhpur';
console.log('original...',original);
console.log('clone...',clone);

// For a 4+ year JavaScript interview, the natural next question is:
// Can you modify your deepClone function to handle circular references?