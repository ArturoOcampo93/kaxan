// Aparece el boton de volver al inicio pasados los 1200px verticales
window.onscroll = function() { BotonVolverInicio(); };

function BotonVolverInicio() {
    var myElement = document.getElementById("boton-up");
    if (myElement) {
    
        if (document.body.scrollTop > 1500 || document.documentElement.scrollTop > 1500) {
            document.getElementById("boton-up").style.display = "block";
        } else {
            document.getElementById("boton-up").style.display = "none";
        }
    }
}