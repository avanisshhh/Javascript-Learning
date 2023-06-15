//function borrowing
const employee = {
  firstName: "Avanish",
  lastName: "Kumar",
  getFullName: function (city) {
    console.log(this); //act as a global var
    console.log(
      `${this.firstName} ${this.lastName} and the city name is ${city}`
    );
  },
};
//Employee.getFullName();

const getEmpDetail = employee.getFullName;
getEmpDetail();

const customer = {
  firstName: "Alpana",
  lastName: "bara",
  //     getFullName:function(){
  //   console.log(this); //act as a global var
  //         console.log(`${this.firstName} ${this.lastName}`);
  //     }
};

// employee.getFullName();
// customer.getFullName();

//call
//employee.getFullName.call(customer,'Delhi','Noida');
//employee.getFullName.apply(customer, ['Goa','Pune']); //only d/f is this is act as a array

const getFullName = function (city, profile) {
  console.log(this); //act as a global var
  console.log(`${this.firstName} ${this.lastName} and the city name is ${city} 
          and profile is ${profile}`);
};
const emp = {
  firstName: "Avanish",
  lastName: "Kumar",
};
const cust = {
  firstName: "Vishal",
  lastName: "Kumar",
};
// getFullName.apply(cust, ['Goa','Artist']);
// getFullName.apply(emp, ['Pune','Developer']);

const handler = getFullName.bind(cust); //it will  execute when required whereas apply and call will exec then and their
handler("UP", "SSE");


const obj=document.getElementById('btn');
obj.addEventListener('click', getFullName.bind(cust,'Kanpur', 'Social Influ.'))
