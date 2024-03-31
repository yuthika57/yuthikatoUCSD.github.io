document.addEventListener('DOMContentLoaded', function () {
    var swiper = new Swiper('.swiper-container', {
        direction: 'horizontal',
        loop: true,
        pagination: {
            el: '.swiper-pagination',
        },
        autoplay: {
            delay: 3000, // milliseconds
        },
        speed: 1000, // milliseconds
    });

    // Add click event listener to the button
    var button = document.getElementById('ucsdButton');
    button.addEventListener('click', function () {
        window.location.href = 'page2.html';
    });
});

