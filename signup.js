document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('themeToggle');
    const darkIcon = themeToggle.querySelector('.dark-icon');
    const lightIcon = themeToggle.querySelector('.light-icon');

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-mode');
        darkIcon.classList.add('d-none');
        lightIcon.classList.remove('d-none');
    }

    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        darkIcon.classList.toggle('d-none');
        lightIcon.classList.toggle('d-none');
        
        const isDarkMode = document.body.classList.contains('dark-mode');
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    });
});