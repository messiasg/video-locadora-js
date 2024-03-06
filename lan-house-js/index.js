function calcularValor() {
  // Selecionando os valores inseridos nos campos pelo usuário
  let valorPorQuinzeMinutos = document.getElementById("valorPorQuinzeMinutos").value;
  let tempoDeUso = document.getElementById("tempoDeUso").value;

  // Calculando o valor de tempo de uso por minuto e multiplicando pelo tempo de uso gasto pelo usuário
  const valorPorMinuto = valorPorQuinzeMinutos / 15;
  const valorPorTempoDeUso = valorPorMinuto * tempoDeUso;

  const resposta = (document.getElementById("resposta").textContent =
    "Valor a Pagar R$: " + valorPorTempoDeUso.toFixed(2));
}

const botao = document.getElementById("botao").addEventListener("click", calcularValor);
