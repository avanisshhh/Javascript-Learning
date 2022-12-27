
const myStates = [
    "RAJ",
    "UP",
    "AP",
    1947,
    "TN",
    "JK"];
//myStates.forEach((s) => (console. log(s)))
//myStates.forEach((s) => console.log(s));

// const names=["Youtube","facebook","instagram","netflix","amazon"];
// for(const n of names){ console.log(n);}

const symbol={
    yt:"youtube",
    ig:"instagram",
    fb:"facebook",
    at:"avitherapy"
}
// for(const n in symbol){   //in is used for object and of as array
//     console.log(n); //it will print abbreviation value 
   
// }

for(const n in symbol){
    console.log(`key is:${n} and value is ${symbol[n]}`);
}