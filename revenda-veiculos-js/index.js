function calculoPromocao() {
  // Selecionar elementos digitados nos campos pelo usuário
  const veiculo = document.getElementById("veiculo").value;
  let preco = document.getElementById("preco");
  preco = Number(preco.value);

  // Calculo da porcetagem e valor da parcela
  const valorDeEntrada = preco / 2;
  const valorPorParcela = valorDeEntrada / 12;

  // Selecionar no DOM o campo para inclusão da resposta e texto inserido
  const resposta = document.getElementById("resposta");
  resposta.textContent =
    "Promoção: " + veiculo + "\nEntrada de R$ " + valorDeEntrada.toFixed(2) + "\n12x de R$ " + valorPorParcela.toFixed(2);
}

// Selecionar botão e adicionar evento
const verPromocao = document.getElementById("promocao").addEventListener("click", calculoPromocao);
