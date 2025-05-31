const carrusel = document.querySelector(".contenedor-carrusel");
const izquierda = document.querySelector(".flecha.izquierda");
const derecha = document.querySelector(".flecha.derecha");
const puntos = document.querySelectorAll(".punto");

const tarjeta = carrusel.querySelector(".producto-card");
const estiloCarrusel = getComputedStyle(carrusel);
const gap = parseInt(estiloCarrusel.gap) || 16;
const scrollByAmount = tarjeta.offsetWidth + gap;

let puntoActivo = 0;

function actualizarFlechas() {
  const maxScrollLeft = carrusel.scrollWidth - carrusel.clientWidth;

  if (carrusel.scrollLeft <= 0) {
    izquierda.classList.add("disabled");
  } else {
    izquierda.classList.remove("disabled");
  }

  if (carrusel.scrollLeft >= maxScrollLeft - 5) {
    derecha.classList.add("disabled");
  } else {
    derecha.classList.remove("disabled");
  }
}

function actualizarPuntoDesdeScroll() {
  const index = Math.round(carrusel.scrollLeft / scrollByAmount);
  puntos.forEach((p) => p.classList.remove("activo"));
  puntoActivo = index;
  if (puntos[puntoActivo]) puntos[puntoActivo].classList.add("activo");
}

function moverCarrusel(direccion) {
  carrusel.scrollBy({ left: scrollByAmount * direccion, behavior: "smooth" });
}

// Evento scroll para actualizar puntos y flechas dinámicamente
carrusel.addEventListener("scroll", () => {
  actualizarFlechas();
  actualizarPuntoDesdeScroll();
});

// Eventos click de las flechas
derecha.addEventListener("click", () => moverCarrusel(1));
izquierda.addEventListener("click", () => moverCarrusel(-1));

// Inicializamos estado al cargar
actualizarFlechas();
actualizarPuntoDesdeScroll();

let currentSlide = 0;
const slides = document.querySelectorAll(".hero-slide");
const dots = document.querySelectorAll(".dot");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
    dots[i]?.classList.toggle("active", i === index);
  });
  currentSlide = index;
}

function nextSlide() {
  showSlide((currentSlide + 1) % slides.length);
}

function prevSlide() {
  showSlide((currentSlide - 1 + slides.length) % slides.length);
}

document.querySelector(".next").addEventListener("click", nextSlide);
document.querySelector(".prev").addEventListener("click", prevSlide);
dots.forEach((dot, i) => dot.addEventListener("click", () => showSlide(i)));

setInterval(nextSlide, 10000); // Auto-slide cada 10 segundos
