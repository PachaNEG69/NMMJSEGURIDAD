/* CODIGO PARA OPTIMIZAR IMAGENES */
const img = document.querySelectorAll('img');

function intersection(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.src = entry.target.dataset.src;
            observer.unobserve(entry.target);
        }
    });
};

const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0
};

const observer = new IntersectionObserver(intersection, options);

img.forEach(i => {
    observer.observe(i);
});
/* CODIGO PARA OPTIMIZAR IMAGENES */


/* CODIGO PARA OCULTAR LA VISTA PRINCIPAL DE LA PAGINA */
/*
$('.close').click(function() {
    $('.banner').hide('slow');
    $('.close').hide('slow');
});
*/
/* CODIGO PARA OCULTAR LA VISTA PRINCIPAL DE LA PAGINA */


/* CODIGO PARA EL TOGGLE Y MOSTRAR EL MENU OCULTO */
toggle.onclick = function() {
    toggle.classList.toggle('active');
};


let menu = document.querySelector('.menu');

toggle.addEventListener('click', () => {
    menu.classList.toggle('menu_visible');
});
/* CODIGO PARA EL TOGGLE Y MOSTRAR EL MENU OCULTO */



/* CODIGO PARA CAMBIAR LOS ELEMENTOS Y EL BODY */
$('#cambio').css('background', 'red');

cambio.onclick = function() {
    cambio.classList.toggle('active');
};

$('#cambio').click(function() {
    $('#cambio').css('background', 'red', 'slow');
    $('#cambio2').css('background', '#fff');
    $('body').css('background', '#f4500f');
    $('main').css('background', '#0b061f');
    $('.lista').css('color', '#fff');
    $('main').css('opacity', '1');
    $('img').css('opacity', '1');
});



cambio2.onclick = function() {
    cambio2.classList.toggle('active');
};

$('#cambio2').click(function() {
    $('#cambio2').css('background', 'red', 'slow');
    $('#cambio').css('background', '#fff');
    $('body').css('background', '#000');
    $('main').css('background', '#000');
    $('.lista').css('color', '#000');
    $('main').css('opacity', '0.9');
    $('img').css('opacity', '0.7');
});
/* CODIGO PARA CAMBIAR LOS ELEMENTOS Y EL BODY */



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

$('.formas').hide();

$('#formas').click(function() {
    $('.formas').show('slow');
});

$('.fcerrar').click(function() {
    $('.formas').hide('slow');
});
/* ARRIBA DE ESTA LINEA ESTA EL CODIGO COMPLETO PARA FILTRAR LOS PRODUCTOS */



/* CODIGO PARA  MOSTRAR CADA CAMARA EZVIZ Y SU CONTENIDO */
$('.lc8c').hide();
$('.lc1c').hide();
$('.lc2c').hide();
$('.lc3s').hide();
$('.lc3tn').hide();
$('.lc3wn').hide();
$('.lc6n').hide();
$('.lc6tc').hide();
$('.lc8cp').hide();
$('.lbc1c').hide();



$('.ac8c').click(function() {
    $('.lc8c').show('slow');
});

$('.cc8c').click(function() {
    $('.lc8c').hide('slow');
});


$('.ac1c').click(function() {
    $('.lc1c').show('slow');
});

$('.cc1c').click(function() {
    $('.lc1c').hide('slow');
});


$('.ac2c').click(function() {
    $('.lc2c').show('slow');
});

$('.cc2c').click(function() {
    $('.lc2c').hide('slow');
});


$('.ac3s').click(function() {
    $('.lc3s').show('slow');
});

$('.cc3s').click(function() {
    $('.lc3s').hide('slow');
});


$('.ac3tn').click(function() {
    $('.lc3tn').show('slow');
});

$('.cc3tn').click(function() {
    $('.lc3tn').hide('slow');
});


$('.ac3wn').click(function() {
    $('.lc3wn').show('slow');
});

$('.cc3wn').click(function() {
    $('.lc3wn').hide('slow');
});


$('.ac6n').click(function() {
    $('.lc6n').show('slow');
});

$('.cc6n').click(function() {
    $('.lc6n').hide('slow');
});


$('.ac6tc').click(function() {
    $('.lc6tc').show('slow');
});

$('.cc6tc').click(function() {
    $('.lc6tc').hide('slow');
});


