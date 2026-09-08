function displayElements(obj){
    const tempArr = [];

    for(let element in obj){
        if(typeof obj[element] === 'object'){
            const res = displayElements(obj[element]);
            tempArr.push(...res);
        }else{
            tempArr.push(obj[element]);
        }
    }

    return tempArr;
}
// const numbers = {
//     one: 1,
//     two: 2,
//     values: [3, 4, 5, 6, 7],
//     three: 8,
//     nested: {
//         a: 9,
//         b: 10,
//         c: 11
//     },
//     four: 12
// };

const numbers = {
    id: 101,
    name: "Amit",
    salary: [25000, 30000, 35000],
    department: "IT",
    info: {
        experience: 3,
        location: "Mumbai",
        role: "Developer"
    },
    status: "Active"
};

// const numbers = {
//     id: 101,
//     name: "Amit",
//     status: null // <-- What happens here?
// };

console.log(displayElements(numbers));