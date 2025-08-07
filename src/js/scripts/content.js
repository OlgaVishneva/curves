export default function content() {
    document.addEventListener('DOMContentLoaded', function () {
        const tags = document.querySelectorAll('.promo__tag-item');
        const messageElement = document.getElementById('message');
        const cursorElement = document.getElementById('cursor');
        let isTyping = false;

        // Обработчик события для кнопки
        document.querySelector('[data-cross-button]').addEventListener('click', function () {
            const button = this;
            const label = button.querySelector('.btn__label');

            button.classList.toggle('btn--secondary');
            button.disabled = true;

            label.textContent = label.textContent === 'Получить идею' ? 'Поменяйте что-то в фильтрах' : 'Получить идею';
        });

        // Устанавливаем случайный активный тег
        function setRandomActiveTag() {
            setActiveTag(tags[Math.floor(Math.random() * tags.length)]);
        }

        // Устанавливаем активный тег и печатаем сообщение
        function setActiveTag(tag) {
            tags.forEach(t => t.classList.remove('_active'));
            tag.classList.add('_active');
            typeMessage(tag.textContent.trim());
        }

        // Печать сообщения
        function typeMessage(tagName) {
            if (isTyping) return;
            isTyping = true;

            const messages = {
                'Коллеги': 'Сканируем офисные будни',
                'Партнёр': 'Запущена программа ROMANTIKA',
                'Семья': 'Уровень тепла настроен на 100%',
                'Друзья': 'Анализируем весёлые воспоминания',
            };

            const message = messages[tagName] || '...';
            messageElement.textContent = '';
            cursorElement.style.opacity = 1;

            let i = 0;

            function typing() {
                if (i < message.length) {
                    messageElement.textContent += message.charAt(i);
                    adjustCursorPosition();
                    i++;

                    // Используем requestAnimationFrame для более плавной анимации
                    requestAnimationFrame(typing);
                } else {
                    isTyping = false;
                    cursorElement.style.opacity = 0;
                }
            }

            typing();
        }

        // Обновление позиции курсора
        function adjustCursorPosition() {
            cursorElement.style.height = `${messageElement.offsetHeight}px`;
        }

        // Делегирование событий для тегов
        document.addEventListener('click', function (event) {
            if (event.target.classList.contains('promo__tag-item')) {
                setActiveTag(event.target);
            }
        });

        setRandomActiveTag(); // Случайный активный тег при загрузке страницы
    });
}