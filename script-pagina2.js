// Carrossel
let slides = document.querySelectorAll('.carrossel img');
let index = 0;

function mostrarSlide(i) {
  slides.forEach(s => s.classList.remove('ativo'));
  slides[i].classList.add('ativo');
}

document.getElementById('next').onclick = () => {
  index = (index + 1) % slides.length;
  mostrarSlide(index);
};
document.getElementById('prev').onclick = () => {
  index = (index - 1 + slides.length) % slides.length;
  mostrarSlide(index);
};
setInterval(() => {
  index = (index + 1) % slides.length;
  mostrarSlide(index);
}, 5000);

// Modal
const modal = document.getElementById("modalTrailer");
const iframe = document.getElementById("videoTrailer");

function abrirModal(serie) {
  const trailers = {
    stranger: "https://www.youtube.com/embed/b9EkMc79ZSU",
    thelastofus: "https://www.youtube.com/embed/uLtkt8BonwM",
    wandinha: "https://www.youtube.com/embed/Di310WS8zLk",
    house: "https://www.youtube.com/embed/DotnJ7tTA34",
    peaky: "https://www.youtube.com/embed/oVzVdvGIC7U",
    breakingbad: "https://www.youtube.com/embed/HhesaQXLuRY",
    got: "https://www.youtube.com/embed/KPLWWIOCOOQ",
    loki: "https://www.youtube.com/embed/nW948Va-l10",
    mandalorian: "https://www.youtube.com/embed/aOC8E8z_ifw",
    visaoescarlate: "https://www.youtube.com/embed/sj9J2ecsSpo"
  };
  iframe.src = trailers[serie];
  modal.style.display = "block";
}

function fecharModal() {
  modal.style.display = "none";
  iframe.src = "";
}

window.onclick = function(event) {
  if (event.target == modal) fecharModal();
};
