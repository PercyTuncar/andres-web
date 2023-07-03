 // Obtener elementos del DOM
 const slider = document.querySelector('.slider');
 const slides = Array.from(document.querySelectorAll('.slide'));
 const menuLinks = Array.from(document.querySelectorAll('.menu li a'));

 let currentIndex = 0;

 // Función para mostrar el slide actual
 function showSlide(index) {
   // Validar el índice
   if (index < 0 || index >= slides.length) {
     return;
   }

   // Actualizar la clase 'active' del slide y del enlace del menú
   slides.forEach((slide, i) => {
     slide.classList.toggle('active', i === index);
   });

   menuLinks.forEach((link, i) => {
     link.classList.toggle('active', i === index);
   });

   // Calcular la posición de desplazamiento del slider
   const slideWidth = slides[0].offsetWidth;
   const offset = -1 * slideWidth * index;

   // Aplicar la transformación CSS para desplazar el slider
   slider.style.transform = `translateX(${offset}px)`;

   currentIndex = index;
 }

 // Función para mostrar el siguiente slide
 function showNextSlide() {
   const nextIndex = (currentIndex + 1) % slides.length;
   showSlide(nextIndex);
 }

 // Función para mostrar el slide anterior
 function showPreviousSlide() {
   const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
   showSlide(prevIndex);
 }

 // Agregar eventos a los enlaces del menú
 menuLinks.forEach((link, index) => {
   link.addEventListener('click', (e) => {
     e.preventDefault();
     showSlide(index);
   });
 });

 // Mostrar el siguiente slide automáticamente cada 5 segundos
 setInterval(showNextSlide, 5000);

 // Mostrar el primer slide al cargar la página
 showSlide(0);