exports.login = (req, res) => {
  const { username, password } = req.body;

  if (!username) {
    return res.status(400).json({ error: "Username is required" });
  }

  // BUG: tidak cek password kosong
  if (username === "admin" && password === "1234") {
    return res.json({ message: "Login success" });
  }

  return res.status(401).json({ error: "Invalid credentials" });
};
