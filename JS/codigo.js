let saludo = "HOLA... BIENVENIDOS A MI PAGINA WEB. AQUI PODRAS ENCONTRAR TODO EN SISTEMAS DE SEGURIDAD Y VIGILANCIA, COMO TAMBIEN PARA AGREGAR... ESTO ES SOLO UN MENSAJE, PRESIONA 'ACEPTAR' PARA CONTINUAR" 
alert(saludo);

/* ABAJO DE ESTA LIA ESTA EL CODIGO PARA CAMBIAR DE COLOR EL BOTON TOGGLE */
const toggle = document.getElementById("toggle")
toggle.onclick = function () {
    toggle.classList.toggle("active")
};
/* ARRIBA DE ESTA LIA ESTA EL CODIGO PARA CAMBIAR DE COLOR EL BOTON TOGGLE */



/* ABAJO DE ESTA LIA ESTA EL CODIGO PARA ABRIR EL NAV-MENU */
let navToggle = document.getElementById("toggle")
let navMenu = document.querySelector(".nav-menu")

navToggle.addEventListener("click", () => {
    navMenu.classList.toggle("nav-menu_visible")
});
/* ARRIBA DE ESTA LIA ESTA EL CODIGO PARA ABRIR EL NAV-MENU */



/* ABAJO DE ESTA LINEA ESTA EL CODIGO COMPLETO PARA FILTRAR LOS PRODUCTOS */
/* TODO ABAJO DE ESTA LINEA ES PARA LLAMAR A CADA PRODUCTO Y SU ANIMACION */
$(document).ready(function(){
    $('.lista').click(function(){
        const value = $(this).attr('data-filter');
        if (value == 'Todo'){
            $('.itemBox').show();
        }
        
        $('.itemBox').css('transform', 'scale(0)');
        function hideItemBox(){
            $('.itemBox').hide();
        }setTimeout(hideItemBox,500);

        function showItemBox(){
            $('.itemBox').filter('.'+value).show();
            $('.itemBox').filter('.'+value).css('transform', 'scale(1)');
        }setTimeout(showItemBox,500);



/* TODO ABAJO DE ESTA LINEA ES PARA LLAMAR A TODOS LOS PRODUCTOS */
        function showTodo(){
            $('.itemBox').filter('.'+value).show();
            $('.itemBox').filter('.'+value).css('transform', 'scale(1)');
        }setTimeout(showTodo,500);
/* TODO ARRIBA DE ESTA LINEA ES PARA LLAMAR A TODOS LOS PRODUCTOS */
})
/* TODO ARRIBA DE ESTA LINEA ES PARA LLAMAR A CADA PRODUCTO Y SU ANIMACION */



/* TODO ABAJO DE ESTA LINEA ES PARA SELECCIONAR CON COLOR EL ITEM ACTIVO */
$('.lista').click(function(){
    $(this).addClass('active').siblings().removeClass('active')
});
/* TODO ARRIBA DE ESTA LINEA ES PARA SELECCIONAR CON COLOR EL ITEM ACTIVO */
});
/* ARRIBA DE ESTA LINEA ESTA EL CODIGO COMPLETO PARA FILTRAR LOS PRODUCTOS */



/* CODIGO PARA DESPLEGAR EL TEXTO */
const acordeon = document.getElementsByClassName("contenedor-box");

for (i = 0; i<acordeon.length; i++ ){
   acordeon[i].addEventListener("click", function(){
    this.classList.toggle("active")
   })
}
/* CODIGO PARA DESPLEGAR EL TEXTO */



/* CODIGO PARA MARCAR EL CONTENEDOR ACTIVO, PERO NO SE REMUEVE AL TOCAR OTRO */
//$('.label').click(function(){
//    $(this).addClass('active').siblings().removeClass('active')
//});
/* CODIGO PARA MARCAR EL CONTENEDOR ACTIVO, PERO NO SE REMUEVE AL TOCAR OTRO */


/*
$(".imagen").click(function(e){
    var enlaceImagen = e.target.src;
    var data = $(this).attr("data")
    var lightbox = '<div class="lightbox">'+
    '<img src="'+enlaceImagen+'" alt="" id="zoom_mw" data-zoom-image="'+data+'">'+
    '<div class="btn-close">X</div>'+
    '</div>';

    $('.producto').append(lightbox)
    $('#zoom_mw').elevateZoom({scrollZoom : true});
    $('.btn-close').click(function(){
        $('.lightbox').remove();
    })
})
*/
let wApp = document.getElementById('wApp');

wApp.onclick = function() {
    alert('Vas a contactar al vendedor, ¿ Seguro que quieres hacerlo ?')
}
