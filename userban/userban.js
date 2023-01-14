var userList = JSON.parse(localStorage.getItem("Students and Graduates"));

// for (var i = 0; i < userList.length; i++) {
//     var user = userList[i];
//     var userElement = document.createElement("div");
//     var userElement2 = document.createElement("input");

//     var button = document.createElement("button");
//     button.innerHTML = "Delete";

//     button.addEventListener("click", function() {
//       deleteUser(user.username);
//     });

//     userElement.appendChild(button);

//     document.getElementById("label-list").label = user.username;
//     userElement2.innerHTML += " " + user.username;

//     document.getElementById("user-list").appendChild(userElement);
//     document.getElementById("label-list").appendChild(userElement2);

//   }

for (var i = 0; i < userList.length; i++) {
  var user = userList[i];
  var userElement = document.createElement("div");

  var inputElement = document.createElement("input");
  inputElement.classList.add("my-class");
  var button = document.createElement("button");
  button.innerHTML = "Delete";
  button.classList.add("my-btn");
  inputElement.value = user.username;
  button.addEventListener("click", function () {
    ban_user(this);
  });

  userElement.appendChild(inputElement);
  userElement.appendChild(button);
  document.getElementById("user-list").appendChild(userElement);
}

let ban_user = (e) => {
  let username = e.id;
  // let username = document.querySelector("#user_select").value;
  let obj = {
    username: username,
    full_name: "",
    password: "",
    confirm_password: "",
    question: "",
    type: "",
    //new
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

  let arr_hr = JSON.parse(localStorage.getItem("HR")) || [];
  for (let key in arr_hr) {
    if (arr_hr[key].username == username) {
      arr_hr.splice(key, 1);
      arr_hr.push(obj);
      localStorage.setItem("HR", JSON.stringify(arr_hr));
    }
  }
};
