document.getElementById("loadButton").addEventListener("click", function() {
  fetch('/api/patients')
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      var container = document.getElementById("patientData");
      container.innerHTML = ""; // Korábbi tartalom törlése

      data.patients.map(function(patient) {
        var card = document.createElement("div");
        card.classList.add("patient-card");

        var name = document.createElement("h3");
        name.textContent = patient.name;

        var age = document.createElement("p");
        age.textContent = "Kor: " + patient.age;

        var diagnosis = document.createElement("p");
        diagnosis.textContent = "Diagnózis: " + patient.diagnosis;

        card.appendChild(name);
        card.appendChild(age);
        card.appendChild(diagnosis);
        container.appendChild(card);
      });
    })
    .catch(function(error) {
      console.error("Hiba történt:", error);
    });
});
