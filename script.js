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
    watermelon.src = 'https://i.postimg.cc/W1KvYkxk/Gemini-Generated-Image-hlfdsbhlfdsbhlfd-Photoroom.png';
    watermelon.style.transform = 'scale(1.2) rotate(8deg)';
    watermelon.style.filter = 'drop-shadow(0 0 30px rgba(255, 107, 107, 0.8)) brightness(1.1)';
    watermelon.style.transition = 'all 0.8s cubic-bezier(0.34, 1.56, 0.64, 1)';
    
    hint.textContent = 'БУМ! 💥 Арбуз взорвался!';
    hint.style.color = '#ff6b6b';
    hint.style.transform = 'scale(1.1)';
    hint.style.fontWeight = 'bold';
}

// Сброс арбуза
function resetWatermelon() {
    const watermelon = document.getElementById('watermelon');
    const hint = document.querySelector('.watermelon-hint');
    
    // Возвращаем обычное изображение
    watermelon.src = 'https://i.postimg.cc/FspFp1rm/Gemini-Generated-Image-fhiv47fhiv47fhiv-Photoroom.png';
    watermelon.style.transform = 'scale(1) rotate(0deg)';
    watermelon.style.filter = 'drop-shadow(0 5px 15px rgba(0, 0, 0, 0.3)) brightness(1)';
    watermelon.style.transition = 'all 0.6s ease-out';
    
    hint.textContent = 'Наведи на арбуз! 🍉';
    hint.style.color = '';
    hint.style.transform = 'scale(1)';
    hint.style.fontWeight = 'normal';
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
                <p>Успешные кейсы и результаты работы на различных площадках.</p>
                <div class="work-gallery">
                    <img src="https://i.postimg.cc/7ZQ6dTwV/XDK-MEDNYJ-KABEL-1.png" alt="Маркетплейсы">
                </div>
                <ul>
                    <li>Оптимизация карточек товаров</li>
                    <li>Увеличение конверсии</li>
                    <li>Работа с отзывами и рейтингами</li>
                </ul>
            `
        },
        2: {
            title: "Презентации",
            content: `
                <h2>Мои презентации</h2>
                <p>Профессиональные и креативные презентации для различных проектов.</p>
                <div class="work-gallery">
                    <img src="https://i.postimg.cc/V6KN8rc6/Snimok-ekrana-2025-10-30-150824.png" alt="Презентации">
                </div>
                <ul>
                    <li>Корпоративные презентации</li>
                    <li>Питч-деки для стартапов</li>
                    <li>Образовательные материалы</li>
                </ul>
            `
        },
        3: {
            title: "Веб-разработка",
            content: `
                <h2>Этот сайт - моя визитная карточка</h2>
                <p>Сайт разработан с использованием HTML, CSS и JavaScript. Особенности:</p>
                <div class="work-gallery">
                    <img src="https://i.postimg.cc/VNHBhsks/Snimok-ekrana-2025-10-30-160523.png" alt="Веб-разработка">
                </div>
                <ul>
                    <li>Адаптивный дизайн</li>
                    <li>Тёмная/светлая тема</li>
                    <li>Интерактивные элементы</li>
                    <li>Портфолио работ</li>
                </ul>
            `
        },
        4: {
            title: "Стикерпаки",
            content: `
                <h2>Мои стикерпаки</h2>
                <p>Креативные наборы стикеров для Telegram, WhatsApp и других мессенджеров.</p>
                <div class="work-gallery">
                    <img src="https://i.postimg.cc/vHN3m3vr/Snimok-ekrana-2025-10-30-151246.png" alt="Стикерпаки">
                </div>
                <ul>
                    <li>Стикеры для бизнеса</li>
                    <li>Развлекательные стикерпаки</li>
                    <li>Тематические коллекции</li>
                    <li>Кастомные стикеры под заказ</li>
                </ul>
            `
        }
        5: {
            title: "Анализ рынка конкурентов",
            content: `
                <h2>Анализ рынка конкурентов</h2>
                <p>Работа с нейросетями, проверка данных, поиск инфрмации для вебения бизнеса.</p>
                <div class="work-gallery">
                    <https://i.postimg.cc/jq7Nt0hB/Snimok-ekrana-2025-10-30-164710.png" alt="Анализ">
                </div>
                <ul>
                    <li>Сбор данных в интернете</li>
                    <li>Вывод гравных</li>
                    <li>Структурирование</li>
                    <li>Рекомендация</li>
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
    
    // Добавляем обработчики событий для арбуза
    const watermelon = document.getElementById('watermelon');
    watermelon.addEventListener('mouseover', explodeWatermelon);
    watermelon.addEventListener('mouseout', resetWatermelon);
    
    // Добавляем обработчик для поля ввода пароля (Enter)
    document.getElementById('passwordInput').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            checkPassword();
        }
    });
});

