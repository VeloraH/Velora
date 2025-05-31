// Fake user database (admin can add users)
let users = JSON.parse(localStorage.getItem('velora_users')) || {
  "admin": "admin123" // default admin
};

function login(username, password, redirectOnSuccess) {
  if (users[username] && users[username] === password) {
    localStorage.setItem("velora_loggedIn", username);
    window.location.href = redirectOnSuccess;
  } else {
    document.getElementById("error").textContent = "Invalid credentials.";
  }
}

function protectPage() {
  const user = localStorage.getItem("velora_loggedIn");
  if (!user) {
    window.location.href = "/Velora/Login/";
  }
}

function logout() {
  localStorage.removeItem("velora_loggedIn");
  window.location.href = "/Velora/Login/";
}

function createUser(newUser, newPass) {
  if (newUser in users) {
    alert("User already exists.");
  } else {
    users[newUser] = newPass;
    localStorage.setItem("velora_users", JSON.stringify(users));
    alert("User created successfully.");
  }
}
