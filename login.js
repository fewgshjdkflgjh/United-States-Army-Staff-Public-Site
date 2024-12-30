// Dummy login credentials (replace with backend logic for real authentication)
const validUsername = "user123";
const validPassword = "password123";

// Handle the login form submission
document.getElementById('login-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from reloading the page

  // Get the input values
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Check if the credentials are correct
  if (username === validUsername && password === validPassword) {
    // Redirect to the dashboard page after successful login
    window.location.href = "dashboard.html";  // Replace with your actual dashboard page
  } else {
    // Show error message if login fails
    document.getElementById('error-message').textContent = "Invalid username or password.";
  }
});
