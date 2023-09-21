
function sayHello(name){
    console.log("hello user");
    //console.log("3 beautiful words:",name);
    console.log(`3 beautiful words: ${name} How r u?` );  //better way to print things 
}
sayHello;  //just refer a func 
sayHello("Jai Shree Ram"); //call a function use parenthesis



function welcome() {
    return "welcome to India";
    
}
greetings=welcome();
console.log(greetings);
