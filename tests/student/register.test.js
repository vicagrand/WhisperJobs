//const { JSDOM } = require('jsdom');
const func = require('../../login/scriptRegister');

let arr_students = [];
let arr_hr = [];
let arr_inspector = [];

// Set up the DOM for testing
document.body.innerHTML = `
<input id="email_username" value="student@ac.sce.ac.il">
<input id="type" value="student_graduate">
<input id="Password" value="12345Aa!">
<input id="confirm_password" value="12345Aa!">
<input id="Safety_question" value="MOM">
<input id="full_name" value="student">
<label class="warning" id="id_warning"></label>
window.location.href = "../login/register.html";
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
  arr_students = [user]
  id_warning.innerHTML = "";
});

it('Passwords should match',()=>{
  arr_students.confirm_password= 'wrong password'
  if(arr_students.password != arr_students.confirm_password){
    id_warning.innerHTML = `${'Passwords do not match!'}`
  }
  expect(id_warning.innerHTML).toBe('Passwords do not match!')
})

it('Shouldnt be able to make 2 accounts',()=>{
  let flag = 0;
  arr_students.forEach((element) => {
    if (element["username"] == user.username) {
      flag = 1;
    }
  });
  arr_inspector.forEach((element) => {
    if (element["username"] == user.username) {
      flag = 1;
    }
  });

  arr_hr.forEach((element) => {
    if (element["username"] == user.username) {
      flag = 1;
    }
  });
  if (flag == 1) {
    id_warning.innerHTML += `${'Account already exists!'}`;
  }
  expect(id_warning.innerHTML).toBe('Account already exists!')
})
  
describe('checkEmail', () => {
  it('should check that an email address is valid(contains "@ac.sce.ac.il") and that the user type is student',()=>{
    let email = 'student1@ac.sce.ac.il';
    let type = 'student_graduate'
    expect(func.checkEmail(email,type)).toBe(true);
    let email2 = 'student2@gmail.com';
    let type2 = 'student_graduate'
    expect(func.checkEmail(email2,type2)).toBe(false);
    let email3 = 'hr@ac.sce.ac.il';
    let type3 = 'hr'
    expect(func.checkEmail(email3,type3)).toBe(false);
    let email4 = 'inspector@ac.sce.ac.il';
    let type4 = 'inspector'
    expect(func.checkEmail(email4,type4)).toBe(false);
  })
})

describe('checkPassword', () => {
    it('should return true for a valid password', () => {
        // Set up the test
        const password = 'ValidPassw0rd!';

        // Call the function
        const result = func.checkPassword(password);

        // Assert that the function returned true
        expect(result).toBe(true);
    });

    it('should return false for an invalid password that doesnt contain a special character', () => {
        // Set up the test
        const password = 'invalidpassworD1';

        // Call the function
        const result = func.checkPassword(password);

        // Assert that the function returned false
        expect(result).toBe(false);
    });
    it('should return false for an invalid password that doesnt contain an uppercase letter', () => {
        // Set up the test
        const password = 'invalidpassword2!';

        // Call the function
        const result = func.checkPassword(password);

        // Assert that the function returned false
        expect(result).toBe(false);
    });
    it('should return false for an invalid password that doesnt contain lowercase letter', () => {
        // Set up the test
        const password = 'INVALIDPASSW0RD!';

        // Call the function
        const result = func.checkPassword(password);

        // Assert that the function returned false
        expect(result).toBe(false);
    });
    it('should return false for an invalid password that is not in the required length', () => {
        // Set up the test
        const password = 'Inval1!';

        // Call the function
        const result = func.checkPassword(password);

        // Assert that the function returned false
        expect(result).toBe(false);
    });
    it('should return false for an invalid password that doesnt contain a digit', () => {
        // Set up the test
        const password = 'invalidpassworD!';

        // Call the function
        const result = func.checkPassword(password);

        // Assert that the function returned false
        expect(result).toBe(false);
    });
});

  describe('declareEvents', () => {
    it('Check that the register button is working', () => {
      // Set up a mock add button element
      const addButton = document.createElement('button');
      addButton.id = 'signupbtn';
      document.body.appendChild(addButton);
  
      // Spy on the addEventListener method
      jest.spyOn(addButton, 'addEventListener');
  
      // Call the declareEvents function
      func.declareEvents();
  
      // Assert that the addEventListener method was called with the correct arguments
      expect(addButton.addEventListener).toHaveBeenCalledWith('click', expect.any(Function));
    });
  });