// Test the signinaction() function
const { test } = QUnit;
QUnit.module('login', {
  beforeEach: function(){
  id_warning.innerHTML = "";
  window.location.href = "http://127.0.0.1:5500/login/login_test.html";
  localStorage.clear();
}});
test("signinaction()", function(assert) {
    window.location.href = "";
      const event = {preventDefault: function() {}};
      // Test that the login function works for students
      let obj = {
        username: "username",
        full_name: "name",
        password: "password",
        confirm_password: "password",
        type: "student",
        about_you: "",
        location: "",
        education: "",
        jobTitle: "",
      };
      arr_students.push(obj);
      localStorage.setItem("Students and Graduates",JSON.stringify(arr_students));
      id_warning.innerHTML = "";
      window.location.href = "";
      signinaction(event);
      assert.equal(id_warning.innerHTML, "login successful", "displays a message for valid credentials");
    
      // Test that the login function works for HR
      let arr_hr = [{username: "hr", password: "password"}];
      id_warning.innerHTML = "";
      localStorage.setItem("HR", JSON.stringify(arr_hr));
      window.location.href = "";
      signinaction(event);
      assert.equal(id_warning.innerHTML, "login successful", "displays a message for valid credentials");
    
      // Test that the login function works for inspectors
      let arr_inspector = [{username: "inspector", password: "password"}];
      id_warning.innerHTML = "";
      localStorage.setItem("Inspectors", JSON.stringify(arr_inspector));
      window.location.href = "";
      signinaction(event);
      assert.equal(id_warning.innerHTML, "login successful", "displays a message for valid credentials");
    
       //Test that the function displays an error message for invalid credentials
       arr_students = [{username: "student", password: "wrong_password"}];
       id_warning.innerHTML = "";
       localStorage.setItem("Students and Graduates", JSON.stringify(arr_students));
       window.location.href = "";
       signinaction(event);
       assert.equal(id_warning.innerHTML, "Wrong credentials", "displays an error message for invalid credentials");
    });
  