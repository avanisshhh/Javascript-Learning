
//I HAVE TO SEE MORE EXAMPLE ON PROMISE AND ASYNC CALL
const One = () => {
    return "I m one";
}
// const Duo = () => {
//     setTimeout(() => { return "I m Duo" }, 3000); //async cl
// }

//promise use:
const Dos = () => {
     return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve ("I'm two");
            //reject("Im reject");
        },3000)

     })
}
const Tres = () => {
    return "I m Three";
}

const callMe = async() => { //async keyword for promise
    let valOne = await One();         //await call help u to wait for an event 
    console.log(valOne);

    let valTwo =await Dos();
    console.log(valTwo);

    let valThree = await Tres();
    console.log(valThree);
}




callMe();