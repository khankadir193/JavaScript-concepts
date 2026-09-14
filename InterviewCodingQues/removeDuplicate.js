// function removeDuplicate(arr){
//     const tempArr = [];
//     const visited = {};

//     for(const element of arr){
//         visited[element] = true;    
//     }

//     for(let element of arr){
//         if(visited[element]){
//             tempArr.push(element);
//             visited[element] = false;
//         }
//     }


//     return tempArr;
// };

// const arr = [1, 2, 2, 3, 3, 4];
// console.log(removeDuplicate(arr));



function findDuplicateElement(arr){
    const tempArr = [];
    const visited = {};

    for(const element of arr){
        // console.log(element);
        if(visited[element]){
            tempArr.push(element);
            visited[element] = false;
        }else{
            if(visited[element] !== false)
            visited[element] = true;
        }
    }

    return tempArr;
};

const arr = [1, 2, 2, 3, 3, 4,2,2,2,2,2,3,3,4,5,,4,4,5];
console.log(findDuplicateElement(arr));