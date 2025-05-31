document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const username = document.getElementById('username').value.trim();
  const password = document.getElementById('password').value.trim();
  const errorMsg = document.getElementById('errorMsg');

  // Demo validation: allow only 'admin' with password 'password123'
  if ((username === 'admin' && password === 'password123') ||
      (username === 'user' && password === 'userpass')) {
    // Redirect to dashboard or home page after successful login
    window.location.href = '/Velora/Home/';
  } else {
    errorMsg.style.display = 'block';
    errorMsg.textContent = 'Invalid username or password.';
  }
});
