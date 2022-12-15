let arr_students = [];
let arr_hr = [];
let arr_inspector = [];
window.onload = function () {
  declareEvents();
  checkLocal();
};
const checkLocal = function () {
  if (localStorage["Students and Graduates"]) {
    arr_students = JSON.parse(localStorage["Students and Graduates"]);
    console.log(arr_students);
  } else if (localStorage["HR"]) {
    arr_students = JSON.parse(localStorage["HR"]);
    console.log(arr_hr);
  } else if (localStorage["Inspectors"]) {
    arr_students = JSON.parse(localStorage["Inspectors"]);
    console.log(arr_inspector);
  }
};

const declareEvents = function () {
  let add_btn = document.querySelector("#signupbtn");
  add_btn.addEventListener()
  add_btn.addEventListener("click", function () {
    if (document.querySelector("#email_username").value.includes("sce")) {
      let obj = {
        username: document.querySelector("#email_username").value,
        full_name: document.querySelector("#full_name").value,
        password: document.querySelector("#Password").value,
        confirm_password: document.querySelector("#confirm_password").value,
        type: document.querySelector("#type").value,
      };
      if (obj.type == "student_graduate") {
        arr_students.push(obj);
        localStorage.setItem(
          "Students and Graduates",
          JSON.stringify(arr_students)
        );
      } else if (obj.type == "hr") {
        arr_hr.push(obj);
        localStorage.setItem("HR", JSON.stringify(arr_hr));
      } else if (obj.type == "inspector") {
        arr_inspector.push(obj);
        localStorage.setItem("Inspectors", JSON.stringify(arr_inspector));
      }

      createStudents();
    }
    elseif: {
      let warning = "you are not a student!";
      id_warning.innerHTML += `${warning}`;
    }
  });
};
// function checkDetails() {
//   if ((password = !confirm_password)) {
//   }
// }
const userlogin = function () {
  let add_btn = document.querySelector("#loginBtn");
  add_btn.addEventListener("click", function () {
  const loginEmail = document.getElementById('email_username').value
  const loginPass = document.getElementById('Password').value
  let flag=0;
for(const i of arr_hr){
  if(arr_hr[i].username == loginEmail && arr_hr[i].password == loginPass){
    flag=1;
  }
}
for(const i of arr_inspector){
  if(localStorage.getItem("Inspectors")[i].username == loginEmail && localStorage.getItem("Inspectors")[i].password == loginPass){
    flag=1;
  }
}
for(const i of arr_students){
  if(arr_students[i].username == loginEmail && arr_students[i].password == loginPass){
    flag=1;
  }
}
if(flag==1){
  let warning = "login succesful";
  id_warning.innerHTML += `${warning}`;
  window.location.assign("/login/register.html")
}
else {
  let warning = "Wrong credentials";
  id_warning.innerHTML += `${warning}`;    
}
  // if (localStorage.getItem('Students and Graduate')||localStorage.getItem('HR')||localStorage.getItem('Inspectors')) {
  //     const loginDeets = JSON.parse(localStorage.getItem('Students and Graduate'))
  //     if (loginEmail === loginDeets.email && loginPass === loginDeets.password) {
  //       let warning = "login succesful";
  //       id_warning.innerHTML += `${warning}`;
  //     } else {
  //       let warning = "Wrong credentials";
  //       id_warning.innerHTML += `${warning}`;
         
  //     }
  // } else {
  //     let warning = "Not a registered user";
  //     id_warning.innerHTML += `${warning}`;

  // }
  })}


