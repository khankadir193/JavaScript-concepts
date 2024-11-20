//Deep copy:deep copy is a process in which the copying process occurs 
//recursively. It means, everything is copied and included in new object/array, 
//including all objects, arrays, functions, etc. that are nested in the 
//original object/array.
//whenever made changes to the copied object, it doesn't affect the original object.
// deep copy slower than shallow copy.

const originalObj = {
    name: "John",
    age: 30,    
    hobbies: ["reading", "swimming", "traveling"],
    address: {
        street: "123 Main St",
        city: "New York",
        state: "NY"
    }
};

// deep copy
const deepCopy = JSON.parse(JSON.stringify(originalObj));
deepCopy.hobbies.push("hiking");
deepCopy.address.street = "456 Broadway";
deepCopy["address"]["city"] = "San Francisco";

console.log("Original Object: ", originalObj);
console.log("Deep Copy: ", deepCopy);