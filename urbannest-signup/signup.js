const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
let menuOpen = false;

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle('active');

  if (!menuOpen) {
    gsap.to(navLinks, {
      duration: 0.4,
      opacity: 1,
      display: 'flex'
    });
    navLinks.classList.add('show');
    menuOpen = true;
  } else {
    gsap.to(navLinks, {
      duration: 0.4,
      opacity: 0,
      onComplete: () => {
        navLinks.classList.remove('show');
        navLinks.style.display = 'none';
      }
    });
    menuOpen = false;
  }
});



document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("signupForm");
  const password = document.getElementById("password");
  const confirmPassword = document.getElementById("confirmPassword");
  const passwordError = document.getElementById("passwordError");
  const email = document.getElementById("email");
  const emailError = document.getElementById("emailError");

  // Password toggle logic
  const toggleIcons = document.querySelectorAll(".toggle-password");
  toggleIcons.forEach(icon => {
    icon.addEventListener("click", () => {
      const target = document.getElementById(icon.getAttribute("data-target"));
      if (target.type === "password") {
        target.type = "text";
        icon.classList.replace("fa-eye", "fa-eye-slash");
      } else {
        target.type = "password";
        icon.classList.replace("fa-eye-slash", "fa-eye");
      }
    });
  });

  // Form validation
  form.addEventListener("submit", function (e) {
    let valid = true;

    // Reset error messages
    passwordError.textContent = "";
    emailError.textContent = "";

    // Validate email format
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.value.match(emailPattern)) {
      emailError.textContent = "Please enter a valid email address.";
      valid = false;
    }

    // Validate matching passwords
    if (password.value !== confirmPassword.value) {
      passwordError.textContent = "Passwords do not match.";
      valid = false;
    }

    if (!valid) {
      e.preventDefault();
    } else {
      alert("Account created successfully!");
      // Optional: Redirect or submit form data here
    }
  });
});
