    // JavaScript code for form validation
	// Prevent form from submitting
document.addEventListener("DOMContentLoaded", function () {
  // Retrieve the form and input field elements
  const form = document.getElementById("myForm");
  const inputField = document.getElementById("inputField");

  // Regular expression pattern for alphanumeric input
  const alphanumericPattern = /^[a-zA-Z0-9]+$/;

  // Add event listener for form submission
  form.addEventListener("submit", function (event) {
      // Retrieve the input field value
      const inputValue = inputField.value.trim();

      // Check if the input value matches the pattern
      if (!alphanumericPattern.test(inputValue)) {
          // Invalid input: display error message and prevent form submission
          alert("Error: Please enter only alphanumeric characters.");
          event.preventDefault();
      } else {
          // Valid input: display confirmation and 'submit' the form
          alert("Success: Form submitted successfully!");
          event.preventDefault(); // Prevent actual submission
      }
  });
});
