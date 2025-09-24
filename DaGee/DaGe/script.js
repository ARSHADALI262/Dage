window.addEventListener('DOMContentLoaded', () => {
  // === Theme and Navigation Functions ===
  const themeToggle = document.getElementById('theme-toggle');
  const themeIcon = themeToggle.querySelector('i');
  const body = document.body;

  themeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    body.classList.toggle('light-mode');
    themeIcon.classList.toggle('fa-moon');
    themeIcon.classList.toggle('fa-sun');
  });

  const menuToggle = document.getElementById('menu-toggle');
  const navLinks = document.getElementById('nav-links');

  menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
  });

  document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('active');
    });
  });

  // === Form and Date Functions ===
  document.getElementById('reservationForm').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your reservation! We will confirm your booking shortly.');
    e.target.reset();
  });

  const today = new Date().toISOString().split('T')[0];
  document.getElementById('date').setAttribute('min', today);

  // === Menu Filtering and Visibility Control ===
  const filterButtons = document.querySelectorAll('.filter-btn');
  const menuItems = document.querySelectorAll('.menu-item');

  // 1. Hide all items beyond the first 10
  menuItems.forEach((item, index) => {
    if (index >= 10) {
      item.style.display = 'none';
    }
  });

  // 2. Filtering Logic
  filterButtons.forEach(button => {
    button.addEventListener('click', (e) => {
      const filter = e.target.getAttribute('data-filter');

      // Remove 'active' from all buttons
      filterButtons.forEach(btn => btn.classList.remove('active'));
      e.target.classList.add('active');

      menuItems.forEach(item => {
        const categories = item.getAttribute('data-category').trim().split(/\s+/);
        if (filter === 'all' || categories.includes(filter)) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });

      // Re-apply visibility cutoff (hide extras >10)
      menuItems.forEach((item, index) => {
        if (index >= 10) {
          item.style.display = 'none';
        }
      });
    });
  });

  // Set 'All' as active by default
  document.querySelector('.filter-btn[data-filter="all"]').classList.add('active');
});
