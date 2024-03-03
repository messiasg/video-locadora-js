function calculoPromocao() {
  // Selecionar elementos digitados nos campos pelo usuário
  const medicamento = document.getElementById("medicamento").value;
  let preco = document.getElementById("preco");
  preco = Number(preco.value);

  // Calculo das unidades e do desconto tirando os centavos
  const valorDuasUnidades = preco * 2;
  const valorComDesconto = Math.round(valorDuasUnidades)

  // Selecionar no DOM o campo para inclusão da resposta e texto inserido
  const resposta = document.getElementById("resposta");
  resposta.textContent =
    "Promoção: " + medicamento + " Leve 2 por apenas R$ " + valorComDesconto.toFixed(2);
}

// Selecionar botão e adicionar evento
const verPromocao = document.getElementById("promocao").addEventListener("click", calculoPromocao);
