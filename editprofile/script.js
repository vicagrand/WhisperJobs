let user = JSON.parse(sessionStorage.getItem("current_user")) || [];
//use single object instead of array
window.onload = function () {
  displayProfile();
};
displayProfile = function () {
  let full_name = user.full_name;
  document.getElementById("fname").placeholder = `${full_name}`;
  let about_you = user.about_you;
  document.getElementById("aboutYou").placeholder = `${about_you}`;
  let location = user.location;
  document.getElementById("location").placeholder = `${location}`;
  let username = user.username;
  document.getElementById("email").innerHTML += `${username}`;
  let education = user.education;
  document.getElementById("qualification").placeholder = `${education}`;
  let jobTitle = user.jobTitle;
  document.getElementById("position").placeholder = `${jobTitle}`;
};
// function updateDetails{
//   sessionStorage.removeItem("current_user");
//   user.full_name=document.querySelector("#fname").value;

// };

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
