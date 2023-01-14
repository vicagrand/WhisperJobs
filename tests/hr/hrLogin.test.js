let arr_students = [];
let arr_hr = [];
let arr_inspector = [];
let flag;
// Set up the DOM for testing
document.body.innerHTML = `
<input id="email_username" value="hr@gmail.com">
<input id="type" value="hr">
<input id="Password" value="12345Aa!">
<input id="confirm_password" value="12345Aa!">
<input id="Safety_question" value="MOM">
<input id="full_name" value="hr">
<label class="warning" id="id_warning"></label>
`;

global.window = Object.create(window);

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
  arr_hr = [user]//we're gonna use this as our students storage
  id_warning.innerHTML = "";
  flag = 0;
});
function signIn(email,pass){
  let result = false
  arr_students.forEach((element) => {
    if (element["username"] == email){
      if(element.type == 'blocked'){
        id_warning.innerHTML = 'You have been blocked'
        result = true;
      }
      if(element["password"] == pass){
        result = true;
        url = "../MenuStudent/menustudent.html"
        Object.defineProperty(window, 'location', {
          value: {
            href: url
          }
        });
      }
    }
  });
  arr_inspector.forEach((element) => {
    if (element["username"] == email){
      if(element.type == 'blocked'){
        id_warning.innerHTML = 'You have been blocked'
        result = true;
      }
      if(element["password"] == pass){
        result = true;
        url = "../MenuAdmin/menuadmin.html"
        Object.defineProperty(window, 'location', {
          value: {
            href: url
          }
        });
      }
  }});
  arr_hr.forEach((element) => {
    if (element["username"] == email){
      if(element.type == 'blocked'){
        id_warning.innerHTML = 'You have been blocked'
        result = true;
      }
      if(element["password"] == pass){
        result = true;
        url = "../MenuHR/menuhr.html"
        Object.defineProperty(window, 'location', {
          value: {
            href: url
          }
        });
      }
  }
  });
  if (result == false) {
    id_warning.innerHTML = `${'Wrong credentials'}`;
  }
  return result
}

function changePassword(question,email,newpassword){
  arr_students.forEach((element) => {
    if (element["username"] == email) {
      if(element["question"] == question){
        element["password"] = newpassword;
        element["confirm_password"] = newpassword;
      }
    }
  });
  arr_inspector.forEach((element) => {
    if (element["username"] == email) {
      if(element["question"] == question){
        element["password"] = newpassword;
        element["confirm_password"] = newpassword;
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
      }
      else{
        return;
      }
    }
  });
}
describe('signIn', () => {
it('Check that the user is matching a hr in the database', () => {
  let loginEmail = 'hr@gmail.com';
  loginEmail = loginEmail.toLowerCase();
  const loginPass = '12345Aa!'; 
  expect(signIn(loginEmail,loginPass)).toBe(true);
});

it('Check that the user is not matching any user in the database', () => {
  let loginEmail = 'wrong@gmail.com';
  loginEmail = loginEmail.toLowerCase();
  const loginPass = 'wrongpass'; 
  expect(signIn(loginEmail,loginPass)).toBe(false);
});

it('Should show a message if the user doesnt match any user in the database', () => {
  let loginEmail = 'wrong@gmail.com';
  loginEmail = loginEmail.toLowerCase();
  const loginPass = 'wrongpass'; 
  signIn(loginEmail,loginPass);

  expect(id_warning.innerHTML).toBe('Wrong credentials');
});
it('Should show a message if the user is blocked', () => {
  //set up hr to be blocked
  arr_hr[0].type = 'blocked'
  let loginEmail = "hr@gmail.com";
  loginEmail = loginEmail.toLowerCase();
  const loginPass = "12345Aa!"; 

  signIn(loginEmail,loginPass)
  expect(id_warning.innerHTML).toBe('You have been blocked');
});
it('Should redirect to the correct page after successful login',()=>{
  let loginEmail = "hr@gmail.com";
  loginEmail = loginEmail.toLowerCase();
  const loginPass = "12345Aa!"; 

  signIn(loginEmail,loginPass)
  expect(window.location.href).toEqual("../MenuHR/menuhr.html");
})
});
describe('changePassword',()=>{
it('should update the password of the user with the given email and security question', () => {
  //Set up the accounts storage
  arr_students = [{username: 'student@ac.sce.ac.il',
  password: 'oldpassword',
  confirm_password: 'oldpassword',
  question: document.querySelector("#Safety_question").value.toLowerCase(),}]

  arr_inspector = [{username: 'inspector@ac.sce.ac.il',
  password: 'oldpassword',
  confirm_password: 'oldpassword',
  question: document.querySelector("#Safety_question").value.toLowerCase(),}]

  arr_hr = [{username: document.querySelector("#email_username").value.toLowerCase(),
  password: 'oldpassword',
  confirm_password: 'oldpassword',
  question: document.querySelector("#Safety_question").value.toLowerCase(),}]

  let loginEmail = 'hr@gmail.com';
  let question = 'dad';
  let newpassword = 'newpassword'
  // Call the changePassword function with the incorrect email and security question
  changePassword(question,loginEmail,newpassword)

  
  //Check that the password hasn't been changed
  expect(arr_hr[0].password).toEqual('oldpassword');
  expect(arr_hr[0].confirm_password).toEqual('oldpassword');
});
it('should update the password of the user with the given email and security question',()=>{
  
  let loginEmail = 'hr@gmail.com';
  let question = 'mom';
  let newpassword = 'newpassword'

  // Call the changePassword function with the correct email and security question
  changePassword(question,loginEmail,newpassword)

  //Check that the password has been changed
  expect(arr_hr[0].password).toEqual('newpassword');
  expect(arr_hr[0].confirm_password).toEqual('newpassword');
  // Check that the passwords of the other users were not changed
  expect(arr_inspector[0].password).toEqual('oldpassword');
  expect(arr_inspector[0].confirm_password).toEqual('oldpassword');
  expect(arr_students[0].password).toEqual('oldpassword');
  expect(arr_students[0].confirm_password).toEqual('oldpassword');
})
})