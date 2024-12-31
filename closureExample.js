function outerFunction(outerVariable){
    function innerFunction(){
        console.log(outerVariable);
    };

    return innerFunction;
};

const outer = outerFunction('first outer function');
outer()