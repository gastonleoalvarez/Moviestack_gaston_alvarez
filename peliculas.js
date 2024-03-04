import {diseñoTarjeta, fnreduce, obtenerGeneros, handleSelectorChange, render} from "./funciones.js"; 

const main = document.getElementById("contenedor-main")  //se obtiene el main mediante el metodo getelementbyid
const selector = document.getElementById('seleccionarOpcion')

let peliculas = []

//peticion  a la api 
const url = 'https://moviestack.onrender.com/api/movies'
const init = {
  method: "GET",
  headers:{
    "x-api-key": "0ff70d54-dc0b-4262-9c3d-776cb0f34dbd"
  }
};



fetch( url, init)
.then((response) => response.json())
.then(data => {
  console.log(data)
   peliculas = data.movies 
   console.log(peliculas)
render(peliculas, main, diseñoTarjeta);

const setGenres = obtenerGeneros(peliculas);
selector.innerHTML = setGenres.reduce(fnreduce, "");

selector.addEventListener('change', () => {
  handleSelectorChange(selector, main);
});
})
.catch(error => console.error('error:', error));




for( const elemento of peliculas){
    //se crean las tarjetas en el innerhtml
    main.innerHTML += diseñoTarjeta(elemento)
}
