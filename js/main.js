/* ==========================================================================
   EduSphere — shared JavaScript (loaded on every Bootstrap page)
   Team: The Ethernet (Group SE-2510) · Assignment #5
   Author: Ramil Zhunussov

   1. Sound effects       -> playSound()
   2. Day / Night theme   -> toggle button in the navbar
   3. Keyboard navigation -> arrow keys move focus between navbar links
   4. replayAnimation()   -> restarts a CSS animation (used by page scripts)
   ========================================================================== */


/* ---------- 1. SOUND EFFECTS ----------
   One Audio object per sound. Before playing we stop the sound and rewind
   it, so fast repeated clicks never overlap. */
const sounds = {
  click: new Audio('sounds/click.wav'),
  star: new Audio('sounds/star.wav'),
  success: new Audio('sounds/success.wav')
};

function playSound(name) {
  const sound = sounds[name];
  sound.pause();
  sound.currentTime = 0;
  // play() returns a Promise; the browser may block audio before the first click
  sound.play().catch(() => {});
}


/* ---------- 2. DAY / NIGHT THEME ----------
   Bootstrap 5.3 switches all its colours when <html> has data-bs-theme="dark".
   The choice is saved in localStorage so it stays when the user changes page. */
const THEME_KEY = 'edusphere-theme';
const themeButton = document.getElementById('theme-toggle');

function applyTheme(theme) {
  document.documentElement.setAttribute('data-bs-theme', theme);
  const isDark = theme === 'dark';
  themeButton.textContent = isDark ? '☀️' : '🌙';
  themeButton.setAttribute('aria-label', isDark ? 'Switch to day theme' : 'Switch to night theme');
}

function loadSavedTheme() {
  try {
    return localStorage.getItem(THEME_KEY) || 'light';
  } catch {
    return 'light';   // storage can be blocked in private mode
  }
}

function saveTheme(theme) {
  try {
    localStorage.setItem(THEME_KEY, theme);
  } catch {
    // ignore: the theme still works, it just is not remembered
  }
}

applyTheme(loadSavedTheme());

themeButton.addEventListener('click', () => {
  const current = document.documentElement.getAttribute('data-bs-theme');
  const next = current === 'dark' ? 'light' : 'dark';
  document.documentElement.classList.add('theme-animated');
  applyTheme(next);
  saveTheme(next);
  playSound('click');
});


/* ---------- 3. KEYBOARD NAVIGATION IN THE NAVBAR ----------
   When a navbar link has focus, arrow keys move focus to the next/previous
   link, Home/End jump to the first/last one. */
const navLinks = Array.from(document.querySelectorAll('#mainNav .nav-link, #mainNav .btn'));

function focusNavLink(index) {
  // wrap around: after the last link comes the first one again
  const wrapped = (index + navLinks.length) % navLinks.length;
  navLinks[wrapped].focus();
}

navLinks.forEach((link, index) => {
  link.addEventListener('keydown', (event) => {
    switch (event.key) {
      case 'ArrowRight':
      case 'ArrowDown':
        focusNavLink(index + 1);
        break;
      case 'ArrowLeft':
      case 'ArrowUp':
        focusNavLink(index - 1);
        break;
      case 'Home':
        focusNavLink(0);
        break;
      case 'End':
        focusNavLink(navLinks.length - 1);
        break;
      default:
        return;   // any other key keeps its normal behaviour
    }
    event.preventDefault();   // stop the page from scrolling
  });
});


/* ---------- 4. ANIMATION HELPER ----------
   A CSS animation runs only when its class is added. To play it again we
   remove the class, force the browser to recalculate layout, then add it back. */
function replayAnimation(element, className) {
  element.classList.remove(className);
  void element.offsetWidth;
  element.classList.add(className);
}
