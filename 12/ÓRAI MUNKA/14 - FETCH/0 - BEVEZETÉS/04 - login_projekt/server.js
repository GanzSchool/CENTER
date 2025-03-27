const express = require("express");
const fs = require("fs").promises;
const path = require("path");

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static("public"));

// GET /api/users – Visszaadja a regisztrált felhasználók listáját
app.get("/api/users", (req, res) => {
  const filePath = path.join(__dirname, "users.json");
  fs.readFile(filePath, "utf-8")
    .then(data => {
      const usersObj = JSON.parse(data);
      res.json({
        success: true,
        message: "Users retrieved successfully",
        data: usersObj.users
      });
    })
    .catch(err => {
      console.error("Error reading users.json:", err);
      res.status(500).json({ success: false, message: "Internal server error" });
    });
});

// POST /api/auth/register – Új felhasználó regisztrációja
app.post("/api/auth/register", (req, res) => {
  const newUser = req.body; // például { username, password }
  const filePath = path.join(__dirname, "users.json");
  fs.readFile(filePath, "utf-8")
    .then(data => {
      const usersObj = JSON.parse(data);
      if (usersObj.users.find(u => u.username === newUser.username)) {
        return res.status(409).json({
          success: false,
          message: "Username already exists"
        });
      }
      usersObj.users.push(newUser);
      return fs.writeFile(filePath, JSON.stringify(usersObj, null, 2), "utf-8")
        .then(() => {
          res.json({
            success: true,
            message: "User registered successfully",
            data: newUser
          });
        });
    })
    .catch(err => {
      console.error("Error registering user:", err);
      res.status(500).json({ success: false, message: "Internal server error" });
    });
});

// POST /api/auth/login – Bejelentkezés ellenőrzése
app.post("/api/auth/login", (req, res) => {
  const loginData = req.body; // például { username, password }
  const filePath = path.join(__dirname, "users.json");
  fs.readFile(filePath, "utf-8")
    .then(data => {
      const usersObj = JSON.parse(data);
      const user = usersObj.users.find(u =>
        u.username === loginData.username && u.password === loginData.password
      );
      if (user) {
        res.json({
          success: true,
          message: "Login successful",
          data: { username: user.username }
        });
      } else {
        res.status(401).json({
          success: false,
          message: "Invalid credentials"
        });
      }
    })
    .catch(err => {
      console.error("Error during login:", err);
      res.status(500).json({ success: false, message: "Internal server error" });
    });
});

// DELETE /api/users/:username – Felhasználó törlése a username alapján
app.delete("/api/users/:username", (req, res) => {
  const username = req.params.username;
  const filePath = path.join(__dirname, "users.json");
  fs.readFile(filePath, "utf-8")
    .then(data => {
      const usersObj = JSON.parse(data);
      const initialCount = usersObj.users.length;
      usersObj.users = usersObj.users.filter(u => u.username !== username);
      if (usersObj.users.length === initialCount) {
        res.status(404).json({
          success: false,
          message: "User not found"
        });
      } else {
        return fs.writeFile(filePath, JSON.stringify(usersObj, null, 2), "utf-8")
          .then(() => {
            res.json({
              success: true,
              message: "User deleted successfully"
            });
          });
      }
    })
    .catch(err => {
      console.error("Error deleting user:", err);
      res.status(500).json({ success: false, message: "Internal server error" });
    });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}/login.html`);
});
