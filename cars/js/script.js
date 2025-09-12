function toggleComments(id) {
  const elem = document.getElementById(id);
  elem.style.display = elem.style.display === "block" ? "none" : "block";
}

function likeFunction(button) {
  button.style.fontWeight = "bold";
  button.innerHTML = "✓ Me gusta";
}

function toggleModal(id) {
  const modal = document.getElementById(id);
  modal.style.display = modal.style.display === "flex" ? "none" : "flex";
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
let currentSlide = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    if (i === index) {
      slide.classList.add("active");
    }
  });
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

// Mostrar la primera al inicio
showSlide(currentSlide);

// Cambiar cada 10 segundos
setInterval(nextSlide, 10000);