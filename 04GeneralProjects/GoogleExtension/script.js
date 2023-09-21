let myLeads = [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const ulEl = document.getElementById("ul-el");
const deleteBtn=document.getElementById("delete-btn");
const tabBtn=document.getElementById("tab-btn")
const leadsfromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

if(leadsfromLocalStorage){
    myLeads = leadsfromLocalStorage;
    render(myLeads);
}
// const tabs=[
//     {url:"www.linkedin/avanishkumar22"}
// ]
tabBtn.addEventListener('click',function(){
    // chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
       
    //     let activeTab=tab[0]
    //     let activeTabId=activeTab.id
    // })
    chrome.tabs.query({active:true,currentWindow:true},function(tabs){
     console.log(tabs);
     myLeads.push(tabs[0].url);
    localStorage.setItem("myLeads",JSON.stringify(myLeads));
    render(myLeads);
    })


    
})
function render(leads) {
    let listItem = "";
    for (let i = 0; i < leads.length; i++) {
      //ulEl.textContent=myLeads[i]; //it will only render last element of array bcs it clear out the previous array
      //ulEl.innerHTML+="<li>"+myLeads[i]+ "</li> ";
      listItem += `<li>
          <a target="_blank" href="${leads[i]}">
          ${leads[i]}
          </a>
          </li>`;
    }
    ulEl.innerHTML = listItem;
  }
deleteBtn.addEventListener('dblclick',function(){
    // localStorage.removeItem("myLeads");
    localStorage.clear();
    myLeads=[];
    render(myLeads);
    console.log("delete");
})

inputBtn.addEventListener("click", function () {
  console.log("button clicked for event");
  myLeads.push(inputEl.value);
  console.log(myLeads);
  inputEl.value = "";
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  render(myLeads);
  console.log(localStorage.getItem("myLeads"));
});





