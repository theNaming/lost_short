(function(){
    
    const slider = document.querySelectorAll('.fade-slider__item');
    const activeClass = "fade-slider__item---visble";
    let index = 0;

    setInterval(function() {
        slider[index].classList.remove(activeClass);
        index++;
            if(index + 1 > slider.length) {
                index = 0;
            }
            slider[index].classList.add(activeClass);
        
    }, 5000);

}());

// slider[index].classList.add(activeClass) - следующему слайду, навешиваем 
// активный класс, до тогда момента, пока не выполнится условие.
// Если index больше кол-ва слайдов, то index=0; мы обнуляем.
// if(index + 1 > slider.length) - проверяем, действительно ли index 
// больше кол-ва слайдов, за это отвечает свойство length
// remove(activeClass)- удаляем переменную.
// index++; - index + 1; 
// querySelectorAll - выберает все значения с имеющимся классом 