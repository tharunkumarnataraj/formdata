document.getElementById('myForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent form submission

  // Get form values
  var name = document.getElementsByName('name')[0].value;
  var email = document.getElementsByName('email')[0].value;

  // Create an object with the form values
  var formData = {
    name: name,
    email: email
  };

  // Store the form data in the browser's local storage
  localStorage.setItem('formData', JSON.stringify(formData));

  // Display a confirmation message
  var confirmationMsg = document.createElement('p');
  confirmationMsg.textContent = 'Thank you for submitting the form!';
  document.body.appendChild(confirmationMsg);
});
