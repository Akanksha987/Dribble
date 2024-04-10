const usernameInput = document.getElementById('username');
const emailInput = document.getElementById('email');
const termsCheckbox = document.getElementById('terms');
const submitButton = document.querySelector('button[type="submit"]');
const usernameErrorMessage = document.querySelector('.form-group.username .error-message');

// Function to check if username is empty and display error message
function validateUsername() {
  if (usernameInput.value.trim() === '') {
    usernameErrorMessage.classList.add('show'); // Add 'show' class to display error message
    return false;
  } else {
    usernameErrorMessage.classList.remove('show'); // Remove 'show' class to hide error message
    return true;
  }
}

// Function to enable/disable submit button based on validation
function updateSubmitButton() {
  const usernameValid = validateUsername();
  submitButton.disabled = !usernameValid || !termsCheckbox.checked;
}

// Event listeners for username input and terms checkbox
usernameInput.addEventListener('keyup', updateSubmitButton);
termsCheckbox.addEventListener('change', updateSubmitButton);

// Call updateSubmitButton on page load to set initial button state
updateSubmitButton();
