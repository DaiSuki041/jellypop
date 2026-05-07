const slides = document.querySelectorAll(".slide");

let current = 0;

function cambiarSlide(){

    slides[current].classList.remove("active");

    current++;

    if(current >= slides.length){
        current = 0;
    }

    slides[current].classList.add("active");
}

// Inicia el primero
slides[0].classList.add("active");

// Cambia cada 2 segundos
setInterval(cambiarSlide, 2000);