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