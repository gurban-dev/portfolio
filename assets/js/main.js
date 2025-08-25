// Scroll animation observer
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting) entry.target.classList.add('show');
  });
}, { threshold: 0.2 });

document.querySelectorAll('.fade-slide').forEach(el => observer.observe(el));

const themeToggleBtn = document.getElementById('theme-toggle-btn');

// Apply theme and update icon
const applyTheme = (theme) => {
  // Logs the colour mode of the screen.
  console.log('theme:', theme);

  document.documentElement.setAttribute('data-theme', theme);

  // Update toggle colour mode icon.
  const icon = themeToggleBtn.querySelector('i');

  if (theme === 'dark') {
    console.log('Enabling dark mode.');

    // The actual icon.
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');

    // The background colour.
    themeToggleBtn.classList.remove('bg-neutral-700');
    themeToggleBtn.classList.add('bg-stone-50');

    // The colour of the icon.
    icon.classList.add('text-yellow-500');
    icon.classList.remove('text-gray-200');
  } else {
    console.log('Enabling light mode.');

    // The actual icon.
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');

    // The background colour.
    themeToggleBtn.classList.remove('bg-stone-50');
    themeToggleBtn.classList.add('bg-neutral-700');

    // The colour of the icon.
    icon.classList.add('text-yellow-500');
    icon.classList.remove('text-gray-200');
  }

  // Save preference
  localStorage.setItem('theme', theme);
}

// Load saved theme on page load
const savedTheme = localStorage.getItem('theme') || 'light';
applyTheme(savedTheme);

// Toggle theme on button click
themeToggleBtn.addEventListener('click', () => {
  const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';

  applyTheme(currentTheme === 'dark' ? 'light' : 'dark');
});

// Select all elements with the class "badge"
const badges = document.querySelectorAll(".badge");

// Apply the classes to each badge
badges.forEach(badge => {
  badge.className = `
    px-3 py-1 bg-gray-200 dark:bg-gray-700
    text-gray-800 dark:text-gray-200
    rounded-full text-sm font-semibold
    whitespace-nowrap`;
});

const iconBackgroundClasses = `
  inline-flex flex-col items-center
  bg-white p-4 rounded shadow`;

// Select all elements with the class "icon-background"
const iconBackgrounds = document.querySelectorAll(".icon-background");

// Apply the classes to each badge
iconBackgrounds.forEach(iconBackground => {
  iconBackground.className = `
    inline-flex flex-col items-center
    bg-white dark:bg-gray-700
    p-4 rounded shadow
    w-24 sm:w-28 md:w-32`;
});

const iconTextClasses = `
  font-medium w-full text-center py-2
  px-2 bg-white dark:bg-gray-800 rounded`;

const iconTexts = document.querySelectorAll('.icon-text');

iconTexts.forEach(iconText => {
  iconText.className = iconTextClasses;
})

// Mobile menu toggle
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileNav = document.getElementById('mobile-nav');

mobileMenuBtn.addEventListener('click', () => {
  mobileNav.classList.toggle('hidden');
  mobileNav.classList.toggle('show');
});

// Close dropdown when clicking a link
document.querySelectorAll('#mobile-nav a').forEach(link => {
  link.addEventListener('click', () => {
    mobileNav.classList.add('hidden');
    mobileNav.classList.remove('show');
  });
});