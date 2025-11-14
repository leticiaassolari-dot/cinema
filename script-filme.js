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

function abrirModal(filme) {
  const trailers = {
    duna2: "https://www.youtube.com/embed/Way9Dexny3w",
    oppenheimer: "https://www.youtube.com/embed/uYPbbksJxIg",
    barbie: "https://www.youtube.com/embed/pBk4NYhWNMM",
    avatar2: "https://www.youtube.com/embed/d9MyW72ELq0",
    batman: "https://www.youtube.com/embed/mqqft2x_Aa4",
    supermario: "https://www.youtube.com/embed/TnGl01FkMMo",
    johnwick: "https://www.youtube.com/embed/qEVUtrk8_B4",
    guardioes: "https://www.youtube.com/embed/u3V5KDHRQvk",
    homemaranha: "https://www.youtube.com/embed/JfVOs4VSpmA",
    interestelar: "https://www.youtube.com/embed/zSWdZVtXT7E"
  };
  iframe.src = trailers[filme];
  modal.style.display = "block";
}

function fecharModal() {
  modal.style.display = "none";
  iframe.src = "";
}

window.onclick = function(event) {
  if (event.target == modal) fecharModal();
};
