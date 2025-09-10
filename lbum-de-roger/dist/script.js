//Array(Arreglo) para las imagenes, aquí van a poner las imagenes//
//fotos de perros de Pexels (ajustadas con w=400&h=300&fit=crop)//

const imagenes = [
  "https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?w=400&h=300&fit=crop", // perro feliz
  "https://images.pexels.com/photos/4587995/pexels-photo-4587995.jpeg?w=400&h=300&fit=crop", // cachorro
  "https://media.istockphoto.com/id/1503385646/es/foto/retrato-divertido-y-feliz-perro-cachorro-shiba-inu-asom%C3%A1ndose-detr%C3%A1s-de-una-pancarta-azul.jpg?s=612x612&w=0&k=20&c=mMZ1Dvy0J8iNpF2boWkL8bo45vYYPi_AvZ1aYr9oO8w=", // perro café
  "https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?w=400&h=300&fit=crop", // perrito pequeño
  "https://i.pinimg.com/236x/3b/3b/35/3b3b359f28443b5651e97586dd0c0bf7.jpg", // husky
  "https://www.blogdelfotografo.com/wp-content/uploads/2020/06/oscar-sutton-yihlaRCCvd4-unsplash.webp"  // perro blanco
];

//Seleccion de elementos // 

const boton = document.getElementById("btn-cambiar");
const imagenCard = document.getElementById("card-img");
const textoCard = document.getElementById("card-text");

//contador de las imagenes//

let indice = 0;

//evento del click//
boton.addEventListener("click", () => {
 
  //lo siguiente es para que avance la foto //
  indice++;

  //el siguiente if es para que cuando llegue al final se regrese al inicio//
  if (indice >= imagenes.length) {
    indice = 0;
  }

  // Cambiar imagen y texto //
  imagenCard.src = imagenes[indice];
  textoCard.textContent = `Mostrando imagen ${indice + 1} de ${imagenes.length}`;
});