/* CONTNEDOR PARA CREAR ANIMACIONES EN DIAS FESTIVOS
let hojas = "";
[15,1,1,2].forEach(function(a) {
  Array(a).fill("").forEach(function(x,i) {
    hojas+=([...Array(1 + i).fill('<span class="colores">*~*</span>')].join(""))+'<br>'
  })
})

document.querySelector('.arbol').innerHTML=hojas


let colores = document.querySelectorAll('.colores');

function animacion() {
  for(let i=0;i<colores.length;i++) {
    let tiempo=i/100+1;
    colores[i].style.animation="color " + tiempo+"s infinite"
  }
}

window.addEventListener("load", animacion)

$('.cerrar').click(function() {
    $('.contenedor').hide();
});
 CONTNEDOR PARA CREAR ANIMACIONES EN DIAS FESTIVOS */



window.onload = function() {
    var contenedor = document.getElementById('contenedorCarga');

    contenedor.style.visibility = 'hidden';
    $('contenedor').hide()
}



/* ANIMACION PARA EL MENU QUE LLAMA LOS ICONOS PARA CAMBIAR EL MODO DE DIA O DE NOCHE */

/* ANIMACION PARA EL MENU QUE LLAMA LOS ICONOS PARA CAMBIAR EL MODO DE DIA O DE NOCHE */



/* TODO ABAJO DE ESTA LINEA SON LAS FUNCIONES DEL NAV-TOGGLE */
$('.menu').hide();
$('.lista').hide();

toggle.onclick = function() {
    toggle.classList.toggle('active');
};

$('#toggle').click(function() {
    $('.menu').fadeToggle(200);
    $('.lista').slideToggle(900);
});
/* TODO ABAJO DE ESTA LINEA SON LAS FUNCIONES DEL NAV-TOGGLE */



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



