//carrousel
const imagenes = ["imagenes/pc1.png", "imagenes/pc2.png", "imagenes/pc3.png"];

const imagenCarrousel = document.getElementById("carrousel-imagenes");

let indiceActual = 0;

function mostrarImagen(indice) {
  imagenCarrousel.src = imagenes[indice];
}

mostrarImagen(indiceActual);

function avanzarImagen() {
  indiceActual++;
  if (indiceActual >= imagenes.length) {
    indiceActual = 0;
  }
  mostrarImagen(indiceActual);
}

function retrocederImagen() {
  indiceActual--;
  if (indiceActual < 0) {
    indiceActual = imagenes.length - 1;
  }
  mostrarImagen(indiceActual);
}

document.getElementById("sig-button").addEventListener("click", avanzarImagen);
document
  .getElementById("ant-button")
  .addEventListener("click", retrocederImagen);

//texto animado

const textoCompleto =
  "TechCore: Tu Tienda de PCs Armadas . En TechCore, nos especializamos en la venta de PCs ya armadas, diseñadas para ofrecer un rendimiento excepcional y una experiencia de usuario inigualable. Ya seas un gamer, un profesional o un usuario que busca una computadora fiable, tenemos la opción perfecta para ti";

const elementoTexto = document.getElementById("texto");

let valor = 0;

function animarTexto() {
  elementoTexto.textContent = textoCompleto.slice(0, valor);
  valor++;

  if (valor > textoCompleto.length) {
    valor = 0;
  }
  setTimeout(animarTexto, 100);
}

animarTexto();
