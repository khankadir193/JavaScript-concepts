//pick element from both side..
function pickfromBothSide(arr,B){
    let totalSum = [];
    B = B - 1;
    let firstWay = arr[0] + arr.slice(-B).reduce((acc,curr)=> acc + curr);
    console.log('firstWay..',firstWay);
    let secondWay = arr[arr.length-1] + arr.slice(0,B).reduce((acc,curr)=> acc + curr);
    console.log('secondWay..',secondWay);
    let thirdWay = 0;
    for(let i=0;i<=B;i++){
       thirdWay += arr[i];
    };

    console.log('thirdWay..',thirdWay);

    let fourthWay = 0;
    for(let i=arr.length-1;i>=B;i--){
       fourthWay += arr[i];
    };
    console.log('fourthWay..',fourthWay);

    return Math.max(firstWay,secondWay,thirdWay,fourthWay);
};

const arr = [5, -2, 3 , 1, 2];

console.log('maxValueFromArrayElements..:-',pickfromBothSide(arr,3));

//javascript string problems..

// https://www.interviewbit.com/problems/javascript-strings/

//many problems..
// https://www.interviewbit.com/courses/fast-track-js/