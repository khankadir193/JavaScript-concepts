const obj = {
    name:'Abdul Kadir Khan',
    address:{
        zipCode:272151,
        city:'Bansi',
        distic:'SiddharthNagar'
    },
};

for(let [key,value] of Object.entries(obj)){
    console.log(key,value);
}