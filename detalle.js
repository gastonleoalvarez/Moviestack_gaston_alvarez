const urlParams = new URLSearchParams (location.search)
const id = urlParams.get('id')


const url = 'https://moviestack.onrender.com/api/movies'
const init = {
  method: "GET",
  headers:{
    "x-api-key": "0ff70d54-dc0b-4262-9c3d-776cb0f34dbd"
  }
}

fetch( url, init)
.then(response => response.json())
.then(data => {
    pelicula = data.movies; 
const peliculaEncontrada = data.movies.find(pelicula => pelicula.id == id)
const main = document.getElementById('detalles-container')

main.innerHTML = `
<div class="flex flex-nowrap text-white">
    <div class="p-10 ml-20 w-120 h-50">

    <img clas="w-90" src="https://moviestack.onrender.com/static/${peliculaEncontrada.image}"/>
    <table class="border-collapse mt-10" >
    <thead
    <tr>
      
    </tr>
    <tr>
        <th class="border border-separate">Original Lenguaje</th>
        <td class="border">${peliculaEncontrada.original_language}</td> 
    </tr>

    <tr>
        <th class="border">Released date</th>
        <td class="border">${peliculaEncontrada.release_date}</td>
    </tr>

    <tr>
        <th class="border">Runtime</th>
        <td class="border">${peliculaEncontrada.runtime}</td>
    </tr>
    <tr>
        <th class="border">Status</th>
        <td class="border">${peliculaEncontrada.status}</td>
    </tr>    
    </thead>
    </table>
    </div>

    <div class="p-10 text-white">
        
        <h1 class="pt-5 text-2xl">${peliculaEncontrada.title} </h1>
        <h2 class="pt-5">${peliculaEncontrada.tagline}</h2>
        <h3 class="pt-5">${peliculaEncontrada.genres}</h3>
        <p class="pt-5">${peliculaEncontrada.overview}</p>
        
    
        <table class="border-collapse mt-5" >
        <thead>
       
        <tr>
            <th class="border border-separate">vote average</th>
            <td class="border">${peliculaEncontrada.vote_average}</td> 
        </tr>
    
        <tr>
            <th class="border">budget</th>
            <td class="border">USD ${peliculaEncontrada.budget}</td>
        </tr>
    
        <tr>
            <th class="border">revenue</th>
            <td class="border">USD ${peliculaEncontrada.revenue}</td>
        </tr>
         
        </thead>
        </table>
        </div>
    </div>
</div>
`
;

})
.catch(error => console.error('Error al obtener datos de la API:', error));