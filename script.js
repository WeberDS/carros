document.getElementById("form-economia").addEventListener("submit", function(event) {
    // Impede a página de recarregar ao enviar o formulário
    event.preventDefault();
    
    const inputKm = document.getElementById("km-mes").value;
    const inputGasolina = document.getElementById("preco-gasolina").value;
    const divResultado = document.getElementById("resultado-calculadora");
    
    // Limpa o resultado anterior
    divResultado.innerHTML = "";
    divResultado.className = "";

    // VALIDAÇÃO DOS DADOS
    if (inputKm === "" || inputGasolina === "") {
        divResultado.innerHTML = "Erro: Por favor, preencha todos os campos numéricos.";
        divResultado.className = "erro";
        return;
    }

    const km = parseFloat(inputKm);
    const precoGasolina = parseFloat(inputGasolina);

    if (km <= 0) {
        divResultado.innerHTML = "Erro: A quilometragem mensal deve ser maior que zero.";
        divResultado.className = "erro";
        return;
    }

    if (precoGasolina <= 0) {
        divResultado.innerHTML = "Erro: O preço da gasolina deve ser um valor válido e positivo.";
        divResultado.className = "erro";
        return;
    }

    // CÁLCULO
    const litrosMensais = km / 10;
    const custoCombustao = litrosMensais * precoGasolina;
    
    const kwhMensais = km / 6;
    const custoEletrico = kwhMensais * 0.90; 
    
    const economia = custoCombustao - custoEletrico;

    // EXIBIÇÃO DO RESULTADO
    divResultado.className = "sucesso";
    divResultado.innerHTML = `
        <p>Gasto mensal (Combustão): <strong>R$ ${custoCombustao.toFixed(2)}</strong></p>
        <p>Gasto mensal (Elétrico): <strong>R$ ${custoEletrico.toFixed(2)}</strong></p>
        <p style="color: #00ff00; font-size: 22px; margin-top: 15px;">
            Você economizaria <strong>R$ ${economia.toFixed(2)}</strong> por mês!
        </p>
    `;
});