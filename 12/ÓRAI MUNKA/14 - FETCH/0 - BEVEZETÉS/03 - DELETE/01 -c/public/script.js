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
  