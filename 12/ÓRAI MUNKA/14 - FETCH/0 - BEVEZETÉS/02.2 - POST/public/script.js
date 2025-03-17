// Hozzáadunk egy eseményfigyelőt az "orderButton" azonosítójú gombhoz,
// így amikor a felhasználó rákattint, elindul a rendelés leadásának folyamata.
document.getElementById("orderButton").addEventListener("click", (event) => {
  
  // Megakadályozzuk, hogy a gomb alapértelmezett viselkedése (például űrlap beküldése vagy oldal újratöltése) végbemenjen.
  event.preventDefault(); // Megakadályozza az oldal újratöltését

  // 1) Lekérjük az űrlap input mezőinek aktuális értékeit:
  //    - "name": A vásárló neve.
  //    - "pizzaType": A kiválasztott pizza típusa.
  //    - "size": A pizza mérete.
  const nameValue = document.getElementById("name").value;
  const pizzaTypeValue = document.getElementById("pizzaType").value;
  const sizeValue = document.getElementById("size").value;

  // 2) Összeállítjuk az elküldendő rendelési adatokat egy objektumban.
  // Az objektum kulcsai megfelelnek annak, amire a szerver számít (pl. "customerName", "pizzaType", "size").
  const orderData = {
    customerName: nameValue, // A vásárló neve
    pizzaType: pizzaTypeValue, // A pizza típusa (pl. Margherita, Pepperoni, stb.)
    size: sizeValue // A pizza mérete (pl. Small, Medium, Large)
  };

  // 3) POST kérést küldünk a szerver felé a "pizza.json" végponton,
  //    amelyen keresztül a rendelési adatok a szerverre kerülnek.
  //    A fetch() függvényben csak egyszerűen "pizza.json"-t adunk meg, mert ez a végpont a megfelelő útvonal.
  fetch("pizza.json", {
    method: "POST", // A HTTP metódus, amely jelzi, hogy adatot küldünk a szervernek
    headers: {
      "Content-Type": "application/json" // A header jelzi, hogy az elküldött adat JSON formátumú
    },
    // Az orderData objektumot JSON szöveggé alakítjuk az elküldés előtt
    body: JSON.stringify(orderData)
  })
    // A szerver válaszát először JSON formátumra alakítjuk
    .then(response => response.json())
    .then(result => {
      // Sikeres válasz esetén:
      // - A szerver által küldött választ kiírjuk a konzolra.
      // - Megjelenítünk egy alert üzenetet a felhasználónak, jelezve, hogy a rendelés sikeresen leadva.
      console.log("Szerver válasz:", result);
      alert("A rendelés sikeresen leadva!");
    })
    .catch(error => {
      // Ha hiba lép fel a kérés során (például hálózati hiba, szerverhiba stb.),
      // a hibát kiírjuk a konzolra, és a felhasználónak is jelezzük az alert üzenettel.
      console.error("Hiba történt:", error);
      alert("Hiba történt a rendelés leadása során!");
    });
});