$('.ac8cp').click(function() {
    $('.lc8cp').show('slow');
});

$('.cc8cp').click(function() {
    $('.lc8cp').hide('slow');
});


$('.abc1c').click(function() {
    $('.lbc1c').show('slow');
});

$('.cbc1c').click(function() {
    $('.lbc1c').hide('slow');
});
/* CODIGO PARA  MOSTRAR CADA CAMRA EZVIZ Y SU CONTENIDO */



/* CODIGO PARA  MOSTRAR CADA CAMARA DAHUA Y SU CONTENIDO */
$('.ld4c').hide();
$('.ld8c').hide();
$('.ld1').hide();
$('.ld2').hide();
$('.ld3').hide();
$('.ld4').hide();
$('.ld5').hide();
$('.ld6').hide();



$('.ad4c').click(function() {
    $('.ld4c').show('slow');
});

$('.cd4c').click(function() {
    $('.ld4c').hide('slow');
});


$('.ad8c').click(function() {
    $('.ld8c').show('slow');
});

$('.cd8c').click(function() {
    $('.ld8c').hide('slow');
});


$('.ad1').click(function() {
    $('.ld1').show('slow');
});

$('.cd1').click(function() {
    $('.ld1').hide('slow');
});


$('.ad2').click(function() {
    $('.ld2').show('slow');
});

$('.cd2').click(function() {
    $('.ld2').hide('slow');
});


$('.ad3').click(function() {
    $('.ld3').show('slow');
});

$('.cd3').click(function() {
    $('.ld3').hide('slow');
});


$('.ad4').click(function() {
    $('.ld4').show('slow');
});

$('.cd4').click(function() {
    $('.ld4').hide('slow');
});


$('.ad5').click(function() {
    $('.ld5').show('slow');
});

$('.cd5').click(function() {
    $('.ld5').hide('slow');
});


$('.ad6').click(function() {
    $('.ld6').show('slow');
});

$('.cd6').click(function() {
    $('.ld6').hide('slow');
});
/* CODIGO PARA  MOSTRAR CADA CAMARA DAHUA Y SU CONTENIDO */



/* CODIGO PARA  MOSTRAR CADA CAMARA HIKVISION Y SU CONTENIDO */
$('.lh4c').hide();
$('.lh8c').hide();
$('.lt').hide();
$('.lh1').hide();
$('.lh2').hide();
$('.lh3').hide();
$('.lh4').hide();
$('.lh5').hide();
$('.lh6').hide();
$('.lh7').hide();
$('.lh8').hide();



$('.ah4c').click(function() {
    $('.lh4c').show('slow');
});

$('.ch4c').click(function() {
    $('.lh4c').hide('slow');
});


$('.ah8c').click(function() {
    $('.lh8c').show('slow');
});

$('.ch8c').click(function() {
    $('.lh8c').hide('slow');
});


$('.at').click(function() {
    $('.lt').show('slow');
});

$('.ct').click(function() {
    $('.lt').hide('slow');
});


$('.ah1').click(function() {
    $('.lh1').show('slow');
});

$('.ch1').click(function() {
    $('.lh1').hide('slow');
});


$('.ah2').click(function() {
    $('.lh2').show('slow');
});

$('.ch2').click(function() {
    $('.lh2').hide('slow');
});


$('.ah3').click(function() {
    $('.lh3').show('slow');
});

$('.ch3').click(function() {
    $('.lh3').hide('slow');
});


$('.ah4').click(function() {
    $('.lh4').show('slow');
});

$('.ch4').click(function() {
    $('.lh4').hide('slow');
});


$('.ah5').click(function() {
    $('.lh5').show('slow');
});

$('.ch5').click(function() {
    $('.lh5').hide('slow');
});


$('.ah6').click(function() {
    $('.lh6').show('slow');
});

$('.ch6').click(function() {
    $('.lh6').hide('slow');
});


$('.ah7').click(function() {
    $('.lh7').show('slow');
});

$('.ch7').click(function() {
    $('.lh7').hide('slow');
});


$('.ah8').click(function() {
    $('.lh8').show('slow');
});

$('.ch8').click(function() {
    $('.lh8').hide('slow');
});
/* CODIGO PARA  MOSTRAR CADA CAMARA HIKVISION Y SU CONTENIDO */



