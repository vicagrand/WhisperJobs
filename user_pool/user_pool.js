form.addEventListener("submit", (e) => {
  e.preventDefault();
  createTasks();
});

let Students = [];
let HR = [];

let createTasks = () => {
  tasks.innerHTML = "";
  Students.map((x, y) => {
    if (x.full_name != "") {
      return (tasks.innerHTML += `
  <div id=${y}>
        <span class="small text-secondary" >${x.full_name}</span>
        <span class="small text-secondary" id=full>${x.username}</span>
        <span class="options">
        <i onClick ="ban_user(this);createTasks()" class="fa fa-trash-alt"></i>
    </span>
      </div>
  
  `);
    }
  })
  HR.map((x, y) => {
    if (x.enailC != "") {
      return (tasks.innerHTML += `
    <div id=${y}>
         <span class="small text-secondary" >${x.company}</span>
          <span class="small text-secondary" id=ema>${x.emailC}</span>
          <span class="options">
          <i onClick ="ban_userH(this);createTasks()" class="fa fa-trash-alt"></i>
      </span>
        </div>
    
    `);
    }
  })
};

(() => {
  Students = JSON.parse(localStorage.getItem("Students and Graduates")) || [];
  HR = JSON.parse(localStorage.getItem("HR")) || [];
  createTasks();
  console.log(Students);
  console.log(HR);
})();

function ban_userS() {
  let username = document.getElementById("full").innerHTML;
  let obj = {
    username: username,
    full_name: "",
    password: "",
    confirm_password: "",
    question: "",
    type: "",
    about_you: "",
    location: "",
    education: "",
    jobTitle: "",
    lookingForWork: "",
  };
  let arr_students =
    JSON.parse(localStorage.getItem("Students and Graduates")) || [];
  for (let key in arr_students) {
    if (arr_students[key].username == username) {
      arr_students.splice(key, 1);
      arr_students.push(obj);
      localStorage.setItem(
        "Students and Graduates",
        JSON.stringify(arr_students)
      );
    }
  }
};

function ban_userH() {
  let username = document.getElementById("ema").innerHTML;
  let obj = {
    company: "",
    emailC: username,
    password: "",
    city: "",
  };
  let arr_hr = JSON.parse(localStorage.getItem("HR")) || [];
  for (let key in arr_hr) {
    if (arr_hr[key].emailC == username) {
      arr_hr.splice(key, 1);
      arr_hr.push(obj);
      localStorage.setItem("HR", JSON.stringify(arr_hr));
    }
  }

}
