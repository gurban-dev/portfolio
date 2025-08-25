// Scroll animation observer
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting) entry.target.classList.add('show');
  });
}, { threshold: 0.2 });

document.querySelectorAll('.fade-slide').forEach(el => observer.observe(el));

const themeToggleBtn = document.getElementById('theme-toggle-btn');
const icon = themeToggleBtn.querySelector('i');

// Apply theme and update icon
const applyTheme = (theme) => {
  // Logs the colour mode of the screen.
  console.log('theme:', theme);

  document.documentElement.setAttribute('data-theme', theme);

  const html = document.documentElement;

  if (theme === 'dark') {
    console.log('Switching to dark mode.');

    html.classList.remove('light');

    html.classList.add('dark');
  } else {
    console.log('Switching to light mode.');

    html.classList.remove('dark');

    html.classList.add('light');
  }

  // Update icon
  const icon = themeToggleBtn.querySelector('i');

  if (theme === 'dark') {
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
  const currentTheme = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
  applyTheme(currentTheme === 'dark' ? 'light' : 'dark');
});

// For anchor tags in hero section.
const baseClasses = `
  flex-1 flex items-center justify-center gap-2 
  px-4 py-2 rounded-lg shadow-md border 
  hover:bg-blue-600 hover:text-white transition
`;

// Optionally, define specific hover classes for each link
const hoverClasses = [
  // LinkedIn
  "hover:bg-blue-600 hover:text-white",

  // Resume
  "hover:bg-yellow-500 hover:text-white",

  // GitHub
  "hover:bg-gray-800 hover:text-white",

  // Email
  "hover:bg-red-600 hover:text-white"
];

// Get all anchor tags inside the container
const links = document.querySelectorAll("#links-container a");

// Assign the classes
links.forEach((link, index) => {
  link.className = `${baseClasses} ${hoverClasses[index]}`;
});

// Tailwind CSS utility classes.
const badgeClasses = `
  px-3 py-1 bg-gray-200 dark:bg-gray-700
  text-gray-800 dark:text-gray-200
  rounded-full text-sm font-semibold`;

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
  bg-white dark:bg-gray-800 rounded`;

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