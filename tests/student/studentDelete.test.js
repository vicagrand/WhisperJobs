let arr_students = [];
let arr_hr = [];
let arr_inspector = [];
let flag;
// Set up the DOM for testing
document.body.innerHTML = `
<input id="Password" value="12345Aa!">
<input id="confirm_password" value="12345Aa!">
<input id="Safety_question" value="MOM">
<input id="full_name" value="dani">
<label class="warning" id="id_warning"></label>
`;

// Set up the Users for testing
let user1 = {
  username: 'student@ac.sce.ac.il',
  full_name: document.querySelector("#full_name").value,
  password: document.querySelector("#Password").value,
  confirm_password: document.querySelector("#confirm_password").value,
  question: document.querySelector("#Safety_question").value.toLowerCase(),
  type: 'student_graduate',
};
let user2 = {
    username: 'inspector@ac.sce.ac.il',
    full_name: document.querySelector("#full_name").value,
    password: document.querySelector("#Password").value,
    confirm_password: document.querySelector("#confirm_password").value,
    question: document.querySelector("#Safety_question").value.toLowerCase(),
    type: 'inspector',
  };
let user3 = {
username: 'hr@gmail.com',
full_name: document.querySelector("#full_name").value,
password: document.querySelector("#Password").value,
confirm_password: document.querySelector("#confirm_password").value,
question: document.querySelector("#Safety_question").value.toLowerCase(),
type: 'hr',
};
beforeEach(() => {
  arr_students = [user1]//we're gonna use this as our students storage
  arr_inspector = [user2]
  arr_hr = [user3]
  id_warning.innerHTML = "";
  flag = 0;
});

function removeUser(user) {
    if (user.type == "student_graduate") {
      for (let key in arr_students) {
        if (arr_students[key].username == user.username) {
          arr_students.splice(key, 1);
        }
      }
    } else if (user.type == "hr") {
      for (let key in arr_hr) {
        if (arr_hr[key].username == user.username) {
          arr_hr.splice(key, 1);
        }
      }
    } else if (user.type == "inspector") {
      for (let key in arr_inspector) {
        if (arr_inspector[key].username == user.username) {
          arr_inspector.splice(key, 1);
        }
      }
    }
  };

it("Should delete a student account",()=>{
removeUser(user1)
//The deleted user shouldn't be in the array anymore
expect(arr_students[0]).toBe(undefined);

//The users that we didn't delete should be in the array still
expect(arr_inspector[0]).not.toBe(undefined);
expect(arr_hr[0]).not.toBe(undefined);

})