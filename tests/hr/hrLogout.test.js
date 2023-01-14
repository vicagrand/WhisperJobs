//set up the window object
global.window = Object.create(window);
Object.defineProperty(window, 'location', {
    value: {
    href: ''
    }
})
let url = ''
function logout() {
    if (sessionStorage.getItem("current_user")) {
      sessionStorage.removeItem("current_user");
      url = "../login/login_n.html"
      window.location.href = url
      return true;
    }
    return false;
  }
  
describe("logout", () => {
  it("removes the current_user item from session storage", () => {
    sessionStorage.setItem("current_user", "test_user");
    const result = logout();
    expect(result).toBe(true);
    expect(sessionStorage.getItem("current_user")).toBe(null);
  });
  it("Should redirect to the login page after successful logout",()=>{
    sessionStorage.setItem("current_user", "test_user");
    //call the function
    logout();
    //redirect to the login page
    expect(window.location.href).toBe("../login/login_n.html");
    
  })
});
