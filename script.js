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

  // scroll-to-top button

  const scrollBtn = document.querySelector('.scroll-to-top');

  window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
      scrollBtn.style.visibility = 'visible';
    } else {
      scrollBtn.style.visibility = 'none';
    }
  });

  scrollBtn.addEventListener('click', function (e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });