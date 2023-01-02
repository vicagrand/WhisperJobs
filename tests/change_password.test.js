const func = require('../login/scriptLogin');

describe('checkPassword',() =>{
    it('should check that Password is 8 to 15 characters which contain at least one lowercase letter,one uppercase letter, one numeric digit, and one special character',()=>{
      let password = '12345Aa!';
      expect(func.checkPassword(password)).toBe(true);
      let password2 = '12345Aaa';
      expect(func.checkPassword(password2)).toBe(false);//doesn't contain special character
      let password3 = '12345AA!';
      expect(func.checkPassword(password3)).toBe(false);//doesnt contain lowercase letter
      let password4 = 'aaaaaAa!';
      expect(func.checkPassword(password4)).toBe(false);//doesnt contain a digit
      let password5 = '1234Aa!';
      expect(func.checkPassword(password5)).toBe(false);//not in the required length
    })
});
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