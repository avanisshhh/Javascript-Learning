const avanish={
    firstName:"Avanish",
    lastName:"kumar",
    role:"Admin",
    courseCount:3,
    getInfo:function(){
        console.log(`
        first name is${this.firstName}
        last name is ${this.lastName}
        his role is ${this.role}
        and he is learning ${this.courseCount}
        
        `);
    }
};

const dj={
    firstName:"Sam",
    lastName:"Singh",
    role:"Sub-Admin",
    courseCount:5,

}
//avanish.getInfo(); //this can be called easily 
//dj.getInfo();  //this is not working bcs of no refernce and there 
               //this is pointing towards current avanish object i.e we are using bind 


   var djInfo=  avanish.getInfo.bind(dj) //bind give u a refernce back and u hv to called that method
   djInfo();         //method call

   var djInfo1=  avanish.getInfo.call(dj)
   djInfo1();
   
