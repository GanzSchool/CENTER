const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3001;

// 1) Body parser, hogy JSON formátumú body-t tudjunk olvasni
app.use(express.json());

// 2) A public mappa statikus kiszolgálása
app.use(express.static("public"));

// 3) Végpont a pizza rendelés leadásához (POST /pizza.json)
app.post("/pizza.json", (req, res) => {
  try {
    // a) Beolvassuk a kérés testében érkező új rendelést
    const newOrder = req.body;

    // b) Beolvassuk a pizza.json aktuális tartalmát (szinkron módon)
    const jsonData = fs.readFileSync(path.join(__dirname, "pizza.json"), "utf-8");
    const dataObj = JSON.parse(jsonData);

    // c) Hozzáfűzzük az új rendelést az orders tömbhöz
    dataObj.orders.push(newOrder);

    // d) Visszaírjuk a frissített objektumot a pizza.json fájlba
    fs.writeFileSync(
      path.join(__dirname, "pizza.json"),
      JSON.stringify(dataObj, null, 2),
      "utf-8"
    );

    // e) Visszaküldünk egy JSON válasz üzenetet, hogy minden rendben volt
    res.json({ status: "success", message: "Új pizza rendelés leadva" });
  } catch (error) {
    console.error("Hiba a rendelés leadásakor:", error);
    res.status(500).json({ status: "error", message: "Szerver hiba történt" });
  }
});

// 4) A szerver indítása a megadott porton
app.listen(PORT, () => {
  console.log(`Szerver fut a http://localhost:${PORT} címen`);
});
