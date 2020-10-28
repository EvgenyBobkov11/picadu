// переменная кнопка меню
let menuToggle = document.querySelector('#menu-toggle');
// слздаем переменную для кнопки меню 
let menu = document.querySelector(".sidebar");
// Отслеживаем клик по кнопке меню
menuToggle.addEventListener("click", function (event) {
    // отменяем стандартное поведение ссылки
    event.preventDefault();
    //вешаем класс на меню когда кликнули по кнопке
    menu.classList.toggle('visible');
    
});

