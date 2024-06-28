//hoisting is a default behaviour of javascript.it's moving the top of the scope.
//hoisting only variable declaration not initialization.
// accessing var befor it's declaration.
// hoisting keep in mind we can avoid unexpected behaviour and bugs of our code.

console.log(message); //output : undefined
var message = "The variable Has been hoisted";

var message;
console.log(message);
message = "The variable Has been hoisted";


//function invoking...
message("Good morning"); //Good morning
function message(name) {
  console.log(name);
}