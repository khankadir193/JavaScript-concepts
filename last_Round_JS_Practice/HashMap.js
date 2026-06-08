// How to use Map in JavaScriptTo use a HashMap in JavaScript, you create a new instance of the 
// built-in Map class.

const newMap = new Map();
newMap.set('apple',34);
newMap.set('mango',54);
newMap.set('orange',634);
newMap.set('lipistic',32);

console.log(newMap.delete('orange'));
console.log(newMap.get('orange'));
console.log(newMap.has('orange'));

// In javascript {} is also used the key/value pair but in coding problem you should use Map.

// feature                        Map(HashMap)                                  Object
// Data Type                key can be any data type even             keys can be only string,number,
//                          objects/ or arrays                     or symbols.
//speed                    highly optimized for frequent              better for ready heavy operation
//                           adding or deleting.                      where keys are strings.
//size                     you can get the size instantly             you have to manually calculate
//                         using newMap.size.                         the size.

//When to use HashMaps in coding problemsYou will use HashMaps in almost every coding challenge 
// that involves frequency, tracking, or matching. For example:

//Counting things: Finding how many times each character appears in a string.Two-Sum problem: 
// Storing numbers and their indexes as you loop through an array to quickly see if a complementary 
// number (the "difference") has already been visited.Removing Duplicates: Finding unique elements 
// across a massive dataset without slowing down your code.