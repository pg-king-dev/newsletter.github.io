document.addEventListener("DOMContentLoaded", function () {
  const modalBtn = document.querySelector(".submit");
  const modal = document.querySelector(".modal-overlay");
  const closeBtn = document.querySelector(".close");
  const emailInput = document.querySelector(".email-dem");
  const errorText = document.querySelector(".error-text");
  const userEmailSpan = document.querySelector(".user-email");

  // Open modal function
  const openModal = () => {
    modal.classList.add("active");
  };

  // Close modal function
  const closeModal = () => {
    modal.classList.remove("active");
  };

  // Event listeners
  modalBtn.addEventListener("click", function (e) {
    e.preventDefault();
    validateAndClearInput();
  });
  closeBtn.addEventListener("click", closeModal);

  // Validation function
  function validateAndClearInput() {
    const email = emailInput.value;

    let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    // Display error text and style input if the email is not valid or empty
    if (!emailPattern.test(email) || email === "") {
      errorText.style.display = "block";

      // Specific styling for invalid email without affecting other error styles
      emailInput.classList.add("email-error");
      emailInput.style.color = "red";
    } else {
      // Update the email content in the pop-up
      userEmailSpan.textContent = email;

      // Clear the input value and hide error text on successful validation
      emailInput.value = "";
      errorText.style.display = "none";
      emailInput.classList.remove("email-error");

      // Display thank you message
      openModal();
    }
  }

  // Remove error class and hide error text on input focus
  emailInput.addEventListener("focus", function () {
    emailInput.classList.remove("email-error");
    emailInput.style.color = ""; // Reset color to default
    errorText.style.display = "none";
  });
});
