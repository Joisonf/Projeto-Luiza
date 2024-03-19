const box = document.querySelector('.carousel');
const imagens = document.querySelectorAll('.slide').length;
let contador = 0;

function slider() {
  contador++;

  if (contador > imagens.length - 1) {
    contador = 0;
  }
  box.style.transform = `translateX(${-contador * 100}vw)`;
}

setInterval(slider, 6000);
