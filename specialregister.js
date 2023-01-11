//register
let arr_students =
  JSON.parse(localStorage.getItem("Students and Graduates")) || [];
let arr_hr = JSON.parse(localStorage.getItem("HR")) || [];
let arr_inspector = JSON.parse(localStorage.getItem("Inspectors")) || [];
let warning = "";
window.onload = function () {
  //localStorage.clear();
  declareEvents();
  checkLocal();
};

function checkPassword(password) {
  //Password must be 8 to 15 characters which contain at least one lowercase letter,
  //one uppercase letter, one numeric digit, and one special character
  var passw =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;

  if (password.match(passw)) {
    return true;
  }
  warning = `Password is too weak! Click to see the requirments`;
  return false;
}

function checkEmail(email) {
  if (email.includes("@ac.sce.ac.il")) {
    return true;
  }
  warning = `You are not a student!`;
  return false;
}

function checkLocal() {
  if (localStorage["Students and Graduates"]) {
    arr_students = JSON.parse(localStorage["Students and Graduates"]);
    console.log(arr_students);
  } else if (localStorage["HR"]) {
    arr_students = JSON.parse(localStorage["HR"]);
    console.log(arr_hr);
  } else if (localStorage["Inspectors"]) {
    arr_inspector = JSON.parse(localStorage["Inspectors"]);
    console.log(arr_inspector);
  }
}

function declareEvents() {
  let add_btn = document.querySelector("#signupbtn");
  add_btn.addEventListener("click", function () {
    event.preventDefault();
    id_warning.innerHTML = "";
    let email = document.querySelector("#email_username").value;
    email = email.toLowerCase();
    let password = document.querySelector("#Password").value;
    if (checkEmail(email) && checkPassword(password)) {
      let obj = {
        username: email,
        full_name: document.querySelector("#full_name").value,
        password: password,
        confirm_password: document.querySelector("#confirm_password").value,
        question: document
          .querySelector("#Safety_question")
          .value.toLowerCase(),
        type: "student_graduate",
        //new
        about_you: "",
        location: "",
        education: "",
        jobTitle: "",
        lookingForWork: "",
      };
      if (obj.password != obj.confirm_password) {
        let warning = "Passwords do not match!";
        id_warning.innerHTML += `${warning}`;

        return;
      }
      let flag = 0;
      arr_students.forEach((element) => {
        if (element["username"] == obj.username) {
          flag = 1;
        }
      });
      arr_inspector.forEach((element) => {
        if (element["username"] == obj.username) {
          flag = 1;
        }
      });

      arr_hr.forEach((element) => {
        if (element["username"] == obj.username) {
          flag = 1;
        }
      });
      if (flag == 1) {
        let warning = "Account already exists!";
        id_warning.innerHTML += `${warning}`;
        return;
      }

      arr_students.push(obj);
      localStorage.setItem(
        "Students and Graduates",
        JSON.stringify(arr_students)
      );

      window.location.href = "../login/login_n.html";
    }
    id_warning.innerHTML = `${warning}`;
  });
}

module.exports = {
  checkLocal: checkLocal,
  declareEvents: declareEvents,
  checkEmail: checkEmail,
  checkPassword: checkPassword,
};
