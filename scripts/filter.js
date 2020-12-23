(function() {

    const elem = document.querySelector('.products__list');
    const iso = new Isotope( elem, {
    // options
    itemSelector: '.products__item',
    filter: '.new'

    // Выше запись делает сортировку, скрипт взят https://isotope.metafizzy.co/
  });
    
    const controlls = document.querySelectorAll(".filter__link");
    const activeClass = "filter__item--active";
     controlls.forEach(function(control) {
  
      control.addEventListener("click", function(e) {
        e.preventDefault();
       
        const filterName = control.getAttribute("data-filter");

        controlls.forEach(function(link) {
          link.closest(".filter__item").classList.remove(activeClass);
        })
         control.closest(".filter__item").classList.add(activeClass);

         iso.arrange({
             filter: `.${filterName}`
            })
        })
    })
})();

//   control.addEventListener - обращаемся к элементу в переборе 
//   controlls.forEach(function(control) - обработчик , forEach метод кототый перебирает все элементы в набаре с первого до последнего

// e.preventDefault() - что бы ссылка не вела сябя как ссылка# 

// (function(){
//     это самавызывающая функция 
// }()) 