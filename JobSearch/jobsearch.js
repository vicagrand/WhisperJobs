let form = document.getElementById("form");
let textInput = document.getElementById("textInput");
let dateInput = document.getElementById("dateInput");
let textarea = document.getElementById("textarea");
let msg = document.getElementById("msg");
let tasks = document.getElementById("tasks");
let add = document.getElementById("add");
let EmailInput = document.getElementById("EmailInput");


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
     description: textarea.value,
     email: EmailInput.value,
    });

    localStorage.setItem("data",JSON.stringify(data));


    console.log(data);

    createTasks();
};


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
    
         
            </div>
        
        `);
    })


    resetForm ();

};

let deleteTask = (e)=>{
    e.parentElement.parentElement.remove();
    data.splice(e.parentElement.parentElement.id, 1);
    localStorage.setItem("data",JSON.stringify(data));
    console.log(data);
};

let editTask = (e) => {
    let selectedTask = e.parentElement.parentElement;

    textInput.value = selectedTask.children[0].innerHTML;
    dateInput.value = selectedTask.children[1].innerHTML;
    textarea.value = selectedTask.children[3].innerHTML;
    EmailInput.value = selectedTask.children[2].innerHTML;

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

function search(){
    tasks.innerHTML = "";
    let search = document.querySelector("#search_btn").value;
    data.forEach((element) => {
        if (element["text"] == search || element["city"] == search ||  element["filed"] == search){
                  
        }
})};

        