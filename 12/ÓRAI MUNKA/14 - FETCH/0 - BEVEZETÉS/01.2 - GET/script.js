// Hozzáadunk egy eseményfigyelőt a "loadButton" azonosítójú gombhoz,
// amely akkor fut le, ha a felhasználó rákattint a gombra.
document.getElementById("loadButton").addEventListener("click", () => {
  
    // A fetch() metódussal lekérjük az "autok.json" fájl tartalmát.
    // Ez a fájl tartalmazza az autók adatait egy JSON objektumban.

      // Az első then() függvényben a fetch által visszakapott választ JSON formátumra alakítjuk,
      // mivel az eredeti válasz nem közvetlenül egy JavaScript objektum.
      
      // A második then() függvény már a JSON formátumban kapott adatokkal dolgozik.
      
        // Kiválasztjuk a HTML dokumentumból azt az elemet, amelynek azonosítója "carData".
        // Ebbe az elembe fogjuk elhelyezni az autók adatait tartalmazó "kártyákat".
      
        
        // Mielőtt új adatokat illesztünk be, töröljük a konténer aktuális tartalmát.
        // Így elkerülhetjük, hogy a régi adatok ismétlődjenek vagy összekeveredjenek az újdonságokkal.
        // Korábbi tartalom törlése
  
        // A data objektumban feltételezzük, hogy van egy "autok" tömb, amelyben az egyes autók adatai találhatók.
        // A map() metódussal végigmegyünk az autók tömbjében, és minden egyes autó esetén végrehajtunk egy műveletsorozatot.
        
          // Létrehozunk egy új div elemet, amely az egyes autók adatait tartalmazó "kártya" lesz.
         
          // Az újonnan létrehozott div elemhez hozzáadjuk a "car-card" osztályt,
          // hogy a CSS-ben definiált formázás érvényesüljön rá.
       
  
          // Létrehozunk egy h3 elemet, amellyel megjelenítjük az autó márkáját.
          
          // Beállítjuk a h3 elem szövegét az aktuális autó "marka" mezőjének értékére.
          
  
          // Létrehozunk egy p elemet a modell megjelenítésére.
          
          // A p elem szövegét a "Modell:" szó és az aktuális autó "modell" mező értéke kombinációjával állítjuk be.
          
  
          // Létrehozunk egy újabb p elemet az évjárat megjelenítésére.
          
          // Beállítjuk a szöveget úgy, hogy az tartalmazza az autó "evjarat" mező értékét is.
          
  
          // Az elkészített brand, model és year elemeket hozzáadjuk a card div elemhez,
          // így egy teljes "autó kártyát" kapunk, amely tartalmazza az autó alapadatait.
        
  
          // Végül az elkészített autó kártyát hozzáadjuk a "carData" konténerhez,
          // így a HTML dokumentumban megjelennek az autók adatai.
          
     
  
      // Ha bármilyen hiba lép fel a fetch() hívás vagy az adatok feldolgozása során,
      // a catch() ágban a hibát a konzolra írjuk ki, hogy könnyen nyomon lehessen követni.
      
});
