

// setInterval(() => {
    
// }, interval);
// setTimeout(() => {
    
// }, timeout);

var counter=document.querySelector(".counter");
var folllower=document.querySelector(".follower");
//counter.innerHTML=10;
let count=1;
setInterval(()=>{
    if(count<1000)
    {count++;
    counter.innerHTML=count;}
},1000)

setTimeout(()=>{
    folllower.innerHTML="Follower on Instagram"
},5000)


