window.addEventListener("load", function(){











  document.querySelector("form").addEventListener("submit",function(event){
    event.preventDefault()
    var names = document.querySelector("input[name='name']").value
    console.log(names);
    sessionStorage.setItem("nombre",names)
    sessionStorage.getItem("nombre")

   var emails = document.querySelector("input[name='email']").value
   console.log(emails);
   sessionStorage.setItem("email",emails)
   sessionStorage.getItem("email")

   var password = document.querySelector("input[name='contra']").value
   console.log(password);
   sessionStorage.setItem("contraseña",password)
   sessionStorage.getItem("contraseña")

   var generos = document.querySelector("input[name='Genero']").value
   console.log(generos);
   sessionStorage.setItem("genero", generos)
   sessionStorage.getItem("genero")

   location.reload();

  })






















var apiKey = "e8c1145f3cf3e5ccaa8924b23c1db7fd"
var urlSearchParams = new URLSearchParams(window.location.search)
var textoBuscado = urlSearchParams.get("buscador")
console.log(textoBuscado);

var url = "https://api.themoviedb.org/3/search/movie?api_key=" + apiKey + "&query=" + textoBuscado + "&page=1&include_adult=true"

fetch(url)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data);
    var arrayBuscador = data.results
    var ul = document.querySelector("main ul")
    var id;
    var titulo;
    var poster;
    var poserUrl;
    var image;

for (var i = 0; i < data.results.length; i++) {
  console.log(data.results[i]);
  idDePelicula = data.results[i].id
  titulo = data.results[i].title
  poster = data.results[i].poster_path
  posterUrl = 'https://image.tmdb.org/t/p/original/'
  image = posterUrl + poster
  console.log(image);


        li = "<li class='generoprimero'>"
        li +=   "<a href='pelicula.html?idDePelicula="+idDePelicula+"'>"
        li +=     "<div class='nombredepelicula'>"
        li +=       "<h2>" + titulo + "</h2>"
        li +=      "</div>"
        li +=     "<div class='genero'>"
        li +=      "<img src='" + image + "' alt=''>"
        li +=    "</div>"
        li +=  "</a>"
        li += "<div class='genero1'>"
        li +=  " <button onclick='agregarFavoritos(" + idDePelicula + ")' class='estrellita'> &#9733; </button>"
        li +=  "</div>"
        li += "</li>"

        ul.innerHTML += li




}

if(textoBuscado.length <= 3 ){
var timepo = setTimeout(vacio, 3000)
function vacio() {
  alert('tu busqueda debe contener al menos 3 caracteres para ser más precisa ')
  clearTimeout(tiempo);
  event.preventDefault();

}

}

if (arrayBuscador.length === 0 ) {
document.querySelector(".titulofav").innerHTML = "<h3>NO HAY RESULTADOS</h3>"
document.querySelector(".titulofav").style.color = "white"
}


if (sessionStorage.getItem("nombre")!= null) {
  document.querySelector(".Botonsesion").style.display = "none"
  document.querySelector(".hola").innerHTML = "HOLA " + sessionStorage.getItem("nombre") + "!"
  document.querySelector(".favs").innerHTML = "<a href='favoritos.html'>Favoritos</a>";

// var boton = document.querySelectorAll("button.estrellita")
// boton.onclick = agregarFavoritos()
// var arrayDePelisFavoritas = []
//
//
// function agregarFavoritos(idDePelicula) {
//  alert("me clickearon!!!")
//
//  if (arrayDePelisFavoritas.indexOf(idDePelicula)===-1) {
//    // EN ESTE CASO NO ES FAVORITA
//    // pusheo el id dentro del array
//    arrayDePelisFavoritas.push(idDePelicula)
//    // guardo en session el array, como es un objeto debo transformarlo a STRING
//    window.sessionStorage.setItem("favorita",JSON.stringify(arrayDePelisFavoritas))
//
//  }
//  else {
//    // ESTA PELI YA ES FAVORITA
//    console.log(arrayDePelisFavoritas.indexOf(idDePelicula));
//    // la saco del array
//    arrayDePelisFavoritas.splice(arrayDePelisFavoritas.indexOf(idDePelicula),1)
//    console.log(arrayDePelisFavoritas);
//    // reemplazo el array que tenia la peli como favorita, por el array que ya no la tiene
//    window.sessionStorage.setItem("favorita",JSON.stringify(arrayDePelisFavoritas))
//  }
//  console.log(idDePelicula);
//   console.log(JSON.parse(window.sessionStorage.getItem("favorita")));
//
// }
}


  else {
    var arrayDeEstrellas = document.querySelectorAll("div.genero1")
    console.log(arrayDeEstrellas)
  for (var i = 0; i < arrayDeEstrellas.length; i++) {
    arrayDeEstrellas[i].style.display = "none"
  }

    var arrayDePelis = document.querySelectorAll(".generoprimero")
    console.log(arrayDePelis);
    for (var i = 0; i < arrayDePelis.length; i++) {
      arrayDePelis[i].style.marginTop= "5%"
    }}
  })





  .catch(function(error){
    console.log("The error was: " + error);
  })


})

var arrayDePelisFavoritas = []


function agregarFavoritos(idDePelicula) {
 alert("me clickearon!!!")

 if (arrayDePelisFavoritas.indexOf(idDePelicula)===-1) {
   // EN ESTE CASO NO ES FAVORITA
   // pusheo el id dentro del array
   arrayDePelisFavoritas.push(idDePelicula)
   // guardo en session el array, como es un objeto debo transformarlo a STRING
   window.sessionStorage.setItem("favorita",JSON.stringify(arrayDePelisFavoritas))

 }
 else {
   // ESTA PELI YA ES FAVORITA
   console.log(arrayDePelisFavoritas.indexOf(idDePelicula));
   // la saco del array
   arrayDePelisFavoritas.splice(arrayDePelisFavoritas.indexOf(idDePelicula),1)
   console.log(arrayDePelisFavoritas);
   // reemplazo el array que tenia la peli como favorita, por el array que ya no la tiene
   window.sessionStorage.setItem("favorita",JSON.stringify(arrayDePelisFavoritas))
 }
 console.log(idDePelicula);
  console.log(JSON.parse(window.sessionStorage.getItem("favorita")));

}
