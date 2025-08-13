console.log("Hola Mundo");

let amigos = [];

function agregarAmigo() {
    let inputAmigo = document.getElementById("amigo");

    let nombre = inputAmigo.value.trim();

    if (nombre == "") {
        alert("Por favor, ingresa un nombre.");
        return;
    }

    amigos.push(nombre);

    mostrarLista();
}

