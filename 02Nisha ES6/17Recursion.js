
//  function calculateTotalRecursion(n, total=0){
//     if(n===0) return total;
//         return calculateTotalRecursion(n-1,total+=n);
//  }


//  console.log(calculateTotalRecursion(3));



const teamStructure={
    name:'Kunal',
    teams:[
        {
            name:'Harish',
            teams:[
                {
                    name:'Alps',
                    teams:[],
                },
            ]
        },
        {
            name:'Anurag',
            teams:[],
        },
    ]
}


function getTeamdetails(t){
  //base location
  console.log('Teams...',t);
  if(t.teams.length===0)
  return;

  t.teams.forEach(team=>{
    console.log(team.name);
    getTeamdetails(team)
  })
}

getTeamdetails(teamStructure);
