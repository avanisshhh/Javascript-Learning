
//concurrency modal and event loop https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop
const One=()=>{
    console.log("I m one");
}
const Dos=()=>{
   
    setTimeout(()=>console.log("wooooooo"),5000); //async cl
    console.log("I m Two");
}
const Tres=()=>{
    console.log("I m Three");
}
One();
Dos();
Tres();