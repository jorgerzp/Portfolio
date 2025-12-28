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


/* =========================
   FORMULARIO CONTACTO
========================= */
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".contact-form");
    if (!form) return;

    form.addEventListener("submit", (e) => {
        e.preventDefault();

        // Evitar duplicar mensajes
        const oldMsg = document.querySelector(".form-success");
        if (oldMsg) oldMsg.remove();

        // Crear mensaje de éxito
        const successMsg = document.createElement("p");
        successMsg.textContent = "Mensaje enviado correctamente ✔";
        successMsg.className = "form-success";

        form.appendChild(successMsg);
        form.reset();
    });
});
