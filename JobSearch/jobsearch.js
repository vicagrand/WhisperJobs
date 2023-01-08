let form = document.getElementById("form");
let textInput = document.getElementById("textInput");
let dateInput = document.getElementById("dateInput");
let textarea = document.getElementById("textarea");
let msg = document.getElementById("msg");
let tasks = document.getElementById("tasks");
let add = document.getElementById("add");
let EmailInput = document.getElementById("EmailInput");
let search_btn = document.getElementById("search_btn");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    createTasks();
}); 
    let createTasks = () =>{
            tasks.innerHTML = "";
            data.map((x,y)=>{
            return (tasks.innerHTML += `
            <div id=${y}>
                  <span class="small text-secondary">${x.date}</span>
                  <span class="fw-bold">${x.text}</span>
                  <span class="small text-secondary">${x.city}</span>
                  <span class="small text-secondary">${x.filed}</span>
                  <p>${x.description}</p>
                  <span class="small text-secondary">${x.email}</span>
                 
        
                  <span class="options">
                    <i onClick ="editTask(this)" data-bs-toggle="modal" data-bs-target="#form" class="fa fa-edit"></i>
                    <i onClick ="deleteTask(this);createTasks()" class="fa fa-trash-alt"></i>
                  </span>
                </div>
            
            `);
        })
    };
    
    (()=>{
        data = JSON.parse(localStorage.getItem("data")) || [];
        createTasks();
        console.log(data);
    })();




function search(){ 
    let search = search_btn.value;
    tasks.innerHTML = "";
    data.forEach((element) => {
         if(element["city"] == search ){
            data.map((x,y)=>{
                return (tasks.innerHTML += `
                 <div id=${y}>
                 <span class="small text-secondary">${x.date}</span>
                 <span class="fw-bold">${x.text}</span>
                 <span class="small text-secondary">${x.city}</span>
                 <span class="small text-secondary">${x.filed}</span>
                 <p>${x.description}</p>
                 <span class="small text-secondary">${x.email}</span>
                </div>
               `);
                
            })
                
                }
        })
         
        };
            
   
        
    

console.log(data);








 

        