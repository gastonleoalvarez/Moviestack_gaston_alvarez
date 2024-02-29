

const main = document.getElementById("contenedor-main")  //se obtiene el main mediante el metodo getelementbyid

function diseñoTarjeta(pelicula){ //esta funcion crea la tarjeta y su diseño
    return `
    <article class="flex flex-col gap-3 w-11/12 md:w-5/12 xl:w-3/12 rounded border">
    <img class="w-full" src="${pelicula.image}" alt="imagen de ${pelicula.name}">
    <h2 class="pl-3 text-white text-2xl">${pelicula.title}</h2>
    <h3 class="pl-3 text-white">${pelicula.genres}</h3>
    <p class="line-clamp-3 pl-3 text-white">${pelicula.overview}</p>
    <a class="text-white pl-3 pb-3" href="detalles.html?id=${pelicula.id}">Ver mas</a>
    </article>
    `;
}


//se hace un bucle para recorrer cada pelicula y para generar una tarjeta por cada pelicula
function mostrarCards(lista, elemento){
    let template = ""
    for( const iteracion of lista){
        template += diseñoTarjeta (iteracion)
    }
    if(lista == 0){
        template = `<h2 class="text-white text-3xl"> No se encontro la pelicula</h2>`
    }
    elemento.innerHTML = template
}

//lama a la funcion para mostrar las cards
mostrarCards (peliculas, main)


for( const elemento of peliculas){
    //se crean las tarjetas en el innerhtml
    main.innerHTML += diseñoTarjeta(elemento)
}

                  /*----------------------------------------------------------- FILTROs------------------------------------------------------------------------*/

//FILTROS POR NOMBRE
const input = document.getElementById('contenedor-opciones')
const selector = document.getElementById('seleccionarOpcion')


//se obtienen el genero de cada pelicula mediante un map
const genres = peliculas.map(pelicula => pelicula.genres).flat() //el metodo flat se usa para juntar tooos los elementos de el array en uno solo


//funcion para descartar los generos repetidos
const generos = []

genres.forEach(genre => {  //recorre cada genero
    if(!generos.includes(genre)){ //se evalua si la vriable generos ya contiene el elemento  
        generos.push(genre) // si entra en el if signifca que no lo contiene entonces lo agrega
    }
})


//crear las opciones
function crearOpciones(genre) {
    return `

    <option class="text-blue-800" value="${genre}">${genre}</option>
       `;  
}


 const fnreduce = (template, genre) => template + crearOpciones(genre)
 selector.innerHTML = generos.reduce( fnreduce , "") 


//
function mostrarPeliculasPorGenero() {
    const generoSeleccionado = selector.value;
    console.log (generoSeleccionado)
    
    // Filtrar las películas por el género seleccionado
    const peliculasFiltradas = peliculas.filter(pelicula => pelicula.genres.includes(generoSeleccionado));
    console.log(peliculasFiltradas)

    // Limpiar el contenedor de películas
    mostrarCards (peliculasFiltradas, main)

    // Mostrar las películas filtradas en el contenedor
    peliculasFiltradas.forEach(pelicula => {
        mostrarCards.innerHTML += `<div>${pelicula.title}</div>`;
       
    });
}

// Añadir un evento de cambio al selector para llamar a la función cuando cambia la selección
selector.addEventListener('change', function(e) {
    var selectedValue = this.value;
    selector.value = selectedValue 
    mostrarPeliculasPorGenero() 
     
  });