/* CODIGO PARA  MOSTRAR CADA CAMARA ALARMAS Y SU CONTENIDO */
$('.lx28').hide();
$('.ldt').hide();
$('.lpl').hide();
$('.lds').hide();
$('.lma').hide();
$('.lhv').hide();



$('.ax28').click(function() {
    $('.lx28').show('slow');
});

$('.cx28').click(function() {
    $('.lx28').hide('slow');
});


$('.adt').click(function() {
    $('.ldt').show('slow');
});

$('.cdt').click(function() {
    $('.ldt').hide('slow');
});


$('.apl').click(function() {
    $('.lpl').show('slow');
});

$('.cpl').click(function() {
    $('.lpl').hide('slow');
});


$('.ads').click(function() {
    $('.lds').show('slow');
});

$('.cds').click(function() {
    $('.lds').hide('slow');
});


$('.ama').click(function() {
    $('.lma').show('slow');
});

$('.cma').click(function() {
    $('.lma').hide('slow');
});


$('.ahv').click(function() {
    $('.lhv').show('slow');
});

$('.chv').click(function() {
    $('.lhv').hide('slow');
});
/* CODIGO PARA  MOSTRAR CADA CAMARA ALARMAS Y SU CONTENIDO */



/* CODIGO PARA  MOSTRAR CADA CAMARA ACCESORIOS Y SU CONTENIDO */
$('.lwd').hide();
$('.lst').hide();
$('.ldp').hide();
$('.ldh4').hide();
$('.ldh8').hide();
$('.lf1a').hide();
$('.lf5a').hide();
$('.lbv').hide();
$('.lbc').hide();
$('.lce').hide();



$('.awd').click(function() {
    $('.lwd').show('slow');
});

$('.cwd').click(function() {
    $('.lwd').hide('slow');
});


$('.ast').click(function() {
    $('.lst').show('slow');
});

$('.cst').click(function() {
    $('.lst').hide('slow');
});


$('.adp').click(function() {
    $('.ldp').show('slow');
});

$('.cdp').click(function() {
    $('.ldp').hide('slow');
});


$('.adh4').click(function() {
    $('.ldh4').show('slow');
});

$('.cdh4').click(function() {
    $('.ldh4').hide('slow');
});


$('.adh8').click(function() {
    $('.ldh8').show('slow');
});

$('.cdh8').click(function() {
    $('.ldh8').hide('slow');
});


$('.af1a').click(function() {
    $('.lf1a').show('slow');
});

$('.cf1a').click(function() {
    $('.lf1a').hide('slow');
});


$('.af5a').click(function() {
    $('.lf5a').show('slow');
});

$('.cf5a').click(function() {
    $('.lf5a').hide('slow');
});


$('.abv').click(function() {
    $('.lbv').show('slow');
});

$('.cbv').click(function() {
    $('.lbv').hide('slow');
});


$('.abc').click(function() {
    $('.lbc').show('slow');
});

$('.cbc').click(function() {
    $('.lbc').hide('slow');
});


$('.ace').click(function() {
    $('.lce').show('slow');
});

$('.cce').click(function() {
    $('.lce').hide('slow');
});
/* CODIGO PARA  MOSTRAR CADA CAMARA ACCESORIOS Y SU CONTENIDO */



/* TODO ABAJO DE ESTA LINEA LINEA ES DE NUEVOS INGRESOS */
$('.lci').hide();

$('.aci').click(function() {
    $('.lci').show('slow');
});

$('.cci').click(function() {
    $('.lci').hide('slow');
});


$('.lk4').hide();

$('.ak4').click(function() {
    $('.lk4').show('slow');
});

$('.ck4').click(function() {
    $('.lk4').hide('slow');
});


$('.lsui').hide();

$('.asui').click(function() {
    $('.lsui').show('slow');
});

$('.csui').click(function() {
    $('.lsui').hide('slow');
});


$('.lda').hide();

$('.ada').click(function() {
    $('.lda').show('slow');
});

$('.cda').click(function() {
    $('.lda').hide('slow');
});
/* TODO ABAJO DE ESTA LINEA LINEA ES DE NUEVOS INGRESOS */



$('#Whatsapp').click(function() {
    alert('Vas a contactar al vendedor, ¿ Seguro que quieres hacerlo ?');
});