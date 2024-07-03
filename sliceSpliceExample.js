//slice method is used for extracting the elements from source to target index.
// it will return new array.
let arr = [10,20,30,40,50];
console.log('sliceExample...',arr.slice(2,4));
console.log('sliceExample...',arr.slice(0,4));

//splice method:- splice is used for add/remove the elements from the array..
//splice method could modify original array..
//first args:- is index whether we need to remove/add the elements.
//second args:- is how many elements need to remove/add.
//third or addition args is pointing to add the element into the array.
let arr2 = [1,2,3,4,5,6,7];
let arr3 = [1,2,3,4,5,6,7];
let arr4 = [1,2,3,4,5,6,7];
console.log('first..',arr2.splice(1)); // removing ele from indx to 1 end
console.log('second..',arr3.splice(3,2)); // retrun only removed elements..
console.log('originalArray..',arr3);
console.log('addingElements..',arr4.splice(2,5,'k','a','d','i','r'));
console.log('originalArrayAfterRemoved..',arr4);




