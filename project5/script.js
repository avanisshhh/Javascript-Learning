// alert('Hi Avi, You are live');

var addbutton=document.getElementById("add");
addbutton.addEventListener('click',addItem);

document.getElementById("remove").addEventListener('click',removeItem); //best way to write

// ul=document.getElementById('list');
//     var textnode=document.createTextNode(item)


function addItem(){
    console.log("item added successfully");
    var input=document.getElementById('input');
    var item=input.value;
    ul=document.getElementById('list');
    var textnode=document.createTextNode(item)

if(item===''){
    
    // var p=document.createElement('p');
    // var con=document.createTextNode("Please enter to do item");
    // p.appendChild(con);
    // console.log("Please enter to do item");
     
    return false;
    //add a p tag and assign a value of "enter your to do"
}
else{
    //create li
    li=document.createElement('li');
    //create checkbox
    var checkbox=document.createElement('input');
    checkbox.type='checkbox';
    checkbox.setAttribute('id','check');
    //create label
    var label=document.createElement('label');
    label.setAttribute('for','item')//optional

    //add these elements of web page;
    ul.appendChild(label);
    li.appendChild(checkbox);
    label.appendChild(textnode);
    li.appendChild(label);
    ul.insertBefore(li,ul.childNodes[0]);
   

    setTimeout(()=>{ li.className='visual';},2000)
    input.value='';

}


}

function removeItem(){
   

    for(let index=0;index<li.length;index++){
        while(li[index]&&li[index].children[0].checked){
            ul.removeChild(li[index])
            console.log("remove successfully");
        }
    }
}