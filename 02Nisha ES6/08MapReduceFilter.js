 
  //Map     -modified array
  const user=['sam','peter','daniel'];
  function transform(value) {
    return value.toUpperCase();
  }
  //const modifiedUser=user.map(transform);
const modifiedUser=user.map(value=>value.toUpperCase());
  //console.log(modifiedUser);

  const user2=[
    {id:101,name:'Alisha'},
    {id:102,name:'Kunal'}
  ];
  const list_user=user2.map(value=>value.name);
  //console.log(list_user);


  //filter
  const employee=[
    {id:101,name:'Sam',profile:'SDE'},    
    {id:102,name:'Sam2',profile:'SDE'},
    {id:103,name:'Sam3',profile:'JDE'},
    {id:104,name:'Sam4',profile:'SDE'},
    {id:105,name:'Sam5',profile:'JDE'},

  ];
//   const experiencedEmployee=employee.filter(function (emp) {
//     return emp.profile==='SDE';
    
//   });
  const experiencedEmployee=employee.filter(emp=> emp.profile==='SDE'
    
  );

  const juniorEmployee=employee.filter(function (emp) {
    return emp.profile==='JDE';
  })

  // console.log('SDE',experiencedEmployee);
  // console.log('JDE',juniorEmployee);


  //reduce only return a single o/p value doesnt change the orginal array..

  const score=[100,200,40,10];
  // function calculate(score) {
  //   let sum=0;
  //   for (let index = 0; index < score.length; index++) {
  //    sum=sum+score[index]  ;
  //   }
  //   return sum;
  // }
  //console.log(calculate(score));

  var totalScore=score.reduce(function (accumulator,value) {
    return accumulator+value;
  },0); //zero is second arg and value for accumulator
  console.log('TotalScore',totalScore);