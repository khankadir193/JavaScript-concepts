let paintColor = 'red';
const paint = (()=>{
    return {
        changeColorToBlue: () =>{
            paintColor = 'Blue';
            return paintColor;
        },
        changeColorToGreen: () =>{
            paintColor = 'Green';
            return paintColor;
        }
    }
})();
console.log(paint.changeColorToBlue());
console.log(paint.changeColorToGreen());
