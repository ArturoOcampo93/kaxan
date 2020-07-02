function AbajoArriba(x) {
    if (x.style.top == "-350px") {
        x.style.animation = "arriba 2s 1";
        x.style.top = "0px";
    } else {
        x.style.animation = "abajo 2s 1";
        x.style.top = "-350px";
    }
}