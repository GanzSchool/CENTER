document.getElementById("sendButton").addEventListener("click", (event) => {
    event.preventDefault(); // megakadályozza az esetleges újratöltést
  
    // 1) Kinyerjük az input mezők értékeit
    const nameValue = document.getElementById("name").value;
    const ageValue = document.getElementById("age").value;
    const schoolValue = document.getElementById("school").value;
  
    // 2) Összeállítjuk az elküldendő objektumot
    const diakAdat = {
      nev: nameValue,
      kor: parseInt(ageValue, 10),
      iskola: schoolValue
    };
  
    // 3) POST kérés az Express szerver felé
    fetch("/diak", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(diakAdat)
    })
      .then(response => response.json())
      .then(result => {
        // Szerver visszajelzése
        console.log("Szerver válasz:", result);
        alert("Az adatok sikeresen elküldve a szervernek!");

      })
      .catch(error => {
        console.error("Hiba történt:", error);
        alert("Hiba az adatok küldése során!");
      });
  });
  