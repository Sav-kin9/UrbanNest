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
