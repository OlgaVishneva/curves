export default function setImg() {
    const video = document.getElementById('promoVideo');
    const giftImage = document.getElementById('giftImage');
    const infoCard = document.querySelector('.promo__info-card');
    const promoBanner = document.querySelector('.promo__banner');
    const promoIcon = document.querySelector('.promo__icon-nav');
    const buttonHowTo = infoCard.querySelector('.info-card__btn');
    const buttonReturn = document.createElement('button');

    buttonReturn.classList.add('info-card__btn', 'btn', 'btn--primary', 'btn--size-small');
    buttonReturn.innerHTML = '<span class="info-card__btn btn__label">Вернуться к идее</span>';

    // Функция для установки изображения подарка
    function setGiftImage(color) {
        const screenWidth = window.innerWidth;
        let imagePath;

        // Определяем путь к изображению в зависимости от ширины экрана
        if (screenWidth >= 768) {
            promoBanner.style.display = 'none'; // Скрыть баннер
            promoIcon.style.display = 'block'; // Скрыть баннер
            // Изображения для экранов больше 768 пикселей
            switch (color) {
                case 'color-blue':
                    imagePath = 'img/bg/bg-img-blue-md.webp';
                    break;
                case 'color-green':
                    imagePath = 'img/bg/bg-img-green-md.webp';
                    break;
                case 'color-purple':
                    imagePath = 'img/bg/bg-img-purple-md.webp';
                    break;
                case 'color-cyan':
                    imagePath = 'img/bg/bg-img-turquoise-md.webp';
                    break;
                default:
                    imagePath = '';
            }
        } else {
            promoBanner.style.display = 'block';
            promoIcon.style.display = 'none';
            switch (color) {
                case 'color-blue':
                    imagePath = 'img/bg/bg-img-blue.webp';
                    break;
                case 'color-green':
                    imagePath = 'img/bg/bg-img-green.webp';
                    break;
                case 'color-purple':
                    imagePath = 'img/bg/bg-img-purple.webp';
                    break;
                case 'color-cyan':
                    imagePath = 'img/bg/bg-img-turquoise.webp';
                    break;
                default:
                    imagePath = ''; // По умолчанию
            }
        }

        giftImage.src = imagePath;
        giftImage.style.display = 'block'; // Показываем изображение подарка
    }

    // Обработчик для кнопки "Получить идею"
    document.querySelector('.promo__btn').addEventListener('click', function() {

        video.style.display = 'none';
        infoCard.classList.add('_active');
        promoBanner.classList.add('_active');

        // Проверка выбранного цвета
        const selectedColor = document.querySelector('input[name="color"]:checked');
        if (selectedColor) {
            setGiftImage(selectedColor.id); // Установка изображения в зависимости от выбранного цвета
        }
    });

    // Обработчик для кнопки "Как сделать?"
    buttonHowTo.addEventListener('click', function() {
        infoCard.querySelector('.info-card__title').textContent = 'Как сделать?';
        infoCard.querySelector('.info-card__text').textContent = 'Расскажите YandexGPT о коллегах  и попросите её написать новогодние поздравления в стиле гороскопа. Чтобы предсказания получился интереснее, задайте в промте роль для нейросети (например, «представь, что ты астролог с десятилетним стажем»)  и добавьте побольше деталей.';
        infoCard.querySelector('.info-card__footer').replaceChild(buttonReturn, buttonHowTo);
    });

    // Обработчик для кнопки "Вернуться к идее"
    buttonReturn.addEventListener('click', function() {
        infoCard.querySelector('.info-card__title').textContent = 'Рабочий нейрогороскоп';
        infoCard.querySelector('.info-card__text').textContent = 'Сгенерируйте коллегам предсказания на следующий год. Если звёзды напророчат кому-то новые возможности, добавьте в послание промокод от Яндекс Практикума.  Так ваш праздничный прогноз превратится в новые навыки или даже целую профессию. ';
        infoCard.querySelector('.info-card__footer').replaceChild(buttonHowTo, buttonReturn);
    });
}