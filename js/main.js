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
    emailInput.style.borderColor = '#D5DCE3'
    emailInput.style.color = '#373747'

  } else {
    emailMessage.style.display ='flex';
    emailInput.style.borderColor = '#DB4732'
    emailInput.style.color = '#DB4732'
  }

  if (isConfirmationUrlValid) {
    confirmationUrlMessage.style.display ='none';
    confirmationUrlInput.style.borderColor = '#D5DCE3'
    confirmationUrlInput.style.color = '#373747'
  } else {
    confirmationUrlMessage.style.display ='flex';
    confirmationUrlInput.style.borderColor = '#DB4732'
    confirmationUrlInput.style.color = '#DB4732'
  }

  submitButton.disabled = !(isEmailValid && isConfirmationUrlValid);
}

function submitForm() {
    const email = document.getElementById('email').value;
    const confirmationUrl = document.getElementById('confirmationUrl').value;
  

    if (email && confirmationUrl) {
   
      const link = `${confirmationUrl}?email=${encodeURIComponent(email)}`;
  
  
      window.open(link, '_blank');
    } else {
      alert('Please fill in both fields.');
    }
  }

 