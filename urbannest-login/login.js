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


document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    form.addEventListener("submit", function (e) {
      e.preventDefault(); // Prevent default form submission

      const email = form.querySelector('input[type="email"]').value.trim();
      const password = form.querySelector('input[type="password"]').value.trim();

      if (email === "" || password === "") {
        alert("Please enter both email and password.");
        return;
      }

      // Simulate login success (you can replace this with a real API call)
      if (email === "user@example.com" && password === "password123") {
        alert("Login successful! Redirecting...");
        window.location.href = "dashboard.html"; // Change to actual dashboard page
      } else {
        alert("Invalid email or password.");
      }
    });
  });


  document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");
  const email = document.getElementById("loginEmail");
  const password = document.getElementById("loginPassword");
  const emailError = document.getElementById("loginEmailError");
  const passwordError = document.getElementById("loginPasswordError");

  // Password toggle
  const toggleIcon = document.querySelector(".toggle-password");
  toggleIcon.addEventListener("click", () => {
    if (password.type === "password") {
      password.type = "text";
      toggleIcon.classList.replace("fa-eye", "fa-eye-slash");
    } else {
      password.type = "password";
      toggleIcon.classList.replace("fa-eye-slash", "fa-eye");
    }
  });

  // Validation
  form.addEventListener("submit", function (e) {
    let valid = true;

    emailError.textContent = "";
    passwordError.textContent = "";

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    if (!email.value.match(emailPattern)) {
      emailError.textContent = "Please enter a valid email address.";
      valid = false;
    }

    if (password.value.trim() === "") {
      passwordError.textContent = "Password cannot be empty.";
      valid = false;
    }

    if (!valid) {
      e.preventDefault(); // Stop form submission
    } else {
      alert("Login successful!");
      // Optionally redirect or store session data
    }
  });
});
