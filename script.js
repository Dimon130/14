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