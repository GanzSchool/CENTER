
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
> hogy véletlenül se a public-ba csináld, mindenképp a györkében legyél és onnan add ki a parancsokat!

```pgsql
projekt mappád neve/  < ---- EZ A GYÖKÉR MAPPA
├── pizza.json    
├── server.js   
└── public/
    ├── index.html
    ├── script.js
    └── style.css
```

Ezzel a paranccsal létrehozod a **package.json** fájlt, ami nyilvántartja a projekt csomagjait, verzióját stb.:

```bash
npm init -y
```

> Az `-y` automatikusan elfogadja az alapértelmezett beállításokat (később szerkesztheted a fájlt).

**Eredmény:** Létrejön a `package.json` fájl a mappában.

---

## ✅ **3. Függőségek (npm csomagok) telepítése a projektbe**


```bash
npm install express
```

Ez létrehoz egy `node_modules` mappát (itt lesznek a csomagok) és a `package-lock.json` fájlt.

---

## ✅ **4. Server futtatása**


```bash
node server.js
```

**Kimenet:**

```
A szerver fut az valahanyas porton!
```

RROJEKT FILEOK:

index.html:

```html
<!DOCTYPE html>
<html lang="hu">
<head>
  <meta charset="UTF-8">
  <title>Pizza Rendelés Törlése</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <div class="container">
    <h1>Pizza rendelés törlése</h1>
    <!-- Űrlap mező a törlendő rendeléshez (vásárló neve) -->
    <div class="form-group">
      <label for="deleteName">Add meg a vásárló nevét:</label>
      <input type="text" id="deleteName" placeholder="Név">
    </div>
    <!-- Gomb a törlési kérés indításához -->
    <button id="deleteButton">Rendelés törlése</button>
  </div>
  <script src="script.js"></script>
</body>
</html>
```

style.css

```css
```

pizza.json

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

server.js

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

// DELETE végpont a pizza rendelés törléséhez
// A törlés a vásárló neve alapján történik
app.delete("/pizza.json", (req, res) => {
  try {
    // A törlendő rendelés azonosításához a kérésből kinyerjük a customerName értéket
    const { customerName } = req.body;

    // A pizza.json fájl aktuális tartalmának beolvasása
    const filePath = path.join(__dirname, "pizza.json");
    const jsonData = fs.readFileSync(filePath, "utf-8");
    const dataObj = JSON.parse(jsonData);

    // Az orders tömbből kiszűrjük azokat a rendeléseket,
    // amelyeknek a customerName nem egyezik a törlendő névvel.
    const initialCount = dataObj.orders.length;
    dataObj.orders = dataObj.orders.filter(order => order.customerName !== customerName);
    const finalCount = dataObj.orders.length;

    // Ha nem történt változás, nincs ilyen rendelés
    if (initialCount === finalCount) {
      return res.status(404).json({ status: "error", message: "Nincs ilyen rendelés" });
    }

    // Az új, frissített objektum visszaírása a pizza.json fájlba
    fs.writeFileSync(filePath, JSON.stringify(dataObj, null, 2), "utf-8");

    // Visszaküldjük a sikeres törlésről szóló visszajelzést
    res.json({ status: "success", message: "Rendelés törölve" });
  } catch (error) {
    console.error("Hiba a rendelés törlésekor:", error);
    res.status(500).json({ status: "error", message: "Szerver hiba történt" });
  }
});

// A szerver indítása a megadott porton
app.listen(PORT, () => {
  console.log(`Szerver fut a http://localhost:${PORT} címen`);
});
```

script.js

```js
// Eseményfigyelő hozzáadása a "deleteButton" gombhoz,
// amely kattintásra elindítja a rendelés törlésének folyamatát.
document.getElementById("deleteButton").addEventListener("click", (event) => {
    event.preventDefault(); // Megakadályozza az oldal újratöltését
  
    // 1) Lekérjük az input mező értékét, amely meghatározza a törlendő rendelést.
    //    Ebben az esetben a vásárló nevét használjuk az azonosításhoz.
    const deleteName = document.getElementById("deleteName").value;
  
    // 2) Összeállítjuk a törlendő rendelés adatait tartalmazó objektumot.
    const deleteData = {
      customerName: deleteName
    };
  
    // 3) DELETE kérés küldése a szerver felé a "pizza.json" végponton.
    //    Így a fetch hívásban csak simán azt kell megadni: "pizza.json"
    fetch("pizza.json", {
      method: "DELETE", // HTTP DELETE metódus, a törlés jelzésére
      headers: {
        "Content-Type": "application/json" // A küldött adat formátuma JSON
      },
      // Az objektumot JSON szöveggé alakítjuk, mielőtt elküldenénk
      body: JSON.stringify(deleteData)
    })
      // A szerver válaszát JSON formátumra alakítjuk
      .then(response => response.json())
      .then(result => {
        // Sikeres törlés esetén:
        console.log("Szerver válasz:", result);
        alert(result.message); // Megjelenítjük a szerver visszajelzését alert ablakban
      })
      .catch(error => {
        // Hibakezelés: a hibát kiírjuk a konzolra, és értesítjük a felhasználót is.
        console.error("Hiba történt:", error);
        alert("Hiba történt a törlés során!");
      });
  });
  
```



