
# 🌱 **Témazáró próbafeladat 2**

## 📁 Általános mappaszerkezet

Hozz létre egy mappát a teljes neveddel az alábbi formában:  
**kisbetű, ékezet nélkül, szóköz nélkül**  
**pl.: Kiss Béla → `kissbela/`**

Ezen belül 3 projekt gyökérmappát:

```bash
kissbela/
├── courses-app/         # Egyetemi kurzus rendszer
├── registration-app/    # Jelentkezés beküldő rendszer
├── garden-app/          # Virtuális kert – növény törlés
```

## Feladat

- Illeszd össze a projekt egyes elemeit a megadott topológia alapján.
- script.js fileokban írd meg a kliens oldali kéréseket fetch metódus segítségével.
- Kommentekben találod az utasításokat a logika kialakításához.
- Ahol kéri a feladat végezd el a szükséges tesztelést.
- Törekedj a rendezet kód kialakításához.

  oldal link: https://ganzschool.github.io/Materials/docs/Webprogramoz%C3%A1s/JavaScript/03%20Halad%C3%B3/14.0%20FETCH%20API/

---

## 1️⃣ Projekt: **Egyetemi kurzus rendszer**  
`courses-app/`

### 📁 Mappaszerkezet

```bash
courses-app/
├── server.js
├── data.json
└── public/
    ├── index.html
    ├── style.css
    └── script.js
```

### ⚙️ Funkciók

| Endpoint        | Metódus | Cél                    |
|-----------------|---------|------------------------|
| `/api/courses`  | `GET`   | Egyetemi kurzusok lekérdezése |

### 🧩 PROJEKT FILEOK

> `public/index.html`

```html
<!DOCTYPE html>
<html lang="hu">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Egyetemi Kurzus Adatok</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="container">
    <button id="loadButton">📜 Adatok betöltése</button>
    <div id="courseData"></div>
  </div>
  <script src="script.js"></script>
</body>
</html>
```

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

/* Kurzus adatokat tartalmazó konténer */
#courseData {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    gap: 10px;
    max-height: 300px;
    overflow-y: auto;
    padding-right: 10px;
}

/* Görgetősáv stílusozása */
#courseData::-webkit-scrollbar {
    width: 8px;
}

#courseData::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 10px;
}

#courseData::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 10px;
}

#courseData::-webkit-scrollbar-thumb:hover {
    background: #555;
}

