let arr_students =
  JSON.parse(localStorage.getItem("Students and Graduates")) || [];
let arr_hr = JSON.parse(localStorage.getItem("HR")) || [];
let arr_inspector = JSON.parse(localStorage.getItem("Inspectors")) || [];
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
    arr_inspector = JSON.parse(localStorage["Inspectors"]);
    console.log(arr_inspector);
  }
};

const declareEvents = function () {
  let add_btn = document.querySelector("#signupbtn");
  add_btn.addEventListener("click", function () {
    event.preventDefault();
    id_warning.innerHTML = "";
    if (
      document.querySelector("#email_username").value.includes("@ac.sce.ac.il")
    ) {
      let obj = {
        username: document.querySelector("#email_username").value,
        full_name: document.querySelector("#full_name").value,
        password: document.querySelector("#Password").value,
        confirm_password: document.querySelector("#confirm_password").value,
        type: document.querySelector("#type").value,
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
      window.location.href =
        "../login/login_n.html";
    }

    elseif: {
      let warning = "you are not a student!";
      id_warning.innerHTML += `${warning}`;
    }
  });
};
