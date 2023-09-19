function insert(numero) {
    var num = document.getElementById('amount').value;
    document.getElementById('amount').value = num + numero;
}

function calcular() {
    var amount = document.getElementById('amount').value;
    var fromCurrency = document.getElementById('fromCurrency').value;
    var toCurrency = document.getElementById('toCurrency').value;

    // Defina suas taxas de câmbio aqui
    var exchangeRates = {
        USD: 1.0,
        EUR: 0.93,
        BR: 4.92,
        GBP: 0.80,
        JPY: 147.07,
        CAD: 1.35,
        // Exemplo: 1 USD = 0.93 EUR
        // Adicione mais moedas e taxas aqui
    };

    if (fromCurrency in exchangeRates && toCurrency in exchangeRates) {
        var rate = exchangeRates[toCurrency] / exchangeRates[fromCurrency];
        var convertedAmount = (amount * rate).toFixed(2);
        document.getElementById('resultText').textContent = `${amount} ${fromCurrency} é igual a ${convertedAmount} ${toCurrency}`;
    } else {
        document.getElementById('resultText').textContent = 'Moedas não suportadas';
    }
}
