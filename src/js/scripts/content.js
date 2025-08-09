export default function content() {
    document.addEventListener('DOMContentLoaded', function () {
        // Соответствие тегов и сообщений
        const tagMessages = {
            'Коллеги': 'Сканируем офисные будни',
            'Партнёр': 'Запущена программа ROMANTIKA',
            'Семья': 'Уровень тепла настроен на 100%',
            'Друзья': 'Анализируем весёлые воспоминания'
        };

        const tags = document.querySelectorAll('.promo__tag-item');
        const messageElement = document.getElementById('message');
        const cursorElement = document.getElementById('cursor');
        let isTyping = false;
        let typingInterval = null;

        // Инициализация курсора
        const initCursor = () => {
            cursorElement.style.display = 'inline-block';
            cursorElement.style.opacity = '1';
        };

        // Обработчик кнопки
        const initButton = () => {
            const button = document.querySelector('[data-cross-button]');
            if (!button) return;
            
            button.addEventListener('click', function () {
                const label = this.querySelector('.btn__label');
                if (!label) return;
                
                this.classList.toggle('btn--secondary');
                this.disabled = true;
                label.textContent = label.textContent === 'Получить идею' 
                    ? 'Поменяйте что-то в фильтрах' 
                    : 'Получить идею';
            });
        };

        // Функция печати текста
        const typeMessage = (text) => {
        if (isTyping) {
            clearInterval(typingInterval);
            isTyping = false;
        }
        
        isTyping = true;
        messageElement.textContent = '';
        let currentChar = 0;
        
        // Показываем курсор
        cursorElement.style.display = 'inline-block';
        cursorElement.style.opacity = '1';
        
        typingInterval = setInterval(() => {
            if (currentChar < text.length) {
            messageElement.textContent += text[currentChar];
            currentChar++;
            
            // Принудительный рефлоу для корректного позиционирования курсора
            void messageElement.offsetWidth;
            } else {
            clearInterval(typingInterval);
            isTyping = false;
            }
        }, 100);
        };

        // Установка активного тега
        const setActiveTag = (tag) => {
            tags.forEach(t => t.classList.remove('_active'));
            tag.classList.add('_active');
            
            // Получаем текст тега и соответствующее сообщение
            const tagText = tag.textContent.trim();
            const message = tagMessages[tagText] || tagText;
            
            typeMessage(message);
        };

        // Случайный тег
        const setRandomActiveTag = () => {
            const activeTags = Array.from(tags).filter(tag => 
                !tag.classList.contains('_active')
            );
            if (activeTags.length > 0) {
                setActiveTag(activeTags[Math.floor(Math.random() * activeTags.length)]);
            }
        };

        // Клик по тегам
        const initTagClickHandlers = () => {
            document.addEventListener('click', (event) => {
                if (event.target.classList.contains('promo__tag-item')) {
                    setActiveTag(event.target);
                }
            });
        };

        // Инициализация
        initCursor();
        initButton();
        initTagClickHandlers();
        setRandomActiveTag();
    });
}