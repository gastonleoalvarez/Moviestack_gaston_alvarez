import {diseñoTarjeta, mostrarCards, mostrarPeliculasPorGenero, fnreduce, obtenerGeneros, handleSelectorChange } from "./funciones.js"; 

const main = document.getElementById("contenedor-main")  //se obtiene el main mediante el metodo getelementbyid
const input = document.getElementById('contenedor-opciones')
const selector = document.getElementById('seleccionarOpcion')

const setGenres = obtenerGeneros (peliculas)

mostrarCards (peliculas, main)
 selector.innerHTML = setGenres.reduce( fnreduce , "") 

//se hace un bucle para recorrer cada pelicula y para generar una tarjeta por cada pelicula


//lama a la funcion para mostrar las cards


for( const elemento of peliculas){
    //se crean las tarjetas en el innerhtml
    main.innerHTML += diseñoTarjeta(elemento)
}



selector.addEventListener('change',() => {
  handleSelectorChange(selector, main)
});
