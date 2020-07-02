var contador = 1;
var contador2 = 1;
var time;
var on = false;
var seconds = 0;



function cambiarNext() {

    if (seconds >= 10) {
        document.getElementById('contador').innerHTML = contador + 0;
    } else {
        //document.getElementById('contador').innerHTML = contador += 10;
        contador = contador -= 290;
        var x = document.getElementById('cont-cajas');
        x.style.left = contador + "px";
        //console.log(contador);
    }

}

function cambiarBack() {

    if (seconds >= 10) {
        document.getElementById('contador').innerHTML = contador + 0;
    } else {
        //document.getElementById('contador').innerHTML = contador += 10;
        contador = contador += 290;
        var x = document.getElementById('cont-cajas');
        x.style.left = contador + "px";
        //console.log(contador);
    }

}


/* 
 *
 * ContHorizontal-Recomendaciones
 *
 */

function cambiarNext2() {

    if (seconds >= 10) {
        document.getElementById('contador').innerHTML = contador2 + 0;
    } else {
        //document.getElementById('contador').innerHTML = contador += 10;
        contador2 = contador2 -= 290;
        var x = document.getElementById('cont-cajas-recomendaciones');
        x.style.left = contador2 + "px";
        //console.log(contador2);
    }

}

function cambiarBack2() {

    if (seconds >= 10) {
        document.getElementById('contador').innerHTML = contador2 + 0;
    } else {
        //document.getElementById('contador').innerHTML = contador += 10;
        contador2 = contador2 += 290;
        var x = document.getElementById('cont-cajas-recomendaciones');
        x.style.left = contador2 + "px";
        //console.log(contador2);
    }

}