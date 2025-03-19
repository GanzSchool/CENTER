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
  