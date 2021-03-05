let GlobalCurrency;
let buy1, buy2, buy3, buy4;
fetch(`https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5`)
    .then(currency=>{
        console.log(currency);
        return currency.json();
    })
    .then(
        (currency) => {
            GlobalCurrency = currency;
            console.log(currency);
            printCurrency(currency);

            buy1 = GlobalCurrency[0].buy;
            buy2 = GlobalCurrency[1].buy;
            buy3 = GlobalCurrency[2].buy;
            buy4 = GlobalCurrency[3].buy;
        }

    )
function clearDiv()
{
    document.getElementById('out_buy').innerHTML = "";
}

    function ConvertUSD(){
    if(document.getElementById('out_buy').innerHTML != ""){
        clearDiv('out_buy');
    }
    document.getElementById('out_buy').append(buy1);
    }

    function ConvertEUR(){
        if(document.getElementById('out_buy').innerHTML != ""){
            clearDiv('out_buy');
        }
    document.getElementById("out_buy").append(buy2);
    }

    function ConvertRUR(){
        if(document.getElementById('out_buy').innerHTML != ""){
            clearDiv('out_buy');
        }
    document.getElementById("out_buy").append(buy3);
    }

    function ConvertBTC(){
        if(document.getElementById('out_buy').innerHTML != ""){
            clearDiv('out_buy');

        }
    document.getElementById("out_buy").append(buy4);
    }


    function printCurrency(currency) {

        let ccyElement1 = document.getElementById('ccyEl1')
        ccyElement1.innerText = currency[0].ccy;
        let ccyElement2 = document.getElementById('ccyEl2')
        ccyElement2.innerText = currency[1].ccy;
        let ccyElement3 = document.getElementById('ccyEl3')
        ccyElement3.innerText = currency[2].ccy;
        let ccyElement4 = document.getElementById('ccyEl4')
        ccyElement4.innerText = currency[3].ccy;

        // let buyElement1 = document.getElementById('buyEl1')
        // buyElement1.innerText = currency[0].buy;
        // let buyElement2 = document.getElementById('buyEl2')
        // buyElement2.innerText = currency[1].buy;
        // let buyElement3 = document.getElementById('buyEl3')
        // buyElement3.innerText = currency[2].buy;
        // let buyElement4 = document.getElementById('buyEl4')
        // buyElement4.innerText = currency[3].buy;
        // let base_ccyElement1 = document.getElementById('base_ccyEl1')
        // base_ccyElement1.innerText = currency[0].base_ccy;
        // let base_ccyElement2 = document.getElementById('base_ccyEl2')
        // base_ccyElement2.innerText = currency[1].base_ccy;
        // let base_ccyElement3 = document.getElementById('base_ccyEl3')
        // base_ccyElement3.innerText = currency[2].base_ccy;
        // let base_ccyElement4 = document.getElementById('base_ccyEl4')
        // base_ccyElement4.innerText = currency[3].base_ccy;
        // let saleElement1 = document.getElementById('saleEl1')
        // saleElement1.innerText = currency[0].sale;
        // let saleElement2 = document.getElementById('saleEl2')
        // saleElement2.innerText = currency[1].sale;
        // let saleElement3 = document.getElementById('saleEl3')
        // saleElement3.innerText = currency[2].sale;
        // let saleElement4 = document.getElementById('saleEl4')
        // saleElement4.innerText = currency[3].sale;
        // let ArrCurrency = document.getElementById('ArrCurrency');
        // let str = ' ';
        // for (let i = 0; i< currency.length; i++  ) {
        //     if (currency[i] !== undefined) str +=currency[i].ccy +' '+ currency[i].base_ccy +' '+ currency[i].buy +' '+ currency[i].sale +'<br>';
        // }
        // ArrCurrency.innerHTML = str;


}
