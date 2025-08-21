const login = require("../src/login");

describe("Login Function", () => {
  test("should return true for correct credentials", () => {
    expect(login("admin", "1234")).toBe(true);
  });

  test("should return false for wrong credentials", () => {
    expect(login("user", "wrong")).toBe(false);
  });

  test("should return 'Password is required' for empty password", () => {
    expect(login("admin", "")).toBe("Password is required");
  });

  test("should return 'Username is required' for empty username", () => {
    expect(login("", "1234")).toBe("Username is required");
  });
});
