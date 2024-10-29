// theme toggle button logic
document.getElementById('theme-toggle').addEventListener('click', () => {
  document.body.classList.toggle('bg-gray-900');
  document.body.classList.toggle('bg-white');
  document.getElementById('theme-toggle').textContent = document.body.classList.contains('dark-theme') ? "🌙" : "☀️";
});

// Select the hamburger and the mobile menu elements
const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

// Toggle mobile menu visibility
menuToggle.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});
