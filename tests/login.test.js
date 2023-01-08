const func = require('../login/scriptLogin');

describe('signinaction', () => {
  beforeEach(() => {
    // Reset the global arrays before each test
    arr_students = [];
    arr_hr = [];
    arr_inspector = [];
  });

  it('should redirect to the student menu if the email and password match a student', () => {
    // Add a student to the global array
    arr_students.push({
      username: 'student@ac.sce.ac.il',
      password: 'studentpassword',
    });

    // Set up the DOM for testing
    document.body.innerHTML = `

      <div id="id_warning"></div>
      <input id="email_username" value="student@ac.sce.ac.il">
      <input id="Password" value="studentpassword">
    `;

    // Call the signinaction function
    func.signinaction();

    // Check that the correct page was redirected to
    expect(window.location.href).toBe('../MenuStudent/menustudent.html');
  });

  it('should redirect to the HR menu if the email and password match an HR', () => {
    // Add an HR to the global array
    arr_hr.push({
      username: 'hr@ac.sce.ac.il',
      password: 'hrpassword',
    });

    // Set up the DOM for testing
    document.body.innerHTML = `
      <div id="id_warning"></div>
      <input id="email_username" value="hr@ac.sce.ac.il">
      <input id="Password" value="hrpassword">
    `;

    // Call the signinaction function
    func.signinaction();

    // Check that the correct page was redirected to
    expect(window.location.href).toBe('../edit profile/editprofile.html');
  });

  it('should redirect to the inspector menu if the email and password match an inspector', () => {
    // Add an inspector to the global array
    arr_inspector.push({
      username: 'inspector@ac.sce.ac.il',
      password: 'inspectorpassword',
    });

    // Set up the DOM for testing
    document.body.innerHTML = `
      <div id="id_warning"></div>
      <input id="email_username" value="inspector@ac.sce.ac.il">
      <input id="Password" value="inspectorpassword">
    `;

    // Call the signinaction function
    func.signinaction();

    // Check that the correct page was redirected to
    
    expect(window.location.href).toBe('../MenuAdmin/menuadmin.html');
  });

  it('should display a warning if the email and password do not match any user', () => {
    // Set up the DOM for testing
    document.body.innerHTML = `
      <div id="id_warning"></div>
      <input id="email_username" value="unknown@ac.sce.ac.il">
      <input id="Password" value="unknownpassword">
    `;

    // Call the signinaction function
    func.signinaction();
    
    //Check that the correct warning is being displayed

    expect(id_warning.innerHTML).toBe('Wrong credentials');
  });
});
   
