// Scroll animation observer
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting) entry.target.classList.add('show');
  });
}, { threshold: 0.2 });

document.querySelectorAll('.fade-slide').forEach(el => observer.observe(el));

// Enterprise-ready Dark/Light toggle
const themeToggleBtn = document.getElementById('theme-toggle-btn');
const icon = themeToggleBtn.querySelector('i');

const applyTheme = (theme) => {
	console.log('theme:', theme);

  document.documentElement.setAttribute('data-theme', theme);

  if(theme === 'dark') {
    document.documentElement.classList.add('dark');

    icon.classList.remove('fa-moon-o');
    icon.classList.add('fa-sun-o');
  } else {
    document.documentElement.classList.remove('dark');

    icon.classList.remove('fa-sun-o');
    icon.classList.add('fa-moon-o');
  }

	// Remember the user’s theme preference once
	// the page reloads or the browser is closed.
  localStorage.setItem('theme', theme);
}

// Set initial icon based on current theme
const currentTheme = document.documentElement.getAttribute('data-theme');
applyTheme(currentTheme);

// Toggle theme on button click
themeToggleBtn.addEventListener('click', () => {
  const newTheme = document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  applyTheme(newTheme);
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
  badge.className = badgeClasses;
});

const iconBackgroundClasses = `
  inline-flex flex-col items-center
  bg-white p-4 rounded shadow`;

// Select all elements with the class "icon-background"
const iconBackgrounds = document.querySelectorAll(".icon-background");

// Apply the classes to each badge
iconBackgrounds.forEach(iconBackground => {
  iconBackground.className = iconBackgroundClasses;
});

const iconTextClasses = `
  font-medium w-full text-center py-2
  bg-white dark:bg-gray-800 rounded`;

const iconTexts = document.querySelectorAll('.icon-text');

iconTexts.forEach(iconText => {
  iconText.className = iconTextClasses;
})