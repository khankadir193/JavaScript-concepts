//what is optional chaining
//Ans:- optional is used for access the nested property without throwing error if something
// is null or undefined
//OR
// Safely access nested object properties without throwing an error if something is null or 
// undefined.

const user = {};

console.log(user.name?.address);

//Nullish Coalescing(??)
//Provides a default value only when left side null or undefined.
// returns right side only if null/undefined
const age = null;
console.log(age ?? 18);

//Bonus Brain Teaser
console.log([] + []);
console.log({} + {});

//slice :- slice method used for extract the portion of elements (source to destination).
// can't mutate(change) original array
//returns new array..
//copying or reading data from the array.
//syntax:- (start,end)
const arr = [1, 2, 3, 4, 5];
console.log(arr.slice(1,3));

//splice :- splice methods used for add/remove/replace elements from the array.
//we can mutate (change) the original array.
//modifying data or array..
//syntax (start,deleteCount,...items);
const arr2 = [10,20,30,40,50];
let result = arr2.splice(1,2);
console.log('result..',result);
console.log('after delete elements',arr2); // after deleted 2 elements.
let result2 = arr2.splice(2,0,100,110);
console.log('after add the elements...',arr2); // after add the elements
let result3 = arr2.splice(2,1,0);
console.log('result3',result3);
console.log('afterReplaceElements',arr2);