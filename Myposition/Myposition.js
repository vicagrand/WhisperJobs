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
let company = document.getElementById("Company");
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

    (() => {
      add.setAttribute("data-bs-dismiss", "");
    })();
  }
};

let data = [];
let HR = [];

let acceptData = () => {
  let flag = 0;
  data.push({
    text: textInput.value,
    date: dateInput.value,
    description: textarea.value,
    email: EmailInput.value,
    city: cityInput.value,
    filed: filedlInput.value,
    emailC: emailCInput.value,
    company: company.value,
  });

  HR.forEach((element) => {
    if (element["emailC"] == emailCInput.value) {
      flag++;
    }
  });
  if (flag == 0) {
    localStorage.setItem("data", JSON.stringify(data));
    HR.push({
      company: company.value,
      emailC: emailCInput.value.toLowerCase(),
      password: generateP(),
      city: cityInput.value,
      about: "",
    });
    localStorage.setItem("HR", JSON.stringify(HR));
  }

  console.log(data);
  console.log(HR);
  createTasks();
};

let createTasks = () => {
  let username = user.username;
  tasks.innerHTML = "";
  data.map((x, y) => {
    if (x.email == username) {
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
                <i onClick ="editTask(this)" data-bs-toggle="modal" data-bs-target="#form" class="fa fa-edit"></i>
                <i onClick ="deleteTask(this);createTasks()" class="fa fa-trash-alt"></i>
            </span>
            </div>
        
        `);
    }
  });
};

let deleteTask = (e) => {
  e.parentElement.parentElement.remove();
  data.splice(e.parentElement.parentElement.id, 1);
  localStorage.setItem("data", JSON.stringify(data));
  console.log(data);
};

let editTask = (e) => {
  let selectedTask = e.parentElement.parentElement;
  textInput.value = selectedTask.children[2].innerHTML;
  cityInput.value = selectedTask.children[3].innerHTML;
  filedlInput.value = selectedTask.children[4].innerHTML;
  emailCInput.value = selectedTask.children[7].innerHTML;
  dateInput.value = selectedTask.children[1].innerHTML;
  textarea.value = selectedTask.children[5].innerHTML;
  EmailInput.value = selectedTask.children[0].innerHTML;
  company.value = selectedTask.children[6].innerHTML;

  deleteTask(e);
};

let resetForm = () => {
  textInput.value = "";
  dateInput.value = "";
  textarea.value = "";
  EmailInput.value = "";
};

(() => {
  data = JSON.parse(localStorage.getItem("data")) || [];
  HR = JSON.parse(localStorage.getItem("HR")) || [];
  createTasks();
  console.log(data);
  console.log(HR);
})();

function generateP() {
  var pass = "";
  var str =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZ" + "abcdefghijklmnopqrstuvwxyz0123456789@#$";

  for (let i = 1; i <= 8; i++) {
    var char = Math.floor(Math.random() * str.length + 1);

    pass += str.charAt(char);
  }

  return pass;
}

function sendEmail() {
  Email.send({
    Host: "smtp.gmail.com",
    Username: "jobwhispper17@gmail.com",
    Password: "6436974+J",
    To: document.getElementById("EmailCInput").value,
    From: "jobwhispper17@gmail.com",
    Subject: "Sending email using javascript",
    Body: "Well that was easy!!",
  }).then(function (message) {
    alert("mail sent successfully");
  });
}
