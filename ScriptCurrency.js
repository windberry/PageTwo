fetch('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5')
.then(currency=>{
    console.log(currency);
    return currency.json();
})
.then(currency=>{
    console.log(currency);
})