let indiceImagen = 0;
mostrarImagen(indiceImagen);

function cambiarImagen(n){
mostrarImagen(indiceImagen += n );
}

function mostrarImagen(n){
    let imagenes = document.querySelectorAll(".carrousel-imagenes img");

    if (n >= imagenes.length){
        indiceImagen = 0;
    }
    if (n < 0){
indiceImagen = imagenes.length - 1;
    }

imagenes.forEach(img => img.style.display = "none" );

imagenes[indiceImagen].style.display = "block";

}







