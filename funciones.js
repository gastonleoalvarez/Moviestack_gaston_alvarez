const main = document.getElementById("contenedor-main") 
const selector = document.getElementById('seleccionarOpcion')


export function diseñoTarjeta(pelicula){ //esta funcion crea la tarjeta y su diseño
    return `
    <article class="flex flex-col gap-3 w-11/12 md:w-5/12 xl:w-3/12 rounded border">
    <img class="w-full" src="https://moviestack.onrender.com/static/${pelicula.image}" alt="imagen de ${pelicula.name}">
    <h2 class="pl-3 text-white text-2xl">${pelicula.title}</h2>
    <h3 class="pl-3 text-white">${pelicula.genres}</h3>
    <p class="line-clamp-3 pl-3 text-white">${pelicula.overview}</p>
    <button class="text-white botonFavoritos">Add to favorites</button>
    <a class="text-white pl-3 pb-3" href="detalles.html?id=${pelicula.id}">Ver mas</a>
    </article>
    `;
}


export function render(lista , elemento, fn){
    let template = ""
    for( const iteracion of lista){
        template += diseñoTarjeta (iteracion)
    }
    elemento.innerHTML = template
}



//crea las opciones de cada genero 
export function crearOpciones(genre) {
    return `

    <option class="text-black" value="${genre}">${genre}</option>
       `;  
}

//funcion para crear peliculas por genero
export function mostrarPeliculasPorGenero() {
    const generoSeleccionado = selector.value;
    console.log (generoSeleccionado)
    
    // Filtrar las películas por el género seleccionado
    const peliculasFiltradas = peliculas.filter(pelicula => pelicula.genres.includes(generoSeleccionado));
    console.log(peliculasFiltradas)

    // Limpiar el contenedor de películas
    main.innerHTML ="";

    // Muestra las películas filtradas en el contenedor
    peliculasFiltradas.forEach(pelicula => {
        main.innerHTML += diseñoTarjeta(pelicula);
       
    });
}

export const fnreduce = (template, genre) => template + crearOpciones(genre)

//funcion para obtener los generos 
export function obtenerGeneros(peliculas){
    const genres = peliculas.map(pelicula => pelicula.genres).flat() //el metodo flat se usa para juntar tooos los elementos de el array en uno solo
    const GeneroSinRepetir = new Set(genres);
    return Array.from(GeneroSinRepetir); 
}


//detecta el evento 
export function handleSelectorChange(selector) {
    let valorSeleccionado = selector.value;
    //selector.value = valorSeleccionado;
    mostrarPeliculasPorGenero(selector, main);
  }

