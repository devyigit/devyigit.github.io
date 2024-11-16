const themeIcon = document.getElementById('theme-icon');
    const body = document.body;

    themeIcon.addEventListener('click', () => {
      body.classList.toggle('dark-theme');
      themeIcon.classList.toggle('fa-sun');
      themeIcon.classList.toggle('fa-moon');
});