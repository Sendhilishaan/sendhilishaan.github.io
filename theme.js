(() => {
  const root = document.documentElement;
  const systemTheme = window.matchMedia('(prefers-color-scheme: dark)');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let preference = null;
  try {
    const saved = localStorage.getItem('theme');
    if (saved === 'light' || saved === 'dark') preference = saved;
  } catch { /* Theme switching still works when storage is unavailable. */ }

  function applyTheme(theme, animate = false) {
    const previousColor = getComputedStyle(root).getPropertyValue('--blue').trim();
    root.dataset.theme = theme;
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.content = theme === 'dark' ? '#282a36' : '#ffffff';
    const button = document.querySelector('[data-theme-toggle]');
    if (button) {
      const label = `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`;
      button.setAttribute('aria-label', label);
      button.title = label;
    }
    for (const name of document.querySelectorAll('.ascii-name')) {
      name.classList.remove('theme-sweep');
      if (animate && !reducedMotion.matches) {
        name.style.setProperty('--sweep-from', previousColor);
        name.style.setProperty('--sweep-to', getComputedStyle(root).getPropertyValue('--blue').trim());
        // Restart the sweep cleanly when the button is clicked again quickly.
        void name.offsetWidth;
        name.classList.add('theme-sweep');
      }
    }
  }

  applyTheme(preference || (systemTheme.matches ? 'dark' : 'light'));
  systemTheme.addEventListener('change', () => {
    if (!preference) applyTheme(systemTheme.matches ? 'dark' : 'light');
  });
  reducedMotion.addEventListener('change', () => {
    if (reducedMotion.matches) {
      document.querySelectorAll('.ascii-name').forEach(name => name.classList.remove('theme-sweep'));
    }
  });
  document.addEventListener('DOMContentLoaded', () => {
    for (const name of document.querySelectorAll('.ascii-name')) {
      name.dataset.ascii = name.textContent;
      name.addEventListener('animationend', event => {
        if (event.animationName === 'name-color-sweep') name.classList.remove('theme-sweep');
      });
    }
    const button = document.querySelector('[data-theme-toggle]');
    if (!button) return;
    applyTheme(root.dataset.theme);
    button.hidden = false;
    button.addEventListener('click', () => {
      preference = root.dataset.theme === 'dark' ? 'light' : 'dark';
      try { localStorage.setItem('theme', preference); } catch { /* Optional persistence. */ }
      applyTheme(preference, true);
    });
  });
})();
