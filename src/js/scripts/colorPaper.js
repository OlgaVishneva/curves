export default function colorPaper() {
    const radioButtons = document.querySelectorAll('input[name="color"]');
    const stubElement = document.querySelector('.promo__stab'); // Получаем элемент заглушки
    const labels = {}; // Объект для хранения ссылок на элементы label с классом _active

    // Генерируем случайное число для установки случайной радиокнопки как активной
    const randomIndex = Math.floor(Math.random() * radioButtons.length);
    radioButtons[randomIndex].checked = true;

    // Устанавливаем начальный цвет заглушки
    if (stubElement) {
        stubElement.style.backgroundColor = radioButtons[randomIndex].value;
    }

    // Заполняем объект labels и устанавливаем класс _active для начальной радиокнопки
    radioButtons.forEach(radio => {
        const label = document.querySelector(`label[for="${radio.id}"] .promo-card__round`);
        labels[radio.id] = label; // Сохраняем ссылку на label в объекте

        if (radio.checked) {
            label.classList.add('_active'); // Устанавливаем класс _active для случайной радиокнопки
        }
    });

    // Функция для обновления класса _active у label и цвета заглушки
    function updateActiveLabel(selectedRadio) {
        // Убираем класс _active от всех
        Object.values(labels).forEach(label => label.classList.remove('_active'));
        // Добавляем класс _active только к выбранной радиокнопке
        if (selectedRadio in labels) {
            labels[selectedRadio].classList.add('_active');
            
            // Находим выбранную радиокнопку и обновляем цвет заглушки
            const selectedRadioElement = document.getElementById(selectedRadio);
            if (selectedRadioElement && stubElement) {
                stubElement.style.backgroundColor = selectedRadioElement.value;
            }
        }
    }

    // Используем делегирование событий на родительском элементе
    document.addEventListener('change', (event) => {
        if (event.target.name === 'color') {
            updateActiveLabel(event.target.id);
        }
    });
}