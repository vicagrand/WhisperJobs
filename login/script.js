let save_ar = []

window.onload = function (){
  declareEvents();
  checkLocal();
}

const checkLocal = function (){
  if (localStorage["students"]){
    save_ar = JSON.parse(localStorage["students"])
    console.log(save_ar)
    createStudents();
  }
}

const declareEvents = function(){
  let add_btn = document.querySelector("#add_btn");
  add_btn.addEventListener("click", function(){ 
    if (signup-form.querySelector("#email").value.includes("sce")) {
      let obj = {
        username: document.querySelector("#email").value,
        full_name: document.querySelector("#name").value,
        password: document.querySelector("#password").value,
        confirm_password: document.querySelector("#confirm").value
      }
      save_ar.push(obj);
      localStorage.setItem("students", JSON.stringify(save_ar));
      createStudents()
  }
  });

const createStudents = function () {
  let id_ul = document.querySelector("#id_ul");
  id_ul.innerHTML = "";
  save_ar.forEach(function (item) {
    id_ul.innerHTML += `<li>${item.User_Name} - ${item.Full_Name}</li>`;
  });
}
}