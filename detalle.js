const main = document.getElementById('detalles-container')
const urlParams = new URLSearchParams (location.search)
const id = urlParams.get('id')

const peliculaEncontrada = peliculas.find( pelicula => pelicula.id == id) 
main.innerHTML = `
        <article class="flex flex-col gap-3 w-11/12 md:w-5/12 xl:w-3/12 rounded border">
            <img class="w-full" src="${pelicula.image}" alt="imagen de ${pelicula.name}">
            <h2 class="pl-3 text-white text-2xl">${pelicula.title}</h2>
            <h3 class="pl-3 text-white">${pelicula.genres}</h3>
            <p class="line-clamp-3 pl-3 text-white">${pelicula.overview}</p>
            <a class="text-white pl-3 pb-3" href="detalles.html?id=${pelicula.id}">Ver mas</a>
        </article>`


/*        function obtenerDetalle(id){
const peliculaEncontrada = peliculas.find( pelicula => pelicula.id == id)
return peliculaEncontrada
}*/

/*
function cargarDetallesPelicula(id) {
    const pelicula = obtenerDetallesPeliculaPorId(id);

    if (pelicula) {
        detallesContainer.innerHTML = `
        <article class="flex flex-col gap-3 w-11/12 md:w-5/12 xl:w-3/12 rounded border">
            <img class="w-full" src="${pelicula.image}" alt="imagen de ${pelicula.name}">
            <h2 class="pl-3 text-white text-2xl">${pelicula.title}</h2>
            <h3 class="pl-3 text-white">${pelicula.genres}</h3>
            <p class="line-clamp-3 pl-3 text-white">${pelicula.overview}</p>
            <a class="text-white pl-3 pb-3" href="detalles.html?id=${pelicula.id}">Ver mas</a>
        </article>
        `;
    } else {
        detallesContainer.innerHTML = '<p>Detalles no encontrados</p>';
    }
}

cargarDetallesPelicula(id)

*/

