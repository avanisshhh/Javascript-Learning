var User={
    name:"",
    getUserName:function(){
        console.log(`User name is :${this.name}`);
    },

}

var avanish=Object.create(User);
console.log(avanish);
avanish.name="Avanish Kumar"
avanish.getUserName();


var sam =Object.create(User,{
    name:{value:"sammy"},
    courseCount:{value:3}
})