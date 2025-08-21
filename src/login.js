function login(username, password) {
  if (!username) {
    return "Username is required";
  }
  if (!password) {
    return "Password is required";
  }
  if (username === "admin" && password === "1234") {
    return true;
  }
  return false;
}

module.exports = login;