/* ABAJO DE ESTA LINEA ESTA EL CODIGO COMPLETO PARA FILTRAR LOS PRODUCTOS */
/* TODO ABAJO DE ESTA LINEA ES PARA LLAMAR A CADA PRODUCTO Y SU ANIMACION */
    $('.lista').click(function() {
        const value = $(this).attr('data-filter');
        if (value == 'Todo') {
            $('.itemBox').show();
        }
        
        $('.itemBox').css('transform', 'scale(0)');
        function hideItemBox() {
            $('.itemBox').hide();
        }setTimeout(hideItemBox,500);

        function showItemBox() {
            $('.itemBox').filter('.'+value).show();
            $('.itemBox').filter('.'+value).css('transform', 'scale(1)');
        }setTimeout(showItemBox,500);



/* TODO ABAJO DE ESTA LINEA ES PARA LLAMAR A TODOS LOS PRODUCTOS */
        function showTodo() {
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



/* TODO ABAJO DE ESTA LINEA LINEA ES DE VARIEDAD */
$('.lo4').hide();
$('.lo8').hide();
$('.lk4').hide();
$('.lsui').hide();
$('.lda').hide();
$('.lsu360').hide();
$('.lsci').hide();
$('.lk360').hide();
$('.lkf').hide();



$('.akf').click(function() {
    $('.lkf').slideToggle(600);
});

$('.ckf').click(function() {
    $('.lkf').fadeToggle(400);
});


$('.ak360').click(function() {
    $('.lk360').slideToggle(600);
});

$('.ck360').click(function() {
    $('.lk360').fadeToggle(400);
});


$('.asci').click(function() {
    $('.lsci').slideToggle(600);
});

$('.csci').click(function() {
    $('.lsci').fadeToggle(400);
});


$('.asu360').click(function() {
    $('.lsu360').slideToggle(600);
});

$('.csu360').click(function() {
    $('.lsu360').fadeToggle(400);
});


$('.ao4').click(function() {
    $('.lo4').slideToggle(600);
});

$('.co4').click(function() {
    $('.lo4').fadeToggle(400);
});


$('.ao8').click(function() {
    $('.lo8').slideToggle(600);
});

$('.co8').click(function() {
    $('.lo8').fadeToggle(400);
});



$('.ak4').click(function() {
    $('.lk4').slideToggle(600);
});

$('.ck4').click(function() {
    $('.lk4').fadeToggle(400);
});


$('.asui').click(function() {
    $('.lsui').slideToggle(600);
});

$('.csui').click(function() {
    $('.lsui').fadeToggle(400);
});


$('.ada').click(function() {
    $('.lda').slideToggle(600);
});

$('.cda').click(function() {
    $('.lda').fadeToggle(400);
});
/* TODO ABAJO DE ESTA LINEA LINEA ES DE VARIEDAD */



/* CODIGO PARA  MOSTRAR CADA CAMARA EZVIZ Y SU CONTENIDO */
$('.lc1c').hide();
$('.lc2c').hide();
$('.lc3s').hide();
$('.lc3tn').hide();
$('.lc3wn').hide();
$('.lc6n').hide();
$('.lc6tc').hide();
$('.lc8cp').hide();
$('.lbc1c').hide();



$('.ac1c').click(function() {
    $('.lc1c').slideToggle(600);
});

$('.cc1c').click(function() {
    $('.lc1c').fadeToggle(400);
});


$('.ac2c').click(function() {
    $('.lc2c').slideToggle(600);
});

$('.cc2c').click(function() {
    $('.lc2c').fadeToggle(400);
});


$('.ac3s').click(function() {
    $('.lc3s').slideToggle(600);
});

$('.cc3s').click(function() {
    $('.lc3s').fadeToggle(400);
});


$('.ac3tn').click(function() {
    $('.lc3tn').slideToggle(600);
});

$('.cc3tn').click(function() {
    $('.lc3tn').fadeToggle(400);
});


$('.ac3wn').click(function() {
    $('.lc3wn').slideToggle(600);
});

$('.cc3wn').click(function() {
    $('.lc3wn').fadeToggle(400);
});


$('.ac6n').click(function() {
    $('.lc6n').slideToggle(600);
});

$('.cc6n').click(function() {
    $('.lc6n').fadeToggle(400);
});


$('.ac6tc').click(function() {
    $('.lc6tc').slideToggle(600);
});

$('.cc6tc').click(function() {
    $('.lc6tc').fadeToggle(400);
});


$('.ac8cp').click(function() {
    $('.lc8cp').slideToggle(600);
});

$('.cc8cp').click(function() {
    $('.lc8cp').fadeToggle(400);
});


$('.abc1c').click(function() {
    $('.lbc1c').slideToggle(600);
});

$('.cbc1c').click(function() {
    $('.lbc1c').fadeToggle(400);
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
    $('.ld4c').slideToggle(600);
});

$('.cd4c').click(function() {
    $('.ld4c').fadeToggle(400);
});


$('.ad8c').click(function() {
    $('.ld8c').slideToggle(600);
});

$('.cd8c').click(function() {
    $('.ld8c').fadeToggle(400);
});


$('.ad1').click(function() {
    $('.ld1').slideToggle(600);
});

$('.cd1').click(function() {
    $('.ld1').fadeToggle(400);
});


$('.ad2').click(function() {
    $('.ld2').slideToggle(600);
});

$('.cd2').click(function() {
    $('.ld2').fadeToggle(400);
});


$('.ad3').click(function() {
    $('.ld3').slideToggle(600);
});

$('.cd3').click(function() {
    $('.ld3').fadeToggle(400);
});


$('.ad4').click(function() {
    $('.ld4').slideToggle(600);
});

$('.cd4').click(function() {
    $('.ld4').fadeToggle(400);
});


$('.ad5').click(function() {
    $('.ld5').slideToggle(600);
});

$('.cd5').click(function() {
    $('.ld5').fadeToggle(400);
});


$('.ad6').click(function() {
    $('.ld6').slideToggle(600);
});

$('.cd6').click(function() {
    $('.ld6').fadeToggle(400);
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
    $('.lh4c').slideToggle(600);
});

$('.ch4c').click(function() {
    $('.lh4c').fadeToggle(400);
});


$('.ah8c').click(function() {
    $('.lh8c').slideToggle(600);
});

$('.ch8c').click(function() {
    $('.lh8c').fadeToggle(400);
});


$('.at').click(function() {
    $('.lt').slideToggle(600);
});

$('.ct').click(function() {
    $('.lt').fadeToggle(400);
});


$('.ah1').click(function() {
    $('.lh1').slideToggle(600);
});

$('.ch1').click(function() {
    $('.lh1').fadeToggle(400);
});


$('.ah2').click(function() {
    $('.lh2').slideToggle(600);
});

$('.ch2').click(function() {
    $('.lh2').fadeToggle(400);
});


$('.ah3').click(function() {
    $('.lh3').slideToggle(600);
});

$('.ch3').click(function() {
    $('.lh3').fadeToggle(400);
});


$('.ah4').click(function() {
    $('.lh4').slideToggle(600);
});

$('.ch4').click(function() {
    $('.lh4').fadeToggle(400);
});


$('.ah5').click(function() {
    $('.lh5').slideToggle(600);
});

$('.ch5').click(function() {
    $('.lh5').fadeToggle(400);
});


$('.ah6').click(function() {
    $('.lh6').slideToggle(600);
});

$('.ch6').click(function() {
    $('.lh6').fadeToggle(400);
});


$('.ah7').click(function() {
    $('.lh7').slideToggle(600);
});

$('.ch7').click(function() {
    $('.lh7').fadeToggle(400);
});


$('.ah8').click(function() {
    $('.lh8').slideToggle(600);
});

$('.ch8').click(function() {
    $('.lh8').fadeToggle(400);
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
    $('.lx28').slideToggle(600);
});

$('.cx28').click(function() {
    $('.lx28').fadeToggle(400);
});


$('.adt').click(function() {
    $('.ldt').slideToggle(600);
});

$('.cdt').click(function() {
    $('.ldt').fadeToggle(400);
});


$('.apl').click(function() {
    $('.lpl').slideToggle(600);
});

$('.cpl').click(function() {
    $('.lpl').fadeToggle(400);
});


$('.ads').click(function() {
    $('.lds').slideToggle(600);
});

$('.cds').click(function() {
    $('.lds').fadeToggle(400);
});


$('.ama').click(function() {
    $('.lma').slideToggle(600);
});

$('.cma').click(function() {
    $('.lma').fadeToggle(400);
});


$('.ahv').click(function() {
    $('.lhv').slideToggle(600);
});

$('.chv').click(function() {
    $('.lhv').fadeToggle(400);
});
/* CODIGO PARA  MOSTRAR CADA CAMARA ALARMAS Y SU CONTENIDO */



/* CODIGO PARA  MOSTRAR CADA CAMARA ACCESORIOS Y SU CONTENIDO */
$('.lci').hide();
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



$('.aci').click(function() {
    $('.lci').slideToggle(600);
});

$('.cci').click(function() {
    $('.lci').fadeToggle(400);
});


$('.awd').click(function() {
    $('.lwd').slideToggle(600);
});

$('.cwd').click(function() {
    $('.lwd').fadeToggle(400);
});


$('.ast').click(function() {
    $('.lst').slideToggle(600);
});

$('.cst').click(function() {
    $('.lst').fadeToggle(400);
});


$('.adp').click(function() {
    $('.ldp').slideToggle(600);
});

$('.cdp').click(function() {
    $('.ldp').fadeToggle(400);
});


$('.adh4').click(function() {
    $('.ldh4').slideToggle(600);
});

$('.cdh4').click(function() {
    $('.ldh4').fadeToggle(400);
});


$('.adh8').click(function() {
    $('.ldh8').slideToggle(600);
});

$('.cdh8').click(function() {
    $('.ldh8').fadeToggle(400);
});


$('.af1a').click(function() {
    $('.lf1a').slideToggle(600);
});

$('.cf1a').click(function() {
    $('.lf1a').fadeToggle(400);
});


$('.af5a').click(function() {
    $('.lf5a').slideToggle(600);
});

$('.cf5a').click(function() {
    $('.lf5a').fadeToggle(400);
});


$('.abv').click(function() {
    $('.lbv').slideToggle(600);
});

$('.cbv').click(function() {
    $('.lbv').fadeToggle(400);
});


$('.abc').click(function() {
    $('.lbc').slideToggle(600);
});

$('.cbc').click(function() {
    $('.lbc').fadeToggle(400);
});


$('.ace').click(function() {
    $('.lce').slideToggle(600);
});

$('.cce').click(function() {
    $('.lce').fadeToggle(400);
});
/* CODIGO PARA  MOSTRAR CADA CAMARA ACCESORIOS Y SU CONTENIDO */