// 🌙 Переключение темы
function toggleTheme() {
    const body = document.body;
    const themeToggle = document.querySelector('.theme-toggle');
    
    if (body.classList.contains('dark-theme')) {
        // Переключаем на светлую тему
        body.classList.remove('dark-theme');
        themeToggle.textContent = '🌙';
        themeToggle.title = 'Включить тёмную тему';
        localStorage.setItem('theme', 'light');
    } else {
        // Переключаем на тёмную тему
        body.classList.add('dark-theme');
        themeToggle.textContent = '☀️';
        themeToggle.title = 'Включить светлую тему';
        localStorage.setItem('theme', 'dark');
    }
}

// Проверяем сохранённую тему при загрузке
document.addEventListener('DOMContentLoaded', function() {
    const savedTheme = localStorage.getItem('theme');
    const themeToggle = document.querySelector('.theme-toggle');
    
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
        themeToggle.textContent = '☀️';
        themeToggle.title = 'Включить светлую тему';
    }
    
    // Показываем кнопку только после ввода пароля
    const passwordScreen = document.getElementById('passwordScreen');
    if (passwordScreen.style.display === 'none') {
        document.querySelector('.theme-switcher').style.display = 'block';
    }
});

// Обновляем отображение кнопки темы после ввода пароля
function checkPassword() {
    // ... ваш существующий код проверки пароля ...
    
    // После успешного входа показываем кнопку темы
    setTimeout(() => {
        document.querySelector('.theme-switcher').style.display = 'block';
    }, 100);
}
