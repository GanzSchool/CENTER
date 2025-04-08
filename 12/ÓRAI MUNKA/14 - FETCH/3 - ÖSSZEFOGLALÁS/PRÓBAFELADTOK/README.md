# Témazáró próbafeladat

**feladat leírás**
- hozz létre egy mappát a teljes neveddel az alábbi formában: egybe, ékezetek nélkül, kisbetável pl.: Kiss Béla - kissbela
- Ezeken belül hozdd létre az egyes projektet gyökér mappáját 

pl:
```pgsql
patient-app/
├── patient-app/               → első feladat
├── ticket-app/                → második feladat
```

- ha ezekkel megvagy hozzd létre a lenti instrukciók alapján az egyes webapplikációkat!

# Első Projekt: Páciens Adatlekérő rendszer

---

## 📁 Projekt mappaszerkezet

```pgsql
patient-app/
├── server.js               → Node.js szerver (REST API)
├── data.json               → Páciens adatokat tároló JSON fájl
└── public/                 → Kliensoldali fájlok (HTML, JS, CSS)
    ├── index.html          → Páciensadat beküldő űrlap
    ├── style.css           → stílus
    └── script.js           → Fetch logika a beküldéshez
```

---

## ⚙️ Funkciók, és mire való

### `server.js` – **REST API szerver**
- `GET /api/patient`  
  🔹 Új páciens adatainak mentése  
  🔸 Használja: `script.js`

---

### `data.json` – **Adattárolás**
```json
{
  "patients": [
    {
      "name": "Kiss József",
      "age": 45,
      "diagnosis": "Magas vérnyomás"
    }
  ]
}
```


---

## 🔁 Adatforgalom (fetch hívás)

| Frontend     | Endpoint        | HTTP metódus | Cél                   |
|--------------|-----------------|--------------|------------------------|
| `script.js`  | `/api/patient`  | GET         | Páciens lekérése      |

---

## 🧩 PROJEKT FILEOK

> `server.js`

```js
var express = require('express');
var path = require('path');
var app = express();
var port = process.env.PORT || 3000;

// Statikus fájlok kiszolgálása a public mappából
app.use(express.static(path.join(__dirname, 'public')));

// data.json kiszolgálása
app.get('/api/patient', function(req, res) {
  res.sendFile(path.join(__dirname, 'data.json'));
});

// Szerver indítása
app.listen(port, function() {
  console.log(`Szerver fut a http://localhost:${port}`);
});
```

---

> `data.json`

```json
{
    "patients": [
      {
        "name": "Kiss József",
        "age": 45,
        "diagnosis": "Magas vérnyomás"
      },
      {
        "name": "Németh Ágnes",
        "age": 32,
        "diagnosis": "Cukorbetegség"
      },
      {
        "name": "Tóth István",
        "age": 50,
        "diagnosis": "Asztma"
      },
      {
        "name": "Kovács Erika",
        "age": 28,
        "diagnosis": "Allergia"
      }
    ]
  }
```

---

> `public/index.html`

```html
<!DOCTYPE html>
<html lang="hu">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Patient Adatok</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="container">
    <button id="loadButton">📜 Adatok betöltése</button>
    <div id="patientData"></div>
  </div>
  <script src="script.js"></script>
</body>
</html>
```

---

> `public/style.css`

```css
/* Alap beállítások */
body {
    background: linear-gradient(to bottom right, #1b6b50, #14535c);
    margin: 0;
    padding: 0;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: Arial, sans-serif;
  }
  
  /* Fehér sziget */
  .container {
    background: white;
    padding: 30px;
    border-radius: 12px;
    text-align: center;
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);
    width: 350px;
  }
  
  /* Gomb */
  button {
    background-color: #3498db;
    color: white;
    border: none;
    padding: 12px 20px;
    border-radius: 8px;
    font-size: 16px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
  }
  
  button:hover {
    background-color: #217dbb;
    transform: scale(1.05);
  }
  
  /* Páciensek adatait tartalmazó konténer */
  #patientData {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    max-height: 300px;
    overflow-y: auto;
    padding-right: 10px;
  }
  
  /* Görgetősáv stílusozása */
  #patientData::-webkit-scrollbar {
    width: 8px;
  }
  
  #patientData::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;
  }
  
  #patientData::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 10px;
  }
  
  #patientData::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
  
  /* Páciens kártya */
  .patient-card {
    background: linear-gradient(to bottom right, #1c8ab6, #14535c);
    padding: 15px;
    border-radius: 10px;
    box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.5);
    text-align: left;
    color: white;
  }
```

---

> `public/script.js`

```js
document.getElementById("loadButton").addEventListener("click", function() {

    
      /*
      var container = document.getElementById("patientData");
      container.innerHTML = ""; // Korábbi tartalom törlése

      data.patients.map(function(patient) {
        var card = document.createElement("div");
        card.classList.add("patient-card");

        var name = document.createElement("h3");
        name.textContent = patient.name;

        var age = document.createElement("p");
        age.textContent = "Kor: " + patient.age;

        var diagnosis = document.createElement("p");
        diagnosis.textContent = "Diagnózis: " + patient.diagnosis;

        card.appendChild(name);
        card.appendChild(age);
        card.appendChild(diagnosis);
        container.appendChild(card);
        */
       

  

    // hiba esetén: "Hiba történt:", error

})

```

---

## 🧪 NODE környezet kialakítása

> **Ha létrehoztad a projektfájlokat**, nyisd meg a projekt gyökérmappáját terminálban és futtasd az alábbiakat:

---

### ✅ 1. Inicializálás

```bash
npm init -y
```

---

### ✅ 2. Express telepítése

```bash
npm install express
```

---

### ✅ 3. Szerver indítása

```bash
node server.js
```

**Kimenet a konzolban:**
```
Szerver fut a http://localhost:3001 címen
```

Ezután megnyithatod a böngészőben a páciens űrlapot:  
📍 `http://localhost:3001/index.html`





# 2. Projekt: IT Ticket Küldő rendszer

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
## TESZTELÉS

**Hozd létre az alábbi bejegyzést:**

> `Teljes neved:` Írdd be a teljes neved
> `Hiba:` hálózati probléma
> `Prioritás:` magas

# LEADÁS

- Mitán kész vagy, tömörítsd
- A mappa neve legyen a teljes neved egybe ékezetek nélkül kisbetűkkel pl.: Kiss Béla - kissbela
- Ezt add be a közösbe
