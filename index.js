const x = "Hello World";

function sum(x, y){
    return x+y;
}

const imprimirMensaje = (mensaje) => {
    console.log(mensaje);
}

imprimirMensaje(sum(10, 20));

// Elementos de la pagina
const botonBuscar = document.getElementById("button-search");

console.log(botonBuscar);

// Eventos
botonBuscar.addEventListener("click", function(){
    //alert("Hiciste click al boton.");
    botonBuscar.classList.add("rojo");
})

const linkPosts = document.getElementById("see-posts")
const listPosts =  document.getElementById("list-posts")


if (linkPosts!=null){
    linkPosts.addEventListener("click", function(){
        listPosts.classList.remove("ocultar");
    })
}

var mas = document.getElementById("mas");
var verTodos = document.getElementById("ver-todos");
var verFotos = document.getElementById("ver-fotos");
var posts = document.getElementById("posts");
var pics = document.getElementById("pics");

mas.addEventListener('click', function(){
    alert("Seccion en progreso");
})

verTodos.addEventListener('click', function(){
    if (posts.classList.contains("ocultar"))
        posts.classList.replace("ocultar", "mostrar");
    else
        posts.classList.replace("mostrar", "ocultar");
})

verFotos.addEventListener('click', function(){
    if (pics.classList.contains("ocultar"))
        pics.classList.replace("ocultar", "mostrar");
    else
        pics.classList.replace("mostrar", "ocultar");
})