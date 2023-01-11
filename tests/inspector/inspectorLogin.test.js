let arr_students = [];
let arr_hr = [];
let arr_inspector = [];
let flag;
// Set up the DOM for testing
document.body.innerHTML = `
<input id="email_username" value="inspector@ac.sce.ac.il">
<input id="type" value="inspector">
<input id="Password" value="12345Aa!">
<input id="confirm_password" value="12345Aa!">
<input id="Safety_question" value="MOM">
<input id="full_name" value="inspector">
<label class="warning" id="id_warning"></label>
`;

// Set up the User for testing
let user = {
  username: document.querySelector("#email_username").value.toLowerCase(),
  full_name: document.querySelector("#full_name").value,
  password: document.querySelector("#Password").value,
  confirm_password: document.querySelector("#confirm_password").value,
  question: document.querySelector("#Safety_question").value.toLowerCase(),
  type: document.querySelector("#type").value,
  about_you: "",
  location: "",
  education: "",
  jobTitle: "",
  lookingForWork: "",
};
beforeEach(() => {
  arr_inspector = [user]//we're gonna use this as our students storage
  id_warning.innerHTML = "";
  flag = 0;
});

it('Check that the user is matching an inspector in the database', () => {
  let loginEmail = 'inspector@ac.sce.ac.il';
  loginEmail = loginEmail.toLowerCase();
  const loginPass = '12345Aa!'; 
  arr_inspector.forEach((element) => {
    if (element["username"] == loginEmail && element["password"] == loginPass) {
      flag = 1;
    }
  });

  expect(flag).toBe(1);
});

it('Check that the user is not matching a student or hr in the database', () => {
  let loginEmail = 'inspector@ac.sce.ac.il';
  loginEmail = loginEmail.toLowerCase();
  const loginPass = '12345Aa!'; 
  arr_students.forEach((element) => {
    if (element["username"] == loginEmail && element["password"] == loginPass) {
      flag = 1;
    }
  });
  arr_hr.forEach((element) => {
    if (element["username"] == loginEmail && element["password"] == loginPass) {
      flag = 1;
    }
  });
  expect(flag).toBe(0);
});

it('Should show a message if the user doesnt match any user in the database', () => {
  let loginEmail = 'wrong@ac.sce.ac.il';
  loginEmail = loginEmail.toLowerCase();
  const loginPass = 'wrongpass'; 
  arr_students.forEach((element) => {
    if (element["username"] == loginEmail && element["password"] == loginPass) {
      flag = 1;
    }
  });
  arr_inspector.forEach((element) => {
    if (element["username"] == loginEmail && element["password"] == loginPass) {
      flag = 1;
    }
  });
  arr_hr.forEach((element) => {
    if (element["username"] == loginEmail && element["password"] == loginPass) {
      flag = 1;
    }
  });
  if (flag == 0) {
    id_warning.innerHTML += `${'Wrong credentials'}`;
  }

  expect(id_warning.innerHTML).toBe('Wrong credentials');
});

it('should update the password of the user with the given email and security question', () => {
  //Set up the accounts storage
  arr_students = [{username: 'student@ac.sce.ac.il',
  password: 'oldpassword',
  confirm_password: 'oldpassword',
  question: document.querySelector("#Safety_question").value.toLowerCase(),}]

  arr_inspector = [{username: document.querySelector("#email_username").value.toLowerCase(),
  password: 'oldpassword',
  confirm_password: 'oldpassword',
  question: document.querySelector("#Safety_question").value.toLowerCase(),}]

  arr_hr = [{username: 'hr@gmail.com',
  password: 'oldpassword',
  confirm_password: 'oldpassword',
  question: document.querySelector("#Safety_question").value.toLowerCase(),}]

  let loginEmail = 'inspector@ac.sce.ac.il';
  loginEmail = loginEmail.toLowerCase();
  let question = 'mom';
  // Call the checkInput function with the correct email and security question
  
  arr_inspector.forEach((element) => {
    if (element["username"] == loginEmail) {//emails are unique so if the email is equal just check for question
      if(element["question"] == question){//if question is equal update the new password
        element["password"] = 'newpassword';//update password
        element["confirm_password"] = 'newpassword';
      }
    }
  });
  //Check that the password has been changed
  expect(arr_inspector[0].password).toEqual('newpassword');
  expect(arr_inspector[0].confirm_password).toEqual('newpassword');

  // Check that the passwords of the other users were not changed
  expect(arr_hr[0].password).toEqual('oldpassword');
  expect(arr_hr[0].confirm_password).toEqual('oldpassword');
  expect(arr_students[0].password).toEqual('oldpassword');
  expect(arr_students[0].confirm_password).toEqual('oldpassword');
 
});