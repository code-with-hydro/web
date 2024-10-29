document.getElementById('theme-toggle').addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    document.body.classList.toggle('light-theme');
    document.getElementById('theme-toggle').textContent = document.body.classList.contains('dark-theme') ? "🌙" : "☀️";
});
