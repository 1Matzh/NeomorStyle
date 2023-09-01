const themeToggleButton = document.getElementById('theme-toggle-button');
const body = document.body;
const storedTheme = localStorage.getItem('theme');

if (storedTheme) 
{
    body.classList.add(storedTheme);
}

themeToggleButton.addEventListener('click', function() {
    body.classList.toggle('dark-theme');
    const newTheme = body.classList.contains('dark-theme') ? 'dark-theme' : '';
    localStorage.setItem('theme', newTheme);
});