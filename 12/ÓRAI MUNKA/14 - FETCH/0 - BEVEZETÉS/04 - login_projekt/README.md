## Projekt mappaszerkezet

```pgsql
projekt/
├── server.js               → Node.js szerver (REST API-k)
├── users.json              → Felhasználói adatokat tároló JSON fájl
└── public/                 → Kliensoldali fájlok (HTML, JS, CSS)
    ├── login.html          → Bejelentkező felület
    ├── register.html       → Regisztrációs felület
    ├── dashboard.html      → Felhasználói lista megjelenítés
    ├── style.css           → stílus
    ├── login.js            → Login logika (fetch)
    ├── register.js         → Regisztráció logika (fetch)
    └── dashboard.js        → Dashboard (fetch + lista renderelés)
```

---

## Funkciók, és hogy mi mire való

### `server.js` – **REST API szerver**
- `GET /api/users`  
  🔹 Lekéri az összes felhasználót  
  🔸 Használja: `dashboard.js`

- `POST /api/auth/register`  
  🔹 Új felhasználót regisztrál  
  🔸 Használja: `register.js`

- `POST /api/auth/login`  
  🔹 Felhasználó bejelentkezése  
  🔸 Használja: `login.js`

- `DELETE /api/users`  
  🔹 Törli a megadott nevű felhasználót  
  🔸 (opcionálisan kezelhető dashboardon)

---

### `users.json` – **Adattárolás**
```json
{
  "users": [
    { "username": "admin", "password": "admin123" },
    { "username": "test", "password": "test123" }
  ]
}
```
- Itt tároljuk az összes regisztrált felhasználót.
- Szerver minden kérésnél ezt olvassa/beírja.

---

### `login.html` + `login.js`
- **Bejelentkező felület**
- Beküldi a felhasználónevet + jelszót a `/api/auth/login` endpointra
- Siker esetén átirányít a `dashboard.html`-re

---

### `register.html` + `register.js`
- **Új felhasználó regisztráció**
- Beküldi az adatokat a `/api/auth/register` endpointra
- Siker esetén átirányít a `login.html`-re

---

### `dashboard.html` + `dashboard.js`
- **Felhasználói felület**
- Betölti a `/api/users` endpointról az összes felhasználót
- Kirendereli `<ul id="userList">` formában

---

## Adatforgalom (fetch hívások)

| Frontend    | Endpoint               | HTTP metódus | Cél               |
|-------------|------------------------|--------------|-------------------|
| login.js    | `/api/auth/login`      | POST         | Bejelentkezés     |
| register.js | `/api/auth/register`   | POST         | Regisztráció      |
| dashboard.js| `/api/users`           | GET          | Lista lekérése    |
| (bővíthető)  | `/api/users          `| DELETE       | Felhasználó törlés|

---

## PROJEKT FILEOK

> server.js

```js
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
```

> users.json

```json
{
  "users": [
    {
      "username": "john",
      "password": "12345"
    },
    {
      "username": "jane",
      "password": "abcde"
    }
  ]
}
```

### public/

> login.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <!-- CSP: Csak a saját forrásokat engedélyezi -->
  <meta http-equiv="Content-Security-Policy" content="default-src 'self';">
  <title>Login</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="container">
    <h1>Login</h1>
    <div class="form-group">
      <label for="loginUsername">Username</label>
      <input type="text" id="loginUsername" placeholder="Enter username">
    </div>
    <div class="form-group">
      <label for="loginPassword">Password</label>
      <input type="password" id="loginPassword" placeholder="Enter password">
    </div>
    <button id="loginButton">Login</button>
    <p>Don't have an account? <a href="register.html">Register here</a></p>
  </div>
  <script src="login.js"></script>
</body>
</html>
```

> register.html

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <!-- CSP beállítás -->
  <meta http-equiv="Content-Security-Policy" content="default-src 'self'; style-src 'self' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com;">
  <title>Register</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="container">
    <h1>Register</h1>
    <div class="form-group">
      <label for="regUsername">Username</label>
      <input type="text" id="regUsername" placeholder="Enter username">
    </div>
    <div class="form-group">
      <label for="regPassword">Password</label>
      <input type="password" id="regPassword" placeholder="Enter password">
    </div>
    <button id="registerButton">Register</button>
    <p>Already have an account? <a href="login.html">Login here</a></p>
  </div>
  <script src="register.js"></script>
</body>
</html>
```

> dashboard.html

```html
<!DOCTYPE html>
<html lang="hu">
<head>
  <meta charset="UTF-8">
  <title>Dashboard</title>
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="container">
    <h1>Dashboard</h1>

    <h2>Regisztrált felhasználók</h2>
    <ul id="userList"></ul>
    <button id="refreshButton">Frissítés</button>

    <hr style="margin: 20px 0;">

    <h3>Felhasználó törlése</h3>
    <input type="text" id="deleteUsername" placeholder="Felhasználónév">
    <button id="deleteButton">Törlés</button>

    <p style="margin-top: 20px;"><a href="login.html">Kijelentkezés</a></p>
  </div>

  <script src="dashboard.js"></script>
  <script src="delete.js"></script>
</body>
</html>
```

