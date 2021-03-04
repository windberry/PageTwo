src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"
// async function getResponse(){
//     let response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Vinnytsia&appid=b124ec8d5546495f87d1cfc27038a5cc')
//     let content = await response.json()
//     content = content.splice(0,10)
//
//     let key;
//
//     for(key in content){
//         console.log(content[key])
//     }
// }
// getResponse()

 fetch(`https://api.openweathermap.org/data/2.5/weather?q=Vinnytsia&appid=b124ec8d5546495f87d1cfc27038a5cc`)
    .then(weather=>{
        console.log(weather);
        return weather.json();
    })
    .then(
        (weather) => {
            console.log(weather);
            printWeather(weather);
        }
    )

// function Convert(weather){
//     if (btn.textContent = 'Fahrenheit') {
//         btn.textContent = 'Celsius'
//         weather.tempo = ((weather.main.temp - 32) * 5) / 9;
//         let tempElement = document.getElementById('tempEl')
//         tempElement.innerText = weather.tempo;
//     } else if (btn.textContent = 'Celsius') {
//         btn.textContent = 'Fahrenheit'
//     }
// }

function toggleDiv() {
    let tempDiv = $('#tempEl');
    //weather.main.temp;
    let tempoDiv = $('#tempoEl');
    // (((weather.main.temp - 32) * 5) / 9);
    tempDiv.toggle();
    tempoDiv.toggle();
}



//
// btn = document.createElement('BUTTON');
// btn.id='cm3'; //for css
// // btn.onclick = function Convert(weather){
// //     if (btn.textContent = 'Fahrenheit') {
// //         btn.textContent = 'Celsius'
// //         weather.temp = ((weather.main.temp - 32) * 5) / 9;
// //         let tempElement = document.getElementById('tempEl')
// //         tempElement.innerText = weather.temp;
// //     } else if (btn.textContent = 'Celsius') {
// //         btn.textContent = 'Fahrenheit'
// //     }
// // }
// // btn.textContent='Fahrenheit';
// //
// document.body.appendChild(btn);//show button


function printWeather(weather) {
    let nameElement = document.getElementById('nameEl')
    nameElement.innerText = weather.name;

    let humElement = document.getElementById('humEl')
    humElement.innerText = weather.main.humidity;

    let timeElement = document.getElementById('timeEl')
    timeElement.innerText = weather.timezone;
    //
    let tempElement = document.getElementById('tempEl')
    tempElement.innerText = weather.main.temp;

}

// function Celsius(weather){
//     document.getElementById('tempEl').append(weather.main.temp);
// }


// function timeEl() {
//     const cTemp = document.getElementById("timeEL").value;
//     const cToFahr = cTemp * 9 / 5 + 32;
//     const massage = cTemp + '°C is ' + cToFahr + '°F.';
//     document.getElementById("tempEl").innerText = weather.main.temp;
// }
//
// function timeEl() {
//     const ftemp = document.getElementById("FseC").value;
//     const fToC = (ftemp - 32) * 5 / 9;
//     const message = ftemp + '°F is ' + fToC + '°F.';
//     document.getElementById("tempEl").innerText = weather.main.temp;
// }
//





