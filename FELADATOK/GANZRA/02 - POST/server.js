const express = require("express");
const fs = require("fs");
const path = require("path");

const app = express();
const PORT = 3001;

// 1) Body parserek (hogy JSON formátumú body-t tudjunk olvasni)
app.use(express.json());

// 2) A public mappa statikus kiszolgálása
app.use(express.static("public"));

// 3) Végpont a diákok hozzáadásához (POST /api/diak)
app.post("/api/diak", (req, res) => {
  try {
    // a) Beolvaszuk a testből a JSON-t
    const ujDiak = req.body;

    // b) Beolvassuk a data.json aktuális tartalmát (szinkron rövidség kedvéért)
    const jsonAdat = fs.readFileSync(path.join(__dirname, "data.json"), "utf-8");
    const adatObj = JSON.parse(jsonAdat);

    // c) Hozzáfűzzük az új diákot a tömbhöz
    adatObj.diak.push(ujDiak);

    // d) Visszaírjuk a frissített objektumot a fájlba
    fs.writeFileSync(
      path.join(__dirname, "data.json"),
      JSON.stringify(adatObj, null, 2),
      "utf-8"
    );

    // e) Küldünk egy válasz JSON-t, hogy minden rendben volt
    res.json({ status: "success", message: "Új diák hozzáadva" });
  } catch (error) {
    console.error("Hiba a diák hozzáadásakor:", error);
    // Ha valami gond van, 500-as hibát dobunk
    res.status(500).json({ status: "error", message: "Szerver hiba történt" });
  }
});

// 4) Indítjuk a szervert
app.listen(PORT, () => {
  console.log(`Szerver fut a http://localhost:${PORT} címen`);
});
