let arr_students =
  JSON.parse(localStorage.getItem("Students and Graduates")) || [];
let arr_hr = JSON.parse(localStorage.getItem("HR")) || [];
let arr_inspector = JSON.parse(localStorage.getItem("Inspectors")) || [];

function signinaction(e) {
  event.preventDefault();
  id_warning.innerHTML = "";
  const loginEmail = document.getElementById("email_username").value;
  const loginPass = document.getElementById("Password").value;
  let flag = 0;
  arr_students.forEach((element) => {
    if (element["username"] == loginEmail && element["password"] == loginPass) {
      flag = 1;
      sessionStorage.setItem("current_user", JSON.stringify(element));
      window.location.href = "../MenuStudent/menustudent.html";
    }
  });
  arr_inspector.forEach((element) => {
    if (element["username"] == loginEmail && element["password"] == loginPass) {
      flag = 1;
      sessionStorage.setItem("current_user", JSON.stringify(element));
      window.location.href = "../MenuAdmin/menuadmin.html";
    }
  });

  arr_hr.forEach((element) => {
    if (element["username"] == loginEmail && element["password"] == loginPass) {
      flag = 1;
      sessionStorage.setItem("current_user", JSON.stringify(element));
      window.location.href = "../edit profile/editprofile.html";
    }
  });
  if (flag == 0) {
    let warning = "Wrong credentials";
    id_warning.innerHTML += `${warning}`;
    //return;
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

function changepassword(e) {
  event.preventDefault();
  const email = document.getElementById('emailUser').value;
  const question = document.getElementById('safetyQuestion').value;
  const newpassword = document.getElementById('newPassword').value;
  const confirmpassword = document.getElementById('confirmPassword').value;
  if (email == "" || question == "" || confirmpassword == "" || newpassword == "") {
    document.getElementById('texto').innerHTML ="Please fill all the details";
  }
  else if (newpassword != confirmpassword) {
    document.getElementById('texto').innerHTML ="password mismatch";
  }
  else{
  let arr_students =
      JSON.parse(localStorage.getItem("Students and Graduates")) || []; 
      for (let key in arr_students) {
      if (arr_students[key].username == email && arr_students[key].question == question){
        arr_students[key].password=newpassword;
        arr_students[key].confirm_password=confirmpassword;
        localStorage.setItem( "Students and Graduates",JSON.stringify(arr_students));  
                
      }
    }
  }
  
  }