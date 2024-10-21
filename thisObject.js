 var obj = {
    name:  "rehan",
    getName: function(){
    console.log(this.name);
  }
     
}
       
var getName = obj.getName;
       
var obj2 = {name:"kadir", getName };
obj2.getName();