function display(arr){
    let large = -Infinity;
    let secondLarge = -Infinity;

    for(const num of arr){
        if(num > large){
            secondLarge = large;
            large = num;
        }else if(num>secondLarge && num !== large){
            secondLarge = num;
        }
    }

    
    console.log(',,,,',secondLarge);
}
// const arr = [10, 5, 20, 8, 20];
// const arr = [1, 2, 3, 4, 5];
// const arr = [5, 4, 3, 2, 1] 
// const arr = [10,20];
const arr = [100, 50, 80, 90]
display(arr);