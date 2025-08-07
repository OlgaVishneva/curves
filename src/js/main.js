import '../scss/main.scss';
import circleClick from './scripts/circleClick.js';
import colorPaper from './scripts/colorPaper.js';
import content from './scripts/content.js';
import setImg from './scripts/setImg.js';

content();
circleClick();
colorPaper();
setImg();

const video = document.getElementById('promoVideo');

    function updateVideoSource() {
        const mobileSource = document.getElementById('mobileSource').src;
        const desktopSource = document.getElementById('desktopSource').src;

        if (window.innerWidth <= 767) {
            video.src = mobileSource;
        } else {
            video.src = desktopSource;
        }

        // Поскольку мы меняем источник видео, необходимо перезагрузить его
        video.load();
    }

    // Обновляем источник при загрузке страницы
    window.addEventListener('load', updateVideoSource);

    // Обновляем источник при изменении размера окна
    window.addEventListener('resize', updateVideoSource);
