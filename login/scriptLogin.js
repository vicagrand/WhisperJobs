let arr_students =
  JSON.parse(localStorage.getItem("Students and Graduates")) || [];
let arr_hr = JSON.parse(localStorage.getItem("HR")) || [];
let arr_inspector = JSON.parse(localStorage.getItem("Inspectors")) || [];

// window.onload = function () {
//   userlogin();
// };
// const userlogin = function () {
// let add_btn = document.getElementById("#loginBtn");
// add_btn.addEventListener("click", function () {
function signinaction(e) {
  event.preventDefault();
  const loginEmail = document.getElementById("email_username").value;
  const loginPass = document.getElementById("Password").value;
  let flag = 0;
  arr_students.forEach((element) => {
    if (element["username"] == loginEmail && element["password"] == loginPass) {
      flag = 1;
      sessionStorage.setItem("current_user", JSON.stringify(element));
    }
  });
  arr_inspector.forEach((element) => {
    if (element["username"] == loginEmail && element["password"] == loginPass) {
      flag = 1;
      sessionStorage.setItem("current_user", JSON.stringify(element));
    }
  });

  arr_hr.forEach((element) => {
    if (element["username"] == loginEmail && element["password"] == loginPass) {
      flag = 1;
      sessionStorage.setItem("current_user", JSON.stringify(element));
    }
  });
  if (flag == 1) {
    window.location.href =
      "../login/register.html";
  } else {
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
}
// };
