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
