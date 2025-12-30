/* =========================
   BIENVENIDA HOME
========================= */
const texto = "Bienvenido a mi portfolio";
const velocidad = 80;
let i = 0;

function escribirTexto() {
    const elemento = document.getElementById("bienvenida");
    if (!elemento) return;

    if (i < texto.length) {
        elemento.innerHTML =
            texto.substring(0, i + 1) +
            '<span class="cursor"></span>';
        i++;
        setTimeout(escribirTexto, velocidad);
    } else {
        elemento.innerHTML = texto;
    }
}

window.addEventListener("load", escribirTexto);


/* =========================
   TITULO CV
========================= */
const textoCV = "Curriculum Vitae";
const velocidadCV = 80;
let iCV = 0;

function escribirCV() {
    const elemento = document.getElementById("cv-title");
    if (!elemento) return;

    if (iCV < textoCV.length) {
        elemento.innerHTML =
            textoCV.substring(0, iCV + 1) +
            '<span class="cursor"></span>';
        iCV++;
        setTimeout(escribirCV, velocidadCV);
    } else {
        elemento.innerHTML = textoCV;
    }
}

window.addEventListener("load", escribirCV);


