let arr_students =
  JSON.parse(localStorage.getItem("Students and Graduates")) || [];
let arr_hr = JSON.parse(localStorage.getItem("HR")) || [];
let arr_inspector = JSON.parse(localStorage.getItem("Inspectors")) || [];
let warning = '';
console.log(module.exports);

function checkPassword(password){
  //Password must be 8 to 15 characters which contain at least one lowercase letter,
  //one uppercase letter, one numeric digit, and one special character
  var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
  
  if(password.match(passw)){
    return true;
  }
  warning = "The password is too weak!"
  return false;
};

function checkInput(question,email,newpassword){
  //this function iterates through all users until it finds one that matches email
  arr_students.forEach((element) => {
    if (element["username"] == email) {//emails are unique so if the email is equal just check for question
      if(element["question"] == question){//if question is equal update the new password
        element["password"] = newpassword;//update password
        element["confirm_password"] = newpassword;
        localStorage.setItem( "Students and Graduates",JSON.stringify(element));//update local storage
        window.location.href = "../login/login_n.html";//move to login page
      }
    }
  });
  arr_inspector.forEach((element) => {
    if (element["username"] == email) {
      if(element["question"] == question){
        element["password"] = newpassword;
        element["confirm_password"] = newpassword;
        localStorage.setItem( "Inspectors",JSON.stringify(element));  
        window.location.href = "../login/login_n.html";
      }
      else{
        return;
       }
    }
  });

  arr_hr.forEach((element) => {
    if (element["username"] == email) {
      if(element["question"] == question){
      element["password"] = newpassword;
      element["confirm_password"] = newpassword;
      localStorage.setItem( "HR",JSON.stringify(element));  
      window.location.href = "../login/login_n.html";
      }
      else{
        return;
      }
    }
  });
};

function signinaction(event) {
  event.preventDefault();
  id_warning.innerHTML = "";
  let loginEmail = document.getElementById("email_username").value;
  loginEmail = loginEmail.toLowerCase();
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
};

function changepassword(event) {
  event.preventDefault();
  const email = document.getElementById('emailUser').value.toLowerCase();
  const question = document.getElementById('safetyQuestion').value.toLowerCase();
  const newpassword = document.getElementById('newPassword').value;
  const confirmpassword = document.getElementById('confirmPassword').value;
  if (email == "" || question == "" || confirmpassword == "" || newpassword == "") {
    warning ="Please fill all the details";
  }
  else if (newpassword != confirmpassword) {
    warning ="Passwords mismatch";
  }
  else if(!checkPassword(newpassword)){
    
  }
  else{
    checkInput(question,email,newpassword);
  }
  document.getElementById('texto').innerHTML = warning;
};

  module.exports = {

    signinaction: signinaction,
    changepassword: changepassword,
    checkPassword: checkPassword,
    checkInput: checkInput
  };