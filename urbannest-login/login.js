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