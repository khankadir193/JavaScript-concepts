// scope: where we can access the specific variable/functions in our code known as scope.
// lexcal environment:- A function remembers the variables around it where it was created.
// and refer to it's parent scope.
// Lexical means "where code is physically written.


function outerFunc(){
    let a = 10;
    innerFun();
    function innerFun(){
        console.log(a);
    }
}

console.log(outerFunc());