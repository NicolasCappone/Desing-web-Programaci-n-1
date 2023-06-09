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

//   var formulario = document.querySelector("form")
//   var nombre = formulario.querySelector("input[name='email']")
//   var email = formulario.querySelector("input[name='email']")
//   var password = formulario.querySelector("input[name='contra']")
//   var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
// console.log(formulario);
//   formulario.onSubmit = function (event) {
//
// if (nombre.value == "" && email.value.match(mailformat)== null ){
// event.preventDefault()
// alert("Complete todos los campos")}
// else if (nombre.value == ""){
//   event.preventDefault()
//   alert("Complete su nombre")
// }
// else if (email.value.match(mailformat)== null){
// event.preventDefault()
// alert("Escriba un email correctamente")
// }
//
// }




if (sessionStorage.getItem("nombre")!= null) {
  document.querySelector(".Botonsesion").style.display = "none"
  document.querySelector(".hola").innerHTML = "HOLA " + sessionStorage.getItem("nombre") + "!"
  document.querySelector(".favs").innerHTML = "<a href='favoritos.html'>Favoritos</a>"
}















var url = "https://api.themoviedb.org/3/movie/popular?api_key=e8c1145f3cf3e5ccaa8924b23c1db7fd&language=en-US&page=1"


fetch(url)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data.results);
    var idDePelicula;
    for (var i = 0; i < 5; i++) {
      console.log(data.results[i]);
      idDePelicula = data.results[i].id
      var titulo = data.results[i].title
      var descripcion = data.results[i].overview
       var imagen = 'https://image.tmdb.org/t/p/original'
      var poster =imagen +  data.results[i].poster_path
      console.log(poster);
      document.querySelector("#carousel1").innerHTML += "<div id='movie" + i + "' class='carousel-item'><a href='pelicula.html?idDePelicula="+ idDePelicula+"'><img class='imagen' src='" + poster + "' alt='First slide'><div class='carousel-caption d-none d-md-block Cartext'><h5 class='nombre'>" + titulo + "</h5></a></div></div>"



    }
document.querySelector("#movie1").classList.add("active")
  })
  .catch(function(error){
    console.log("The error was: " + error);
  })

url2= "https://api.themoviedb.org/3/movie/top_rated?api_key=e8c1145f3cf3e5ccaa8924b23c1db7fd&language=en-US&page=1"
fetch(url2)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data.results);
    var idDePelicula;
    for (var i = 0; i < 5; i++) {
      console.log(data.results[i]);
      idDePelicula = data.results[i].id
      var titulo = data.results[i].title
      var descripcion = data.results[i].overview
       var imagen = 'https://image.tmdb.org/t/p/original'
      var poster =imagen +  data.results[i].poster_path
      document.querySelector("#carousel2").innerHTML += "<div id='movie" + (i+5) + "' class='carousel-item'><a href='pelicula.html?idDePelicula="+ idDePelicula+"'><img class='imagen' src='" + poster + "' alt='First slide'><div class='carousel-caption d-none d-md-block Cartext'><h5 class='nombre'>" + titulo + "</h5></a></div></div>";





    }
    document.querySelector("#movie5").classList.add("active")

  })
  .catch(function(error){
    console.log("The error was: " + error);
})

var url3 = "https://api.themoviedb.org/3/movie/upcoming?api_key=e8c1145f3cf3e5ccaa8924b23c1db7fd&language=en-US&page=1"


fetch(url3)
  .then(function(response) {
    return response.json();
  })
  .then(function(data) {
    console.log(data.results);
    var idDePelicula;
    for (var i = 0; i < 5; i++) {
      console.log(data.results[i]);
      idDePelicula = data.results[i].id
      var titulo = data.results[i].title
      var descripcion = data.results[i].overview
       var imagen = 'https://image.tmdb.org/t/p/original'
      var poster =imagen +  data.results[i].poster_path
      document.querySelector("#carousel3").innerHTML += "<div id='movie" + (i+10) + "' class='carousel-item '><a href='pelicula.html?idDePelicula="+ idDePelicula+"'><img class='imagen' src='" + poster + "' alt='First slide'><div class='carousel-caption d-none d-md-block Cartext'><h5 class='nombre'>" + titulo + "</h5></div></div>"




    }
    document.querySelector("#movie10").classList.add("active")
  })
  .catch(function(error){
    console.log("The error was: " + error);
})








 })
