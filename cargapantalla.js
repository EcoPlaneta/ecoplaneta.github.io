window.onload = function(){
    var padre = document.getElementById("contenedor_padre")
    var contenedor = document.getElementById("contenedor_carga")
    var imgcarg = document.getElementById("carga")
    var cargimg = document.getElementById("imgcarga");
    setTimeout(
   ()=>{
    contenedor.style.width = "0%";
    imgcarg.style.left = "-500px";
    } , 1000
    );
    setTimeout(
   ()=>{
    padre.style.width = "0%";
    } , 1000
    );
}