
const form = document.getElementById('enhancedForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const dropdown = document.getElementById('dropdown');
    const dropdownMessage = document.getElementById('dropdownMessage');

    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');

    // Validate form on submit
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      let isValid = true;

      // Validate name
      const name = nameInput.value.trim();
      if (name.length < 3) {
        nameError.textContent = 'Name must be at least 3 characters.';
        isValid = false;
      } else {
        nameError.textContent = '';
      }

      // Validate email
      const email = emailInput.value.trim();
      if (!validateEmail(email)) {
        emailError.textContent = 'Please enter a valid email address.';
        isValid = false;
      } else {
        emailError.textContent = '';
      }

      // Validate password
      const password = passwordInput.value.trim();
      if (!validatePassword(password)) {
        passwordError.textContent = 'Password must be at least 8 characters, include one uppercase letter, and one number.';
        isValid = false;
      } else {
        passwordError.textContent = '';
      }

      // If all fields are valid
      if (isValid) {
        alert('Form submitted successfully!');
        form.reset();
        dropdownMessage.textContent = '';
      }
    });

    // Validate email format
    function validateEmail(email) {
      const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      return re.test(email);
    }

    // Validate password format
    function validatePassword(password) {
      const re = /^(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;
      return re.test(password);
    }

    // Dropdown onchange event
    dropdown.addEventListener('change', () => {
      const selectedValue = dropdown.value;
      if (selectedValue) {
        dropdownMessage.textContent = `You selected: ${selectedValue}`;
      } else {
        dropdownMessage.textContent = '';
      }
    });
