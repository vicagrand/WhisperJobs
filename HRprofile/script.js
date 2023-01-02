let user = JSON.parse(sessionStorage.getItem("current_user")) || [];
//use single object instead of array
window.onload = function () {
  displayProfile();
};
displayProfile = function () {
  let full_name = user.full_name;
  document.getElementById("fname").placeholder = `${full_name}`;
  let about_you = user.about_you;
  document.getElementById("about_you").placeholder = `${about_you}`;
  let location = user.location;
  document.getElementById("location").placeholder = `${location}`;
  let username = user.username;
  document.getElementById("email").innerHTML += `${username}`;
  let education = user.education;
  document.getElementById("qualification").placeholder = `${education}`;
  let jobTitle = user.jobTitle;
  document.getElementById("position").placeholder = `${jobTitle}`;
};
function updateDetails() {
  if (document.querySelector("#fname").value != "")
    user.full_name = document.querySelector("#fname").value;
  if (document.querySelector("#about_you").value != "")
    user.about_you = document.querySelector("#about_you").value;
  if (document.querySelector("#location").value != "")
    user.location = document.querySelector("#location").value;
  if (document.querySelector("#qualification").value != "")
    user.education = document.querySelector("#qualification").value;
  if (document.querySelector("#position").value != "")
    user.jobTitle = document.querySelector("#position").value;
  if (document.querySelector("#forHire").value != "")
    user.lookingForWork = document.querySelector("#forHire").value;
  if (user.type == "student_graduate") {
    let arr_students =
      JSON.parse(localStorage.getItem("Students and Graduates")) || [];
    for (let key in arr_students) {
      if (arr_students[key].username == user.username) {
        arr_students[key] = user;
        localStorage.setItem(
          "Students and Graduates",
          JSON.stringify(arr_students)
        );
      }
    }
  } else if (user.type == "hr") {
    let arr_hr = JSON.parse(localStorage.getItem("HR")) || [];
    for (let key in arr_hr) {
      if (arr_hr[key].username == user.username) {
        arr_hr[key] = user;
        localStorage.setItem("HR", JSON.stringify(arr_hr));
      }
    }
  } else if (user.type == "inspector") {
    let arr_inspector = JSON.parse(localStorage.getItem("Inspectors")) || [];
    for (let key in arr_inspector) {
      if (arr_inspector[key].username == user.username) {
        arr_inspector[key] = user;
        localStorage.setItem("Inspectors", JSON.stringify(arr_inspector));
      }
    }
  }
  sessionStorage.setItem("current_user", JSON.stringify(user));
}

function removeUser() {
  if (user.type == "student_graduate") {
    let arr_students =
      JSON.parse(localStorage.getItem("Students and Graduates")) || [];
    for (let key in arr_students) {
      if (arr_students[key].username == user.username) {
        arr_students.splice(key, 1);
        localStorage.setItem(
          "Students and Graduates",
          JSON.stringify(arr_students)
        );
      }
    }
  } else if (user.type == "hr") {
    let arr_hr = JSON.parse(localStorage.getItem("HR")) || [];
    for (let key in arr_hr) {
      if (arr_hr[key].username == user.username) {
        arr_hr.splice(key, 1);
        localStorage.setItem("HR", JSON.stringify(arr_hr));
      }
    }
  } else if (user.type == "inspector") {
    let arr_inspector = JSON.parse(localStorage.getItem("Inspectors")) || [];
    for (let key in arr_inspector) {
      if (arr_inspector[key].username == user.username) {
        arr_inspector.splice(key, 1);
        localStorage.setItem("Inspectors", JSON.stringify(arr_inspector));
      }
    }
  }
  sessionStorage.removeItem("current_user");
  window.location.href = "../login/login_n.html";
}
//   let about_you = current_user.about_you
//   ayou.innerHTML += `${about_you}`;

//   let location = current_user.location;
//   location.innerHTML += `${location}`;

//   let email = current_user.email_username;
//   email.innerHTML += `${email}`;

//   let lf_work = current_user.lf_work;//lf_work = looking for work
//   forHire.innerHTML += `${lf_work}`;

//   let education = current_user.education;
//   qualification.innerHTML += `${education}`;

//   let school = current_user.school;
//   school.innerHTML += `${school}`;

//   let job = current_user.job;
//   position.innerHTML += `${job}`;

function logout() {
  sessionStorage.removeItem("current_user");
}
