const exchangeRates = {
    usd: 1,
    euro: 0.9,
    gel: 2.7
};
const exchangesRates1 = {
    usd: 1.1,
    euro: 0.8,
    gel: 2.8
};

let amount = document.getElementById('body-container-item1');
let from = document.getElementById('body-container-item2');
let to = document.getElementById('body-container-item4');
let exchanged = document.getElementById('exchanged');
let convert = document.getElementById('convert');
let arrows = document.getElementById('body-container-item3');

amount.addEventListener('input', () => {
    console.log('Input value:', amount.value);
});

from.addEventListener('change', () => {
    console.log('Selected from currency:', from.value);
});

to.addEventListener('change', () => {
    console.log('Selected to currency:', to.value);
});
// arrows.addEventListener('click',() => { 
//     console.log('Changed:');
// });
arrows.addEventListener('click', () => {
    console.log('Changed:');
    // Swap the values of 'from' and 'to'
    [from.value, to.value] = [to.value, from.value];
    console.log('Selected from currency:', from.value);
    console.log('Selected to currency:', to.value);
});


convert.addEventListener('click', () => {
    console.log('Button clicked');
    let fromCurrency = from.value;
    let toCurrency = to.value;
    let conversionRate = exchangeRates[toCurrency] / exchangeRates[fromCurrency];
    let result = amount.value * conversionRate;
    exchanged.value = result.toFixed(2);
});