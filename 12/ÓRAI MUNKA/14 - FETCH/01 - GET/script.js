document.getElementById("loadButton").addEventListener("click", () => {
    fetch('data.json')
      .then(response => response.json())
      .then(data => {
        const container = document.getElementById("studentData");
        container.innerHTML = ""; // Korábbi tartalom törlése
  
        data.diak.map(student => {
          const card = document.createElement("div");
          card.classList.add("student-card");
  
          const name = document.createElement("h3");
          name.textContent = student.nev;
  
          const age = document.createElement("p");
          age.textContent = `Kor: ${student.kor}`;
  
          const school = document.createElement("p");
          school.textContent = `Iskola: ${student.iskola}`;
  
          card.appendChild(name);
          card.appendChild(age);
          card.appendChild(school);
          container.appendChild(card);
        });
      })
      .catch(error => console.error("Hiba történt:", error));
  });
  