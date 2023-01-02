let save_ar = [];

window.onload = function () {
  declareEvents();
  checkLocal();
};
const checkLocal = function () {
  if (localStorage["students"]) {
    save_ar = JSON.parse(localStorage["students"]);
    console.log(save_ar);
    createStudents();
  }
};

const declareEvents = function () {
  let add_btn = document.querySelector("#loginBtn");
  add_btn.addEventListener("click", () => { 
    const loginForm = document.querySelector("#login"); 
    const createAccountForm = document.querySelector("#create_account"); });
    if (createAccountForm.querySelector("#email_username").value.includes("sce")) {
      let obj = {
        username: document.querySelector("#email_username").value,
        full_name: document.querySelector("#full_name").value,
        gender: document.querySelector("#gender").value,
        password: document.querySelector("#Password").value,
        confirm_password: document.querySelector("#confirm_password").value,
      };

      save_ar.push(obj);
      localStorage.setItem("students", JSON.stringify(save_ar));
      createStudents();

    }
    else{
      let warning = "you are not a student!";
      id_warning.innerHTML += `${warning}`;
    }
  };

const createStudents = function () {
  let id_ul = document.querySelector("#id_ul");
  id_ul.innerHTML = "";
  save_ar.forEach(function (item) {
    id_ul.innerHTML += `<li>${item.username} - ${item.full_name}</li>`;
  });
};