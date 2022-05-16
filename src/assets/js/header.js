function displayBuscador() {
    var x = document.getElementById('buscador-input');
    var y = document.getElementById('lupa');

    x.style.display = "flex";
    x.style.animation = "displayBuscador 2s 1";
    x.style.width = "320px";
    x.style.opacity = "1";
    y.style.display = "none";
}

function menu() {
    var x = document.getElementById('nav');
    var y = document.getElementById('menuIcon');

    if (x.style.left == "0px") {
        x.style.animation = "displayMenuClose 1s 1";
        x.style.left = "-790px";
        y.src = "assets/images/menu.png";

    } else {
        x.style.animation = "displayMenuOpen 1s 1";
        x.style.left = "0px";
        y.src = "assets/images/cerrar.png";
    }
}

// Checa el ancho de la pantalla y si es menor a 990px no muestra el Modal Profile
// Nota: se necesita probar en un Mobile con el tamaño de pantalla como hardware
function CheckScreenModalProfile() {
    if (screen.width > 990) {
        $('#profile').modal('show');
    }
}

function CheckScreenModalNotificaciones() {
    if (screen.width > 990) {
        $('#notificaciones').modal('show');
    }
}

function botonesRegistro(x) {
    var registro = document.getElementById('Registro');
    var ingresa = document.getElementById('Ingresa');
    var botonRegistro = document.getElementById('boton-registro');
    var botonIngresa = document.getElementById('boton-ingresa');

    if (x == 2) {
        registro.style.display = "none";
        ingresa.style.display = "block";
        botonRegistro.style.backgroundColor = "#EBEBEB";
        botonIngresa.style.backgroundColor = "white";

        if (screen.width < 990) {
            menu();
        }

    } else {
        registro.style.display = "block";
        ingresa.style.display = "none";
        botonRegistro.style.backgroundColor = "white";
        botonIngresa.style.backgroundColor = "#EBEBEB";

        if (screen.width < 990) {
            menu();
        }
    }
}

/*function MenuDashboard(x) {
    switch (x) {
        case 1:
            document.getElementById('img-info').src = "assets/images/info.png";
            document.getElementById('info').style.color = "#FF8400";

            document.getElementById('img-preferencias').src = "assets/images/preferencias-gris.png";
            document.getElementById('preferencias').style.color = "black";

            document.getElementById('img-historial').src = "assets/images/historial-gris.png";
            document.getElementById('historial').style.color = "black";

            document.getElementById('img-premios').src = "assets/images/premios-gris.png";
            document.getElementById('premios').style.color = "black";

            menu();
            break;
        case 2:
            document.getElementById('img-info').src = "assets/images/info-gris.png";
            document.getElementById('info').style.color = "black";

            document.getElementById('img-preferencias').src = "assets/images/preferencias.png";
            document.getElementById('preferencias').style.color = "#FF8400";

            document.getElementById('img-historial').src = "assets/images/historial-gris.png";
            document.getElementById('historial').style.color = "black";

            document.getElementById('img-premios').src = "assets/images/premios-gris.png";
            document.getElementById('premios').style.color = "black";

            menu();
            break;
        case 3:
            document.getElementById('img-info').src = "assets/images/info-gris.png";
            document.getElementById('info').style.color = "black";

            document.getElementById('img-preferencias').src = "assets/images/preferencias-gris.png";
            document.getElementById('preferencias').style.color = "black";

            document.getElementById('img-historial').src = "assets/images/historial.png";
            document.getElementById('historial').style.color = "#FF8400";

            document.getElementById('img-premios').src = "assets/images/premios-gris.png";
            document.getElementById('premios').style.color = "black";

            menu();
            break;
        case 4:
            document.getElementById('img-info').src = "assets/images/info-gris.png";
            document.getElementById('info').style.color = "black";

            document.getElementById('img-preferencias').src = "assets/images/preferencias-gris.png";
            document.getElementById('preferencias').style.color = "black";

            document.getElementById('img-historial').src = "assets/images/historial-gris.png";
            document.getElementById('historial').style.color = "black";

            document.getElementById('img-premios').src = "assets/images/premios.png";
            document.getElementById('premios').style.color = "#FF8400";

            menu();
            break;
        default:
            console.log('Tienes un error en la funcion MenuDashboard');
    }
}*/

/*function MenuDashboardDesktop(x) {
    switch (x) {
        case 1:
            document.getElementById('img-info-menu').src = "assets/images/info.png";
            document.getElementById('info-menu').style.color = "#FF8400";

            document.getElementById('img-preferencias-menu').src = "assets/images/preferencias-gris.png";
            document.getElementById('-menu').style.color = "black";

            document.getElementById('img-historial-menu').src = "assets/images/historial-gris.png";
            document.getElementById('historial-menu').style.color = "black";

            document.getElementById('img-premios-menu').src = "assets/images/premios-gris.png";
            document.getElementById('premios-menu').style.color = "black";

            break;
        case 2:
            document.getElementById('img-info-menu').src = "assets/images/info-gris.png";
            document.getElementById('info-menu').style.color = "black";

            document.getElementById('img-preferencias-menu').src = "assets/images/preferencias.png";
            document.getElementById('preferencias-menu').style.color = "#FF8400";

            document.getElementById('img-historial-menu').src = "assets/images/historial-gris.png";
            document.getElementById('historial-menu').style.color = "black";

            document.getElementById('img-premios-menu').src = "assets/images/premios-gris.png";
            document.getElementById('premios-menu').style.color = "black";

            break;
        case 3:
            document.getElementById('img-info-menu').src = "assets/images/info-gris.png";
            document.getElementById('info-menu').style.color = "black";

            document.getElementById('img-preferencias-menu').src = "assets/images/preferencias-gris.png";
            document.getElementById('preferencias-menu').style.color = "black";

            document.getElementById('img-historial-menu').src = "assets/images/historial.png";
            document.getElementById('historial-menu').style.color = "#FF8400";

            document.getElementById('img-premios-menu').src = "assets/images/premios-gris.png";
            document.getElementById('premios-menu').style.color = "black";

            break;
        case 4:
            document.getElementById('img-info-menu').src = "assets/images/info-gris.png";
            document.getElementById('info-menu').style.color = "black";

            document.getElementById('img-preferencias-menu').src = "assets/images/preferencias-gris.png";
            document.getElementById('preferencias-menu').style.color = "black";

            document.getElementById('img-historial-menu').src = "assets/images/historial-gris.png";
            document.getElementById('historial-menu').style.color = "black";

            document.getElementById('img-premios-menu').src = "assets/images/premios.png";
            document.getElementById('premios-menu').style.color = "#FF8400";

            break;
        default:
            console.log('Tienes un error en la funcion MenuDashboard-Desktop');
    }
}*/