const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3001;

// Body parser a JSON olvasáshoz
app.use(express.json());

// Statikus fájlok kiszolgálása a public mappából
app.use(express.static("public"));

// POST végpont a ticket hozzáadásához
app.post("/api/ticket", function(req, res) {
  try {
    // a) Kinyerjük a ticket adatait a kérésből
    var ujTicket = req.body;

    // b) Beolvassuk a tickets.json aktuális tartalmát (szinkron módon)
    var jsonAdat = fs.readFileSync(path.join(__dirname, "tickets.json"), "utf-8");
    var adatObj = JSON.parse(jsonAdat);

    // c) Hozzáfűzzük az új ticketet a tömbhöz
    adatObj.tickets.push(ujTicket);

    // d) Visszaírjuk a frissített objektumot a fájlba
    fs.writeFileSync(
      path.join(__dirname, "tickets.json"),
      JSON.stringify(adatObj, null, 2),
      "utf-8"
    );

    // e) Válasz visszaküldése, hogy minden rendben volt
    res.json({ status: "success", message: "Új ticket hozzáadva" });
  } catch (error) {
    console.error("Hiba a ticket hozzáadásakor:", error);
    res.status(500).json({ status: "error", message: "Szerver hiba történt" });
  }
});

// Szerver indítása
app.listen(PORT, function() {
  console.log("Szerver fut a http://localhost:" + PORT + " címen");
});
