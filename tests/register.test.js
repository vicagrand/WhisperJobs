//import './setupTests.js';
//const declareEvents = require('../login/script');
//const checkLocal = require('../login/script');
const func = require('../login/script');
//const { JSDOM } = require('jsdom');

let arr_students;
let arr_hr;
let arr_inspector;

beforeEach(() => {
  arr_students = [{username: 'student'}];
  arr_hr = [{username: 'hr'}];
  arr_inspector = [{username: 'inspector'}];
});
  describe('checkEmail', () => {
    it('should check that an email address is valid(contains "@ac.sce.ac.il")',()=>{
      let email = 'student1@ac.sce.ac.il';
      expect(func.checkEmail(email)).toBe(true);
      let email2 = 'student2@gmail.com';
      expect(func.checkEmail(email2)).toBe(false);
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
    it('should add a click event listener to the add button', () => {
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

  describe('checkLocal', () => {
    it('should retrieve and store data from local storage', () => {
      // Set up mock data in local storage
      localStorage.setItem('Students and Graduates', JSON.stringify([{ username: 'student' }]));
      localStorage.setItem('HR', JSON.stringify([{ username: 'hr' }]));
      localStorage.setItem('Inspectors', JSON.stringify([{ username: 'inspector' }]));

      // Call the checkLocal function
      func.checkLocal();
     
      // Assert that the correct data was retrieved from local storage
      expect(arr_students).toEqual([{ username: 'student' }]);
      expect(arr_hr).toEqual([{ username: 'hr' }]);
      expect(arr_inspector).toEqual([{ username: 'inspector' }]);
    });
  });