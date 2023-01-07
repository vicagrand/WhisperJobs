const func = require('../login/scriptLogin');


describe('signinaction', () => {
  it('should redirect to the student menu page if the login credentials are correct and the user is a student', () => {
    // Set up the test
    const loginEmail = 'student@ac.sce.ac.il';
    const loginPass = 'studentpassword';
    const element = {
      username: loginEmail,
      password: loginPass,
      type: 'student_graduate'
    };
    arr_students = [element];
    window.location.href = ''; // Reset the location so we can test if it's changed


    //Assert that the function redirected to the correct page
    expect(window.location.href).toEqual('../MenuStudent/menustudent.html');
  });
});