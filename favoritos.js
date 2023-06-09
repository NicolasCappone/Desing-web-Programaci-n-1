window.addEventListener("load",function functionName(){


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

if (sessionStorage.getItem("nombre")!= null) {
  document.querySelector(".Botonsesion").style.display = "none"
  document.querySelector(".hola").innerHTML = "HOLA " + sessionStorage.getItem("nombre") + "!"
  document.querySelector(".favs").innerHTML = "<a href='favoritos.html'>Favoritos</a>"
}

arrayDePelisFavoritas = JSON.parse(window.sessionStorage.getItem("favorita"));

// No me salio :(
// if (arrayDePelisFavoritas.length==0) {
//   var ul = document.querySelectorAll("main ul")
//   var li;
//   li ="<li class='generoprimero'>"
//   li +=     "<div class='nombredepelicula'>"
//   li +=       "<h2>No tenes peliculas favoritas</h2>"
//   li +=      "</div>"
//   li += "</li>"
//
//      ul.innerHTML += li
//
//
//
// }

// checkeo que el array tenga por lo menos una peli favorita (un item)
if (arrayDePelisFavoritas.length>0) {
  // como arrayDePelisFavoritas es un array, necesito recorrerlo
  for (var i = 0; i < arrayDePelisFavoritas.length; i++) {
    // recorro el array para obtener cada ID y hago un fetch (AJAX) para obtener la data de cada peli
    var url = "https://api.themoviedb.org/3/movie/"+arrayDePelisFavoritas[i]+"?api_key=d72b8119ca0d802447ebd91bded10750&language=en"
    var urlImg = "https://image.tmdb.org/t/p/original"
    fetch(url)
        .then(function(respuesta) {
         return respuesta.json()
       })
        .then(function(pelicula) {
          // guardo en pelicula el objeto literal que recibo como respuesta
         console.log(pelicula)
         var idDePelicula = pelicula.id
         // capturo el UL para insertar dentro de el, cada peli como LI
         var ul = document.querySelector("main ul")
         // genero el LI
         var li;
         li = "<li class='generoprimero'>"
         li +=   "<a href='pelicula.html?idDePelicula="+idDePelicula+"'>"
         li +=     "<div class='nombredepelicula'>"
         li +=       "<h2>" + pelicula.title + "</h2>"
         li +=      "</div>"
         li +=     "<div class='genero'>"
         li +=      "<img src='"+urlImg + pelicula.poster_path +"'>"
         li +=    "</div>"
         li +=  "</a>"
         li += "<div class='genero1'>"
         li +=  " <button onclick='borrarFavoritos(" + idDePelicula + ")' class='tacho'><img src='basura2.jpg' </button>"
         li +=  "</div>"
         li += "</li>"
         // modifico el HTML del UL
         ul.innerHTML += li

        })
        .catch(function(error) {
        console.log("error "+ error)
        })

  }

}






})

function borrarFavoritos(idDePelicula){
alert("Me clickearon!!!")

 if (arrayDePelisFavoritas.indexOf(idDePelicula)>= 0) {


   arrayDePelisFavoritas.splice(arrayDePelisFavoritas.indexOf(idDePelicula),1)
   console.log(arrayDePelisFavoritas);
   // reemplazo el array que tenia la peli como favorita, por el array que ya no la tiene
   window.sessionStorage.setItem("favorita",JSON.stringify(arrayDePelisFavoritas))
  }
  console.log(idDePelicula);
  console.log(JSON.parse(window.sessionStorage.getItem("favorita")));

location.reload();

 }
