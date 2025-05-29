const taxas = {
    USD: 0.20,
    EUR: 0.18,
    ARS: 48.00,
    JPY: 25.41,
    BTC: 0.0000017,
};

const bandeirars = {
    USD: "https://flagsapi.com/US/flat/64.png",
    EUR: "https://flagsapi.com/FR/flat/64.png",
    ARS: "https://flagsapi.com/AR/flat/64.png",
    JPY: "https://flagsapi.com/JP/flat/64.png",
    BTC: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCcfEgqk-P1YiouWcR93ZvOdc8QzuBQb_Alg&s",
};

function converter() {
    const valor = parseFloat(document.getElementById("valor").value);
    const moeda = document.getElementById("moeda").value;
    const resultado = document.getElementById("resultado");
    const bandeiraImg = document.getElementById("img-bandeira");

    if (!moeda || isNaN(valor)) {
        resultado.textContent = "Por favor, insira um valor e selecione uma moeda.";
        bandeiraImg.style.display = "none";
        return; 
    }

    const valorConvertido = valor * taxas[moeda];
    resultado.textContent = `R$ ${valor.toFixed(2)} = ${valorConvertido.toFixed(6)} ${moeda}`;

    bandeiraImg.src = bandeirars[moeda];
    bandeiraImg.style.display = "inline-block";
}
