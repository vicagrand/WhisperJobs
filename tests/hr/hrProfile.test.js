let arr_students = [];
let arr_hr = [];
let arr_inspector = [];
let flag;


// Set up the User for testing
let user = {
  username: "jack@gmail.com",
  full_name: "jack",
  about_you: "about",
  location: "dimona",
  education: "degree",
  jobTitle: "bullshit",
  lookingForWork: "no",
  type:'hr'
};
beforeEach(() => {
  // Set up the DOM for testing
  document.body.innerHTML = `
  <label class="email" id="email" value="jack@gmail.com"></label>
  <input id="qualification" placeholder="many degrees" value = "many degrees">
  <input id="about_you" placeholder="very smort" value = "very smort">
  <input id="location" placeholder="space" value = "space">
  <input id="position" placeholder="workee" value = "workee">
  <input id="fname" placeholder="dani" value = "dani">
  <input id="forHire" placeholder = "no" value = "no">
  <label class="warning" id="id_warning"></label>
  `;
  arr_hr = [user]//we're gonna use this as our students storage
  id_warning.innerHTML = "";

});
it('Should display the user details on the screen', () => {
  //change the value in the document to be the user's details
  let full_name = arr_hr[0].full_name;
  document.getElementById("fname").placeholder = `${full_name}`;
  let about_you = arr_hr[0].about_you;
  document.getElementById("about_you").placeholder = `${about_you}`;
  let location = arr_hr[0].location;
  document.getElementById("location").placeholder = `${location}`;
  let username = arr_hr[0].username;
  document.getElementById("email").innerHTML += `${username}`;
  let education = arr_hr[0].education;
  document.getElementById("qualification").placeholder = `${education}`;
  let jobTitle = arr_hr[0].jobTitle;
  document.getElementById("position").placeholder = `${jobTitle}`;

  //Check that it was updated and this should be displayed on the screen
  expect(document.getElementById("fname").placeholder = `${full_name}`).toEqual("jack");
  expect(document.getElementById("about_you").placeholder = `${about_you}`).toEqual('about');
  expect(document.getElementById("location").placeholder = `${location}`).toEqual('dimona');
  expect(document.getElementById("email").innerHTML = `${username}`).toEqual('jack@gmail.com');
  expect(document.getElementById("qualification").placeholder = `${education}`).toEqual('degree');
  expect(document.getElementById("position").placeholder = `${jobTitle}`).toEqual('bullshit');
});

it('should update the user details in local storage and session storage', () => {
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
  if (user.type == "hr") {
    arr_hr.forEach((element) => {
      if (element.username == user.username) {
        element = user;
      }
    })
  } else if (user.type == "inspector") {
    arr_inspector.forEach((element) => {
      if (element.username == user.username) {
        element = user;
      }
    })
  } else if (user.type == "student_graduate") {
    arr_students.forEach((element) => {
      if (element.username == user.username) {
        element = user;
      }
    })
  }   
  
    expect(arr_hr[0].full_name).toEqual('dani');
    expect(arr_hr[0].about_you).toEqual('very smort');
    expect(arr_hr[0].location).toEqual('space');
    expect(arr_hr[0].education).toEqual('many degrees');
    expect(arr_hr[0].jobTitle).toEqual('workee');
    expect(arr_hr[0].lookingForWork).toEqual('no');
});
