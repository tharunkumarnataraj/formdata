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

  // Optionally, you can redirect the user to a thank you page
  window.location.href = 'thank_you.html';
});
