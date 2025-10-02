
const html = document.documentElement;
const toggle = document.getElementById('themeToggle');
const label = document.getElementById('themeLabel');
const yearSpan = document.getElementById('year');

// Default to light. Respect previous choice.
const stored = localStorage.getItem('imz-theme');
if (stored === 'dark') {
  html.classList.add('dark');
  label.textContent = 'Light';
} else {
  html.classList.remove('dark');
  label.textContent = 'Dark';
}

toggle.addEventListener('click', () => {
  const isDark = html.classList.toggle('dark');
  localStorage.setItem('imz-theme', isDark ? 'dark' : 'light');
  label.textContent = isDark ? 'Light' : 'Dark';
});

yearSpan.textContent = new Date().getFullYear();
