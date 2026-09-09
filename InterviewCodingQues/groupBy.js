// function groupBy(arr){
//     const res = arr.reduce((acc,curr)=>{
//         if(acc[curr.role]){
//             acc[curr.role].push(curr);
//         }else{
//             acc[curr.role] = [curr];
//         }
//         return acc;
//     },{})

//     console.log('res',res);
// }

//second inshort approach
function groupBy(arr) {
    // return arr.reduce((acc, curr) => {
    //     (acc[curr.role] ??= []).push(curr);
    //     return acc;
    // }, {});
    //or this way


    return arr.reduce((acc, curr) => {
        if (acc[curr.role] === undefined || acc[curr.role] === null) {
            acc[curr.role] = [];
        }

        acc[curr.role].push(curr);

        return acc;
    },{})
}

const arr = [
    { name: "A", role: "dev" },
    { name: "B", role: "tester" },
    { name: "D", role: "dev" },
    { name: "E", role: "ui" },
    { name: "F", role: "tester" },
    { name: "G", role: "dev" },
]

console.log(groupBy(arr));

