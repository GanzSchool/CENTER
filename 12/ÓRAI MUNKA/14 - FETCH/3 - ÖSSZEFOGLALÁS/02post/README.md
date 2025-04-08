## 🎫 Projekt: IT Ticket Küldő rendszer

---

## 📁 Projekt mappaszerkezet

```pgsql
ticket-app/
├── server.js               → Node.js szerver (REST API)
├── tickets.json            → IT problémákat tároló JSON fájl
└── public/                 → Kliensoldali fájlok (HTML, JS, CSS)
    ├── ticket.html         → Ticket küldő űrlap
    ├── style.css           → stílus
    └── script.js           → Fetch logika a ticket elküldéséhez
```

---

## ⚙️ Funkciók és hogy mire való

### `server.js` – **REST API szerver**
- `POST /api/ticket`  
  🔹 Új IT probléma mentése  
  🔸 Használja: `script.js`

---

### `tickets.json` – **Adattárolás**
```json
{
  "tickets": [
    {
      "title": "Nyomtató hiba",
      "description": "A nyomtató nem működik.",
      "priority": "Magas"
    }
  ]
}
```
- Itt tárolódik minden beküldött ticket (új hiba).
- A szerver minden POST kérésnél ehhez adja hozzá az új bejegyzést.

---

### `ticket.html` + `script.js`
- **Felhasználói felület**
- Űrlap három mezővel: Cím, Leírás, Prioritás
- A felhasználó beírja az adatokat, majd a "Küldés" gombbal beküldi őket a szerverre

---

## 🔁 Adatforgalom (fetch hívások)

| Frontend     | Endpoint       | HTTP metódus | Cél                   |
|--------------|----------------|--------------|------------------------|
| `script.js`  | `/api/ticket`  | POST         | Új ticket elküldése    |

---

## 🧩 PROJEKT FILEOK

> `server.js`

```js
const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3002;

app.use(express.json());
app.use(express.static("public"));

app.post("/api/ticket", function(req, res) {
  try {
    var ujTicket = req.body;
    var jsonAdat = fs.readFileSync(path.join(__dirname, "tickets.json"), "utf-8");
    var adatObj = JSON.parse(jsonAdat);

    adatObj.tickets.push(ujTicket);

    fs.writeFileSync(
      path.join(__dirname, "tickets.json"),
      JSON.stringify(adatObj, null, 2),
      "utf-8"
    );

    res.json({ status: "success", message: "Új ticket hozzáadva" });
  } catch (error) {
    console.error("Hiba a ticket mentésekor:", error);
    res.status(500).json({ status: "error", message: "Szerver hiba történt" });
  }
});

app.listen(PORT, function() {
  console.log("Szerver fut a http://localhost:" + PORT + " címen");
});
```

---

> `tickets.json`

```json
{
  "tickets": []
}
```

---

> `public/ticket.html`

```html
<!DOCTYPE html>
<html lang="hu">
<head>
  <meta charset="UTF-8" />
  <title>Új IT Ticket hozzáadása</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="container">
    <h1>Ticket adatküldés</h1>
    <div class="form-group">
      <label for="title">Bejelenő neve:</label>
      <input type="text" id="title" placeholder="Add meg a neved" />
    </div>

    <div class="form-group">
      <label for="description">Leírás:</label>
      <input type="text" id="description" placeholder="Írd le a problémát" />
    </div>

    <div class="form-group">
      <label for="priority">Prioritás:</label>
      <input type="text" id="priority" placeholder="Magas, Közepes, Alacsony" />
    </div>

    <button id="sendButton">Küldés</button>
  </div>

  <script src="script.js"></script>
</body>
</html>
```

---

> `public/style.css`

```css
body {
    margin: 0;
    padding: 0;
    height: 100vh;
    font-family: Arial, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(to bottom right, #4a90e2, #007aff);
  }
  
  .container {
    background: #fff;
    padding: 30px;
    border-radius: 12px;
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);
    text-align: center;
    width: 300px;
  }
  
  h1 {
    margin-top: 0;
    margin-bottom: 20px;
  }
  
  .form-group {
    margin-bottom: 15px;
    text-align: left;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
  }
  
  input {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
    border-radius: 6px;
    border: 1px solid #ccc;
    outline: none;
    font-size: 14px;
  }
  
  button {
    background-color: #3498db;
    color: white;
    border: none;
    padding: 12px 20px;
    border-radius: 8px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s;
    margin-top: 10px;
  }
  
  button:hover {
    background-color: #217dbb;
  }
```

---

> `public/script.js`

```js
document.getElementById("sendButton").addEventListener("click", function(event) {
  event.preventDefault();

  var titleValue = document.getElementById("title").value;
  var descriptionValue = document.getElementById("description").value;
  var priorityValue = document.getElementById("priority").value;

  var ticketAdat = {
    title: titleValue,
    description: descriptionValue,
    priority: priorityValue
  };

  // küld el a szervernek a bekért adatokat
  
    
  // kapd el a szerver válaszát
    
  // console logban jelenjen meg a szerver válasza: "Szerver válasza:" 
  // alert formájában jelenjen ez meg: "Ticket sikeresen elküldve!"

  
  // hiba esetén: "Hiba történt:"
  // Hiba esetén jelenjen meg ez az alert: "Hiba történt a küldés során!"
  
});
```

---

## 🧪 NODE környezet kialakítása

> **Ha elkészült a fenti mappaszerkezet és fájlok**, nyisd meg a gyökérmappát terminálban (jobb katt > *Open in Terminal*), és futtasd az alábbi parancsokat:

---

### ✅ 1. Projekt inicializálása

```bash
npm init -y
```

> Ezzel létrejön a `package.json` fájl.

---

### ✅ 2. Express telepítése

```bash
npm install express
```

> Létrejön a `node_modules` mappa és a `package-lock.json` fájl.

---

### ✅ 3. Szerver indítása

```bash
node server.js
```

> Ekkor a szerver elindul, és a következő címen elérhető:

```
http://localhost:3002/ticket.html
```

