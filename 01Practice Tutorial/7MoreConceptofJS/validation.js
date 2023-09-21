// alert('connected');


function myValidation(){
    let myValue=document.getElementById('myForm').value;
    if(isNaN(myValue||myValue<1||myValue>20)){
        console.log("not a valid input");
    }
    else{
        console.log("this input is ok");
    }
}

//form validation next video

document.querySelector('.myform').addEventListener('submit', (event)=>{
    console.log(event.target.username.value);
    console.log(event.target.realname.value);
    event.preventDefault();
    event.target.username.value="";
    event.target.realname.value="";



})