> style.css

```css
/* Alapértelmezett beállítások */
body {
  margin: 0;
  padding: 0;
  background: #111;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  font-family: 'Helvetica Neue', sans-serif;
  position: relative; /* Szükséges, hogy a ::before abszolút pozícionált lehessen */
}

/* Kicsi, sűrű, halvány pöttyök, hullámszerű animációval */
body::before {
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -1;
  
  /* A radial-gradient létrehoz egy kis (1px-es) kört, 0.4-es átlátszósággal,
     a háttér többi része áttetsző. */
  background-image: radial-gradient(circle 1px at center, rgba(25, 118, 210, 0.4) 1px, transparent 2px);
  /* 16x16-os ismétlődő minta, így sűrűn látszanak a pöttyök */
  background-size: 16px 16px;
  
  /* Animáció induló állapot */
  background-position: 0 0;
  
  /* Hullámzó animáció beállítása */
  animation: dotswave 6s ease-in-out infinite;
  opacity: 0.8;
}

/* A hullámzást a background-position többszöri módosításával érjük el,
   ami kis lépésekben mozgatja el a pöttyöket (jobbra, le, balra, fel),
   majd visszatér az eredeti helyre. */


/* Központi konténer ("üveghatás") */
.container {
  width: 380px;
  padding: 40px;
  text-align: center;
  color: #fff;
  border-radius: 12px;
  
  /* Üveghatás */
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  
  /* Árnyékhatás, hogy lebegő szigetnek tűnjön */
  box-shadow: 0 4px 20px rgba(0,0,0,0.3);
}

/* Címek, fejléc */
h1, h2 {
  margin-bottom: 20px;
  color: #fff;
}

/* Form csoport */
.form-group {
  margin-bottom: 20px;
  text-align: center;
}

.form-group label {
  display: block;
  margin-bottom: 6px;
  color: #eee;
}

/* Input mezők */
input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 12px;
  margin: 0 auto;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 16px;
  box-sizing: border-box;
}

/* Gombok */
button {
  width: 100%;
  padding: 12px;
  margin-top: 10px;
  background: #0d47a1;
  border: none;
  border-radius: 4px;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
  transition: background 0.3s ease;
}

button:hover {
  background: #1565c0;
}

/* Linkek */
a {
  color: #90caf9;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

/* Lista stílusok */
ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

li {
  background: rgba(255, 255, 255, 0.2);
  margin: 8px 0;
  padding: 10px;
  border-radius: 4px;
  color: #fff;
  transition: background 0.3s;
}

li:hover {
  background: rgba(255, 255, 255, 0.3);
}
```

> login.js

```js
// document.getElementById("loginButton").addEventListener("click", () => {
  // const username = document.getElementById("loginUsername").value;
  // const password = document.getElementById("loginPassword").value;
  // const data = { username, password };

// :)

// });
```
> register.js

```js
// document.getElementById("loginButton").addEventListener("click", () => {
// const username = document.getElementById("loginUsername").value;
// const password = document.getElementById("loginPassword").value;
// const data = { username, password };

// :)

// });
```

> dashboard.js

```js
// const refreshUsers = () => {
 
 
// :)

// };

// document.getElementById("refreshButton").addEventListener("click", () => refreshUsers());
// refreshUsers();
```

> delete.js

```js
document.getElementById("deleteButton").addEventListener("click", () => {
    const input = document.getElementById("deleteUsername").value;
    
    const username = {
        username : input
    }

    if (!username) {
      alert("Kérlek, add meg a törlendő felhasználó nevét!");
      return;
    }


  

```


## NODE környezet kialakítás

> HA KIALAKÍTOTTAD EZT A PROJEKT STRUKTÚRÁT, AKKOR JOBB CLICK A GYÖKÉR MAPPÁRA ÉS NYISD MEG A TERMINÁLBAN
> INNEN ADD KI A LENTI HÁROM PARANCSOT!

### **Server konfiguráció létrehozása**
**ELSŐ PARANCS**
```bash
npm init -y
```
> Ezzel a paranccsal létrehozod a **package.json** fájlt, ami nyilvántartja a projekt csomagjait, verzióját stb.:
> Az `-y` automatikusan elfogadja az alapértelmezett beállításokat (később szerkesztheted a fájlt).

**Eredmény:** Létrejön a `package.json` fájl a mappában.

---

### **Függőségek (npm csomagok) telepítése a projektbe**

**MÁSODIK PARANCS**
```bash
npm install express
```

> Ez létrehoz egy `node_modules` mappát (itt lesznek a csomagok) és a `package-lock.json` fájlt.

---

### **Server futtatása**


**HARMADIK PARANCS**
```bash
node server.js
```

**Kimenet:**

```
A szerver fut az valahanyas porton!
```
---
