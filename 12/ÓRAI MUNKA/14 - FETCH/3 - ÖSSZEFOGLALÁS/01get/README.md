## 🏥 Projekt: Páciens Adatküldő rendszer

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
- `POST /api/patient`  
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

    
    /*.then(function(data) {
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


