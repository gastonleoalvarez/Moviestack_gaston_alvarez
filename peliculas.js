const main = document.getElementById("contenedor-main")

function diseñoTarjeta(pelicula){
    return `
    <article class="flex flex-col gap-3 w-20/12 md:w-5/12 xl:w-3/12 rounded border border-slate-300">
    <img class="w-full" src="${pelicula.image}" alt="imagen de ${pelicula.name}">
    <h2 class="pl-3 text-white text-2xl">${pelicula.title}</h2>
    <h3 class="pl-3 text-white">${pelicula.genres}</h3>
    <p class="line-clamp-3 pl-3 text-white">${pelicula.overview}</p>
    <article>
    `;
}



//se hace un bucle para recorrer cada pelicula
for( const elemento of peliculas){
    //se crean las tarjetas en el html
    main.innerHTML += diseñoTarjeta(elemento)
}




