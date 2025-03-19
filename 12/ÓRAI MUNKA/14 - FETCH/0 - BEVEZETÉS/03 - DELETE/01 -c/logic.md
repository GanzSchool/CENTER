A kliensoldali scriptnek nincs jogosultsága közvetlenül módosítani a szerver fájlrendszerét, ezért a törlés logikáját – azaz azt, hogy pontosan mit és honnan töröljön – a szerver végzi el. A kliens script feladata csupán az, hogy egy DELETE kérést indítson a megfelelő végpontra (endpoint), majd a szervertől érkező választ kezelje.

Az alábbi kód például úgy néz ki, ahogy a DELETE kérés küldése történik a scriptben:

```javascript
// Eseményfigyelő hozzáadása a "deleteButton" gombhoz,
// amely kattintásra elindítja a törlési kérelmet.
document.getElementById("deleteButton").addEventListener("click", (event) => {
  event.preventDefault(); // Megakadályozza az oldal újratöltését

  // 1) Lekérjük az input mező értékét, ami alapján azonosítjuk a törlendő rendelést.
  //    Itt például a vásárló nevét használjuk az azonosításhoz.
  const deleteName = document.getElementById("deleteName").value;

  // 2) Összeállítjuk a törléshez szükséges adatokat tartalmazó objektumot.
  const deleteData = {
    customerName: deleteName
  };

  // 3) DELETE kérés küldése a szerver felé a "pizza.json" végponton.
  //    Ez a kérés utasítja a szervert, hogy törölje a megadott rendelést.
  fetch("pizza.json", {
    method: "DELETE", // HTTP DELETE metódus, a törlési művelet jelzésére
    headers: {
      "Content-Type": "application/json" // Az adat formátuma JSON
    },
    body: JSON.stringify(deleteData) // Az objektumot JSON szöveggé alakítjuk
  })
    .then(response => response.json()) // A szerver válaszát JSON formátumra alakítjuk
    .then(result => {
      // Sikeres törlés esetén:
      console.log("Szerver válasz:", result);
      alert(result.message); // A szerver üzenetét megjelenítjük a felhasználónak
    })
    .catch(error => {
      // Hibakezelés: ha a kérés során hiba lép fel,
      // a hibát a konzolra írjuk, és egy alert üzenetben értesítjük a felhasználót.
      console.error("Hiba történt:", error);
      alert("Hiba történt a törlés során!");
    });
});
```

### Miért a szerver végzi el a törlést?

- **Biztonság:** A szerver ellenőrzi az adatokat, és csak az arra jogosult műveleteket hajtja végre. Így a kliens nem fér hozzá a fájlokhoz, ami védi az adatokat a jogosulatlan módosítástól.
- **Adatkonzisztencia:** A szerver tudja, hogyan ellenőrizze, validálja és módosítsa az adatokat, így biztosítva, hogy a törlési művelet helyesen történjen.
- **Skálázhatóság:** Ha a törlési logikát a szerveren tartjuk, könnyen bővíthetjük, például hozzáadhatunk autentikációt, jogosultságkezelést vagy egyéb üzleti logikát.

Összességében a kliensoldali script csupán azt a „utasítást” küldi el, hogy törölje a megadott rendelést, míg a tényleges törlési műveletet a szerver végzi el a saját, biztonságos logikája alapján. Ez a megközelítés a modern webalkalmazásoknál a bevett és ajánlott gyakorlat.