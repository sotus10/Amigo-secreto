// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    // Obtener el valor del campo de entrada y limpiar espacios
    let amigo = document.getElementById("amigo").value.trim();
    // Validar que el campo no esté vacío
    if (amigo === "") {
        alert("Por favor, ingresa el nombre de un amigo.");
        return;
    }
    amigos.push(amigo);
    mostrarLista();
    // Limpiar el input
    document.getElementById("amigo").value = "";
}

function sortearAmigo() {
  if (amigos.length === 0) {
    alert("No hay personas en la lista.");
    return;
  }
  if (amigos.length === 1) {
    alert("Inserta al menos dos amigos para realizar el sorteo.");
  }
  let indice = Math.floor(Math.random() * amigos.length);
  let amigoSorteado = amigos[indice];

  let resultado = document.getElementById("resultado");
  resultado.innerHTML = `<li>El amigo secreto será ${amigoSorteado}</li>`;

  amigos.splice(indice, 1);
}


function mostrarLista(){
    const lista = document.getElementById("listaAmigos")
    // Limpiar la lista
    lista.innerHTML = "";

    amigos.forEach(function(nombre){
        const li = document.createElement("li");
        li.textContent = nombre;
        lista.appendChild(li);
    })
}

