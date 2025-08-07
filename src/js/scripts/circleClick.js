export default function circleClick() {
const items = document.querySelectorAll('.promo__content-item');

// Функция для выбора случайного элемента
function setRandomActive() {
    const randomIndex = Math.floor(Math.random() * items.length); // Генерируем случайный индекс
    items[randomIndex].classList.add('_active'); // Добавляем класс _active к случайному элементу
}

// Добавляем обработчики событий для каждого элемента
items.forEach(item => {
    // Обработчик события клика
    item.addEventListener('click', () => {
        // Убираем класс _active у всех элементов
        items.forEach(i => i.classList.remove('_active'));
        // Добавляем класс _active к текущему элементу
        item.classList.add('_active');
    });

    // Обработчик наведения
    item.addEventListener('mouseenter', () => {
        // Убираем класс _active у всех элементов
        items.forEach(i => i.classList.remove('_active'));
        // Добавляем класс _active к текущему элементу
        item.classList.add('_active');
    });

    // Обработчик ухода мыши
    item.addEventListener('mouseleave', () => {
        // Убираем класс _active, только если элемент не активен
        if (!item.classList.contains('_active')) {
            item.classList.remove('_active');
        }
    });
});

// Устанавливаем случайный активный элемент при загрузке страницы
setRandomActive();
}