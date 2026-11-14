const removeDuplicatesObj = (users)=>{
    const tempArr = [];
    const set = new Set();
    const uniqueID = [];
    for(let element of users){
        if(!uniqueID[element.id]){
            tempArr.push(element)
            uniqueID[element.id] = true;
        }
    }


//    for(let element of users){
//         if(!set.has(element.id)){
//             tempArr.push(element)
//             set.add(element.id,true);
//         }
//     } 

    return tempArr;
};

const users = [
    { id: 1, name: "Abdul" },
    { id: 2, name: "Rahul" },
    { id: 2, name: "Abdul Khan" },
    { id: 2, name: "Amit" },
    { id: 3, name: "Rahul Sharma" }
];

console.log(removeDuplicatesObj(users));


