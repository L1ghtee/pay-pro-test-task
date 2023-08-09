const emailInput = document.getElementById('email');
const confirmationUrlInput = document.getElementById('confirmationUrl');
const emailMessage = document.getElementById('emailMessage');
const confirmationUrlMessage = document.getElementById('confirmationUrlMessage');
const submitButton = document.getElementById('submitButton');

emailInput.addEventListener('input', function() {
  validateForm();
});

confirmationUrlInput.addEventListener('input', function() {
  validateForm();
});


function validateForm() {
  const email = emailInput.value.trim();
  const confirmationUrl = confirmationUrlInput.value.trim();

  const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  const isEmailValid = emailPattern.test(email);
  const isConfirmationUrlValid = confirmationUrl.startsWith('https://');

  if (isEmailValid) {
    emailMessage.style.display ='none';
  } else {
    emailMessage.style.display ='flex';
  }

  if (isConfirmationUrlValid) {
    confirmationUrlMessage.style.display ='none';
  } else {
    confirmationUrlMessage.style.display ='flex';
  }

  submitButton.disabled = !(isEmailValid && isConfirmationUrlValid);
}

function submitForm() {
    const email = document.getElementById('email').value;
    const confirmationUrl = document.getElementById('confirmationUrl').value;
  
    // Переконайтеся, що обидва поля мають значення
    if (email && confirmationUrl) {
      // Створіть посилання з введеними даними
      const link = `${confirmationUrl}?email=${encodeURIComponent(email)}`;
  
      // Перенаправити користувача на створене посилання
      window.open(link, '_blank');
    } else {
      alert('Please fill in both fields.');
    }
  }