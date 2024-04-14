const obj = {
    name:"Abdul Kadir Khan",
    address:{
        street:"Golghar",
        city:"Gorakhpur",
        state:"Uttarpradesh",
        zipCode:272151
    },

};

//i going to access the property...
console.log('obj.name',obj.name);
console.log('obj["name"]',obj['name']);
console.log('obj.address.city',obj.address.city);
console.log('obj["address"]["city"]',obj["address"]["city"]);
