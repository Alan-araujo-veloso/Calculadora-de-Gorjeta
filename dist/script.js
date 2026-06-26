"use strict";
const inputValor = document.getElementById("valor");
const botaoCalcular = document.getElementById("botao");
const textoResultado = document.getElementById("resultado");
function calcularGorjeta() {
    const valorConta = parseFloat(inputValor.value);
    if (isNaN(valorConta) || valorConta <= 0) {
        textoResultado.textContent = "Por favor, insira um valor válido.";
        return;
    }
    const gorjeta = valorConta * 0.10;
    textoResultado.textContent = `A gorjeta de 10% é: R$ ${gorjeta.toFixed(2)}`;
}
botaoCalcular.addEventListener("click", calcularGorjeta);
