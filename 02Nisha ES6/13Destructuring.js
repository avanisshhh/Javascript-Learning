 

 const user={
    firstName:'Avanish',
    lastName:'Kumar',
    
    address:{
        city:'Kanpur',
        country:'India',
    }
 }

 //const name=user.firstName;
 //const { firstName:fname, lastName}=user;
 //console.log(firstName,lastName);
 //const { firstName:fname, lastName}=user;
 //console.log(fname);

//  const { firstName, lastName, age=10}=user;
//  console.log(age);

//  const { firstName, lastName, age=10,
//   address:{city}}=user;

//  console.log(city);


 const {firstName, lastName, ...userInfo}=user;
 console.log(firstName);
 console.log(userInfo,"l30");


 //Array implementation

 const scores=[10,20,99,334,899];
 //console.log(scores[0]);
 const {x,c}=scores;
 console.log(x);
 console.log(c);
 //console.log(other);
 
