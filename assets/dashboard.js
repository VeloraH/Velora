// Simple auth simulation with localStorage

// On dashboard load: check if user is logged in and role
const currentUser = JSON.parse(localStorage.getItem('veloraUser'));

if (!currentUser || !currentUser.username) {
  // Not logged in, redirect to login
  window.location.href = '/Velora/Login/';
} else {
  // Show Admin tab only if user is admin
  if (currentUser.role === 'admin') {
    document.getElementById('adminTab').style.display = 'inline-block';
  }
}

// Tab switching logic
const tabs = document.querySelectorAll('.tab-btn');
const contents = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    const target = tab.getAttribute('data-tab');

    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    contents.forEach(c => {
      c.classList.toggle('active', c.id === target);
    });
  });
});

// Logout button
document.getElementById('logoutBtn').addEventListener('click', () => {
  localStorage.removeItem('veloraUser');
  window.location.href = '/Velora/Login/';
});

// Create user form (admin only)
const createUserForm = document.getElementById('createUserForm');
const createUserMsg = document.getElementById('createUserMsg');

createUserForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const username = document.getElementById('newUsername').value.trim();
  const password = document.getElementById('newPassword').value.trim();
  const role = document.getElementById('newUserRole').value;

  if (!username || !password || !role) {
    createUserMsg.style.color = '#ff4c4c';
    createUserMsg.textContent = 'Please fill out all fields.';
    return;
  }

  // Save new user into localStorage users list (simulate DB)
  let users = JSON.parse(localStorage.getItem('veloraUsers')) || [];

  // Check if username exists
  if (users.find(u => u.username === username)) {
    createUserMsg.style.color = '#ff4c4c';
    createUserMsg.textContent = 'Username already exists.';
    return;
  }

  users.push({ username, password, role });
  localStorage.setItem('veloraUsers', JSON.stringify(users));

  createUserMsg.style.color = '#4caf50';
  createUserMsg.textContent = `User "${username}" created successfully!`;

  createUserForm.reset();
});
