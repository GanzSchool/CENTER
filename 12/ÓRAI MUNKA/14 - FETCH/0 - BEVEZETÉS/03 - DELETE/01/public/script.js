// Eseményfigyelő hozzáadása a "deleteButton" gombhoz,
// amely kattintásra elindítja a rendelés törlésének folyamatát.
document.getElementById("deleteButton").addEventListener("click", () => {
    
  
    // 1) Lekérjük az input mező értékét, amely meghatározza a törlendő rendelést.
    //    Ebben az esetben a vásárló nevét használjuk az azonosításhoz.
    const deleteName = document.getElementById("deleteName").value;
  
    // 2) Összeállítjuk a törlendő rendelés adatait tartalmazó objektumot.
    const deleteData = {
      customerName: deleteName
    };
  
    // 3) DELETE kérés küldése a szerver felé a "pizza.json" végponton.
    //    Így a fetch hívásban csak simán azt kell megadni: "pizza.json"
    
       // HTTP DELETE metódus, a törlés jelzésére
      
         // A küldött adat formátuma JSON
      
      // Az objektumot JSON szöveggé alakítjuk, mielőtt elküldenénk
     
      // A szerver válaszát JSON formátumra alakítjuk
      
        // Sikeres törlés esetén válasz:
       
        // Hibakezelés: a hibát kiírjuk a konzolra, és értesítjük a felhasználót is.
   
  });
  