let myLead = []
let oldLeads = []
const inputBtn = document.getElementById("input-btn")
const inputEl = document.getElementById("input-el")
const ulEl = document.getElementById("ul-el")
const deleteBtn = document.getElementById("delete-btn")
const saveTab = document.getElementById("tab-btn")

inputBtn.addEventListener("click", function(){
    myLead.push(inputEl.value)
   renderLeads(myLead)
   inputEl.value = " "
   localStorage.setItem("lead",JSON.stringify(myLead))

})

const logLead = JSON.parse(localStorage.getItem("lead"))
console.log(logLead)

if(logLead){
    myLead = logLead
    renderLeads(myLead)
}

function renderLeads(leads){
    let listItems = ""
    for(let i = 0; i<leads.length; i++){
       listItems += `
       <li> 
       <a href='${leads[i]}' target = '_blank'> 
       ${leads[i]} 
       </a> 
       </li>
    `
    }
    ulEl.innerHTML = listItems
    
}

deleteBtn.addEventListener("dblclick", function(){
    localStorage.clear
    myLead = []
    renderLeads(myLead)
})


saveTab.addEventListener("click",function(){
    chrome.tabs.query({'active': true, 'currentWindow': true}, function(tabs) {
        myLead.push(tabs[0].url)
        localStorage.setItem("lead", JSON.stringify(myLead))
        renderLeads(myLead)
        console.log(tabs[0].url)
    });
    

   
})


