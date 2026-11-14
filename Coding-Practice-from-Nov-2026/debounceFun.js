const debounce = (fun,delay)=>{
    let timer = null;

    return (...args)=> {
        clearTimeout(timer);
        timer = setTimeout(()=>{
            fun(...args);
        },delay)
    };
};

const handleChange = (input)=>{
    console.log('input...',input);
};

const debounceHandler = debounce(handleChange,100);
debounceHandler('A');
debounceHandler('Ab');
debounceHandler('Abd');
debounceHandler('Abdu');
debounceHandler('Abdul');
debounceHandler('Abdul Kadir Khan');