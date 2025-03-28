const refreshUsers = () => {
  fetch("/api/users")
    .then(response => response.json())
    .then(result => {
      console.log("Users response:", result);
      const userList = document.getElementById("userList");
      userList.innerHTML = "";
      if (result.success && result.data) {
        result.data.forEach(user => {
          const li = document.createElement("li");
          li.textContent = user.username;
          userList.appendChild(li);
        });
      } else {
        alert("Failed to retrieve users");
      }
    })
    .catch(error => {
      console.error("Error:", error);
      alert("Failed to load users");
    });
};

document.getElementById("refreshButton").addEventListener("click", () => refreshUsers());
refreshUsers();
