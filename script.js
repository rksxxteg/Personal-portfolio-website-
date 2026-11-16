<script>
    // 1. One-click Email Copy with Toast Notification
    const toast = document.getElementById('toast');
    document.querySelectorAll('.copy-email-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const email = btn.getAttribute('data-email');
        navigator.clipboard.writeText(email).then(() => {
          toast.classList.add('show');
          setTimeout(() => toast.classList.remove('show'), 2500);
        });
      });
    });

    // 2. Light / Dark Mode Toggle with LocalStorage Persistence
    const themeToggle = document.getElementById('themeToggle');
    const root = document.documentElement;
    const savedTheme = localStorage.getItem('portfolio-theme');

    if (savedTheme) {
      root.setAttribute('data-theme', savedTheme);
    }

    themeToggle.addEventListener('click', () => {
      const current = root.getAttribute('data-theme');
      const next = current === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      localStorage.setItem('portfolio-theme', next);
    });
  </script>
