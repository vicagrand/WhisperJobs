function logout() {
    if (sessionStorage.getItem("current_user")) {
      sessionStorage.removeItem("current_user");
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
  });