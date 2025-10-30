// 🌙 Переключение темы
function toggleTheme() {
    const body = document.body;
    const themeToggle = document.querySelector('.theme-toggle');
    
    if (body.classList.contains('dark-theme')) {
        body.classList.remove('dark-theme');
        themeToggle.textContent = '🌙';
        themeToggle.title = 'Включить тёмную тему';
        localStorage.setItem('theme', 'light');
    } else {
        body.classList.add('dark-theme');
        themeToggle.textContent = '☀️';
        themeToggle.title = 'Включить светлую тему';
        localStorage.setItem('theme', 'dark');
    }
}

// Взрыв арбуза
function explodeWatermelon() {
    const watermelon = document.getElementById('watermelon');
    const hint = document.querySelector('.watermelon-hint');
    
    // Меняем изображение на взорванный арбуз
    watermelon.src = 'watermelon-exploded.png';
    watermelon.style.transform = 'scale(1.1) rotate(5deg)';
    watermelon.style.filter = 'drop-shadow(0 0 20px rgba(255, 107, 107, 0.7))';
    
    hint.textContent = 'БУМ! 💥 Арбуз взорвался!';
    hint.style.color = '#ff6b6b';
}

// Сброс арбуза
function resetWatermelon() {
    const watermelon = document.getElementById('watermelon');
    const hint = document.querySelector('.watermelon-hint');
    
    // Возвращаем обычное изображение
    watermelon.src = 'watermelon-normal.png';
    watermelon.style.transform = 'scale(1) rotate(0deg)';
    watermelon.style.filter = 'drop-shadow(0 5px 15px rgba(0, 0, 0, 0.3))';
    
    hint.textContent = 'Наведи на арбуз! 🍉';
    hint.style.color = '';
}

// Проверка пароля
function checkPassword() {
    const password = document.getElementById('passwordInput').value;
    const errorElement = document.getElementById('passwordError');
    const passwordScreen = document.getElementById('passwordScreen');
    const mainContent = document.getElementById('mainContent');
    
    // Простой пароль для демонстрации
    if (password === 'портфолио' || password === 'portfolio') {
        passwordScreen.style.display = 'none';
        mainContent.style.display = 'block';
        document.querySelector('.theme-switcher').style.display = 'block';
    } else {
        errorElement.textContent = 'Неверный пароль. Попробуйте "портфолио"';
    }
}

// Показ деталей работы
function showWorkDetails(workId) {
    const modal = document.getElementById('workModal');
    const modalBody = document.getElementById('modalBody');
    
    const works = {
        1: {
            title: "Работы на маркетплейсах",
            content: `
                <h2>Мои проекты на маркетплейсах</h2>
                <div class="work-gallery">
                    <img src="marketplace-work1.jpg" alt="Работа 1">
                    <img src="marketplace-work2.jpg" alt="Работа 2">
                    <img src="marketplace-work3.jpg" alt="Работа 3">
                </div>
                <p>Здесь разместите описание ваших работ, достижения и результаты.</p>
            `
        },
        2: {
            title: "Презентации",
            content: `
                <h2>Мои презентации</h2>
                <div class="work-gallery">
                    <img src="presentation-work1.jpg" alt="Презентация 1">
                    <img src="presentation-work2.jpg" alt="Презентация 2">
                </div>
                <p>Профессиональные и креативные презентации для различных проектов.</p>
            `
        },
        3: {
            title: "Веб-разработка",
            content: `
                <h2>Этот сайт - моя визитная карточка</h2>
                <p>Сайт разработан с использованием HTML, CSS и JavaScript. Особенности:</p>
                <ul>
                    <li>Адаптивный дизайн</li>
                    <li>Тёмная/светлая тема</li>
                    <li>Интерактивные элементы</li>
                    <li>Портфолио работ</li>
                </ul>
            `
        }
    };
    
    const work = works[workId];
    modalBody.innerHTML = work.content;
    modal.style.display = 'block';
}

// Закрытие модального окна
function closeModal() {
    const modal = document.getElementById('workModal');
    modal.style.display = 'none';
}

// Закрытие модального окна при клике вне его
window.onclick = function(event) {
    const modal = document.getElementById('workModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

// Инициализация при загрузке
document.addEventListener('DOMContentLoaded', function() {
    const savedTheme = localStorage.getItem('theme');
    const themeToggle = document.querySelector('.theme-toggle');
    
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
        themeToggle.textContent = '☀️';
        themeToggle.title = 'Включить светлую тему';
    }
    
    // Скрываем кнопку темы до ввода пароля
    document.querySelector('.theme-switcher').style.display = 'none';
});
