fetch('https://weather.com/weather/today/l/49.23,28.47?par=google&temp=c')
.then((response) =>{
    return response.json();
})
.then((data) =>{
    console.log(data);
});
