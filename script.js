// Инициализация библиотеки анимаций
AOS.init({
    duration: 1000,
    once: true,
    offset: 100
});

// Инициализация Яндекс Карты
ymaps.ready(init);

function init() {
    const map = new ymaps.Map('map', {
        center: [43.024615, 44.681778], // координаты Владикавказа
        zoom: 16
    });

    const placemark = new ymaps.Placemark([43.024615, 44.681778], {
        balloonContent: 'Рынок "Викалина"'
    }, {
        preset: 'islands#redDotIcon'
    });

    map.geoObjects.add(placemark);
}

// Плавный скролл к секциям
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const section = document.querySelector(this.getAttribute('href'));
        section.scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Обработка формы RSVP
document.getElementById('rsvp-form').addEventListener('submit', function(e) {
    e.preventDefault();
    // Здесь добавьте логику отправки формы
    alert('Спасибо за подтверждение!');
});

// Параллакс эффект для фона героя
window.addEventListener('scroll', () => {
    const hero = document.querySelector('.hero');
    const scrolled = window.pageYOffset;
    hero.style.backgroundPositionY = scrolled * 0.5 + 'px';
});

// Добавим новые функции для анимаций

// Анимация появления элементов при скролле
function checkVisibility() {
    const items = document.querySelectorAll('.timeline-item');
    items.forEach(item => {
        const rect = item.getBoundingClientRect();
        const isVisible = (rect.top <= window.innerHeight * 0.8);
        if (isVisible) {
            item.classList.add('visible');
        }
    });
}

window.addEventListener('scroll', checkVisibility);
window.addEventListener('load', checkVisibility);

// Добавим плавное появление фонового видео
document.querySelector('.hero-video').addEventListener('loadeddata', function() {
    this.style.opacity = '1';
});

// Улучшенный параллакс эффект
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    const st = window.pageYOffset;
    const hero = document.querySelector('.hero');
    const heroContent = document.querySelector('.hero-content');
    
    if (st > lastScrollTop) {
        // Скролл вниз
        heroContent.style.transform = `translateY(${st * 0.3}px)`;
    } else {
        // Скролл вверх
        heroContent.style.transform = `translateY(${st * 0.3}px)`;
    }
    lastScrollTop = st;
}); 
