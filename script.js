const openMobileMenu = document.querySelector('.enabled-menu');
const closeButton = document.querySelector('.closing-icon');

openMobileMenu.addEventListener('click', () => {
  document.querySelector('.mobile-menu-expanded').classList.add('visible');
});

closeButton.addEventListener('click', () => {
  document.querySelector('.mobile-menu-expanded').classList.remove('visible');
});
