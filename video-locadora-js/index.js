function converterMinutos() {
  // Receber informações do nome filme e sua duração
  let filme = document.getElementById("filme").value;
  let duracao = document.getElementById("duracao");
  duracao = Number(duracao.value);

  // Converter a duração para horas e minutos
  let horas = Math.floor(duracao / 60);
  let minutosRestantes = duracao % 60;

  // Apresentar na página as informações solicitadas
  let resposta = document.getElementById("resposta");
  resposta.textContent = "O filme " + filme + " apresenta " +horas + " horas e " + minutosRestantes + " minutos";
}

// Adicionando evento ao botão
let converter = document.getElementById("converter");
converter.addEventListener("click", converterMinutos);
