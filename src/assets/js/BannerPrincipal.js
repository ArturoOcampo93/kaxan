function CircleSelect(x) {
    switch (x) {
        case 1:
            document.getElementById('img-circle-1').src = "assets/images/CircleSelected.png";
            document.getElementById('img-circle-2').src = "assets/images/CirculoSeleccion.png";
            document.getElementById('img-circle-3').src = "assets/images/CirculoSeleccion.png";

            document.getElementById('divisor-1').style.backgroundColor = "rgba(255, 132, 0, 0.5)";
            document.getElementById('divisor-2').style.backgroundColor = "rgba(255, 255, 255, 0.5)";
            document.getElementById('divisor-3').style.backgroundColor = "rgba(255, 255, 255, 0.5)";

            document.getElementById('principal-1').style.animation = "BannerTextoEntrada 1s 1";
            document.getElementById('principal-1').style.display = "block";
            document.getElementById('principal-2').style.display = "none";
            document.getElementById('principal-3').style.display = "none";
            break;
        case 2:
            document.getElementById('img-circle-1').src = "assets/images/CirculoSeleccion.png";
            document.getElementById('img-circle-2').src = "assets/images/CircleSelected.png";
            document.getElementById('img-circle-3').src = "assets/images/CirculoSeleccion.png";

            document.getElementById('divisor-1').style.backgroundColor = "rgba(255, 255, 255, 0.5)";
            document.getElementById('divisor-2').style.backgroundColor = "rgba(255, 132, 0, 0.5)";
            document.getElementById('divisor-3').style.backgroundColor = "rgba(255, 255, 255, 0.5)";

            document.getElementById('principal-1').style.display = "none";
            document.getElementById('principal-2').style.display = "block";
            document.getElementById('principal-3').style.display = "none";
            document.getElementById('principal-2').style.animation = "BannerTextoEntrada 1s 1";
            break;
        case 3:
            document.getElementById('img-circle-1').src = "assets/images/CirculoSeleccion.png";
            document.getElementById('img-circle-2').src = "assets/images/CirculoSeleccion.png";
            document.getElementById('img-circle-3').src = "assets/images/CircleSelected.png";

            document.getElementById('divisor-1').style.backgroundColor = "rgba(255, 255, 255, 0.5)";
            document.getElementById('divisor-2').style.backgroundColor = "rgba(255, 255, 255, 0.5)";
            document.getElementById('divisor-3').style.backgroundColor = "rgba(255, 132, 0, 0.5)";

            document.getElementById('principal-1').style.display = "none";
            document.getElementById('principal-2').style.display = "none";
            document.getElementById('principal-3').style.display = "block";
            document.getElementById('principal-3').style.animation = "BannerTextoEntrada 1s 1";
            break;
        default:
            console.log('Tienes un error en la funcion BannerPrincipal()');
    }
}