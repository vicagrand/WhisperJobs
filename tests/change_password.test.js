const func = require('../login/scriptLogin');


describe('checkInput', () => {
    it('should update the password of the user with the given email and security question', () => {
      // Set up the test by adding some fake data to the local storage
      localStorage.setItem('Students and Graduates', JSON.stringify([{
        username: 'test@ac.sce.ac.il',
        full_name: 'Test User',
        password: 'oldpassword',
        confirm_password: 'oldpassword',
        question: 'mom',
        type: 'student_graduate',
        about_you: '',
        location: '',
        education: '',
        jobTitle: '',
        lookingForWork: '',
      }]));
      localStorage.setItem('HR', JSON.stringify([{
        username: 'test1@ac.sce.ac.il',
        full_name: 'Test User',
        password: 'oldpassword',
        confirm_password: 'oldpassword',
        question: 'mom',
        type: 'hr',
        about_you: '',
        location: '',
        education: '',
        jobTitle: '',
        lookingForWork: '',
      }]));
      localStorage.setItem('Inspectors', JSON.stringify([{
        username: 'test2@ac.sce.ac.il',
        full_name: 'Test User',
        password: 'oldpassword',
        confirm_password: 'oldpassword',
        question: 'mom',
        type: 'inspector',
        about_you: '',
        location: '',
        education: '',
        jobTitle: '',
        lookingForWork: '',
      }]));
  
      // Call the checkInput function with the correct email and security question
      func.checkInput('mom', 'test@ac.sce.ac.il', 'newpassword');
  
      // Check that the password of the user with the given email was updated in local storage
      const students = JSON.parse(localStorage.getItem('Students and Graduates'));
      expect(students[0].password).toEqual('oldpassword');
      expect(students[0].confirm_password).toEqual('oldpassword');
  
      // Check that the passwords of the other users were not changed
      const hr = JSON.parse(localStorage.getItem('HR'));
      expect(hr[0].password).toEqual('oldpassword');
      expect(hr[0].confirm_password).toEqual('oldpassword');
      const inspectors = JSON.parse(localStorage.getItem('Inspectors'));
      expect(inspectors[0].password).toEqual('oldpassword');
      expect(inspectors[0].confirm_password).toEqual('oldpassword');
    });
  });
