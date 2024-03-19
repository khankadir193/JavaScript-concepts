// callback function is a function which is called as parameter to another function.
function weightDisplayer(item){
    console.log('itemDisplay...',item);
};

function calculateTotalWeight(arabicWeight,robustWeight,myCallBack){
   const totalWeight = arabicWeight + robustWeight;
   myCallBack(totalWeight);
};

calculateTotalWeight(120,340,weightDisplayer);