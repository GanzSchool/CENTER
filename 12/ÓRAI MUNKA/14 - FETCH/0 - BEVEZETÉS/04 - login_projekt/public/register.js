document.getElementById("registerButton").addEventListener("click", () => {
  const username = document.getElementById("regUsername").value;
  const password = document.getElementById("regPassword").value;
  const data = { username, password };

  fetch("/api/auth/register", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  })
    .then(response => response.json())
    .then(result => {
      console.log("Register response:", result);
      alert(result.message);
      if (result.success) {
        window.location.href = "login.html";
      }
    })
    .catch(error => {
      console.error("Error:", error);
      alert("Registration failed");
    });
});
