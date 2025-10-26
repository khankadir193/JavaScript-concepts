// const obj = {
//     name:"Abdul Kadir Khan",
//     address:"Gorakhpur, Uttarpradesh",

// };

// console.log(obj.surName);

//The optional chaining operator ?. allows you to safely access deeply nested object properties 
// without worrying about encountering undefined or null errors.

const user = { name: "Alice", address: { city: "Wonderland" } };

console.log(user?.address?.city); // "Wonderland"
console.log(user?.contact?.phone); // undefined (does not throw an error)


//nullish operator :- this operator check only null/undefined operator.

