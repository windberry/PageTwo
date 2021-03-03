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

function printWeather(weather) {
    let tempElement = document.getElementById('tempEl')
    tempElement.innerText = weather.main.temp;
}








