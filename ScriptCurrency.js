fetch(`https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5`)
    .then(currency=>{
        console.log(currency);
        return currency.json();
    })
    .then(
        (currency) => {
            console.log(currency);
            printCurrency(currency);
        }
    )
for(let i = 0; i<4;i++) {
    function printCurrency(currency) {

        let ccyElement = document.getElementById('ccyEl')
        ccyElement.innerText = currency[i].ccy;
        let base_ccyElement = document.getElementById('base_ccyEl')
        base_ccyElement.innerText = currency[i].base_ccy;
        let buyElement = document.getElementById('buyEl')
        buyElement.innerText = currency[i].buy;
        let saleElement = document.getElementById('saleEl')
        saleElement.innerText = currency[i].sale;

    }
}