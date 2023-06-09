window.addEventListener("load",function functionName() {


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























  var urlParams = new URLSearchParams(window.location.search);
  var id = urlParams.get('idDePelicula');
console.log(id);

  var url = "https://api.themoviedb.org/3/movie/" + id + "?api_key=e8c1145f3cf3e5ccaa8924b23c1db7fd&language=en-US"
  fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      console.log(data);
      var pelicula = data.results;
      var titulo = data.original_title;
      var portada = "https://image.tmdb.org/t/p/original" + data.poster_path;
      var generos = data.genres;
      var idioma = data.original_language;
      var fecha = data.release_date;
      var sinopsis = data.overview;
      console.log(data.genres);
      // var listaGeneros = []
      var h2="";
      for (var i = 0; i < generos.length; i++) {
        // listaGeneros.push(generos[i].name)
        h2 += '<a href="generoResult.html?idDeGenero='+generos[i].id+'&nombreDeGenero='+generos[i].name+'">' +generos[i].name +'</a>  '
      }
      console.log(h2);

// console.log(listaGeneros.spli  t(", "));

document.querySelector(".titulopeli h1").innerHTML = titulo
document.querySelector(".portada").innerHTML = '<img src="'+portada+'">'
document.querySelector(".infogral .nomGen").innerHTML = '<h2>' + h2 + '</h2>'
document.querySelector(".infogral .idioma").innerHTML = '<h2>Idioma:'+idioma+'</h2>'
document.querySelector(".infogral .fecha").innerHTML = '<h2>Fecha de estreno:'+fecha+'</h2>'
document.querySelector(".infogral .sinopsis").innerHTML = '<h3>'+sinopsis+'</h3>'


// var = document.querySelector("")
// var  titulo = arrayDePeliculas[i].title;
// var  imagen = "https://image.tmdb.org/t/p/original/"+arrayDePeliculas[i].poster_path;
//       idDePelicula= arrayDePeliculas[i].id;
//
//       li = "<li class='generoprimero'>"
//       li +=   "<a href='pelicula.html?idDePelicula="+idDePelicula+"'>"
//       li +=     "<div class='nombredepelicula'>"
//       li +=       "<h2>" + titulo + "</h2>"
//       li +=      "</div>"
//       li +=     "<div class='genero'>"
//       li +=      "<img src='" + imagen + "' alt=''>"
//       li +=    "</div>"
//       li +=  "</a>"
//       li += "<div class='genero1'>"
//       li += " <img src='imagenes/estrella.jpg' alt=''>"
//       li +=  "</div>"
//       li += "</li>"
//
//       ul.innerHTML += li













    })
    .catch(function(error){
      console.log("The error was: " + error);
    })



    var url2 = "https://api.themoviedb.org/3/movie/" + id + "/videos?api_key=e8c1145f3cf3e5ccaa8924b23c1db7fd&language=en-US"
    fetch(url2)
      .then(function(response) {
        return response.json();
      })
      .then(function(data) {
        console.log(data);
        var arrayTrailers = data.results;
        var primerTrailer = data.results[0];
        var codigoTrailer = data.results[0].key;

        document.querySelector("iframe").src += codigoTrailer
      })
        .catch(function(error){
          console.log("The error was: " + error);
        })


var url3 = "https://api.themoviedb.org/3/movie/" + id +"/recommendations?api_key=e8c1145f3cf3e5ccaa8924b23c1db7fd&language=en-US&page=1"

fetch(url3)
.then(function(response) {
  return response.json();
})
.then(function(data) {
  console.log(data);
  var arrayDeRecomendaciones = data.results;
  console.log(data.results);
  var tituloDePeli;
  var idDePeli;
for (var i = 0; i < 5; i++) {
  tituloDePeli = data.results[i].title
  idDePeli = data.results[i].id
  console.log(tituloDePeli);
  console.log(idDePeli);

  document.querySelector(".dropdown-menu").innerHTML += "<a class='dropdown-item' href='pelicula.html?idDePelicula=" + idDePeli + "'>" + tituloDePeli + "</a>"



}


})
  .catch(function(error){
    console.log("The error was: " + error);
  })

  if (sessionStorage.getItem("nombre")!= null) {
    document.querySelector(".Botonsesion").style.display = "none"
    document.querySelector(".hola").innerHTML = "HOLA " + sessionStorage.getItem("nombre") + "!"
    document.querySelector(".favs").innerHTML = "<a href='favoritos.html'>Favoritos</a>"
  }
  else {
    document.querySelector("div.estrella").style.display = "none"
  }


})

var arrayDePelisFavoritas = []
// No me salio poner favoritos en la pagina detalle :(
// document.querySelector("buttton.estrellita").innerHTML = "<button onclick='agregarFavoritos(" + id + ")' class='estrellita'> &#9733; </button>"

function agregarFavoritos(id) {
 alert("me clickearon!!!")
console.log(id);
 if (arrayDePelisFavoritas.indexOf(id)===-1) {
   // EN ESTE CASO NO ES FAVORITA
   // pusheo el id dentro del array
   arrayDePelisFavoritas.push(id)
   // guardo en session el array, como es un objeto debo transformarlo a STRING
   window.sessionStorage.setItem("favorita",JSON.stringify(arrayDePelisFavoritas))

 }
 else {
   // ESTA PELI YA ES FAVORITA
   console.log(arrayDePelisFavoritas.indexOf(id));
   // la saco del array
   arrayDePelisFavoritas.splice(arrayDePelisFavoritas.indexOf(id),1)
   console.log(arrayDePelisFavoritas);
   // reemplazo el array que tenia la peli como favorita, por el array que ya no la tiene
   window.sessionStorage.setItem("favorita",JSON.stringify(arrayDePelisFavoritas))
 }
 console.log(id);
  console.log(JSON.parse(window.sessionStorage.getItem("favorita")));

}
