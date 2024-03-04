import { diseñoTarjeta } from './funciones.js';

document.addEventListener('DOMContentLoaded', function () {
    const favoritosContenedor = document.getElementById('favoritos-contenedor');

    //función para mostrar las películas favoritas
    function mostrarPeliculasFavoritas() {
        const favoritos = JSON.parse(localStorage.getItem('favoritos')) || [];

        favoritosContenedor.innerHTML = ''; //limpiar el contenedor de favoritos

        //muestra las películas favoritas en el contenedor
        favoritos.forEach(pelicula => {
            favoritosContenedor.innerHTML += diseñoTarjeta(pelicula);
        });
    }

    //llama a la función para mostrar las películas favoritas al cargar la página
    mostrarPeliculasFavoritas();
});

document.addEventListener('DOMContentLoaded', function () {
    const botonFavoritos = document.querySelectorAll('.botonFavoritos');

    botonFavoritos.forEach(button => {
        button.addEventListener('click', function() {
            const movieId = this.dataset.movieId;
            addToFavorites(movieId);
        });
    });
});