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
`;
//set up the input for testing
let confirm_pass = document.getElementById("confirm_password");
let pass = document.getElementById("Password");
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
  arr_students = []
  id_warning.innerHTML = "";
});


function checkPassword(password) {
  //Password must be 8 to 15 characters which contain at least one lowercase letter,
  //one uppercase letter, one numeric digit, and one special character
  var passw =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;

  if (password.match(passw)) {
    return true;
  }
  warning = `Password is too weak! Click to see the requirments`;
  return false;
}

function checkEmail(email, type) {
  if (
    email.includes("@ac.sce.ac.il") && type == "student_graduate"
  ) {
    return true;
  }
  warning = `You are not a student!`;
  return false;
}

function register() {
    let email = document.querySelector("#email_username").value.toLowerCase();
    let password = document.querySelector("#Password").value;
    let type = document.querySelector("#type").value;
    if (checkEmail(email,type) && checkPassword(password)) {
      let obj = {
        username: email,
        full_name: document.querySelector("#full_name").value,
        password: password,
        confirm_password: document.querySelector("#confirm_password").value,
        question: document
          .querySelector("#Safety_question")
          .value.toLowerCase(),
        type: type,
        about_you: "",
        location: "",
        education: "",
        jobTitle: "",
        lookingForWork: "",
      };
      if (obj.password != obj.confirm_password) {
        id_warning.innerHTML += "Passwords do not match!";
        return;
      }
      let flag = 0;
      //arr_students = Array.from(arr_students)
      arr_students.forEach((element) => {
        if (element["username"] == obj.username) {
          flag = 1;
        }
      });
      arr_inspector.forEach((element) => {
        if (element["username"] == obj.username) {
          flag = 1;
        }
      });

      arr_hr.forEach((element) => {
        if (element["username"] == obj.username) {
          flag = 1;
        }
      });
      if (flag == 1) {
        id_warning.innerHTML = "Account already exists!";
        return;
      }

      if (obj.type == "student_graduate") {
        arr_students.push(obj);
    }
  };
}
describe('register',()=>{
  it("Should add the new user to storage",()=>{
    //at first the students storage is empty
    expect(arr_students).toEqual([])
    //then we activate the function
    register();
    //now there's a user in it
    expect(arr_students).not.toEqual([])
    expect(arr_students[0]).toEqual(user)
  })

it('Shouldnt be able to make 2 accounts',()=>{
  //at first we have empty storage
  expect(arr_students).toEqual([]);
  //then we activate the function
  register();
  expect(arr_students).not.toEqual([])
  expect(arr_students[0]).toEqual(user);
  //then we activate the function again
  register();
  expect(id_warning.innerHTML).toBe('Account already exists!')
})
it('Passwords should match',()=>{
  //set up the confirm_pass element to be different than pass
  confirm_pass.value = 'wrongpass'
  //call the function
  register();
  expect(id_warning.innerHTML).toBe('Passwords do not match!')
})
});
describe('checkEmail', () => {
  it('should check that an email address is valid(contains "@ac.sce.ac.il") and that the user type is student',()=>{
    let email = 'student1@ac.sce.ac.il';
    let type = 'student_graduate'
    expect(checkEmail(email,type)).toBe(true);
    let email2 = 'student2@gmail.com';
    let type2 = 'student_graduate'
    expect(checkEmail(email2,type2)).toBe(false);
    let email3 = 'hr@ac.sce.ac.il';
    let type3 = 'hr'
    expect(checkEmail(email3,type3)).toBe(false);
    let email4 = 'inspector@ac.sce.ac.il';
    let type4 = 'inspector'
    expect(checkEmail(email4,type4)).toBe(false);
  })
})

describe('checkPassword', () => {
    it('should return true for a valid password', () => {
        // Set up the test
        const password = 'ValidPassw0rd!';

        // Call the function
        const result = checkPassword(password);

        // Assert that the function returned true
        expect(result).toBe(true);
    });

    it('should return false for an invalid password that doesnt contain a special character', () => {
        // Set up the test
        const password = 'invalidpassworD1';

        // Call the function
        const result = checkPassword(password);

        // Assert that the function returned false
        expect(result).toBe(false);
    });
    it('should return false for an invalid password that doesnt contain an uppercase letter', () => {
        // Set up the test
        const password = 'invalidpassword2!';

        // Call the function
        const result = checkPassword(password);

        // Assert that the function returned false
        expect(result).toBe(false);
    });
    it('should return false for an invalid password that doesnt contain lowercase letter', () => {
        // Set up the test
        const password = 'INVALIDPASSW0RD!';

        // Call the function
        const result = checkPassword(password);

        // Assert that the function returned false
        expect(result).toBe(false);
    });
    it('should return false for an invalid password that is not in the required length', () => {
        // Set up the test
        const password = 'Inval1!';

        // Call the function
        const result = checkPassword(password);

        // Assert that the function returned false
        expect(result).toBe(false);
    });
    it('should return false for an invalid password that doesnt contain a digit', () => {
        // Set up the test
        const password = 'invalidpassworD!';

        // Call the function
        const result = checkPassword(password);

        // Assert that the function returned false
        expect(result).toBe(false);
    });
});