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
