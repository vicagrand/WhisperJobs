let form = document.getElementById("form");
let textInput = document.getElementById("textInput");
let dateInput = document.getElementById("dateInput");
let textarea = document.getElementById("textarea");
let msg = document.getElementById("msg");
let tasks = document.getElementById("tasks");
let add = document.getElementById("add");
let EmailInput = document.getElementById("EmailInput");
let cityInput = document.getElementById("CityInput");
let filedlInput = document.getElementById("FiledInput");
let emailCInput = document.getElementById("EmailCInput");
let user = JSON.parse(sessionStorage.getItem("current_user")) || [];


form.addEventListener("submit", (e) => {
    e.preventDefault();
    formValidation();
}); 


let formValidation = () => {
    if (textInput.value === "") {
        console.log("failure");
        msg.innerHTML = "Should be filled";
    } else {
        console.log("success");
        msg.innerHTML = "";
        acceptData();
        add.setAttribute("data-bs-dismiss", "modal");
        add.click();
        
        (()=>{
            add.setAttribute("data-bs-dismiss", "");
        })()
    }
};

let data = [];



let acceptData = () => {
    data.push({
     text:textInput.value,
     date:dateInput.value,
     description:textarea.value,
     email:EmailInput.value,
     city:cityInput.value,
     filed:filedlInput.value,
     emailC:emailCInput.value,
    });

    localStorage.setItem("data",JSON.stringify(data));


    console.log(data);

    createTasks();
};


let createTasks = () =>{
    let username = user.username;
    tasks.innerHTML = "";
    data.map((x,y)=>{
    if(x.email==username){
        return (tasks.innerHTML += `
        <div id=${y}>
            <span class="small text-secondary">${x.email}</span>
            <span class="small text-secondary">${x.date}</span>
            <span class="fw-bold">${x.text}</span>
            <span class="small text-secondary">${x.city}</span>
            <span class="small text-secondary">${x.filed}</span>
            <p>${x.description}</p>
            <span class="small text-secondary">${x.emailC}</span>
            
            

            <span class="options">
                <i onClick ="editTask(this)" data-bs-toggle="modal" data-bs-target="#form" class="fa fa-edit"></i>
                <i onClick ="deleteTask(this);createTasks()" class="fa fa-trash-alt"></i>
            </span>
            </div>
        
        `); 
    }
  
})
};

let deleteTask = (e)=>{
    e.parentElement.parentElement.remove();
    data.splice(e.parentElement.parentElement.id, 1);
    localStorage.setItem("data",JSON.stringify(data));
    console.log(data);
};

let editTask = (e) => {
    let selectedTask = e.parentElement.parentElement;

    textInput.value = selectedTask.children[2].innerHTML;
    cityInput.value = selectedTask.children[3].innerHTML;
    filedlInput.value = selectedTask.children[4].innerHTML;
    emailCInput.value = selectedTask.children[6].innerHTML;
    dateInput.value = selectedTask.children[1].innerHTML;
    textarea.value = selectedTask.children[5].innerHTML;
    EmailInput.value = selectedTask.children[0].innerHTML;

    deleteTask(e);
};


let resetForm = () =>{
    
    textInput.value = "";
    dateInput.value = "";
    textarea.value = "";
    EmailInput.value = "";

};


(()=>{
    data = JSON.parse(localStorage.getItem("data")) || [];
    createTasks();
    console.log(data);
})();