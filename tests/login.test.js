const login = require("../src/login");

describe("Login Function", () => {
  test("should return true for correct credentials", () => {
    expect(login("admin", "1234")).toBe(true);
  });

  test("should return false for wrong credentials", () => {
    expect(login("user", "wrong")).toBe(false);
  });
});
