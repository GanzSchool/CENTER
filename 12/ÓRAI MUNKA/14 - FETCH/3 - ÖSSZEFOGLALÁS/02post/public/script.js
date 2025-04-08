document.getElementById("sendButton").addEventListener("click", function(event) {
    event.preventDefault(); // Megakadályozza az esetleges oldal újratöltést
  
    // 1) Kinyerjük az input mezők értékeit
    var titleValue = document.getElementById("title").value;
    var descriptionValue = document.getElementById("description").value;
    var priorityValue = document.getElementById("priority").value;
  
    // 2) Összeállítjuk az elküldendő ticket objektumot
    var ticketAdat = {
      title: titleValue,
      description: descriptionValue,
      priority: priorityValue
    };
  
    // 3) POST kérés az Express szerver felé
    fetch("/api/ticket", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(ticketAdat)
    })
      .then(function(response) {
        return response.json();
      })
      .then(function(result) {
        // Szerver visszajelzése
        console.log("Szerver válasz:", result);
        alert("A ticket adatai sikeresen elküldve a szervernek!");
      })
      .catch(function(error) {
        console.error("Hiba történt:", error);
        alert("Hiba az adatok küldése során!");
      });
  });
  