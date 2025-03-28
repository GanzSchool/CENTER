document.getElementById("loginButton").addEventListener("click", () => {
  const username = document.getElementById("loginUsername").value;
  const password = document.getElementById("loginPassword").value;
  const data = { username, password };

  fetch("/api/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data)
  })
    .then(response => response.json())
    .then(result => {
      console.log("Login response:", result);
      if (result.success) {
        alert(result.message);
        window.location.href = "dashboard.html";
      } else {
        alert(result.message);
      }
    })
    .catch(error => {
      console.error("Error:", error);
      alert("Login failed");
    });
});
