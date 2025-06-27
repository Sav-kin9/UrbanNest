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


// FLATPICKR FOR DATE INPUT

flatpickr("#checkin", {
    dateFormat: "Y-m-d",
    minDate: "today"
  });

  const range = document.getElementById("price");
  const display = document.getElementById("price-value");

  range.addEventListener("input", () => {
    display.textContent = `₦${parseInt(range.value).toLocaleString()}`;
  });


// FLATPICKR INTEGRATION FOR DATES

flatpickr("#checkin-date", {
    dateFormat: "Y-m-d",
    minDate: "today"
  });

  flatpickr("#checkout-date", {
    dateFormat: "Y-m-d",
    minDate: new Date().fp_incr(1)
  });

  const form = document.getElementById("bookingForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      // Check if JS is enabled and modal exists
      const modal = document.getElementById("bookingModal");
      if (modal) {
        e.preventDefault(); // Only prevent if modal is in use
        modal.style.display = "flex";
        form.reset();
      }
    });
  }

  function closeModal() {
    document.getElementById("bookingModal").style.display = "none";
  }

  window.addEventListener("click", function (e) {
    const modal = document.getElementById("bookingModal");
    if (e.target === modal) closeModal();
  });


  // Handle booking form submission
  document.querySelector(".booking-form").addEventListener("submit", function (e) {
    e.preventDefault(); // prevent real submission
    document.getElementById("bookingModal").style.display = "flex"; // show modal
    this.reset(); // clear form
  });

  // Close the modal
  function closeModal() {
    document.getElementById("bookingModal").style.display = "none";
  }

  // Optional: Close modal when clicking outside of it
  window.addEventListener("click", function (e) {
    const modal = document.getElementById("bookingModal");
    if (e.target === modal) closeModal();
  });