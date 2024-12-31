function outerFunction(outerVariable){
    function innerFunction(){
        console.log(outerVariable);
    };

    innerFunction()
};

const outer = outerFunction('first outer function');
outer()