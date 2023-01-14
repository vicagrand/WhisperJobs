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
let createTasks = () => {

    tasks.innerHTML = "";
    data.map((x, y) => {
        return (tasks.innerHTML += `
            <div id=${y}>
            <span class="small text-secondary">${x.email}</span>
            <span class="small text-secondary">${x.date}</span>
            <span class="fw-bold">${x.text}</span>
            <span class="small text-secondary">${x.city}</span>
            <span class="small text-secondary">${x.filed}</span>
            <p>${x.description}</p>
            <span class="small text-secondary">${x.company}</span>
            <span class="small text-secondary">${x.emailC}</span>
                  <span class="options">
                  <i onClick ="deleteTask(this);createTasks()" class="fa fa-trash-alt"></i>
              </span>
                </div>
            
            `);
    })
};

let deleteTask = (e) => {
    e.parentElement.parentElement.remove();
    data.splice(e.parentElement.parentElement.id, 1);
    localStorage.setItem("data", JSON.stringify(data));
    console.log(data);
};

(() => {
    data = JSON.parse(localStorage.getItem("data")) || [];
    createTasks();
    console.log(data);
})();



function search() {
    let search = search_btn.value;
    tasks.innerHTML = "";
    data.map((x, y) => {
        if (x.city == search || x.filed == search || x.text == search || x.company == search) {
            return (tasks.innerHTML += `
        <div id=${y}>
        <span class="small text-secondary">${x.email}</span>
        <span class="small text-secondary">${x.date}</span>
        <span class="fw-bold">${x.text}</span>
        <span class="small text-secondary">${x.city}</span>
        <span class="small text-secondary">${x.filed}</span>
        <p>${x.description}</p>
        <span class="small text-secondary">${x.company}</span>
        <span class="small text-secondary">${x.emailC}</span>
        <span class="options">
        <i onClick ="deleteTask(this);createTasks()" class="fa fa-trash-alt"></i>
    </span>
            </div>
        
        `);
        }

    })
};





console.log(data);