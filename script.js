document.addEventListener('DOMContentLoaded', function () {
  // Form and Feedback Division Selection
  const form = document.getElementById('registration-form');
  const feedbackDiv = document.getElementById('form-feedback');

  // Form Submission and Validation Logic
  form.addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form from submitting

    // Input Retrieval and Trimming
    const username = document.getElementById('username').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    // Validation Initialization
    let isValid = true;
    let messages = [];

    // Username Validation
    if (username.length < 3) {
      isValid = false;
      messages.push('Username must be at least 3 characters long.');
    }

    // Email Validation
    if (!email.includes('@') || !email.includes('.')) {
      isValid = false;
      messages.push('Email must contain "@" and "." characters.');
    }

    // Password Validation
    if (password.length < 8) {
      isValid = false;
      messages.push('Password must be at least 8 characters long.');
    }

    // Feedback Display Logic
    feedbackDiv.style.display = 'block';
    if (isValid) {
      feedbackDiv.textContent = 'Registration successful!';
      feedbackDiv.style.color = '#28a745'; // Green
    } else {
      feedbackDiv.innerHTML = messages.join('<br>');
      feedbackDiv.style.color = '#dc3545'; // Red
    }
  });
});
