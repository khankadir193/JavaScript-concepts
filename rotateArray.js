function RotateArray(arr,rotate){
    const rotateElement = arr.slice(0,rotate);
    const newArr = arr.slice(rotate,arr.length);

    const combinedArr = [...newArr,...rotateElement];

    // console.log('rotateElement...',rotateElement);
    // console.log('newArr',newArr);
    console.log('combinedArr',combinedArr);
};

const arr = [1,2,3,4,5,6]
const d = 2;
RotateArray(arr,d);

//rotate the array...
// https://www.geeksforgeeks.org/batch/gfg-160-problems/track/arrays-gfg-160/article/MjM5OA%3D%3D``