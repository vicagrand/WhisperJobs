let user = JSON.parse(sessionStorage.getItem("current_user")) || [];
let arr_hr = JSON.parse(localStorage.getItem("HR")) || [];
//use single object instead of array
window.onload = function () {
  displayProfile();
};
function displayProfile() {
  let full_name = user.company;
  document.getElementById("fname").placeholder = `${full_name}`;
  let about_you = user.about;
  document.getElementById("about_you").placeholder = `${about_you}`;
  let location = user.city;
  document.getElementById("location").placeholder = `${location}`;
  let username = user.emailC;
  document.getElementById("email").placeholder += `${username}`;
};
function updateDetails() {
  if (document.querySelector("#fname").value != "")
    user.company = document.querySelector("#fname").value;
  if (document.querySelector("#about_you").value != "")
    user.about = document.querySelector("#about_you").value;
  if (document.querySelector("#location").value != "")
    user.city = document.querySelector("#location").value;
    for (let key in arr_hr) {
      if (arr_hr[key].emailC == user.emailC) {
        arr_hr[key] = user;
        localStorage.setItem("HR", JSON.stringify(arr_hr));
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

function logout() {
  sessionStorage.removeItem("current_user");
}

module.exports = {
  displayProfile: displayProfile,
  updateDetails: updateDetails
};