/* Kurzus kártya */
.course-card {
    background: linear-gradient(to bottom right, #1c8ab6, #14535c);
    padding: 15px;
    border-radius: 10px;
    box-shadow: 0px 3px 8px rgba(0, 0, 0, 0.5);
    text-align: left;
    color: white;
}
```
> `public/script.js`

```js
document.getElementById("loadButton").addEventListener("click", function() {
 

        // küld el a szervernek a kérést

        // kapd el a szerver válaszát

        // dolgozd fel a szerver válaszát

          // DOM - manipulációs logika
          
          /*
          var container = document.getElementById("courseData");
          container.innerHTML = ""; // Korábbi tartalom törlése
    
          data.courses.map(function(course) {
            var card = document.createElement("div");
            card.classList.add("course-card");
    
            var title = document.createElement("h3");
            title.textContent = course.name;
    
            var code = document.createElement("p");
            code.textContent = "Kurzus kód: " + course.code;
    
            var professor = document.createElement("p");
            professor.textContent = "Oktató: " + course.professor;
    
            var credits = document.createElement("p");
            credits.textContent = "Kredit: " + course.credits;
    
            card.appendChild(title);
            card.appendChild(code);
            card.appendChild(professor);
            card.appendChild(credits);
            container.appendChild(card);
          });
          */

        // hiba esetén: "Hiba történt:"

  });
```

> `server.js`

```js
var express = require('express');
var path = require('path');
var app = express();
var port = process.env.PORT || 3001;

// Statikus fájlok kiszolgálása a public mappából
app.use(express.static(path.join(__dirname, 'public')));

// data.json kiszolgálása az egyetemi kurzus adatokkal
app.get('/api/courses', function(req, res) {
  res.sendFile(path.join(__dirname, 'data.json'));
});

// Szerver indítása
app.listen(port, function() {
  console.log(`Szerver fut a http://localhost:${port}`);
});
```

> `data.json`

```json
{
    "courses": [
      {
        "code": "INF101",
        "name": "Programozás alapjai",
        "professor": "Dr. Kiss Péter",
        "credits": 5
      },
      {
        "code": "MAT102",
        "name": "Differenciálszámítás",
        "professor": "Prof. Németh Anna",
        "credits": 6
      },
      {
        "code": "PHY103",
        "name": "Klasszikus Fizika",
        "professor": "Dr. Tóth István",
        "credits": 4
      },
      {
        "code": "ENG104",
        "name": "Angol nyelv és kommunikáció",
        "professor": "Dr. Kovács Erika",
        "credits": 3
      }
    ]
  }
```

---

## 2️⃣ Projekt: **Jelentkezés beküldő rendszer**  
`registration-app/`

### 📁 Mappaszerkezet

```bash
registration-app/
├── server.js
├── tickets.json
└── public/
    ├── index.html
    ├── style.css
    └── script.js
```

### ⚙️ Funkciók

| Endpoint       | Metódus | Cél                     |
|----------------|---------|--------------------------|
| `/api/registration`  | `POST`  | Új hiba bejelentés beküldése |

### 🧩 PROJEKT FILEOK

> `public/index.html`

```html
<!DOCTYPE html>
<html lang="hu">
<head>
  <meta charset="UTF-8" />
  <title>Jelentkezés eseményre</title>
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <div class="container">
    <h1>Jelentkezési űrlap</h1>
    <div class="form-group">
      <label for="name">Név:</label>
      <input type="text" id="name" placeholder="Add meg a neved" />
    </div>

    <div class="form-group">
      <label for="email">Email:</label>
      <input type="text" id="email" placeholder="Add meg az email címed" />
    </div>

    <div class="form-group">
      <label for="comment">Megjegyzés:</label>
      <input type="text" id="comment" placeholder="Írd le, miért szeretnél részt venni" />
    </div>

    <button id="sendButton">Küldés</button>
  </div>

  <script src="script.js"></script>
</body>
</html>
```

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

> `public/script.js`

```js
document.getElementById("sendButton").addEventListener("click", () => {
  

    const nameValue = document.getElementById("name").value;
    const emailValue = document.getElementById("email").value;
    const commentValue = document.getElementById("comment").value;
  

    const registrationData = {
      name: nameValue,
      email: emailValue,
      comment: commentValue
    };
  

      // küld el a szervernek a kérést és a bekért adatokat
  
      // kapd el a szerver válaszát
    
      // console logban jelenjen meg a szerver válasza: "Szerver válasza:" ...
      // alert formájában jelenjen ez meg: "A jelentkezés sikeresen elküldve a szervernek!"

  
      // hiba esetén: "Hiba történt:" ...
      // Hiba esetén jelenjen meg ez az alert: "Hiba történt a küldés során!"

  });


```

> `server.js`

```js
const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3002;

// JSON body parser
app.use(express.json());

// Statikus fájlok kiszolgálása a public mappából
app.use(express.static("public"));

// POST végpont a jelentkezés hozzáadásához
app.post("/api/registration", (req, res) => {
  try {
    const newRegistration = req.body;

    // Beolvassuk a registrations.json aktuális tartalmát (szinkron módon)
    const filePath = path.join(__dirname, "registrations.json");
    const fileData = fs.readFileSync(filePath, "utf-8");
    const dataObj = JSON.parse(fileData);

    // Hozzáfűzzük az új jelentkezést a tömbhöz
    dataObj.registrations.push(newRegistration);

    // Frissített objektum visszaírása a fájlba
    fs.writeFileSync(filePath, JSON.stringify(dataObj, null, 2), "utf-8");

    // Sikeres válasz visszaküldése
    res.json({ status: "success", message: "Új jelentkezés hozzáadva" });
  } catch (error) {
    console.error("Hiba a jelentkezés hozzáadásakor:", error);
    res.status(500).json({ status: "error", message: "Szerver hiba történt" });
  }
});

// Szerver indítása
app.listen(PORT, () => {
  console.log("Szerver fut a http://localhost:" + PORT + " címen");
});
```

> `tickets.json`

```json
{
  "registrations": []
}
```

### ❗TESZTELÉS❗

**Hozd létre az alábbi bejegyzést!**

- `Név:` Poeltenberg Ernő
- `Email:` info@poeltenberg.com
- `Megjegyzés:` Forradalomban szeretnék résztvenni.

---

## 3️⃣ Projekt: **Virtuális kert – Növény törlése**  
`garden-app/`

### 📁 Mappaszerkezet

```bash
garden-app/
├── server.js
├── garden.json
└── public/
    ├── index.html
    ├── style.css
    └── script.js
```

### ⚙️ Funkciók

| Endpoint      | Metódus   | Cél                           |
|---------------|-----------|--------------------------------|
| `/api/plant`  | `DELETE`  | Növény eltávolítása név alapján |

### 🧩 PROJEKT FILEOK

> `public/index.html`

```html
<!DOCTYPE html>
<html lang="hu">
<head>
  <meta charset="UTF-8">
  <title>Növény eltávolítása</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="container">
    <h1>Növény eltávolítása</h1>
    <!-- Űrlap mező a törlendő növény nevének megadásához -->
    <div class="form-group">
      <label for="deletePlant">Add meg a növény nevét:</label>
      <input type="text" id="deletePlant" placeholder="Növény neve">
    </div>
    <!-- Gomb a törlési kérés indításához -->
    <button id="deleteButton">Növény törlése</button>
  </div>
  <script src="script.js"></script>
</body>
</html>
```

> `public/style.css`

```css
/* Alap stílusok a teljes oldalra */
body {
    margin: 0;
    padding: 0;
    height: 100vh;
    font-family: Arial, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    background: linear-gradient(to bottom right, #4caf50, #2e7d32);
  }
  
  /* A központi konténer stílusa */
  .container {
    background: #fff;
    padding: 30px;
    border-radius: 12px;
    box-shadow: 0px 5px 15px rgba(0, 0, 0, 0.2);
    text-align: center;
    width: 300px;
  }
  
  /* Cím stílusa */
  h1 {
    margin-top: 0;
    margin-bottom: 20px;
  }
  
  /* Űrlap elemek csoportosítása */
  .form-group {
    margin-bottom: 15px;
    text-align: left;
  }
  
  /* Címkék stílusa */
  label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
  }
  
  /* Input mezők stílusa */
  input {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
    border-radius: 6px;
    border: 1px solid #ccc;
    outline: none;
    font-size: 14px;
  }
  
  /* Gomb stílusa */
  button {
    background-color: #66bb6a;
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
    background-color: #43a047;
  }
```

> `public/script.js`

```js
document.getElementById("deleteButton").addEventListener("click", () => {
  

    const plantName = document.getElementById("deletePlant").value;
  

    const deleteData = { plantName };

      // küld el a szervernek a kérést és a bekért adatokat
  
      // kapd el a szerver válaszát
    
      // console logban jelenjen meg a szerver válasza: "Szerver válasza:" ...
      // alert formájában jelenjen ez meg: "A növény sikeresen eltávolítva."

  
      // hiba esetén: "Hiba történt:" ...
      // Hiba esetén jelenjen meg ez az alert: "Hiba történt a küldés során!"
  });
```

> `server.js`

```js
const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3003;

// JSON body parser
app.use(express.json());

// Statikus fájlok kiszolgálása a public mappából
app.use(express.static("public"));

// DELETE végpont a növény eltávolításához
// A törlés a növény neve alapján történik
app.delete("/api/plant", (req, res) => {
  try {
    // A törlendő növény azonosításához a kérésből kinyerjük a plantName értéket
    const { plantName } = req.body;

    // A garden.json fájl aktuális tartalmának beolvasása
    const filePath = path.join(__dirname, "garden.json");
    const jsonData = fs.readFileSync(filePath, "utf-8");
    const dataObj = JSON.parse(jsonData);

    // Az plants tömbből kiszűrjük azokat a növényeket, amelyek neve nem egyezik a törlendő névvel
    const initialCount = dataObj.plants.length;
    dataObj.plants = dataObj.plants.filter((plant) => plant.name !== plantName);
    const finalCount = dataObj.plants.length;

    // Ha nem történt változás, nincs ilyen növény
    if (initialCount === finalCount) {
      return res
        .status(404)
        .json({ status: "error", message: "Nem található ilyen növény" });
    }

    // Az új, frissített objektum visszaírása a garden.json fájlba
    fs.writeFileSync(filePath, JSON.stringify(dataObj, null, 2), "utf-8");

    // Visszaküldjük a sikeres törlésről szóló visszajelzést
    res.json({ status: "success", message: "Növény eltávolítva" });
  } catch (error) {
    console.error("Hiba a növény törlésekor:", error);
    res.status(500).json({ status: "error", message: "Szerver hiba történt" });
  }
});

// Szerver indítása a megadott porton
app.listen(PORT, () => {
  console.log(`Szerver fut a http://localhost:${PORT} címen`);
});
```

> `garden.json`

```json
{
    "plants": [
      {
        "name": "Napraforgó",
        "species": "Helianthus annuus",
        "lastWatered": "2025-04-01"
      },
      {
        "name": "Rozmaring",
        "species": "Rosmarinus officinalis",
        "lastWatered": "2025-04-03"
      },
      {
        "name": "Bazsalikom",
        "species": "Ocimum basilicum",
        "lastWatered": "2025-03-30"
      }
    ]
  }
```


### ❗TESZTELÉS❗

**Töröld az alábbi bejegyzést!**

 `Rozmaring`

---

## ⚙️ szerver beállítása minden projektnél

> **Az elkészült mappaszerkezet  és fájlok létrehozását követően**, nyisd meg a gyökérmappát terminálban (jobb katt > *Open in Terminal*), és futtasd az alábbi parancsokat:

### 1. Inicializálás

```bash
npm init -y
```

### 2. Express telepítése

```bash
npm install express
```

### 3. Szerver indítása

```bash
node server.js
```

---

## ✅ Ellenőrzőlista a leadás előtt

- [ ] Helyes mappanév (pl. `kissbela/`)
- [ ] Mindhárom alkalmazás mappa létrehozva
- [ ] Minden app a leírt mappanevet, aleretet, console logot, filenevet tartalmazza,
- [ ] REST API működik (GET, POST, DELETE)
- [ ] Böngészőben futtathatóak az oldalak
- [ ] Gombnyomásra működnek a fetch hívások
- [ ] Változások elmentődnek a JSON fájlba
- [ ] Tesztek elvégezve a feladat leírás alapján.

---

## 📦 Leadás

- Tömörítsd az egész névvel ellátott mappát (`kissbela.zip`)
- Küldd be az instrukciók szerint a közös beadási mappába



