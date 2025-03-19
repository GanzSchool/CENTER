
## 1. Projekt létrehozása

> Töltsd le egyenként a kódokat és helyezd el az alábbiak szerint:

```pgsql
projekt mappád neve/
├── pizza.json
├── server.js
└── public/
    ├── index.html
    ├── script.js
    └── style.css
```



---


## ✅ **2. Node.js környezet inicializálása a projekt mappában (package.json létrehozása)**

**FONTOS**
> hogy véletlenül se a public-ba csináld, mindenképp a gyökrben legyél és onnan add ki a lenti parancsokat!

```pgsql
projekt mappád neve/  < ---- EZ A GYÖKÉR MAPPA
├── pizza.json    
├── server.js   
└── public/
    ├── index.html
    ├── script.js
    └── style.css
```

> HA KIALAKÍTOTTAD EZT A PROJEKT STRUKTÚRÁT, AKKOR JOBB CLICK A GYÖKÉR MAPPÁRA ÉS NYISD MEG A TERMINÁLBAN
> INNEN ADD KI A LENTI HÁROM PARANCSOT!




**ELSŐ PARANCS**
```bash
npm init -y
```
> Ezzel a paranccsal létrehozod a **package.json** fájlt, ami nyilvántartja a projekt csomagjait, verzióját stb.:
> Az `-y` automatikusan elfogadja az alapértelmezett beállításokat (később szerkesztheted a fájlt).

**Eredmény:** Létrejön a `package.json` fájl a mappában.

---

## ✅ **3. Függőségek (npm csomagok) telepítése a projektbe**

**MÁSODIK PARANCS**
```bash
npm install express
```

> Ez létrehoz egy `node_modules` mappát (itt lesznek a csomagok) és a `package-lock.json` fájlt.

---

## ✅ **4. Server futtatása**


**HARMADIK PARANCS**
```bash
node server.js
```

**Kimenet:**

```
A szerver fut az valahanyas porton!
```
---

# **RROJEKT FILEOK:**

> index.html:

```html
<!DOCTYPE html>
<html lang="hu">
<head>
  <meta charset="UTF-8">
  <title>Pizza Rendelés Frissítése</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="container">
    <h1>Pizza rendelés frissítése</h1>
    
    <!-- Vásárló nevének megadása (azonosító) -->
    <div class="form-group">
      <label for="updateName">Vásárló neve:</label>
      <input type="text" id="updateName" placeholder="Add meg a vásárló nevét">
    </div>
    
    <!-- Új pizza típus megadása -->
    <div class="form-group">
      <label for="newPizzaType">Új pizza típusa:</label>
      <input type="text" id="newPizzaType" placeholder="Pl. Margherita, Pepperoni">
    </div>
    
    <!-- Új méret megadása -->
    <div class="form-group">
      <label for="newSize">Új méret:</label>
      <input type="text" id="newSize" placeholder="Pl. Small, Medium, Large">
    </div>
    
    <!-- Gomb a frissítés elindításához -->
    <button id="updateButton">Rendelés Frissítése</button>
  </div>
  <script src="script.js"></script>
</body>
</html>
```

> style.css

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
    background: linear-gradient(to bottom right, #ff7b00, #ff4500);
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

> pizza.json

```json
{
    "orders": [
      {
        "customerName": "Kovács Béla",
        "pizzaType": "Margherita",
        "size": "Medium"
      },
      {
        "customerName": "Nagy Anna",
        "pizzaType": "Pepperoni",
        "size": "Large"
      },
      {
        "customerName": "Szabó Péter",
        "pizzaType": "Vegetarian",
        "size": "Small"
      }
    ]
  }
```

> server.js

```js
const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3001;

// Middleware, amely JSON formátumú kéréseket tud olvasni
app.use(express.json());

// A public mappa statikus tartalmának kiszolgálása
app.use(express.static("public"));

// PUT végpont a pizza rendelés frissítéséhez
// A frissítés a customerName alapján történik
app.put("/pizza.json", (req, res) => {
  try {
    // Kinyerjük a kérés testéből a frissítendő rendelés adatait
    const { customerName, pizzaType, size } = req.body;

    // A pizza.json fájl aktuális tartalmának beolvasása
    const filePath = path.join(__dirname, "pizza.json");
    const jsonData = fs.readFileSync(filePath, "utf-8");
    const dataObj = JSON.parse(jsonData);

    // Megkeressük azt a rendelést, ahol a customerName megegyezik
    const orderIndex = dataObj.orders.findIndex(order => order.customerName === customerName);
    if (orderIndex === -1) {
      return res.status(404).json({ status: "error", message: "Nincs ilyen rendelés" });
    }

    // Frissítjük a megtalált rendelés adatait
    dataObj.orders[orderIndex] = {
      customerName,
      pizzaType,
      size
    };

    // Az új, frissített objektum visszaírása a pizza.json fájlba
    fs.writeFileSync(filePath, JSON.stringify(dataObj, null, 2), "utf-8");

    // Sikeres frissítésről visszajelzést küldünk
    res.json({ status: "success", message: "Rendelés frissítve" });
  } catch (error) {
    console.error("Hiba a rendelés frissítésekor:", error);
    res.status(500).json({ status: "error", message: "Szerver hiba történt" });
  }
});

// A szerver indítása a megadott porton
app.listen(PORT, () => {
  console.log(`Szerver fut a http://localhost:${PORT} címen`);
});
```

> script.js

```js
// Eseményfigyelő hozzáadása az "updateButton" gombhoz,
// amely kattintásra elindítja a frissítési (update) kérelmet.
document.getElementById("updateButton").addEventListener("click", () => {
  
    // 1) Lekérjük az input mezők értékeit:
    //    - updateName: a frissítendő rendelés azonosítója (vásárló neve)
    //    - newPizzaType: az új pizza típus
    //    - newSize: az új pizza mérete
    const updateName = document.getElementById("updateName").value;
    const newPizzaType = document.getElementById("newPizzaType").value;
    const newSize = document.getElementById("newSize").value;
  
    // 2) Összeállítjuk a frissítéshez szükséges adatokat tartalmazó objektumot
    /*const updateData = {
      customerName: , 
      pizzaType: ,
      size: 
    };*/
  
    // 3) PUT kérés küldése a szerver felé a "pizza.json" végponton.
    //    A kérés utasítja a szervert, hogy frissítse a megadott rendelést az új adatokkal.
     // HTTP PUT metódus a frissítési művelethez
      
        // Az elküldött adat formátuma JSON
      
      // Az updateData objektumot JSON szöveggé alakítjuk, mielőtt elküldenénk a szervernek
     
       // A szerver válaszát JSON formátumra alakítjuk
      
        // Sikeres frissítés esetén:
        //console.log("Szerver válasz:", result);
        //alert(result.message); // A szerver üzenetét megjelenítjük a felhasználónak
      
      
        // Hibakezelés: ha hiba lép fel a kérés során,
        // a hibát a konzolra írjuk, és alert üzenetben értesítjük a felhasználót.
        //console.error("Hiba történt a frissítés során:", error);
        //alert("Hiba történt a frissítés során!");
      
  });
```



