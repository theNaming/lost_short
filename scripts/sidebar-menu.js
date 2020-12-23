(function(){
    const openingBtn =  document.querySelector(".sidebar__hamburger");
    const closingBtn =  document.querySelector(".sidebar__close");
    const sidebar =  document.querySelector(".sidebar");


openingBtn.addEventListener("click", function() {
    sidebar.classList.add('sidebar--opened');
});

closingBtn.addEventListener("click", function() {
    sidebar.classList.remove('sidebar--opened')
});

}());

// document. метод -querySelector  (ищем элементы в css)
// const - неизменная переменная
// let - изменная переменная
// устанавливаем слушатель событий при наведении мышкой на кнопку открытия 
// меню openingBtn.addEventListener, при события click, обработчик  function() {
//    Что бы открыть сайт бар мы должны навесить класс, методы для 
//      этого - classList (метод add) и сам класс sidebar--opened.
// метод remove - удаляет класс 
// // (function(){ }()); Функция в Функции, делается для разграничения. 
// // Что бы классы не путались. 