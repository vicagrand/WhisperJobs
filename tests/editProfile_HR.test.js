const func = require('../HRprofile/script');

it('should update the user details in local storage and session storage', () => {
    // Set up the DOM for testing
    document.body.innerHTML = `
      <input id="fname" value="New Name">
      <input id="about_you" value="New about you">
      <input id="location" value="New location">
      <input id="qualification" value="New qualification">
      <input id="position" value="New position">
      <input id="forHire" value="New for hire">
    `;
  
    // Create test data
    const user = {
      username: 'test@ac.sce.ac.il',
      full_name: 'Test Name',
      about_you: 'Test about you',
      location: 'Test location',
      education: 'Test qualification',
      jobTitle: 'Test position',
      lookingForWork: 'Yes',
      type: 'hr'
    };
  
    // Set the user in session storage and local storage
    sessionStorage.setItem('current_user', JSON.stringify(user));
    localStorage.setItem('HR', JSON.stringify(user));
    // Call the updateDetails function
    func.updateDetails();
  
    // Get the updated user from local storage
    const updatedUser = JSON.parse(localStorage.getItem('HR'))[0];
  
    // Assert that the user details
    

    expect(updatedUser.full_name).toBe('New Name');
    expect(updatedUser.about_you).toBe('New about you');
    expect(updatedUser.location).toBe('New location');
    expect(updatedUser.education).toBe('New qualification');
    expect(updatedUser.jobTitle).toBe('New position');
    expect(updatedUser.lookingForWork).toBe('New for hire');
});