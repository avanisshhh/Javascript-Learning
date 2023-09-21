// shallow cpy:pass by reference -----affect all values
// deep copy:pass by value     -----it mean only value which u want to change is affected

// primitive type alwys create a deep copy

let ogValue=10;
let copiedValue=ogValue;
console.log(ogValue);
console.log(copiedValue);

copiedValue=20;
console.log(ogValue);
console.log(copiedValue); //proof always create a deep copy 

let originalValue={
    name:'John',
    age:20
}

let copiedVal=originalValue;
// console.log(originalValue);
// console.log(copiedVal);
copiedVal.name='Avi'
// console.log(originalValue); //it will create a shalllow copy and changes both the value
// console.log(copiedVal);


//JSON.stringify()

let originalVal={
    name:'John Lewis',
    age:20
}
let copiedVals=JSON.parse(JSON.stringify(originalVal));
// console.log(originalVal);
// console.log(copiedVals);

copiedVals.name='Peter';
// console.log(originalVal);
// console.log(copiedVals); //here it will rpovide deep copy

//if your ob hv fn then json.stringfy dont work only work your ob dnt hv fn


//object.assign
let origval={
    name:'John',
    age:20,
    getName:function(){
        return this.name;
    },
    address:{
        city:'delhi',
        country:'India'
    }
    
}

//let copval=Object.assign({},origval);

// console.log(origval);
// console.log(copval);
// copval.name="aman";
// copval.address.city='Pune' //object.assign will nt work in case of nested object

// console.log(origval);
// console.log(copval);



//spread op also give a partial deep cpy

//bt on using it wisely u 'll complete deep copy

let origval1={
    name:'John',
    age:20,
    getName:function(){
        return this.name;
    },
    address:{
        city:'delhi',
        country:'India'
    }
    
}

let copval={...origval1}
console.log(origval);
console.log(copval);
copval.name="aman";
copval={
    ...copval,
    name:'Slok',
    address:{
        ...copval.address,
        city:'Goa'
    }
}
console.log(origval);
console.log(copval);

//Assignment use lodash library in your project

