document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();
  const errorMsg = document.getElementById('errorMsg');

  // Load saved users from localStorage or default users if none exist
  let users = JSON.parse(localStorage.getItem('veloraUsers'));
  if (!users) {
    // default users on first run
    users = [
      { username: 'admin', password: 'password123', role: 'admin' },
      { username: 'user', password: 'userpass', role: 'user' },
    ];
    localStorage.setItem('veloraUsers', JSON.stringify(users));
  }

  const user = users.find(u => u.username === username && u.password === password);

  if (user) {
    // Save current user to localStorage
    localStorage.setItem('veloraUser', JSON.stringify(user));
    // Redirect to Dashboard/Home page
    window.location.href = '/Velora/Dashboard/';
  } else {
    errorMsg.style.display = 'block';
    errorMsg.textContent = 'Invalid username or password.';
  }
});
