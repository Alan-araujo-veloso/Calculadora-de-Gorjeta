const inputValor = document.getElementById("valor") as HTMLInputElement;
const botaoCalcular = document.getElementById("botao") as HTMLButtonElement;
const textoResultado = document.getElementById("resultado") as HTMLParagraphElement;

function calcularGorjeta(): void {
    const valorConta: number = parseFloat(inputValor.value);

if (isNaN(valorConta) || valorConta <= 0) {
textoResultado.textContent="Por favor, insira um valor válido.";
return;
}

const gorjeta: number = valorConta * 0.10; 
textoResultado.textContent = `A gorjeta de 10% é: R$ ${gorjeta.toFixed(2)}`;
}

botaoCalcular.addEventListener("click", calcularGorjeta);